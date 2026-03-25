---
name: about-hidden-empire
description: "Explore a classic text adventure through natural conversation with your AI. No parser syntax needed. Say \"go north,\" \"open the mailbox,\" or \"check my inventory\" and the game responds. Your AI can execute multiple moves at once and undo mistakes — try a sequence, undo, and try again without losing progress. Save multiple playthroughs by name and pick up across any session with your position, inventory, and score intact. An independent adaptation of the MIT-licensed Zork I source code, reimagined for the AI-native world."
---

# Hidden Empire

**Version:** 0.5.1
**Author:** mctx-ai
**Homepage:** <https://github.com/mctx-ai/hidden-empire>

## What This Server Does

Explore a classic text adventure through natural conversation with your AI. No parser syntax needed. Say "go north," "open the mailbox," or "check my inventory" and the game responds. Your AI can execute multiple moves at once and undo mistakes — try a sequence, undo, and try again without losing progress. Save multiple playthroughs by name and pick up across any session with your position, inventory, and score intact. An independent adaptation of the MIT-licensed Zork I source code, reimagined for the AI-native world.

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

**Latest version endpoint:** `https://hidden-empire.mctx.ai/v0.5.1`

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

Play a classic text adventure through natural conversation with your AI assistant.

Most interactive fiction requires a dedicated app, a browser tab, or a specific platform. You lose your place, lose the atmosphere, and lose the thread. The Hidden Empire puts the game directly inside your AI conversation — no separate interface, no switching contexts. You explore, solve puzzles, and collect treasure by talking to your AI the same way you already do. Your progress persists across every session, so you can pick up mid-dungeon on Monday morning exactly where you left off Friday night.

---

## Why not just play Zork somewhere else?

You could. But nowhere else does the game live inside your AI assistant, with your AI translating natural conversation into game commands, keeping full game state — your position, inventory, and score — across every session, and responding to natural language — not just exact parser commands. The Hidden Empire turns a classic into a conversational adventure.

---

## What you get

**Cross-session persistence** — Save a playthrough by name and load it anytime, from any session. Your progress never depends on keeping a browser tab open or staying in the same conversation.

**Multiple simultaneous playthroughs** — Run separate games for different exploration strategies or share a playthrough name with a friend. Up to 20 named saves per account.

**Undo any move, or an entire sequence** — Made a mistake? Walked into danger? You can undo your last move or roll back a whole chain of commands. No lost progress, no starting over from scratch — just try again.

**Batch execution — your AI plays multiple moves at once** — Ask your AI to explore a path, work through a sequence of actions, or execute a plan across many moves in a single request. The game processes each command in turn and returns the full result.

**Natural language input** — You do not need to know parser syntax. Say "go through the door to the north" or just "north." The game understands both.

**Real-time game events** — In supported AI clients, game events arrive as they happen — room descriptions, item discoveries, score changes — without waiting for a full response cycle.

**A complete classic adventure** — Underground mazes, locked doors, hidden treasure, devious puzzles, and a troll who really does not want you to pass. Based on the full Zork I source.

---

## How it works

You start a game by asking your AI assistant to begin a playthrough. The game opens with a classic scene: an open field west of a white house, a small mailbox nearby. From there you navigate, examine objects, pick up items, and solve puzzles entirely through conversation. When you want to stop, your progress is automatically saved. The next time you ask your AI to load that save, you are back in exactly the same room, with the same inventory, same score, same moves.

---

## Usage in conversation

Talk to your AI assistant the way you normally would. The game activates when you ask to start, continue, or manage a playthrough.

During gameplay, your AI translates natural language into the parser commands the game engine understands. You can say "head toward the forest" instead of "north," or "grab the brass lantern" instead of "take lantern" — the AI figures out the intent and issues the right command. You can also ask questions like "what's in my inventory?" or "where am I?" and get a direct answer.

Outside gameplay, you can list your saved playthroughs, load a specific one by name, or reset a playthrough to start fresh. The AI handles the game management the same way it handles the game itself — through plain conversation.

---

## Example phrases

**Starting a new adventure**
You want to begin fresh — or start a named run you can return to later.
- "Start a new game of The Hidden Empire"
- "Begin a Hidden Empire playthrough called 'first-run'"
- "Let's play The Hidden Empire"

**Exploring the world**
You are in a room and want to move or look around.
- "Go north"
- "Look around"
- "Examine the mailbox"
- "Open the door"
- "What do I see here?"

**Working with items**
You have found something and want to interact with it.
- "Take the lamp"
- "Check my inventory"
- "Read the leaflet"
- "Put the sword in the case"
- "Open the trapdoor"

**Solving puzzles**
You are stuck and want to try something.
- "Turn on the lamp"
- "Try the key on the lock"
- "Move the rug"
- "Climb the rope"

**Undoing moves**
You made a mistake or want to try a different approach.
- "Undo that last move"
- "Take that back"
- "Undo the last three moves"
- "Go back to before I opened the trapdoor"

**Managing saves**
You want to organize your playthroughs or resume a previous one.
- "List my saved games"
- "Load my save called 'first-run'"
- "Reset my current playthrough"

---

## Example responses

When you say "Start a new game of The Hidden Empire," your AI responds with the game's opening text and waits for your next move:

> You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.
> Score: 0 | Moves: 0

When you say "Open the mailbox," your AI executes the command and describes the result:

> Opening the small mailbox reveals a leaflet.
> Score: 0 | Moves: 1

When you say "Undo that last move," your AI rolls back the command and returns you to where you were:

> Move undone. You are back in the Troll Room.
> Score: 10 | Moves: 14

When you say "List my saved games," your AI returns your active playthroughs:

> **weekend-run** — Score: 35 | Moves: 42 | Last played: 2 days ago
> **first-run** — Score: 10 | Moves: 18 | Last played: 5 days ago

---

## Real-world scenarios

**The weekend exploration**
On Saturday afternoon you start a new playthrough called "weekend-run." You explore the field, find the front door boarded shut, discover a path around back, and make it into the house before dinner interrupts. Sunday morning you ask your AI to load "weekend-run" and you are standing in the kitchen exactly where you stopped, lamp in hand, troll blocking the passage ahead.

**The returning player**
Three weeks ago you left off deep in the dungeon with a score of 85 and no idea what to do next. You open a new session, ask your AI to list your saves, and load the one from before. Your AI loads the save, shows you the room description, and you pick up exactly where you were — inventory intact, score preserved, every item in its place.

**The parallel strategist**
You want to try two different approaches to the underground maze. You start "maze-route-a" and explore one path until you get stuck. Then you start "maze-route-b" and try a different strategy. Both playthroughs stay active. You can switch between them to compare progress or abandon the dead end and continue with the one that worked.

---

## Legal

This project is an independent adaptation based on the MIT-licensed open-source release of Zork I. It is not affiliated with or endorsed by Microsoft, Activision, or Infocom. See the [NOTICE](./NOTICE) file for attribution details.

This project is released under the MIT License. See [LICENSE](./LICENSE) for full details.

Copyright (c) 2026 The Hidden Empire Project Contributors


## Troubleshooting

- **Authentication failed** — Visit <https://hidden-empire.mctx.ai> to subscribe or renew your subscription. OAuth re-authentication happens automatically on the next connection attempt.

- **Expired subscription (403 Forbidden)** — Your subscription has expired or been cancelled. Renew at <https://hidden-empire.mctx.ai>.

- **Version not found (404 Not Found)** — The requested server version does not exist or has been retired. Connect to `https://hidden-empire.mctx.ai` without a version suffix to automatically use the latest version.

- **Server offline (503 Service Unavailable)** — The server is temporarily unavailable. Wait a few moments and try again.