# DESIGN.md — Executive Forge

Established visual identity for production work. Reconciles `DESIGN_SPEC.md` (Heist reference inspection) with the **implemented** token system in `app/globals.css`.

**Mode:** Persuade (marketing / personal brand agency)  
**Variance target:** 8/10 · **Motion:** 7/10 · **Density:** 4/10  
**Primary reference:** [heist.co](https://www.heist.co/?ref=land-book.com) — craft, not a clone.  
**Particle inspiration only:** Forma liquid particle studio (hero interaction concept).

---

## Brand characteristics (non-negotiable)

| Trait | Implementation |
|---|---|
| Electric → navy → near-black | `--hero-electric`, `--hero-navy`, ink surfaces, Client Stories gradient |
| Warm cream fields + type | `--ef-cream` `#ddd6c7`, `--hero-ivory` `#eeeade` |
| Vermilion accent | `--ef-accent` `#ff3b27` |
| Oversized display | Clamp display / hero-heist-mark / type-h2 |
| Serif editorial + mono labels | Instrument / display family + mono labels |
| Sharp borders, minimal radius | `--radius-cta: 2px`, `--radius-none` |
| Paper grain / freckle | Body + `.surface-cream` paper tile; soft-light `.film-grain` overlay |
| Cinematic scroll | Lenis + GSAP ScrollTrigger ownership (see `MOTION_SYSTEM.md`) |

**Banned looks:** purple SaaS gradients, glassmorphism stacks, repetitive rounded cards, dashboard chrome, invented claims/assets.

---

## Color tokens (shipped)

```
--ef-cream: #ddd6c7
--ef-ink: #161414
--ef-ink-soft: #2a2626
--ef-accent: #ff3b27
--ef-muted: #a9a39a
--hero-navy: #101a3a
--hero-electric: #4489e8
--hero-ivory: #eeeade
```

Contrast pattern: cream ↔ ink with one hot accent. Dark sections use cream type on ink/navy.

---

## Typography (shipped)

| Role | Token / class | Notes |
|---|---|---|
| Display | `--text-display`, `.type-display`, `.hero-heist-mark` | Oversized, tight tracking |
| Section H2 | `--text-h2`, `.type-h2` | Editorial serif |
| Lede | `--text-lede`, `.type-lede` | Outcomes / pull quotes |
| Body | `--text-body`, `.type-body` | Comfortable measure |
| Labels | `--text-label`, `.type-label` | Uppercase mono |
| CTA | `--text-cta`, Archivo Narrow substitute | Nearly sharp chips |

Fluid clamps live in `:root`. Do not introduce Inter/Roboto as brand faces.

---

## Layout

- `--container-max: 72rem` with `--gutter: clamp(1.25rem, 4vw, 2.5rem)`
- `--section-y: clamp(5rem, 10vw, 7.5rem)`
- One job per section; generous negative space
- Case studies: full-bleed alternating cream/ink bands, varied compositions (`split` / `stack` / `rail` / `type-led`)

---

## Components to preserve

- Red brand chip (nav wordmark, Recognition eyebrow)
- Sharp bordered CTAs
- Founder photo stack (land-on-top)
- Client Stories dark field + cream quote cards
- Film grain (soft paper, not harsh TV static)

---

## Content integrity

Source of truth: `content/website-copy.md` + `CONTENT_MAP.md` + `ASSET_AUDIT_REPORT.md`.  
Never invent metrics, testimonials, logos, or booking URLs.
