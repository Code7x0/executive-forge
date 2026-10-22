# Executive Forge

Premium personal-branding website for **Suhana Siddika** / Executive Forge.

Standalone Next.js app. Design direction: **Heist** (site-wide) + **Forma** particle hero only.

## Stack (Stage 0)

- Next.js 16 (App Router) + React 19 + TypeScript 5
- Tailwind CSS 4
- Planned later: GSAP, ScrollTrigger, Lenis, Three.js

## Docs

| File | Purpose |
|---|---|
| [PROJECT_BRIEF.md](./PROJECT_BRIEF.md) | Creative + technical vision |
| [references.md](./references.md) | Design & tech references |
| [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) | Phased plan + acceptance |
| [content/website-copy.md](./content/website-copy.md) | Site copy extract |
| [content/ASSETS.md](./content/ASSETS.md) | Media inventory |

## Scripts

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
pnpm lint
```

## Design system

- Tokens & type: `app/globals.css`, `lib/fonts.ts`, `docs/FONTS.md`
- Shell: `components/layout/*`
- Primitives: `components/ui/*`
- Living style guide: `/style-guide`

Heist fonts are proprietary — OFL substitutes documented in `docs/FONTS.md`.

## Particle sculpture lab

Isolated Three.js particle ribbon (Forma-inspired silhouette only):

- Component: `components/particles/ParticleSculpture.tsx`
- Engine: `components/particles/engine/*`
- Demo: **`/dev/particles`** (not integrated into the marketing hero yet)

```bash
pnpm dev
# open http://localhost:3000/dev/particles
```

## Stage note

Design system + style guide are in place. Marketing page content, particle hero, and GSAP motion are not built yet.
