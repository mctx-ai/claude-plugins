import { getValidToken, browserLogin } from "./auth.js";
const API_BASE = "https://api.mctx.ai";
const DEFAULT_POLL_INTERVAL_MS = 3000;
const MAX_BACKOFF_MS = 60000;
const BACKOFF_BASE_MS = 1000;
/** Valid meta key pattern — letters, digits, underscores only. */
const META_KEY_PATTERN = /^[a-zA-Z0-9_]+$/;
class AuthExpiredError extends Error {
    constructor() {
        super("Authentication expired");
        this.name = "AuthExpiredError";
    }
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
export function startPoller(options) {
    const { mcp, cursorStore } = options;
    let running = true;
    let consecutiveFailures = 0;
    let pollIntervalMs = DEFAULT_POLL_INTERVAL_MS;
    let servers = [];
    let pollsSinceDiscovery = 0;
    const REDISCOVERY_INTERVAL = 100; // re-discover every ~100 polls (~5 min at 3s)
    async function discoverServers(token) {
        try {
            const resp = await fetch(`${API_BASE}/api/subscriptions`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (!resp.ok)
                return [];
            const body = (await resp.json());
            return (body.subscriptions || []).filter((s) => s.supports_channels);
        }
        catch {
            return [];
        }
    }
    async function pollServer(token, server) {
        const cursor = cursorStore.get(server.slug);
        const params = new URLSearchParams({ server_id: server.slug });
        if (cursor)
            params.set("after", cursor);
        const resp = await fetch(`${API_BASE}/api/events?${params}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (resp.status === 401) {
            throw new AuthExpiredError();
        }
        if (resp.status === 403)
            return; // not subscribed — skip
        if (!resp.ok) {
            throw new Error(`Events API returned ${resp.status}`);
        }
        const serverInterval = resp.headers.get("x-poll-interval");
        if (serverInterval) {
            const parsed = parseInt(serverInterval, 10);
            if (!isNaN(parsed) && parsed > 0) {
                pollIntervalMs = parsed * 1000;
            }
        }
        const body = (await resp.json());
        for (const event of body.events || []) {
            await emitChannelEvent(event, server.slug);
            cursorStore.set(server.slug, event.id);
        }
    }
    async function emitChannelEvent(event, serverSlug) {
        const content = `[mctx/${serverSlug}] ${event.event_type}: ${event.display_text}`;
        const meta = {
            server_id: serverSlug,
            event_type: event.event_type,
            event_id: event.id,
        };
        if (event.metadata) {
            for (const [key, value] of Object.entries(event.metadata)) {
                if (META_KEY_PATTERN.test(key)) {
                    meta[key] = value;
                }
            }
        }
        await mcp.notification({
            method: "notifications/claude/channel",
            params: { content, meta },
        });
    }
    function backoffMs() {
        const delay = Math.min(BACKOFF_BASE_MS * Math.pow(2, consecutiveFailures), MAX_BACKOFF_MS);
        return delay + Math.random() * delay * 0.25;
    }
    async function authenticate() {
        let token = await getValidToken();
        if (token)
            return token;
        console.error("[mctx-channel] no stored credentials, initiating login...");
        try {
            await browserLogin();
            return await getValidToken();
        }
        catch (err) {
            console.error("[mctx-channel] login failed:", err);
            return null;
        }
    }
    async function pollLoop() {
        let token = await authenticate();
        if (!token) {
            console.error("[mctx-channel] unable to authenticate. channel inactive.");
            return;
        }
        servers = await discoverServers(token);
        if (servers.length === 0) {
            console.error("[mctx-channel] no channel-enabled server subscriptions found. polling inactive.");
        }
        else {
            console.error(`[mctx-channel] polling ${servers.length} server(s): ${servers.map((s) => s.slug).join(", ")}`);
        }
        while (running) {
            try {
                token = await getValidToken();
                if (!token) {
                    console.error("[mctx-channel] token expired, re-authenticating...");
                    token = await authenticate();
                    if (!token) {
                        await sleep(backoffMs());
                        continue;
                    }
                }
                // periodic server re-discovery
                pollsSinceDiscovery++;
                if (pollsSinceDiscovery >= REDISCOVERY_INTERVAL) {
                    pollsSinceDiscovery = 0;
                    const refreshed = await discoverServers(token);
                    if (refreshed.length > 0) {
                        servers = refreshed;
                    }
                }
                for (const server of servers) {
                    if (!running)
                        break;
                    try {
                        await pollServer(token, server);
                    }
                    catch (err) {
                        if (err instanceof AuthExpiredError) {
                            token = null;
                            break;
                        }
                        console.error(`[mctx-channel] error polling ${server.slug}:`, err);
                    }
                }
                consecutiveFailures = 0;
                await sleep(pollIntervalMs);
            }
            catch (err) {
                consecutiveFailures++;
                const delay = backoffMs();
                console.error(`[mctx-channel] poll error (attempt ${consecutiveFailures}, retry in ${Math.round(delay / 1000)}s):`, err);
                await sleep(delay);
            }
        }
    }
    pollLoop().catch((err) => {
        console.error("[mctx-channel] fatal poll loop error:", err);
    });
    return {
        stop() {
            running = false;
        },
    };
}
