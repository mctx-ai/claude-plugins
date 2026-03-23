---
name: about-help
description: "Get accurate answers about mctx and MCP servers from live docs, not outdated training data. Look up deployment steps, payouts, pricing, or framework questions instantly. Works with Claude Code, Cursor, Codex, and any MCP client. Coverage: server framework, deployment, environment variables, subscriptions, payouts, pricing, tools, resources, transports, authentication, versioning. Questions you can ask: \"How do I define a tool with input validation?\" \"What does mctx need in package.json?\" \"How do I set up payouts?\" \"What's the difference between ready and live status?\" \"How does the 80/20 split work?\" \"Why did my deployment fail?\" \"What MCP resources and tools are available?\""
---

# Help

**Version:** 1.0.30
**Author:** mctx-ai
**Homepage:** <https://docs.mctx.ai>

## What This Server Does

Get accurate answers about mctx and MCP servers from live docs, not outdated training data. Look up deployment steps, payouts, pricing, or framework questions instantly. Works with Claude Code, Cursor, Codex, and any MCP client. Coverage: server framework, deployment, environment variables, subscriptions, payouts, pricing, tools, resources, transports, authentication, versioning. Questions you can ask: "How do I define a tool with input validation?" "What does mctx need in package.json?" "How do I set up payouts?" "What's the difference between ready and live status?" "How does the 80/20 split work?" "Why did my deployment fail?" "What MCP resources and tools are available?"

## Available Tools

Tool information is not available for this server.

## How to Subscribe

Subscribe to this MCP server at <https://help.mctx.ai>.

This server is free to use.

After subscribing, OAuth auto-discovery handles authentication automatically via RFC 9728 — no manual token setup required when using Claude Code with the plugin installed.

## How to Connect

**MCP endpoint:** `https://help.mctx.ai`

**Supported transports:** HTTP streaming and SSE (Server-Sent Events)

**Authentication:** OAuth auto-discovery via RFC 9728 — the client discovers the authorization server automatically. No manual token configuration needed.

**Latest version endpoint:** `https://help.mctx.ai/v1.0.30`

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
claude mcp add help https://help.mctx.ai --transport http
```

### Claude Desktop (manual)

Add the following to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "help": {
      "type": "http",
      "url": "https://help.mctx.ai"
    }
  }
}
```

### Generic HTTP Client

Connect to `https://help.mctx.ai` using HTTP transport. OAuth auto-discovery via RFC 9728 handles authentication.

## About mctx

mctx is a managed hosting platform for MCP servers (AI apps). Subscribe once and connect from any AI client — Claude, ChatGPT, Cursor, VS Code, and more.

## Usage Notes

# Stop waiting for your AI to catch up on mctx.

MCP is moving fast. Most AI assistants still answer questions about it from training data that's months out of date — which means confident answers that don't match what you're seeing in the platform. This server gives your AI client a live connection to the authoritative mctx and MCP documentation, searched at query time, so you get the right answer instead of a plausible guess.

Unlike asking your AI directly, this server doesn't rely on what the model happened to learn before its training cutoff. When mctx ships a new feature or changes how something works, the answer changes here too.

## What you get

**Always-current documentation** — The server searches the full mctx documentation at query time. Ask about a feature that launched last week and get an accurate answer, not stale training data.

**MCP protocol fluency** — Tools, resources, prompts, transports, authentication flows, versioning — if it's part of the Model Context Protocol spec as implemented on mctx, this server covers it.

**Guided walkthroughs** — Ask where to start and the server walks you through the process step by step, one step at a time, with source links you can follow to the full documentation.

**mctx-specific answers** — Deployment lifecycle, the `@mctx-ai/mcp-server` TypeScript framework, environment variables, payouts, subscriptions, pricing — the full platform, fully searchable from your AI conversation.

## How it works

When you ask your AI client an mctx or MCP question, the server searches the live documentation rather than relying on the AI's built-in knowledge. Results come back with the most relevant sections along with links to the full docs page so you can read further if you need to.

For multi-step processes — like setting up your first server or configuring authentication — ask where to start and the server guides you through one step at a time, presenting each step with its source link before moving to the next.

## Using this server

Once subscribed, your AI client automatically routes mctx and MCP questions through this server. You don't need to do anything differently in your conversations — just ask.

Use this server when you want to be sure, not just hopeful. It's especially useful when you're not certain whether something has changed recently, when you need accurate API details before building, or when an answer from your AI client doesn't match what you're seeing in the platform.

## Example phrases

**Getting started**
You're new to mctx or starting your first server and want a clear path forward before you touch any code.

- "How do I build my first MCP server?"
- "Where do I start with mctx?"
- "What's the quickest way to deploy an MCP server?"

**Building with the framework**
You're writing code and want accurate information about the `@mctx-ai/mcp-server` TypeScript framework before building something the wrong way.

- "How do I define a tool with input validation?"
- "What does the T type system do?"
- "How do I register resources and prompts?"
- "How do I run my server locally before deploying?"

**Deploying on mctx**
You're ready to deploy or you're debugging a deployment and need to know exactly what mctx expects.

- "How do I deploy a new version?"
- "What does mctx need from my package.json?"
- "What's the difference between ready and live status?"
- "Why did my deployment fail?"

**Authentication and subscribers**
You're configuring how your server handles identity and subscriptions, or trying to understand what your subscribers experience.

- "How does authentication work for hosted MCP servers?"
- "How do subscriptions work for my subscribers?"
- "What is the dispatch worker and what does it do?"

**Payouts and pricing**
You're setting up or reviewing your revenue configuration and want to understand exactly how money flows.

- "How do I set up payouts?"
- "How do I set a price for my server?"
- "How does the revenue split work?"
- "What happens if I make my server free?"

## Example responses

**"What does mctx need from my package.json?"**

> mctx requires four fields in your `package.json`: `name`, `version`, `description`, and `main`. The `name` becomes your server's display name. The `version` tells mctx when you have a new release — increment it before pushing to trigger a deployment. The `description` is what subscribers see when discovering your server, so lead with your most compelling hook in the first 100 characters. The `main` field points to your built JavaScript file, such as `dist/index.js`. See: docs.mctx.ai/building-mcp-servers/server-requirements

**"What's the difference between ready and live status?"**

> A server in `ready` status has been added to mctx but hasn't been deployed yet — or it requires payout setup before it can go live. A server in `live` status has at least one successfully deployed version and is accessible to subscribers. If your server is stuck in `ready`, check whether payout setup is complete in your developer settings. See: docs.mctx.ai/quick-start/set-up-payouts

**"How does the revenue split work?"**

> mctx takes 20% of subscription revenue and passes 80% to you. There are no monthly hosting fees — mctx earns only when you earn. Payouts are transferred automatically on a recurring schedule once your payout account is connected. The 20% covers hosting, authentication, the subscriber billing system, and the infrastructure that routes requests to your server. See: docs.mctx.ai/pricing-payouts/getting-paid

## How subscribers use it

**A new week, a new feature.**
It's Monday morning. You heard mctx updated how server versioning works. You ask your AI client — it gives an answer that sounds right but doesn't match what you're seeing in the dashboard. You have this server subscribed, so your AI pulls from the live docs instead. The answer matches what's actually there. You move on in five minutes instead of spending an hour reading release notes.

**Picking up where you left off.**
You close Claude Code and come back the next day in a fresh session. Your AI has no memory of your earlier conversation, but it still has access to this server. You ask "what environment variables does mctx expect me to set in my project?" and get the same accurate answer you would have gotten yesterday — because the answer comes from the docs, not from session memory.

**Switching AI clients.**
You've been building with Claude Code and switch to Cursor. Same subscription, same server, same documentation. You ask about authentication flow for hosted MCP servers and Cursor routes the question here just like Claude Code did — no setup, no re-explaining, consistent answers whether you switch clients next week or next year.


## Troubleshooting

- **Authentication failed** — Visit <https://help.mctx.ai> to subscribe or renew your subscription. OAuth re-authentication happens automatically on the next connection attempt.

- **Expired subscription (403 Forbidden)** — Your subscription has expired or been cancelled. Renew at <https://help.mctx.ai>.

- **Version not found (404 Not Found)** — The requested server version does not exist or has been retired. Connect to `https://help.mctx.ai` without a version suffix to automatically use the latest version.

- **Server offline (503 Service Unavailable)** — The server is temporarily unavailable. Wait a few moments and try again.