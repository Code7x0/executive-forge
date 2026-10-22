# Executive Forge — Project Brief

**Client / brand:** Suhana Siddika · Executive Forge  
**Product:** Premium personal-branding website (from scratch)  
**Workspace:** `/home/kai/executive-forge` (standalone — not the recruiting platform)

---

## Vision

A high-end personal brand site that feels like a confident studio, not a SaaS landing page. The site should make visitors feel Suhana’s taste, authority, and results before they read a single feature bullet.

**Primary job of the site:** Convert founders, executives, and experts into intro calls and strategy calls through clarity, proof, and atmosphere.

---

## Creative direction

### Primary visual system — Heist

Retain Heist’s visual direction throughout:

- Typography hierarchy and contrast (expressive display + restrained body)
- Composition and negative space
- Imagery treatment and visual rhythm
- Polished, intentional interactions — never noisy

**Anti-patterns (explicitly forbidden as defaults):**

- Generic agency template
- Conventional SaaS landing layout
- Purple/indigo gradient hero tropes
- Dense rounded-card grids as the main UI language
- Stat-strip / badge / pill clutter in the first viewport

### Hero signature — Forma particle (scoped)

The hero’s centerpiece is inspired by Forma’s liquid particle ribbon:

- Flowing, intertwined strands
- Hollow loop / organic infinity feel
- Floating particles of varying size
- Soft cinematic lighting on dark field
- Cursor-reactive movement

**Hard scope rule:** Forma informs **only** the particle interaction. Navigation, type, page structure, and site-wide materials follow Heist.

### Secondary structure — FZK Media

Use FZK for conversion sequencing: proof density, case-study framing, and CTA placement — without copying its visual skin wholesale.

### Optional interaction source — Skiper UI

Borrow individual interaction patterns only when they elevate Heist. Never let Skiper redefine the brand look.

---

## Brand & messaging (from source copy)

**Positioning:** Personal branding strategist helping founders, executives, and experts turn expertise into a LinkedIn presence that wins attention and business opportunities.

**Hero (Home):**

- Headline: *You've built the expertise. Let's make sure the right people actually see it!*
- Subhead: I help founders, executives and experts turn what they know into a LinkedIn presence that gets them noticed by the right people and creates real business opportunities.
- CTAs: Read case studies → · Book an intro call →

**Pages (3):**

1. **Home** — Hero, founder story, featured/collaborated logos, recognition, client love (video + written wall), strategy-call CTA  
2. **Services** — Done-With-You / Done-For-You offers, strategy call, 7-step process, engagement principles  
3. **Case Studies** — Filtered proof stories with real metrics; closing CTA

Full copy: `content/website-copy.md`  
Source DOCX: `content/source/`

---

## Technology

| Layer | Choice | Stage 0 status |
|---|---|---|
| Framework | Next.js App Router | Installed |
| Language | TypeScript | Installed |
| Styling | Tailwind CSS v4 | Installed |
| Motion | GSAP + ScrollTrigger | Planned (not yet installed) |
| Smooth scroll | Lenis | Planned |
| Hero WebGL | Three.js (± React Three Fiber if beneficial) | Planned |
| Micro-motion | anime.js | Planned later — only if GSAP leaves a clear gap |
| UI bits | React Bits / Skiper selectively | Optional, selective |
| Design agent skills | UI/UX Pro Max, Impeccable | To be installed in project |

**Principle:** One primary animation stack (GSAP). Do not ship Framer Motion + GSAP + anime.js + random component kits overlapping the same responsibilities.

---

## Accessibility & performance

- Honor `prefers-reduced-motion`: simplify or freeze the particle hero; mute scroll choreography.
- Keep the particle scene performant (DPI/resolution scaling, pause when offscreen).
- Prefer Next.js Image for photography; lazy-load heavy case-study media.
- Large video testimonials should not block first paint.

---

## Success criteria (product)

- Looks and feels Heist-grade, not template-grade.
- Hero particle is memorable and clearly Forma-inspired without becoming the whole brand.
- Proof (logos, recognition, testimonials, case metrics) is easy to scan and trust.
- Primary CTAs (intro call / strategy call / case studies) are always one clear action away.
- Site builds and ships as a clean Next.js app with documented phases.

---

## Out of scope for Stage 0

- Building page sections
- Implementing the particle scene
- Installing the full animation dependency set
- Visual redesign experiments away from Heist
