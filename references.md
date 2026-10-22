# Executive Forge — Design & Technical References

Living index of visual references, content sources, and official docs for this build.

---

## Design references

| Reference | URL | Role |
|---|---|---|
| **Heist** (primary) | https://www.heist.co/?ref=land-book.com | **Primary visual direction** for the entire site: typography, composition, spacing, contrast, imagery, visual rhythm, and polished interactions. Do not drift toward generic agency / SaaS / card-grid templates. Detailed observations: `DESIGN_SPEC.md`. Note: live site is Heist Coffee (Shopify ecommerce); use its craft, not its product IA. |
| **Forma liquid particle** (hero only) | https://forma-liquid-particle-studio-template-v1.21st.app/ | **Particle interaction only.** Flowing intertwined particle ribbon, fine strands, hollow loop, floating particles, cursor-reactive motion. Not a site-wide style guide. |
| **FZK Media** (secondary) | https://fzkmedia.com/ | Conversion structure and proof presentation (case studies, social proof, CTA sequencing). |
| **Skiper UI** (optional) | https://www.skiper-ui.com/ | Selective interactive component inspiration. Use sparingly; do not reshape the Heist direction. |

### Local visual capture

- Forma-style hero mood board (chat attachment): retained for particle look target (champagne strands / dark field / hollow loop). Site chrome still follows Heist, not Forma’s full UI.

---

## Content & asset sources (local)

| Source | Path / origin | Role |
|---|---|---|
| Website copy (3 pages) | `content/source/ExecutiveForge Website Copy (3 pages) (1).docx` | Canonical copy for Home, Services, Case Studies. |
| Extracted copy | `content/website-copy.md` | Implementation-friendly markdown extract of the DOCX. |
| Founder imagery | `public/assets/Founder/` | Suhana / founder portraits. |
| Collaboration logos | `public/assets/Collaborated with/` | Khaleej Times, Emirates NBD, etc. |
| Recognition media | `public/assets/Recognized/` | Awards / features / speaking. |
| Testimonials & case proof | `public/assets/Testimonial/` | Client quotes, result decks, video testimonials, metrics screenshots. |

---

## Official technical resources

| Resource | URL | Role |
|---|---|---|
| Next.js | https://nextjs.org/docs | App Router, routing, images, fonts, deployment. |
| TypeScript | https://www.typescriptlang.org/docs/ | Types, strictness, tooling. |
| Tailwind CSS | https://tailwindcss.com/docs | Layout, typography utilities, design tokens via CSS. |
| GSAP | https://gsap.com/docs/v3/ | Primary motion engine for scroll/timeline choreography. |
| GSAP ScrollTrigger | https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | Scroll-linked section reveals and pin sequences. |
| Lenis | https://github.com/darkroomengineering/lenis | Smooth scrolling; integrate with ScrollTrigger carefully. |
| Three.js | https://threejs.org/docs/ | Hero particle / strand WebGL scene. |
| React Three Fiber (optional) | https://docs.pmnd.rs/react-three-fiber | Only if R3F clearly simplifies the hero vs bare Three.js. |
| WebGL API | https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API | Low-level reference for shaders / buffers if needed. |
| Reduced motion | https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion | Accessibility: static or simplified hero + muted scroll motion. |

### Planned secondary libraries (not installed in Stage 0)

| Library | Role | Notes |
|---|---|---|
| anime.js | Micro-interactions / UI accents | Defer until GSAP coverage gaps are clear; avoid double-stacking the same motion. |
| React Bits / Skiper-style bits | Optional UI flourishes | Selective; must not override Heist composition. |

---

## Agent design skills (project-local)

| Skill | Install | Role |
|---|---|---|
| UI/UX Pro Max | `.cursor/skills/ui-ux-pro-max/` | Installed. Style / palette / typography / UX search aids during UI work. |
| Impeccable | `.cursor/skills/impeccable/` (+ related design skills from installer) | Installed. Design vocabulary, `/impeccable init`, anti–AI-slop checks. |
| Apple design (optional) | Project skill if added later | Gesture / spring / material nuance — use only where it serves Heist polish, not a new aesthetic. |

---

## Fonts in implementation

See `docs/FONTS.md` and `lib/fonts.ts`. Heist’s Feature Display Condensed / Forma DJR / Aro are not redistributed; OFL substitutes (Instrument Serif, DM Sans, IBM Plex Mono, Archivo Narrow) are loaded via `next/font/google`.

## Stack authority (Stage 0)

- **Framework:** Next.js App Router + React + TypeScript + Tailwind CSS  
- **Motion (planned):** GSAP + ScrollTrigger + Lenis  
- **Hero WebGL (planned):** Three.js (± R3F if beneficial)  
- **Do not install overlapping animation stacks in Stage 0.** Prefer one primary motion system (GSAP) before adding anime.js or component libraries.
