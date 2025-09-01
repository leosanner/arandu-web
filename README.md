Arandu MVP — AI‑Assisted Scheduling Web App

Arandu is a Next.js application that helps users plan and manage events on a calendar, with optional AI assistance to generate or refine schedules. It includes authentication, event CRUD, calendar navigation, and a workflow that triggers AI tasks and MCP-backed utilities (e.g., fetching news and sending summary emails). Cookies are used to persist the user session and are forwarded to backend APIs.

Live Flow (High Level)
- Login/Register → Manage Events → View Calendar → Ask AI to plan → (optional) trigger MCP workflow to fetch news and email a report.

Key Features
- Authentication and session via cookies.
- Event creation, viewing, and deletion for specific days and ranges.
- Calendar UI for day and month navigation.
- AI planning to propose schedules based on the user context.
- MCP workflow hook to call external tools (e.g., News API) and send emails.
- Cache tags for selective revalidation of user/events data.

Getting Started
- Prerequisites: Node.js 18+, npm (or pnpm/yarn), and a configured backend/API.
- Install: `npm install`
- Develop: `npm run dev` (Turbopack)
- Build: `npm run build`
- Start: `npm start`

Open `http://localhost:3000` to access the app.

Project Structure (Selected)
- `src/app/` — App Router pages and layouts (e.g., `/login`, `/user`, `/user/ai/plan-events`, `/user/calendar/[slugDate]`, `/user/events/...`).
- `src/lib/api/` — Typed API clients for AI, events, and user.
- `src/lib/cookies/` — Cookie utilities for session forwarding.
- `src/lib/calendar/` — Calendar helpers and utilities.
- `src/lib/cache/` — Cache tag definitions for revalidation.
- `src/data-access-layer/` — Data access abstractions.
- `src/models/` — DTOs and validation models.
- `src/components/` — UI building blocks (Calendar, Forms, Dialogs, etc.).
- `src/middleware.ts` — Middleware for route handling and protection.

AI & MCP Integration
- AI: The client uses `src/lib/api/ai/aiApi.ts` to call AI endpoints for planning and utilities.
  - Cookies are forwarded to the backend to preserve auth context (e.g., `src/lib/api/ai/aiApi.ts:9`, `:26`, `:44`).
  - Planning UI lives in `src/app/user/ai/plan-events/page.tsx`.
- MCP (Model Context Protocol): The app integrates with a backend workflow that can call external tools via MCP.
  - Example flow: “Call news API via MCP, find latest news and send an email.” Triggered by the AI client’s `sendEmail()` path, which hits `AiApiRoutes.NEWS_REPORT` and forwards the session cookie (`src/lib/api/ai/aiApi.ts:44`, `:50`).
  - Configure your MCP server/tools on the backend; this frontend sends authenticated requests and displays results.

Cookies & Session
- Session is stored in a cookie and accessed via utilities in `src/lib/cookies`.
- API clients include the cookie when calling backend endpoints so the server can authorize requests.
- Example usage: `getCookies()` then include `Cookie: <value>` in `fetch` headers (`src/lib/api/ai/aiApi.ts:9`, `:15`).

Core Technologies
- Framework: Next.js 15 (App Router, Middleware, Server Components/Actions)
- Language: TypeScript
- UI & Styling: React 19, Tailwind CSS v4, PostCSS
- Forms & Validation: Zod
- Dates & Time: date-fns, date-fns-tz
- Content & Markdown: MDX, react-markdown, remark-gfm, rehype-pretty-code, shiki
- Icons & UI: lucide-react, custom components
- Data Layer: drizzle-orm, better-sqlite3 (where applicable)

Configuration
- Check `src/lib/env-consts.ts` and `src/lib/consts.ts` for environment-driven values.
- Typical setup uses a `.env.local` (not committed) for API base URLs, auth secrets, and AI endpoints. Add values expected by your backend and any MCP server.

Development Notes
- Lint: `npm run lint`
- Cache: Tag-based revalidation helpers in `src/lib/cache` help invalidate pages after mutations.
- Routing: Most user features live under `/user/*` routes; middleware protects/redirects unauthenticated access where needed.

Contributing
- Fork the repo and create a feature branch.
- Keep changes minimal and focused; add/adjust types in `src/models` as needed.
- Ensure pages/components remain consistent with existing patterns and validations.

License
- Internal project (MVP). Add a license if/when open-sourced.

