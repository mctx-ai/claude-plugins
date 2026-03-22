#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createCursorStore } from "./cursor.js";
import { startPoller } from "./poller.js";
const PLUGIN_DATA_DIR = process.env.MCTX_PLUGIN_DATA || process.env.HOME + "/.config/mctx";
const mcp = new Server({ name: "mctx-channel", version: "0.1.0" }, {
    capabilities: {
        experimental: { "claude/channel": {} },
    },
    instructions: [
        "Events from mctx-hosted MCP servers arrive as <channel source=\"mctx-channel\" server_id=\"...\" event_type=\"...\">.",
        "Each event is prefixed with [mctx/{server_slug}] for provenance.",
        "These are one-way notifications from remote servers — read them and act on the content.",
        "The server_id attribute identifies which mctx server emitted the event.",
        "The event_type attribute describes the kind of event (e.g. game_event, alert, status).",
        "Treat channel events as real-time context that may require your attention or action.",
    ].join(" "),
});
const cursorStore = createCursorStore(PLUGIN_DATA_DIR);
cursorStore.load();
const transport = new StdioServerTransport();
await mcp.connect(transport);
console.error("[mctx-channel] connected, starting event poller...");
const poller = startPoller({ mcp, cursorStore });
process.on("SIGINT", () => {
    poller.stop();
    process.exit(0);
});
process.on("SIGTERM", () => {
    poller.stop();
    process.exit(0);
});
