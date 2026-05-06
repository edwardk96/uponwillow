# Logos

Two SVG logo files need to live in this directory. The Nav component expects them at exactly these paths:

- `public/upon-logo.svg`
- `public/willow-logo.svg`

## Format

**SVG strongly preferred.** Vector scales cleanly across desktop, mobile, and retina displays without bloat. The Nav uses plain `<img>` tags, so any image format will work — but PNG would need to be high resolution (288×96px minimum for a 24px display height to look sharp on retina).

If you swap formats, also update the file extension in `src/components/sections/nav.tsx`.

## Dimensions

The Nav renders both logos at a **fixed display height of 24px** (`h-6`). Width is preserved automatically by `w-auto`, so the SVG's intrinsic aspect ratio is respected.

What this means in practice: any aspect ratio is fine. A 200×60 SVG, a 90×30 SVG, an 800×200 SVG — all will render at 24px tall with proportional width.

## Colour

Both logos sit on a white nav background (`#FFFFFF`). The logos themselves should be:

- **Single-colour, dark** — ideally the near-black used elsewhere on the page (`#1A1A1A`), or each brand's own primary mark
- **Transparent background** (no white box around the logo)

Multi-colour logos that work on white are also fine.

## Sourcing them

Fastest path: open uponvault.com and withwillow.co.uk, inspect the existing nav logos, save the SVGs from the network tab. If they're inline SVG components in your codebase rather than standalone files, export from your design tool — Figma's "Copy as SVG" handles this in one click.

Drop both files into this directory, run `npm run dev`, and they should appear in the nav.
