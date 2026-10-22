# Executive Forge — Implementation Plan

Phased build. **Stop after each stage** unless the user explicitly continues.

---

## Stage 0 — Foundation (current)

**Goals**

- New standalone project at `/home/kai/executive-forge` (not recruiting-platform)
- Confirm Next.js / React / TypeScript / Tailwind versions
- Verify `dev` and `build`
- Document references, brief, and plan
- Inventory copy + media assets
- Install design skills (UI/UX Pro Max, Impeccable)
- **Do not** build sections or the particle scene
- **Do not** install the full animation stack yet

**Acceptance criteria**

- [x] Application starts successfully
- [x] Production build works
- [x] Heist documented as primary visual direction
- [x] Forma limited to particle interaction in docs
- [x] Stack + reference links documented
- [x] No premature section/particle implementation
- [x] Design skills installed in project (UI/UX Pro Max + Impeccable)

**Deliverables**

- `references.md`
- `PROJECT_BRIEF.md`
- `IMPLEMENTATION_PLAN.md`
- `content/website-copy.md` + source DOCX
- `public/assets/**` media inventory

---

## Stage 1 — Design system & shell

**Goals**

- Heist-aligned tokens: color, type, spacing, motion durations
- Global layout: nav, footer, page frame
- Font loading (expressive display + clean sans; not Inter/Roboto defaults)
- Reduced-motion utilities
- Wire Impeccable `init` / PRODUCT.md if skill is present

**Install (minimal)**

- Fonts only as needed (next/font or self-hosted)
- No GSAP / Three / Lenis yet unless required for shell smoke tests

**Acceptance**

- Empty pages render with Heist-grade chrome
- Mobile + desktop nav works
- Contrast and type scale feel intentional

---

## Stage 2 — Home structure (static)

**Goals**

- Implement Home sections from copy **without** particle WebGL
- Placeholder for hero visual (static image or solid field)
- Founder, logos, recognition, testimonials layout, CTAs
- Proof presentation informed by FZK structure

**Acceptance**

- All Home copy placed
- CTAs link to placeholders (Calendly / routes TBD)
- Layout passes Heist composition review (no card-farm hero)

---

## Stage 3 — Motion baseline

**Install**

- `gsap` (+ ScrollTrigger — included with GSAP)
- `lenis`
- ScrollTrigger ↔ Lenis integration utility

**Goals**

- Smooth scroll
- Section enter/exit choreography
- Respect `prefers-reduced-motion`

**Defer**

- anime.js until a concrete micro-interaction needs it
- React Bits / Skiper kits until a specific component is chosen

**Acceptance**

- Scroll feels premium, not sluggish
- No layout thrash; 60fps on mid hardware for CSS/GSAP layer

---

## Stage 4 — Hero particle scene (Forma-scoped)

**Install**

- `three`
- Optionally `@react-three/fiber` + `@react-three/drei` **only if** they reduce complexity

**Goals**

- Flowing intertwined strand ribbon + hollow loop + floating particles
- Cursor reactivity
- Pause when offscreen; degrade on low power / reduced motion
- Composition sits inside Heist hero layout (not Forma’s full UI)

**Acceptance**

- Matches Forma particle *behavior/look*, not Forma chrome
- Does not block LCP unreasonably; fallback available
- Works with Lenis + ScrollTrigger without fighting the canvas

---

## Stage 5 — Services page

**Goals**

- Two offers (DWY / DFY), strategy call, 7-step process, principles
- Shared nav/footer; Heist rhythm

**Acceptance**

- Clear offer differentiation
- Process scannable; CTAs obvious

---

## Stage 6 — Case studies

**Goals**

- Filterable case list from copy + `public/assets/Testimonial`
- Detail presentation for key stories (Pooja, Remy, Dr Arif, Hussain, etc.)
- Media hygiene (compressed images, lazy video)

**Acceptance**

- Filters work
- Metrics readable
- Closing CTA present

---

## Stage 7 — Polish & ship

**Goals**

- SEO metadata, OG images, favicon
- Performance pass (bundle, images, particle budget)
- Accessibility pass (focus, reduced motion, alt text)
- Selective Skiper / React Bits / anime.js only where justified
- Deploy (Vercel or preferred host)

**Acceptance**

- Lighthouse / manual QA checklist green for brand site bar
- Production build clean
- Content owners can update CTAs/links easily

---

## Dependency recommendation (smallest necessary)

### Keep now (Stage 0)

| Package | Why |
|---|---|
| `next` | App framework |
| `react` / `react-dom` | UI |
| `typescript` | Types |
| `tailwindcss` (+ `@tailwindcss/turbopack`) | Styling |
| `eslint` / `eslint-config-next` | Lint |

### Install next (Stage 3–4), not earlier

| Package | Why |
|---|---|
| `gsap` | Primary motion + ScrollTrigger |
| `lenis` | Smooth scroll |
| `three` | Hero particles |

### Optional / later

| Package | When |
|---|---|
| `@react-three/fiber`, `@react-three/drei` | If bare Three.js integration cost is high |
| `anime` (anime.js) | Only for isolated micro-UI GSAP shouldn’t own |
| React Bits / Skiper packages | Per-component, after Heist shell exists |
| `clsx` / `tailwind-merge` | When class composition becomes noisy |

### Avoid by default

- Framer Motion alongside GSAP for the same surfaces
- Multiple smooth-scroll libraries
- Heavy UI kits that force card/SaaS aesthetics

---

## Suggested page map

```
/                 Home
/services         Services
/case-studies     Case Studies
```

Booking links: external (intro call / strategy call) — finalize URLs in Stage 2.

---

## Stop rule

After Stage 0 reporting, **do not auto-advance**. Wait for explicit go-ahead for Stage 1.
