---
name: about-channel
description: "Real-time event bridge for mctx-hosted MCP servers. Pushes server events into your Claude Code session as channel notifications. Servers emit events via server.emit() and they arrive in your session automatically — CI alerts, game events, monitoring data, and more. Requires an mctx account and active subscriptions to channel-enabled servers."
---

# mctx Channel Bridge

**Version:** 0.1.0
**Author:** mctx-ai
**Homepage:** <https://mctx.ai/channels>

## What This Plugin Does

This plugin bridges real-time events from mctx-hosted MCP servers into your Claude Code session using the channels protocol. When an MCP server hosted on mctx calls `server.emit()`, the event flows through the mctx events API and arrives in your session as a channel notification.

Events arrive wrapped in `<channel>` tags with provenance metadata:

```
<channel source="mctx-channel" server_id="my-game" event_type="game_event">
[mctx/my-game] game_event: You entered a dark cave. Exits: north, east.
</channel>
```

This is a one-way bridge (v1) — events flow from servers to your session. The server decides what to emit; you react to the events in your conversation.

## How It Works

1. **Authentication** — On first use, opens a browser window for Auth0 login. Your JWT is stored locally with 0600 permissions and refreshed automatically.
2. **Server discovery** — Queries your mctx subscriptions to find servers with channel support enabled.
3. **Polling** — Polls the mctx events API every 3 seconds (adjustable via server-sent `X-Poll-Interval` header).
4. **Event delivery** — Each event is wrapped in a structured template with provenance labeling and pushed into your session via the MCP channel protocol.
5. **Cursor persistence** — Tracks the last event seen per server, so restarting your session doesn't replay old events.

## Requirements

- An mctx account (<https://app.mctx.ai>)
- Active subscriptions to one or more channel-enabled MCP servers
- Claude Code v2.1.80 or later with channels support

## How to Use

### Install the plugin

```
/plugin install channel@mctx
```

### Start with channels enabled

```bash
claude --dangerously-load-development-channels plugin:channel@mctx
```

During the research preview, custom channels require the development flag. Once approved by Anthropic, you'll be able to use `--channels` instead.

### First-time setup

On first launch, the plugin opens your browser for mctx authentication. Log in with your mctx account. The token is stored securely and refreshes automatically.

## Event Format

Events arrive with these attributes:

| Attribute | Description |
|-----------|-------------|
| `source` | Always `mctx-channel` |
| `server_id` | The mctx server slug that emitted the event |
| `event_type` | The type of event (defined by the server) |
| `event_id` | Unique event identifier |

Additional metadata keys from the server appear as extra attributes.

## Troubleshooting

- **No events arriving** — Verify you have active subscriptions to channel-enabled servers at <https://app.mctx.ai/subscriptions>
- **Authentication failed** — Delete the stored credentials and restart. The plugin will prompt for re-authentication. Credentials are stored in the plugin data directory.
- **Events replaying on restart** — The cursor file may be corrupted. Delete `cursors.json` from the plugin data directory.

## About mctx

mctx is a managed hosting platform for MCP servers (AI apps). Subscribe once and connect from any AI client — Claude, ChatGPT, Cursor, VS Code, and more.
