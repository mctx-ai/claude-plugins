---
name: about-hidden-empire
description: "Play a legendary text adventure by talking to your AI — no commands to memorize. The Hidden Empire puts a full underground world of puzzles, treasures, and trolls inside your conversation. Speak naturally: say 'head north,' 'grab the lantern,' or 'what am I carrying?' and your AI handles the rest. Execute multi-move plans in one shot, undo mistakes instantly, and save up to 20 named playthroughs you can resume from any session. Based on the MIT-licensed Zork I source, rebuilt from the ground up for AI-native play."
---

# Hidden Empire

**Version:** 0.10.0
**Author:** mctx-ai
**Homepage:** <https://github.com/mctx-ai/hidden-empire>

## What This Server Does

Play a legendary text adventure by talking to your AI — no commands to memorize. The Hidden Empire puts a full underground world of puzzles, treasures, and trolls inside your conversation. Speak naturally: say 'head north,' 'grab the lantern,' or 'what am I carrying?' and your AI handles the rest. Execute multi-move plans in one shot, undo mistakes instantly, and save up to 20 named playthroughs you can resume from any session. Based on the MIT-licensed Zork I source, rebuilt from the ground up for AI-native play.

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

**Latest version endpoint:** `https://hidden-empire.mctx.ai/v0.10.0`

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

mctx — The best way to Build an MCP server. Subscribe once and connect from any AI client — Claude, ChatGPT, Cursor, VS Code, and more.

## Usage Notes

# The Hidden Empire

A full text adventure lives inside your AI conversation. Just talk and play.

The original Zork was brilliant but unforgiving -- cryptic parser syntax, no mercy for typos, and if you closed the window, your progress vanished. The Hidden Empire takes that same underground world of puzzles, treasures, and lurking dangers and puts it where you already are: your AI assistant. You play by talking. Your AI translates plain English into game commands, rephrases when something does not work, and keeps your full game state -- location, inventory, score -- saved and waiting whenever you come back. No manuals, no memorizing syntax, no lost progress. Just conversation and adventure.

---

## Why not just ask your AI about Zork?

Your AI can tell you about Zork. It cannot play Zork with you. The Hidden Empire runs the actual game engine -- a real Z-machine interpreter executing the original game logic. Every room, puzzle, and item interaction behaves exactly as designed, with real consequences for your choices. Your AI is the translator between your words and that engine, not a summary or a simulation. When you pick up the brass lantern, it is in your inventory. When the troll blocks the passage, you have to solve it. The game is real. The conversation is just how you play it.

---

## What you get

**Natural language play** -- Say "go through the door to the north" or just "north." Ask "what am I carrying?" instead of typing INVENTORY. Your AI figures out the right command and sends it. If the game rejects it, your AI rephrases and retries silently -- you just see the result.

**Auto-save after every move** -- Your game state saves automatically with each command. Close the conversation, switch devices, come back next week. You are exactly where you left off.

**Undo mistakes instantly** -- Walked into a dark room without your lantern? Undo your last move and try a different approach. No penalty, no reloading from a save point.

**Batch commands** -- Tell your AI to execute a whole plan: "go north, take the sword, then head east." The game processes each step in order and returns the full result. Explore faster without back-and-forth.

**Multiple named playthroughs** -- Run up to 20 separate games at once. Keep a cautious run and a reckless one. Compare strategies. Pick up any of them from any session.

**Structured game state on demand** -- Ask your AI where you are, what you are carrying, and what your score is. Get a clean answer drawn from the live game state, not a guess.

**A complete classic adventure** -- Underground labyrinths, hidden treasure, locked doors, devious puzzles, and a troll who really does not want you to cross that bridge. Every room and secret from the original, faithfully preserved.

---

## How it works

Ask your AI to start a game. You find yourself in an open field west of a white house, a small mailbox nearby. From there, you explore by saying what you want to do -- walk somewhere, examine something, pick up an item, try a puzzle. Your AI handles the translation. When you are done for the day, just stop. Your progress is already saved. Next time, ask to continue and you are right back where you were: same room, same inventory, same score, same moves.

You never see the game engine. You never type parser commands. You just play.

---

## Usage in conversation

Talk to your AI the way you normally would. The game responds when you ask to start, continue, or manage a playthrough.

During gameplay, speak naturally. "Head toward the forest," "grab the brass lantern," "what is behind the door?" -- your AI translates your words into the commands the game engine understands. You can also ask about your current state: "where am I?" or "what is my score?"

Between sessions, manage your saves through conversation. List your playthroughs, load one by name, or reset a game to start fresh.

---

## Example phrases

**Starting a new adventure**
You want to begin fresh or create a named playthrough to return to later.
- "Start a new game of The Hidden Empire"
- "Begin a playthrough called 'deep-dive'"
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
- "Put the sword in the trophy case"
- "Open the trapdoor"

**Solving puzzles**
You are stuck and want to try something.
- "Turn on the lamp"
- "Try the key on the lock"
- "Move the rug"
- "Climb down the rope"

**Fixing mistakes**
Something went wrong and you want to backtrack.
- "Undo that last move"
- "Take that back"
- "Undo the last three moves"

**Running a multi-step plan**
You know what you want to do and want to do it all at once.
- "Go north, take the sword, then go east"
- "Open the trapdoor, go down, and turn on the lantern"

**Managing saves**
You want to organize your playthroughs or resume a previous one.
- "List my saved games"
- "Load my save called 'deep-dive'"
- "Reset my current playthrough"
- "How many saves do I have?"

---

## Example responses

When you say "Start a new game of The Hidden Empire," your AI responds with the opening scene:

> You are standing in an open field west of a white house, with a boarded front door. There is a small mailbox here.
> Score: 0 | Moves: 0

When you say "Open the mailbox," the game processes the command and your AI describes the result:

> Opening the small mailbox reveals a leaflet.
> Score: 0 | Moves: 1

When you say "Undo that last move," the game rolls back and your AI confirms where you are:

> Move undone. You are back in the Troll Room.
> Score: 10 | Moves: 14

When you say "List my saved games," your AI shows your active playthroughs:

> **deep-dive** -- Score: 35 | Moves: 42 | Last played: 2 days ago
> **speed-run** -- Score: 10 | Moves: 18 | Last played: 5 days ago

---

## Real-world scenarios

**The lunch break dungeon crawl**
Tuesday at noon, you start a playthrough called "lunch-run" and make it into the house, through the trapdoor, and down into the cellar before your break ends. Wednesday, you ask your AI to load "lunch-run." You are standing in the cellar, lantern lit, sword in hand, troll blocking the way forward. You try a strategy, it does not work, you undo, try something else -- and you are past the troll before your sandwich is gone.

**The slow burn across weeks**
You have been chipping away at The Hidden Empire for three weeks. Your score is 85, you are deep underground, and you are genuinely stuck. You open a new session, load your save, and ask your AI to describe the room and your inventory. Everything is exactly as you left it. You try "move the rug" on a hunch -- and find a hidden passage you missed the first ten times.

**The strategist with parallel runs**
You hit a fork in the underground maze and want to try both paths. You start "maze-left" and explore one direction until you hit a dead end. Then you start "maze-right" and try the other way. Both saves stay active. You switch between them, compare progress, and eventually abandon the dead end to continue on the path that worked -- without ever losing a move.

---

## Legal

This project is an independent adaptation based on the MIT-licensed open-source release of Zork I, originally released by Activision/Microsoft.

Copyright (c) 2025 Microsoft
Upstream Source: https://github.com/historicalsource/zork1

The Hidden Empire is not affiliated with or endorsed by Microsoft, Activision, or Infocom. Zork is a mark associated with Microsoft and Activision and is used here only for factual reference to the original source material upon which this independent adaptation is based.

This project is released under the MIT License. See [LICENSE](./LICENSE) for full details.

Copyright (c) 2026 The Hidden Empire Project Contributors


## Troubleshooting

- **Authentication failed** — Visit <https://hidden-empire.mctx.ai> to subscribe or renew your subscription. OAuth re-authentication happens automatically on the next connection attempt.

- **Expired subscription (403 Forbidden)** — Your subscription has expired or been cancelled. Renew at <https://hidden-empire.mctx.ai>.

- **Version not found (404 Not Found)** — The requested server version does not exist or has been retired. Connect to `https://hidden-empire.mctx.ai` without a version suffix to automatically use the latest version.

- **Server offline (503 Service Unavailable)** — The server is temporarily unavailable. Wait a few moments and try again.