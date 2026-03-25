---
name: about-hidden-empire
description: "Play the classic Zork I text adventure through any MCP client. Explore, solve puzzles, and save your progress."
---

# Hidden Empire

**Version:** 0.3.4
**Author:** mctx-ai
**Homepage:** <https://github.com/mctx-ai/hidden-empire>

## What This Server Does

Play the classic Zork I text adventure through any MCP client. Explore, solve puzzles, and save your progress.

## Available Tools

Tool information is not available for this server.

## How to Subscribe

Subscribe to this App at <https://hidden-empire.mctx.ai>.

This server costs $3.00 per 1,000 requests.

After subscribing, OAuth auto-discovery handles authentication automatically via RFC 9728 — no manual token setup required when using Claude Code with the plugin installed.

## How to Connect

**MCP endpoint:** `https://hidden-empire.mctx.ai`

**Supported transports:** HTTP streaming and SSE (Server-Sent Events)

**Authentication:** OAuth auto-discovery via RFC 9728 — the client discovers the authorization server automatically. No manual token configuration needed.

**Latest version endpoint:** `https://hidden-empire.mctx.ai/v0.3.4`

## How to Install

### Claude Code (plugin)

If you have this plugin installed, the server is already configured. Verify with:

```
claude mcp list
```

### Claude Desktop (plugin)

Open Claude Desktop and go to Settings > Plugins > Personal tab. Add the mctx marketplace (`https://mctx.ai/marketplace.json`), then install this server from the plugin list.

### Claude Code (manual)

```
claude mcp add hidden-empire https://hidden-empire.mctx.ai --transport http
```

### Claude Desktop (manual)

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "hidden-empire": {
      "type": "http",
      "url": "https://hidden-empire.mctx.ai"
    }
  }
}
```

### Generic HTTP Client

Connect to `https://hidden-empire.mctx.ai` using HTTP transport. OAuth auto-discovery via RFC 9728 handles authentication.

## About mctx

mctx is a managed hosting platform for Apps for AI. Subscribe once and connect from any AI client — Claude, ChatGPT, Cursor, VS Code, and more.

## Usage Notes

# The Hidden Empire

## A Text Adventure App Built on mctx

Explore a richly detailed fantasy world with interactive puzzles, environmental storytelling, and real-time gameplay events through any MCP-compatible client.

> This project is an independent TypeScript MCP adaptation based on the MIT-licensed open-source release of Zork I. It is not affiliated with or endorsed by Microsoft, Activision, or Infocom.

## Features

### MCP Tools

- **start_game** — Initialize a new game session
- **do_command** — Execute player commands in the adventure
- **list_saves** — View available save files
- **load_save** — Restore a previous game state
- **reset_game** — Clear current session and start fresh

### Universal Compatibility

Works with any MCP client, enabling seamless integration into your preferred development environment or AI assistant.

### Real-Time Events

Game events are emitted as MCP channel events, enabling dynamic UI updates in clients that support real-time channels.

### Persistent State

Game snapshots are automatically saved, allowing you to pause and resume your adventure at any point.

## Quick Start

### Prerequisites

- An [mctx.ai](https://mctx.ai) account with authentication configured
- A [Cloudflare](https://cloudflare.com) account with a Workers KV namespace for save persistence

### Environment Variables

Game state persistence requires one of the following storage options. Set the variables in your mctx server environment before deploying.

**Option A — Cloudflare Workers KV (recommended)**

| Variable | Required | Description |
|----------|----------|-------------|
| `KV_ACCOUNT_ID` | Yes | Your Cloudflare account ID |
| `KV_NAMESPACE_ID` | Yes | KV namespace ID with read/write permissions |
| `KV_API_TOKEN` | Yes | Cloudflare API token with Workers KV read/write permissions |

**Option B — Upstash Redis (legacy fallback)**

| Variable | Required | Description |
|----------|----------|-------------|
| `UPSTASH_URL` | Yes | Your Upstash Redis REST URL |
| `UPSTASH_TOKEN` | Yes | Your Upstash Redis REST token |

Cloudflare KV is used when all three `KV_*` variables are present. Upstash is used otherwise. If neither is configured, game state is stored in memory and lost on restart.

### Connect in Claude Code

Add the server to your Claude Code MCP configuration:

```json
{
  "mcpServers": {
    "hidden-empire": {
      "command": "mctx",
      "args": ["connect", "hidden-empire"]
    }
  }
}
```

Then ask Claude: **"Start a new game of The Hidden Empire."**

Claude will call `start_game`, return the opening text, and you play from there.

## How to Play

Once connected, try these prompts in your MCP client:

**Start playing:**
- "Start a new game of The Hidden Empire"
- "Begin a Hidden Empire adventure called 'my-run'"

**During the game:**
- "Go north"
- "Take the lamp"
- "Look around"
- "Check my inventory"
- "Examine the mailbox"

**Managing saves:**
- "List my saved games"
- "Load my save called 'my-run'"
- "Reset my current playthrough"

## Sample Exchange

Here is what a typical session looks like:

> **You:** Start a new game of The Hidden Empire.
>
> **Claude:** *(calls `start_game`)* You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here. What would you like to do?
>
> **You:** Open the mailbox.
>
> **Claude:** *(calls `do_command` with "open mailbox")* Opening the small mailbox reveals a leaflet. Score: 0 | Moves: 1

## Architecture

The Hidden Empire follows a four-layer architecture:

1. **Source Layer** — Original Zork I source code
2. **Build Layer** — TypeScript compilation and transpilation
3. **Runtime Layer** — Virtual machine execution and game state management
4. **MCP Layer** — Protocol interface and client communication

This modular approach ensures maintainability, testability, and extensibility while preserving the original game logic.

## Legal

This project includes copyrighted material from the open-source Zork I release. See the [NOTICE](./NOTICE) file for attribution and legal disclaimers.

## License

The Hidden Empire is released under the MIT License. See [LICENSE](./LICENSE) for full details.

Copyright (c) 2026 The Hidden Empire Project Contributors


## Troubleshooting

- **Authentication failed** — Visit <https://hidden-empire.mctx.ai> to subscribe or renew your subscription. OAuth re-authentication happens automatically on the next connection attempt.

- **Expired subscription (403 Forbidden)** — Your subscription has expired or been cancelled. Renew at <https://hidden-empire.mctx.ai>.

- **Version not found (404 Not Found)** — The requested server version does not exist or has been retired. Connect to `https://hidden-empire.mctx.ai` without a version suffix to automatically use the latest version.

- **Server offline (503 Service Unavailable)** — The server is temporarily unavailable. Wait a few moments and try again.