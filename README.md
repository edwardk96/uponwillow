# Upon × Willow — Adviser Landing Page

A single-page marketing site at **uponwillow.com**, targeting financial advisers, planners and wealth managers. Pitches the joint proposition: Upon Vault during the client's life, Willow at the time of death. Both products billed to the adviser firm.

This is a marketing site, not a product. No database, no auth, no user accounts. One route, one page, one job: convert advisers into 20-minute discovery calls.

---

## Goals

**Primary:** book qualified discovery calls with adviser firms via a Cal.com embed.

**Secondary:** capture a "send me the one-pager" email for advisers not ready to book.

**Non-goals (deliberately deferred):**

- Self-serve sign-up / paid checkout
- White-label configurator or admin portal
- Blog / content hub
- CRM integration beyond Cal.com → email

The page promises a white-label flow; we don't need to have built it to sell it.

---

## Tech stack

Mirrors the existing Willow stack to maximise familiarity and reuse:

- **Next.js 15** (App Router, RSC by default)
- **TypeScript** (strict)
- **Tailwind v4**
- **shadcn/ui** for any interactive primitives (FAQ accordion if used; button styles)
- **Cal.com** embed for the booking CTA
- **Resend** for the "email me the one-pager" capture (single Server Action, no DB)
- **PostHog** from day one — same EU Cloud setup as Willow, reverse-proxied
- **Vercel** deploy, custom domain `uponwillow.com`

No CMS. Copy lives in TypeScript modules under `src/content/`. The copy will change a lot in the next two months — a CMS adds friction we don't need.

---

## Architecture (against the coding rules)

The site is small enough that most architecture rules are easy to honour by default. The ones that actively shape decisions:

**SRP (Tier 1.3) and "prefer the boring solution" (Tier 1.8).** The strongest temptation with a marketing site is to over-engineer a generic `<Section>` / `<Card>` / `<Stat>` component system. We resist this. Sections are concrete, named React components (`Hero`, `Journey`, `Pricing`, `Team`, `FAQ`, `FinalCTA`), each owning its own layout. A small set of genuinely shared primitives lives in `components/ui/` (button, eyebrow, card shell). No generic section wrapper.

**Single source of truth (Tier 1.4).** All copy and structured data (stats, FAQ entries, team bios, pricing rows) lives in typed modules under `src/content/`. Sections import their content; they do not hardcode strings. This means a copy review later is one PR touching one folder.

**Presentational client components, server data fetching (Tier 1.6).** The whole page is a Server Component. The only `"use client"` boundaries are the Cal.com embed wrapper and the email-capture form. Everything else renders server-side.

**Validate input at the trust boundary (Tier 2.2).** The email-capture Server Action parses through a Zod schema as its first line, before calling Resend.

**Server-only secrets (Tier 2.3).** `RESEND_API_KEY` lives in a `'server-only'` module imported only from the Server Action.

**Idempotency (Tier 2.4).** The "request one-pager" action is naturally idempotent: same email submitted twice should result in one Resend send, not two. We dedupe in-memory for v1 (good enough at zero traffic) and flag a TODO to back this with a Supabase table once volume justifies it.

**Don't log PII (Tier 2.5).** No request bodies in logs. We log `{ action: 'one_pager_requested', ts }` — that's it.

Tiers 1.1 (Next.js out of business logic), 1.2 (DI), and Tier 3 (scale) are largely N/A at this size. Worth noting now so we don't bother performing them ceremonially.

---

## File layout

```
src/
├── app/
│   ├── layout.tsx           # Root layout: fonts, PostHog, Tailwind globals
│   ├── page.tsx             # Server Component, composes sections
│   ├── globals.css          # Tailwind + design tokens (CSS vars)
│   ├── api/
│   │   └── one-pager/
│   │       └── route.ts     # POST handler delegating to action
│   └── opengraph-image.tsx  # OG image (later)
├── components/
│   ├── sections/
│   │   ├── nav.tsx
│   │   ├── hero.tsx
│   │   ├── journey.tsx
│   │   ├── control.tsx
│   │   ├── pricing.tsx
│   │   ├── faq.tsx
│   │   ├── team.tsx
│   │   ├── final-cta.tsx
│   │   └── footer.tsx
│   ├── ui/
│   │   ├── button.tsx       # shadcn-style
│   │   ├── eyebrow.tsx
│   │   └── product-tag.tsx  # The purple/green "Upon" / "Willow" pill
│   ├── cal-embed.tsx        # "use client", lazy-loaded
│   └── one-pager-form.tsx   # "use client", calls Server Action
├── content/
│   ├── hero.ts
│   ├── journey.ts
│   ├── control.ts
│   ├── pricing.ts
│   ├── faq.ts
│   ├── team.ts
│   └── meta.ts              # site name, contact email, calcom URL
├── lib/
│   ├── actions/
│   │   └── request-one-pager.ts  # Server Action, Zod-validated
│   ├── schemas.ts           # Zod schemas
│   ├── env.ts               # 'server-only' env access
│   └── analytics.ts         # PostHog wrapper
└── styles/
    └── tokens.css           # Colour palette as CSS vars
```

---

## Design system (compressed)

Mirrors what we mocked up earlier:

- **Page background:** `#FAFAF7` (warm off-white)
- **Cards:** `#FFFFFF` on `#FAFAF7`, with `0.5px solid #E5E2D8` borders
- **Primary text:** `#1A1A1A`
- **Secondary text:** `#4A4842`
- **Tertiary / dividers:** `#6B6960` / `#E5E2D8`
- **Upon tag:** background `#F0EFFB`, text `#4A3F8C`
- **Willow tag:** background `#EEF3E6`, text `#3D5C1F`
- **Final CTA band:** `#F4F1E8`
- **Headlines:** serif (`var(--font-serif)`), sentence case, weight 500
- **Body:** sans-serif, 15–16px, line-height 1.6–1.65

Two weights only — 400 and 500. No drop shadows, no gradients, no rounded-pill buttons. Restrained, private-bank energy.

These live as CSS custom properties in `styles/tokens.css` and are used directly. No Tailwind theme extensions for colour — Tailwind utilities reference the CSS vars via `bg-[var(--surface)]` syntax. This keeps the source of truth single (Tier 1.4) and makes a future redesign a one-file change.

---

## Sections (in order)

1. **Nav** — Upon × Willow lockup, anchor links, "Book a 20-min call" button
2. **Hero** — AUM-at-death hook, two CTAs, three stat cards
3. **Journey** — Vault during life → Willow after death, two-card layout
4. **Control** — "Your client. Your brand. Your call." Three columns
5. **Pricing** — Vault £5.99/mo per client, Willow £599 per estate trigger
6. **FAQ** — four questions, the awkward ones first
7. **Team** — Ed and Liam, side by side
8. **Final CTA** — warm band, single ask
9. **Footer** — minimal

---

## What needs your input before building

These are placeholders in the current copy that you'll want to correct:

1. **AUM-at-death stat.** I've used "~70%" in the hero. Replace with whatever your earlier research turned up — ideally a UK-specific figure with a citeable source.
2. **Cal.com booking URL.** Set up a 20-min event and pop the URL in `content/meta.ts`.
3. **Contact email.** `hello@uponwillow.com`? `advisers@uponwillow.com`? Set up before launch.
4. **One-pager PDF.** A two-page version of the site for advisers to email internally. Build after the page is live — the email capture flow is wired to send it once it exists.

---

## Open questions you might want to think about

These don't block building, but worth flagging:

- **The `/legal` pages** (privacy, terms) — needed before launch. Lift from Willow with adjustments?
- **Cookie banner** — Upon has one, Willow doesn't appear to. With PostHog enabled and EU-based users, you need consent. Can wire up after page is built.
- **Email forwarding** for `hello@uponwillow.com` — point at your existing inbox or set up Google Workspace.
- **Limited Liability** — both companies appear in the footer. Worth checking with whoever does your legal that the joint marketing doesn't accidentally imply a partnership/JV that requires its own disclosures.

---