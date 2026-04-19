<div align="center">
  <img src="https://mctx.ai/brand/logo-purple.png" alt="mctx" width="300" />
</div>

<div align="center">

**The official mctx plugin marketplace for Claude Code**

[Documentation](https://docs.mctx.ai)

</div>

---

## Get Started

Add the mctx marketplace to Claude Code, then install any mctx MCP server in seconds.

**Step 1 — Add the marketplace**

```
/plugin marketplace add https://mctx.ai/marketplace.json
```

**Step 2 — Install an MCP server**

```
/plugin install {slug}@mctx
```

Replace `{slug}` with the name of the MCP server you want to use.

---

## What you get

When you install an mctx MCP server:

- **Instant connection** — Claude Code is automatically configured to connect to the server. No manual setup.
- **Documentation built in** — A skill is added to your Claude Code session so Claude knows exactly what the MCP server can do and how to use it.
- **Subscribe once, connect anywhere** — Your subscription works across all your devices and Claude Code sessions.

---

## Browse available MCP servers

Visit **[mctx.ai](https://mctx.ai)** to learn more about the platform and subscribe to MCP servers.

Need help? The [docs](https://docs.mctx.ai) cover everything from installation to managing your subscriptions.

---

## Real-time channels

The **channel** plugin bridges real-time events from mctx-hosted MCP servers into your Claude Code session. When an MCP server calls `server.emit()`, the event arrives in your session as a channel notification — no polling from Claude's side, no manual checking.

**Install the channel plugin**

```
/plugin install channel@mctx
```

**Start with channels enabled**

```bash
claude --dangerously-load-development-channels plugin:channel@mctx
```

On first launch the plugin opens your browser for mctx authentication. After that, it automatically discovers your channel-enabled subscriptions and starts delivering events.

Events arrive as `<channel>` tags with provenance metadata:

```
<channel source="mctx-channel" server_id="my-game" event_type="game_event">
[mctx/my-game] game_event: You entered a dark cave. Exits: north, east.
</channel>
```

Requires Claude Code v2.1.80+ and an mctx account with active subscriptions to channel-enabled servers.

---

<details>
<summary>For developers</summary>

Free to host — 1,000 requests/month included per server, no payment setup required. Auto-published to the Claude Code marketplace and MCP Community Registry on every deploy. Enable monetization when you're ready.

</details>

---

<div align="center">
<sub>Powered by <a href="https://mctx.ai">mctx</a> — The best way to Build an MCP Server.</sub>
</div>