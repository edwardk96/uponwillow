# Setup

## 1. Drop these files into your scaffold

You already ran `create-next-app` and have a working `~/repos/uponwillow`. Drop everything from this delivery on top of that scaffold, **overwriting** existing files where they collide. Specifically:

- `src/app/page.tsx` — overwrite (the boilerplate one)
- `src/app/layout.tsx` — overwrite
- `src/app/globals.css` — overwrite
- `next.config.ts` — overwrite
- Everything else is new

## 2. Sense-check the install

```bash
npm run dev
```

Open `http://localhost:3000`. You should see the page rendered with placeholder env values causing the form to error if you click it (that's fine — we'll fix it next).

If TypeScript or build errors appear, send me the output and I'll fix.

## 3. Set up the services

You need three accounts. None take more than 10 minutes each.

### Resend (email)

1. Sign up at resend.com
2. Add domain `uponwillow.com` and follow the DNS verification (you'll need to set TXT/MX records at Cloudflare or wherever the domain lives)
3. Create an API key
4. Copy the key into `.env.local` as `RESEND_API_KEY`

Until the domain is verified, you can use Resend's `onboarding@resend.dev` as `RESEND_FROM_EMAIL` for testing. Don't ship to advisers from that address.

### PostHog (analytics)

1. Sign up at eu.posthog.com (EU instance — same as Willow)
2. Create a new project: "Upon × Willow"
3. Copy the project API key into `.env.local` as `NEXT_PUBLIC_POSTHOG_KEY`
4. Leave `NEXT_PUBLIC_POSTHOG_HOST=/ingest` — it points at the reverse proxy already configured in `next.config.ts`

### Cal.com (booking)

1. Sign up at cal.com
2. Create an event type: "Upon × Willow discovery", 20 min, your availability
3. Copy the public URL (something like `https://cal.com/edward-x/upon-willow-discovery`)
4. Update `siteMeta.calcomUrl` in `src/content/meta.ts`

## 4. Create `.env.local`

```bash
cp .env.example .env.local
# Then fill in the real values
```

Quick sanity check:

```bash
npm run build
```

A successful build with no TypeScript errors means you're ready to deploy.

## 5. Push to GitHub

```bash
git add .
git commit -m "Add adviser landing page"
git remote add origin git@github.com:<your-username>/uponwillow.git
git push -u origin main
```

(If the remote is already set, skip the `remote add` step.)

## 6. Deploy on Vercel

1. vercel.com → Add New → Project → Import `uponwillow`
2. Framework: Next.js (auto-detected)
3. Add environment variables — same five as in `.env.local`
4. Deploy

You'll get a `*.vercel.app` URL within a minute. Open it. Click around. Make sure the form sends an email and PostHog records the visit.

## 7. Connect the custom domain

1. Buy `uponwillow.com` if you haven't — Cloudflare Registrar is cheapest
2. Vercel → Project → Settings → Domains → add `uponwillow.com` and `www.uponwillow.com`
3. Vercel shows the DNS records to set; set them at your registrar
4. Wait for DNS propagation (usually minutes); HTTPS is auto-provisioned

## 8. Branch protection (recommended)

GitHub → repo → Settings → Branches → Branch protection rules → Add rule for `main`: require pull request before merging. Forces feature-branch workflow even when working solo.

## What's not done yet (deliberately)

- The actual one-pager PDF — the email currently sends a text body. Build the PDF, upload it somewhere stable (Vercel Blob, S3, or just commit it to `/public`), and replace the email text with an `attachments` array in `lib/actions/request-one-pager.ts`.
- `/legal/privacy` and `/legal/terms` pages — required before public launch. Lift Willow's with adjustments for joint marketing.
- Cookie consent banner — required before PostHog runs in EU. The PostHog provider currently runs unconditionally; gate it behind a consent state once the banner is in.
- OG image — `app/opengraph-image.tsx` not yet created.

## Things I'd push back on if I were reviewing this

The architecture is right for v1 but a couple of things will need to evolve:

- **Dedupe is in-memory.** Fine at zero traffic. The moment a Vercel cold start clears the set, an adviser could submit again and trigger a duplicate send. Once you have any volume, back this with a Supabase table or a Vercel KV.
- **The form has no honeypot or rate limit.** A bot will eventually find this endpoint and start sending spam emails on your Resend bill. Add a honeypot field (`<input name="website" hidden />` that real users won't fill) before pushing to a public domain.
- **Stats are placeholders.** Replace the ~70%, ~60, 9–14m numbers with sourced figures before you start outbound. Adviser firms will fact-check.
