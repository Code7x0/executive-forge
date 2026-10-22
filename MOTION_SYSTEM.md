# MOTION_SYSTEM.md — Executive Forge

Animation ownership for Next.js 16 + React 19. Extends `docs/MOTION.md`.

**Stack (installed):** GSAP 3.15 + `@gsap/react` · Lenis 1.3 · Three.js 0.186  
**Not installed:** `framer-motion` / `motion` — do not add unless a clear interactive need outweighs GSAP. Prefer GSAP for scroll; CSS transitions for micro hover/focus.

---

## Ownership matrix

| System | Owns | Must not own |
|---|---|---|
| **Lenis** (`SmoothScroll`) | Smooth wheel scrolling; ScrollTrigger sync via `lenis.on("scroll")` + `gsap.ticker` | DOM transforms, pin state |
| **GSAP + ScrollTrigger** | Hero crossfade, section reveals (`scroll-reveals`), recognition stagger, founder stack, case-study metric/image reveals, proximity type | Competing smooth-scroll; same transform as CSS hover simultaneously |
| **CSS transitions** | CTA hover lift, nav underline, filter chips, card border/color | Scroll-linked progress |
| **Three.js** | `/dev/particles` lab only | Homepage hero (current hero is CSS/GSAP blue stage) |
| **Native** | `prefers-reduced-motion` → Lenis skipped; reveals forced visible | — |

**Rule:** one owner per animated property. Never GSAP + CSS transition on the same `transform` at once.

---

## Tokens (`lib/motion/tokens.ts`)

| Token | Value | Use |
|---|---|---|
| `ease` | `power3.out` | Entrances |
| `easeSoft` | `power2.out` | Secondary |
| `duration.hero` | 1.05s | Hero layers |
| `duration.enter` | 0.7s | Section reveals |
| `duration.image` | 0.9s | Media |
| `duration.micro` | 0.28s | Small UI |
| `stagger.tight/base/loose` | 0.06 / 0.08 / 0.11 | Lists |
| `scroll.start` | `top 88%` | Reveal trigger |

CSS: `--ease-out`, `--duration-fast` (160ms), `--duration-med` (220ms).

---

## Integration rules

1. **Single scroll authority** — only Lenis when motion allowed; `scroll-behavior: auto` on `html`.
2. **Cleanup** — every `useGSAP` / effect must revert contexts; Lenis `destroy` on unmount; refresh ScrollTrigger on route + filter changes.
3. **Prefer** `transform` + `opacity`; avoid continuous filter/shadow animation.
4. **Pins** — reserved for high-value moments (hero, selective case beats). Never pin every case.
5. **Mobile** — shorten or disable long pins; keep carousel drag; respect touch.
6. **Reduced motion** — no Lenis; force `[data-reveal*]` visible; no autoplay video requirement beyond user control.

---

## Case Studies motion (this upgrade)

- **Stack sequence** (`CaseStudyStack`): Two-phase via stable `useEffect` (not `useGSAP` context — that was orphaning pin-spacers). **Read** — natural flow, content-driven height, no sticky. **Transition** (all viewports) — pin at `start: "bottom bottom"` + `pinSpacing: false` after the full section is scrolled; next panel covers with scrubbed opacity. Uses `pinType: "transform"` with Lenis/touch so mobile and tablet pins stay reliable. Scroll-back clears pin/opacity. Lenis exposed as `window.__lenis` for TOC + ST sync. Reduced-motion: natural flow only.
- Metric strip: stagger reveal via existing `data-reveal-stagger` / GSAP scroll-reveals.
- Evidence images: `data-reveal="image"` (clip/fade already in `scroll-reveals.tsx`).
- TOC jumps call `ScrollTrigger.refresh()` after scroll so pin math stays aligned.
- Filter change remounts stack via `sequenceKey` → triggers rebuilt.

---

## Taste / Emil guidance (project targets)

- DESIGN_VARIANCE 8 · MOTION_INTENSITY 7 · VISUAL_DENSITY 4  
- Prefer ease-out for entrances (Emil); snappy micro interactions; no floaty over-easing.
