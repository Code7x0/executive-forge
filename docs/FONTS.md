# Font licensing & substitutions

## Verified on Heist (not redistributed)

| Role | Heist family | Source | Reuse status |
|---|---|---|---|
| Display | Feature Display Condensed | Commercial Type; self-hosted on heist.co | **Not licensed** for Executive Forge — do not hotlink or copy woff2 files |
| Body | forma-djr-micro | Adobe Fonts / Typekit kit `jmu4nzm` | **Not licensed** without an Adobe Fonts subscription tied to this domain |
| Labels | forma-djr-mono | Same Typekit kit | Same |
| CTA | Aro | Self-hosted on heist.co | **Unverified license** — treat as proprietary |
| Secondary | Inter | Shopify CDN | Available via Google Fonts, but we avoid it as the primary brand face |

## Substitutes in use (`lib/fonts.ts` via `next/font/google`)

| Role | Substitute | License | Why |
|---|---|---|---|
| Display | **Instrument Serif** | SIL OFL 1.1 | Condensed, high-contrast editorial serif; strong large-size presence similar to Feature Display Condensed |
| Body | **DM Sans** | SIL OFL 1.1 | Clean geometric sans approximating Forma DJR Micro’s UI clarity without Inter |
| Labels | **IBM Plex Mono** | SIL OFL 1.1 | Mono microcopy / nav meta, parallel to Forma DJR Mono |
| CTA | **Archivo Narrow** | SIL OFL 1.1 | Condensed heavy sans for uppercase buttons, parallel to Aro |
| Hero / footer wordmark | **Archivo Black** | SIL OFL 1.1 | Ultra-heavy sans for Heist-scale `EXECUTIVE FORGE` wordmarks |

All substitutes are self-hosted by Next.js font optimization (no runtime Google CSS requests in production).

## Optional upgrade path

If the client licenses Commercial Type Feature + Adobe Forma DJR (+ Aro if available), drop files into `public/fonts/` or `app/fonts/` and switch `lib/fonts.ts` to `next/font/local` while keeping the same CSS variables (`--font-display`, `--font-body`, `--font-label`, `--font-cta`).
