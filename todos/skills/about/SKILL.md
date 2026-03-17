---
name: about-todos
description: "An MCP server that extends AI assistants with additional tools and capabilities."
---

# Todos

**Version:** 2.0.1
**Author:** mctx-ai
**Homepage:** <https://mctx.ai>

## What This Server Does

An MCP server that extends AI assistants with additional tools and capabilities.

## Available Tools

Tool information is not available for this server.

## How to Subscribe

Subscribe to this MCP server at <https://mctx.ai/apps/todos>.

This server costs $1.00 per 1,000 requests.

After subscribing, OAuth auto-discovery handles authentication automatically via RFC 9728 — no manual token setup required when using Claude Code with the plugin installed.

## How to Connect

**MCP endpoint:** `https://todos.mctx.ai`

**Supported transports:** HTTP streaming and SSE (Server-Sent Events)

**Authentication:** OAuth auto-discovery via RFC 9728 — the client discovers the authorization server automatically. No manual token configuration needed.

**Latest version endpoint:** `https://todos.mctx.ai/v2.0.1`

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
claude mcp add todos https://todos.mctx.ai --transport http
```

### Claude Desktop (manual)

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "todos": {
      "type": "http",
      "url": "https://todos.mctx.ai"
    }
  }
}
```

### Generic HTTP Client

Connect to `https://todos.mctx.ai` using HTTP transport. OAuth auto-discovery via RFC 9728 handles authentication.

## About mctx

mctx is a managed hosting platform for MCP servers (AI apps). Subscribe once and connect from any AI client — Claude, ChatGPT, Cursor, VS Code, and more.

## Usage Notes

# Todos

Your todo list, always with you — in every AI client, on every device.

Tell Claude to add a todo. Open Cursor. It's already there. That's not a feature — that's the product.

AI sessions are ephemeral. Every time you close a tab, your task list disappears. If you're juggling multiple sessions — one for planning, one for coding, one for review — each one is its own island. You end up re-stating your priorities in every window, re-explaining what you need to get done.

This server fixes that. One centralized todo list, completely decoupled from whichever AI client you're using right now. Todos you create in Claude Code show up in Cursor. Todos you add on your phone appear on your desktop. Set a due date in one session and see it flagged in another.

---

**Your todos don't belong to your AI client. They belong to you.**

---

## What You Get

**Client-agnostic access.** Todos work in Claude, Claude Code, Cursor, Windsurf — any AI tool with MCP capability. Add in one, see in all. The client is irrelevant.

**Cross-device, cross-session sync.** You're away from your desk and remember something you need to do. Tell your phone's AI to add it. Come back to your desktop and it's in your list. Five sessions open at once? A todo added in session A is immediately visible in session B.

**Priority and due dates.** Mark todos as low, medium, or high priority. Set due dates and your AI can surface what's overdue or due soon. Never lose track of what matters most.

**Full lifecycle management.** Create, update, complete, reorder, delete, restore. Soft-delete with 30-day recovery — if you remove something by accident, you can get it back. Custom sort order so your list reflects how you actually work.

**Single identity, zero setup.** Your mctx account is your todo identity. Log in from any client on any machine and your complete todo list is immediately available. No configuration, no sync — it's automatic.

---

## How It Works

Connect any MCP-capable AI client to this server using your mctx account. From that point, your todos are part of that AI's working context — across every client, on every device. At the start of a session, your AI checks what's pending and what's changed. As you work, add tasks, mark things done, and reprioritize — with a single natural-language request.

Your todos are private to your account. No one else can see them.

---

## Using This Server

You never need to know any tool names. Just say what you mean and your AI handles the rest.

### Starting a session

Your AI checks what's pending automatically:

- "What's on my todo list?"
- "What do I have due this week?"
- "What's my highest priority task right now?"
- "Catch me up on what I was working on"

### Adding todos

- "Add a todo: finish the authentication PR"
- "Remind me to review the deployment checklist before Friday"
- "High priority: fix the race condition in the queue processor"
- "Add to my list: research rate limiting options for the API"

### Marking things done

- "Mark the auth PR todo as complete"
- "I finished the deployment review — check that off"
- "Done with the queue fix"

### Reorganizing

- "Move the database migration todo to the top of my list"
- "Change the API research task to high priority"
- "Push the documentation task to low priority for now"

### Cleaning up

- "Delete the stale todos from the old project"
- "Remove everything marked done"
- "Restore that todo I just deleted — I still need it"

---

## Example Responses

**"What's on my todo list?"**

> You have 6 active todos. 2 are high priority: fix the race condition in the queue processor (overdue by 2 days) and finish the authentication PR (due tomorrow). The rest are medium or low priority. Want me to walk through them?

**"Add a todo: review the API docs before the meeting on Friday"**

> Added. I've created a todo titled "Review the API docs before the meeting on Friday" due this Friday. It's set to medium priority. I'll flag it when you check in before then.

**"Mark the authentication PR as done"**

> Done. The authentication PR todo is marked complete. You've got 5 remaining todos, 1 still high priority.

---

## Real-World Workflows

### Capturing tasks across sessions

You're deep in a debugging session and realize you need to do three other things before the end of the day. You say "add these to my list" and dictate them all at once. You close that session, open a new one for a different feature, and ask "what else do I need to get done today?" Your AI pulls up the exact list you dictated. Nothing fell through the cracks.

### Staying on top of deadlines

You set due dates when you create todos. At the start of each session you ask your AI to surface what's overdue or due soon. It tells you what needs attention today without you having to remember or check manually. You work through the list, mark things done, and your AI tracks your progress across every session.

### Handing off between AI clients

You're wrapping up a planning session in Claude and have a list of todos ready to work through in Cursor. You say "save my task list" — or just let your AI add them as you go. You switch to Cursor, ask "what do I need to do?" and it pulls up the full list. The client changed; your todos didn't.


## Troubleshooting

- **Authentication failed** — Visit <https://mctx.ai/apps/todos> to subscribe or renew your subscription. OAuth re-authentication happens automatically on the next connection attempt.

- **Expired subscription (403 Forbidden)** — Your subscription has expired or been cancelled. Renew at <https://mctx.ai/apps/todos>.

- **Version not found (404 Not Found)** — The requested server version does not exist or has been retired. Connect to `https://todos.mctx.ai` without a version suffix to automatically use the latest version.

- **Server offline (503 Service Unavailable)** — The server is temporarily unavailable. Wait a few moments and try again.