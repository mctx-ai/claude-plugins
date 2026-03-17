---
name: about-notes
description: "An MCP server that extends AI assistants with additional tools and capabilities."
---

# Notes

**Version:** 1.4.1
**Author:** mctx-ai
**Homepage:** <https://mctx.ai>

## What This Server Does

An MCP server that extends AI assistants with additional tools and capabilities.

## Available Tools

Tool information is not available for this server.

## How to Subscribe

Subscribe to this MCP server at <https://mctx.ai/apps/notes>.

This server costs $1.00 per 1,000 requests.

After subscribing, OAuth auto-discovery handles authentication automatically via RFC 9728 — no manual token setup required when using Claude Code with the plugin installed.

## How to Connect

**MCP endpoint:** `https://notes.mctx.ai`

**Supported transports:** HTTP streaming and SSE (Server-Sent Events)

**Authentication:** OAuth auto-discovery via RFC 9728 — the client discovers the authorization server automatically. No manual token configuration needed.

**Latest version endpoint:** `https://notes.mctx.ai/v1.4.1`

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
claude mcp add notes https://notes.mctx.ai --transport http
```

### Claude Desktop (manual)

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "notes": {
      "type": "http",
      "url": "https://notes.mctx.ai"
    }
  }
}
```

### Generic HTTP Client

Connect to `https://notes.mctx.ai` using HTTP transport. OAuth auto-discovery via RFC 9728 handles authentication.

## About mctx

mctx is a managed hosting platform for MCP servers (AI apps). Subscribe once and connect from any AI client — Claude, ChatGPT, Cursor, VS Code, and more.

## Usage Notes

# Notes

One note store. Every AI client. Any device, anywhere.

Tell Claude to save a note. Open ChatGPT. It's already there. That's not a feature — that's the product.

AI memory is session-scoped. The moment you close a tab, your context is gone. Open a new session and you're starting from scratch — re-explaining the project, re-stating the decision, re-describing the thing you just figured out. And if you switch from Claude Code to Cursor to Windsurf? Each one is its own island. Your notes don't travel.

This server fixes that. One centralized note store, completely decoupled from whichever AI client you're using right now. Notes you save in Claude Code show up in ChatGPT. Notes you save on your phone appear on your desktop. It doesn't matter where you saved them or where you're reading them — they're always there.

---

**Your notes don't belong to your AI client. They belong to you.**

---

## What You Get

**Client-agnostic access.** Notes work in Claude, Claude Code, ChatGPT, Cursor, Codex, Windsurf — any AI tool with MCP capability. Save in one, read in all. The client is irrelevant.

**Cross-device, cross-session sharing.** Walk away from your desk, pick up your phone, tell your AI to save a note. Come back to your desktop and it's there. Five coding sessions open at once? Save something in session A, pull it up in session B instantly.

**Single identity, zero setup.** Your mctx account is your notes identity. Log in from any client on any machine and your complete note history is immediately available. No configuration, no pairing, no sync — it's automatic.

**Encrypted at rest and in transit.** Notes are protected with AES-256-GCM encryption using a unique per-user key. Your key can't decrypt anyone else's data. No one else's key can touch yours.

**Full note management.** Create, read, update, delete, restore. Tag notes to categorize them, then filter by tag to surface exactly what you need. Filter by title or date. Sort by created or updated. Paginated results for large collections. Soft-delete with 30-day recovery — if you delete something by accident, you can get it back. Pin important notes to keep them at the top of every list result and exempt from stale detection.

**Surgical tag management.** Add tags to a note without touching its other tags. Remove specific tags without affecting the rest. Replace all tags at once when you need a clean slate. Tag management is additive, subtractive, or wholesale — whichever fits the moment.

---

## How It Works

Connect any MCP-capable AI client to this server using your mctx account. From that point, your notes are part of that AI's working context — across every client, on every device. At the start of a session, your AI can check what notes exist and what's changed. As you work, save decisions, plans, findings, anything — with a single natural-language request. Those notes are immediately available everywhere else.

Your notes are private to your account. No one else can see them.

---

## Using This Server

You never need to know any tool names. Just say what you mean and your AI handles the rest.

### Starting a session

Tell your AI to catch you up and it will surface what's relevant to what you're working on:

- "Catch me up on what we've been working on"
- "What's the current status of the auth refactor?"
- "What did I decide about the database schema?"
- "What was I in the middle of?"

### Saving something mid-session

When you reach a decision or want to capture something before you close the tab:

- "Save this decision so I can come back to it"
- "Take a note — we're going with optimistic locking because of X and Y"
- "Write this down before I close the tab"
- "Don't forget this — it'll matter next session"
- "Save this as a decision note and tag it 'auth' and 'architecture'"
- "Take a note and tag it 'blocker' — I'll need to filter for these later"

### Sharing between sessions or clients

When you need information from one session available in another:

- "Save a note with what we just figured out — I need to pick this up in another session"
- "I'm switching to Cursor — save everything we covered so I can pull it up there"
- "Give me a status update note so I can share where I am across my open sessions"

### Finding notes later

Your AI can search and filter notes by title, date, or tag:

- "Show me everything I wrote about authentication"
- "What notes did I create last week?"
- "Find notes updated since Monday"
- "List my recent plans"
- "Show me all my notes tagged 'architecture'"
- "Find everything I tagged 'decision'"

### Pinning important notes

Keep critical notes always at the top of your list and protected from stale cleanup:

- "Pin the auth decision note — I want it front and center"
- "Keep that architecture doc pinned so it doesn't get cleaned up"
- "Unpin that note, I'm done with that phase"

Pinned notes sort above all unpinned notes in list results. They are also exempt from stale detection, so they won't be flagged or purged no matter how long ago they were last accessed.

### Managing tags on existing notes

Add, remove, or replace tags on a note you already saved — without having to rewrite the note:

- "Add 'architecture' and 'decision' tags to that auth note"
- "Tag that note 'blocker' so I can find it when filtering by blockers later"
- "Remove the 'in-progress' tag from that note — it's done now"
- "Strip the 'draft' tag from everything I finished this week"
- "Replace all the tags on that note with just 'resolved'"
- "Clear all tags on that note — I want to start fresh"

Use `tag_note` to add tags without touching existing ones, `untag_note` to remove specific tags, or `set_note_tags` to replace all tags at once.

### Cleaning up

- "Delete the old notes about v1 — that project is done"
- "Remove my notes on the deprecated API"
- "Restore that note I deleted yesterday — I need it back"

---

## Example Responses

**"Catch me up on what we've been working on"**

> You have 4 notes from this project. The most recent is from 2 days ago: you finished the database migration and were about to start the API layer. There's also a note explaining why you chose PostgreSQL over SQLite, and a note on the auth flow you haven't started yet. Want me to pull the details on any of these?

**"Save this decision — we're going with server-side sessions instead of JWTs"**

> Saved. I've stored a note titled "Auth: server-side sessions over JWTs" with the reasoning we just worked through. It'll be here next time you open a session, in any client.

**"I'm switching to Cursor — save what we covered so I can pick it up there"**

> Done. I've saved a note with where we left off — the current implementation approach, the three open questions we identified, and the API design decision. Open Cursor and ask it to catch you up; this note will be there.

**"Save this bug as a note and tag it 'blocking' — I need to filter for blockers later"**

> Saved. I've created a note called "Database connection timeout in production" and tagged it 'blocking'. Whenever you want to see all your blocker notes, just ask me to find notes tagged 'blocking' — I'll pull them all up in any session.

**"Add 'architecture' and 'decision' tags to that auth note without losing the existing tags"**

> Done. I've added 'architecture' and 'decision' to the auth note — the 'blocking' tag is still there too. Now you can filter by any of those tags to surface that note when you need it.

---

## Real-World Workflows

### Phone to desktop

You're walking between meetings and a solution clicks into place. You pull out your phone, open your AI, and say "save a note — I just figured out the caching approach, here's the plan." You get back to your desk, open Claude Code, and ask "what did I save about caching?" The note is there, full detail, exactly as you dictated it. You go straight into implementation.

### Five sessions, one note store

You have five coding sessions open simultaneously — different features, different contexts. In session A, you figure out something that session C needs to know about. You tell session A: "save a note with what we just found about the rate limiter behavior." You switch to session C and ask: "is there a note about the rate limiter?" It retrieves what session A just saved. The sessions are separate; the note store is shared.

### Switching AI clients mid-project

You start a deep debugging session in Claude Code, track down a subtle race condition, and save a finding note with the full analysis. Later in the day you switch to Cursor for the fix. You ask: "what was that race condition I found earlier?" Cursor retrieves the finding note from your Claude Code session — same content, same detail, instantly available. You didn't have to copy anything. The AI client changed; your notes didn't.

### Tag-based filtering across debugging sessions

You're in a long debugging marathon with multiple issues to track. Every time you find something actionable, you tell your AI: "save that as a note and tag it 'action-item'". After two hours, you have 15 notes scattered across the session. You ask your AI: "show me all my notes tagged 'action-item'". It pulls up just those notes — no clutter, everything you need to act on. You switch to a different client to start implementing the fixes, and ask the same thing: "show me all my notes tagged 'action-item'". Same list appears instantly. You don't have to remember which notes you tagged or scroll through everything you wrote; the tags bring them to you.



## Troubleshooting

- **Authentication failed** — Visit <https://mctx.ai/apps/notes> to subscribe or renew your subscription. OAuth re-authentication happens automatically on the next connection attempt.

- **Expired subscription (403 Forbidden)** — Your subscription has expired or been cancelled. Renew at <https://mctx.ai/apps/notes>.

- **Version not found (404 Not Found)** — The requested server version does not exist or has been retired. Connect to `https://notes.mctx.ai` without a version suffix to automatically use the latest version.

- **Server offline (503 Service Unavailable)** — The server is temporarily unavailable. Wait a few moments and try again.