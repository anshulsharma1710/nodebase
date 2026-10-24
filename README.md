# Nodebase

**A visual workflow automation platform. Build workflows by connecting nodes on a canvas, then run them in the background with live status.**

## Overview

Nodebase lets users design automations visually. Each workflow is a graph of nodes on a drag-and-drop canvas. When a workflow runs, Nodebase works out the order of the nodes from their connections, executes them as durable background jobs, and streams progress back to the editor in real time. Nodes can call external APIs and AI models, and data flows from one node to the next through templated variables.

## Features

- **Visual workflow editor:** build workflows by dragging nodes onto a canvas and connecting them, using React Flow.
- **Dependency-ordered execution:** nodes run in the correct order, resolved with a topological sort of the workflow graph.
- **Background execution:** runs are handled by Inngest, so they are durable and retry-friendly rather than tied to a web request.
- **Realtime status:** execution progress is streamed back to the UI as the workflow runs.
- **AI nodes:** call Google Gemini models through the Vercel AI SDK.
- **Templated data passing:** reference the output of earlier nodes in later ones with Handlebars templates.
- **Authentication:** sign-up and sign-in with Better Auth.
- **Subscriptions:** paid plans handled through Polar.
- **Error monitoring:** Sentry for server, edge and client errors.

## Tech stack

| Layer | Tools |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack), React 19, TypeScript |
| UI | Tailwind CSS 4, shadcn/ui, Radix UI, Lucide icons |
| Workflow canvas | React Flow (`@xyflow/react`), Jotai |
| API | tRPC, TanStack Query, Zod, superjson |
| Database | PostgreSQL, Prisma ORM |
| Background jobs | Inngest (with realtime updates) |
| AI | Vercel AI SDK, Google Gemini |
| Auth and billing | Better Auth, Polar |
| Observability | Sentry |
| Tooling | Biome (lint and format), mprocs |

## Getting started

### Prerequisites

- Node.js 20 or later
- A PostgreSQL database (a free [Neon](https://neon.tech) project works)
- A [Google AI Studio](https://aistudio.google.com) API key for the Gemini nodes
- Accounts for [Polar](https://polar.sh) and [Sentry](https://sentry.io) (optional while developing)

### Installation

```bash
git clone https://github.com/anshulsharma1710/nodebase.git
cd nodebase
npm install
```

### Environment variables

Create a `.env` file in the project root:

```env
DATABASE_URL=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_APP_URL=http://localhost:3000

GOOGLE_GENERATIVE_AI_API_KEY=

POLAR_ACCESS_TOKEN=

SENTRY_AUTH_TOKEN=
```

### Set up the database

```bash
npx prisma generate
npx prisma migrate dev
```

### Run locally

Start the app and the Inngest dev server together:

```bash
npm run dev:all
```

This uses mprocs (see `mprocs.yaml`) to run both processes in one terminal. To run them separately:

```bash
npm run dev           # Next.js app on http://localhost:3000
npm run inngest:dev   # Inngest dev server
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Next.js dev server with Turbopack |
| `npm run dev:all` | Run the app and the Inngest dev server together with mprocs |
| `npm run inngest:dev` | Start the Inngest dev server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint with Biome |
| `npm run format` | Format with Biome |

<!-- If you built this by following a tutorial or course, credit it here, for example:
## Credits
Built while following [Course Name] by [Author]. -->

## Author

**Anshul Sharma**: Data Engineer and full-stack developer
[LinkedIn](https://www.linkedin.com/in/anshulsharma02) · [GitHub](https://github.com/anshulsharma1710) · sanshul5555@gmail.com
