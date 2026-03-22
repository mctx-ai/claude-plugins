import * as fs from "node:fs";
import * as path from "node:path";
import * as http from "node:http";
import * as crypto from "node:crypto";
import { exec } from "node:child_process";

const API_BASE = "https://api.mctx.ai";

export interface AuthTokens {
  access_token: string;
  refresh_token?: string;
  expires_at?: number;
}

function getConfigDir(): string {
  const pluginData = process.env.MCTX_PLUGIN_DATA;
  if (pluginData) return pluginData;
  const home = process.env.HOME || process.env.USERPROFILE || "";
  return path.join(home, ".config", "mctx");
}

function getTokenPath(): string {
  return path.join(getConfigDir(), "auth.json");
}

export function loadTokens(): AuthTokens | null {
  const tokenPath = getTokenPath();
  try {
    const data = fs.readFileSync(tokenPath, "utf-8");
    return JSON.parse(data) as AuthTokens;
  } catch {
    return null;
  }
}

function saveTokens(tokens: AuthTokens): void {
  const dir = getConfigDir();
  fs.mkdirSync(dir, { recursive: true });
  const tokenPath = getTokenPath();
  fs.writeFileSync(tokenPath, JSON.stringify(tokens, null, 2), { mode: 0o600 });
}

function isExpired(tokens: AuthTokens): boolean {
  if (!tokens.expires_at) return false;
  return Date.now() >= tokens.expires_at - 5 * 60 * 1000;
}

export async function refreshJwt(
  tokens: AuthTokens
): Promise<AuthTokens | null> {
  try {
    const resp = await fetch(`${API_BASE}/api/auth/refresh-jwt`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) return null;
    const body = (await resp.json()) as {
      token: string;
      expires_in?: number;
    };
    const refreshed: AuthTokens = {
      access_token: body.token,
      refresh_token: tokens.refresh_token,
      expires_at: body.expires_in
        ? Date.now() + body.expires_in * 1000
        : undefined,
    };
    saveTokens(refreshed);
    return refreshed;
  } catch {
    return null;
  }
}

export async function getValidToken(): Promise<string | null> {
  let tokens = loadTokens();
  if (!tokens) return null;

  if (isExpired(tokens)) {
    const refreshed = await refreshJwt(tokens);
    if (!refreshed) return null;
    tokens = refreshed;
  }

  return tokens.access_token;
}

export async function browserLogin(): Promise<AuthTokens> {
  const state = crypto.randomBytes(16).toString("hex");

  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url || "/", "http://localhost");

      if (url.pathname === "/callback") {
        const token = url.searchParams.get("token");
        const expiresIn = url.searchParams.get("expires_in");
        const returnedState = url.searchParams.get("state");

        if (returnedState !== state) {
          res.writeHead(400, { "Content-Type": "text/html" });
          res.end("<h1>State mismatch. Please try again.</h1>");
          server.close();
          reject(new Error("State mismatch during login"));
          return;
        }

        if (!token) {
          res.writeHead(400, { "Content-Type": "text/html" });
          res.end("<h1>No token received. Please try again.</h1>");
          server.close();
          reject(new Error("No token received"));
          return;
        }

        const tokens: AuthTokens = {
          access_token: token,
          expires_at: expiresIn
            ? Date.now() + parseInt(expiresIn, 10) * 1000
            : undefined,
        };

        saveTokens(tokens);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(
          "<h1>Logged in to mctx</h1><p>You can close this window and return to Claude Code.</p>"
        );
        server.close();
        resolve(tokens);
      }
    });

    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      if (!addr || typeof addr === "string") {
        reject(new Error("Failed to start local server"));
        return;
      }
      const port = addr.port;
      const callbackUrl = `http://127.0.0.1:${port}/callback`;
      const loginUrl = `${API_BASE}/api/auth/cli-login?callback=${encodeURIComponent(callbackUrl)}&state=${state}`;

      console.error(
        `\nTo log in to mctx, open this URL in your browser:\n${loginUrl}\n`
      );

      const openCmd =
        process.platform === "darwin"
          ? "open"
          : process.platform === "win32"
            ? "start"
            : "xdg-open";
      exec(`${openCmd} "${loginUrl}"`, () => {});

      setTimeout(() => {
        server.close();
        reject(new Error("Login timed out after 5 minutes"));
      }, 5 * 60 * 1000);
    });
  });
}
