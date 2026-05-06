# CLAUDE.md

Context for AI assistants working in this repo. Pair with `coding-rules.md`.

## What this is

A single-page marketing site at uponwillow.com pitching the joint Upon × Willow proposition to UK financial advisers, planners, and wealth managers. It exists to convert advisers into 20-minute discovery calls.

Not a product. No DB, no auth, no user accounts. One route, one page.

## Stack

- Next.js 16 App Router, React 19, TypeScript strict
- Tailwind v4 (theme defined via `@theme` in `src/app/globals.css`)
- Resend for the email-capture flow
- PostHog for analytics (EU Cloud, reverse-proxied via `/ingest`)
- Deployed on Vercel

## Architecture

The whole page is a Server Component. Two `"use client"` boundaries only:
- `components/posthog-provider.tsx` (analytics init)
- `components/one-pager-form.tsx` (form state + Server Action call)

Content (copy, stats, FAQ entries, team bios, pricing rows) lives in `src/content/` as typed modules. Sections import their content; nothing is hardcoded in JSX. A copy review = one PR touching one folder.

Sections are concrete components (`Hero`, `Journey`, `Pricing`, etc.), each owning its own layout. There is **no** generic `<Section>` wrapper. Resist the temptation — the marketing site is small enough that the boring repetition is the right answer.

## Coding rules that bite here

From `coding-rules.md`, these are the ones that actively shape decisions on this codebase:

- **1.4 Single source of truth** — content lives in `src/content/`, design tokens in `globals.css` `@theme` block, env access centralised in `lib/env.ts`. Don't duplicate.
- **1.6 Presentational client components, server data fetching** — only mark a component `"use client"` if it genuinely needs interactivity.
- **1.8 Prefer the boring solution** — no homegrown design system, no generic section wrapper, no abstraction across one or two usages.
- **2.2 Validate input at the trust boundary** — Server Actions Zod-parse as the first line.
- **2.3 Server-only secrets** — `lib/env.ts` starts with `import "server-only"`.
- **2.4 Idempotency** — one-pager submission dedupes on email. In-memory now; persist to Supabase if traffic warrants.
- **2.5 Don't log PII** — log IDs and action names only.

## Things deliberately not done

- No CMS. Copy changes are PRs.
- No shadcn/ui yet. Add when first interactive component (e.g. accordion) needs it.
- No Supabase. Add when the in-memory dedupe stops being good enough or when we need persistent capture.
- No `/legal` pages yet. Add before launch.
- No cookie banner yet. Required before launch given PostHog + EU traffic.

## Working in this repo

Branches: `feat/`, `fix/`, `chore/`, `refactor/`, `docs/`. Squash-merge to main. Vercel previews on every PR. Commits in imperative mood, ~50 chars.
