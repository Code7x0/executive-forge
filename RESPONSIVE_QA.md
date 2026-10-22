# RESPONSIVE_QA.md — Executive Forge

Supported breakpoints and QA log. Update after each visual pass.

## Viewports

| Width | Class | Priority |
|---|---|---|
| 320 | Small mobile | Required |
| 360 | Mobile | Required |
| 390 | Mobile (iPhone-class) | Required |
| 430 | Large mobile | Required |
| 768 | Tablet | Required |
| 1024 | Laptop / landscape tablet | Required |
| 1280 | Desktop | Required |
| 1440 | Desktop | Required |
| 1920 | Wide | Spot-check |

## Mobile rules (release)

- [x] No horizontal page overflow (spot-checked 390 case-studies)
- [x] Headings do not clip; fluid type holds
- [x] CTAs tappable (`Book a call` top bar + footer)
- [x] Sticky header does not cover section titles (`scroll-mt` on cases)
- [x] Case TOC stacks on narrow screens
- [x] Mobile nav: Menu control present when desktop nav collapses
- [x] Reduced-motion: Lenis off; reveals static (architecture in `MOTION_SYSTEM.md`)
- [x] WebGL lab (`/dev/particles`) isolated from marketing routes
- [ ] Client Stories carousel: drag + arrows — prior home sessions OK; re-verify if home motion changes
- [ ] Videos: controls reachable — prior home sessions OK

## QA log

| Date | Viewport | Route | Result | Notes |
|---|---|---|---|---|
| 2026-10-22 | 1440 | `/case-studies` | Pass | Read-then-pin: full Pooja (nav in view) before Remy; pin at `bottom bottom`; fade+overlap; scroll-back unpins |
| 2026-10-22 | 390 | `/case-studies` | Pass | No pin below 768; natural document flow; full content reachable |
| 2026-10-22 | a11y snapshot | `/case-studies` | Pass | All 9 clients; TOC jumps; metric punch source order |
| 2026-10-22 | 768–1440 | `/` | Prior OK | Hero + grain + collab logos + founder stack |
| 2026-10-22 | — | `/services` | Light refine | Offers unchanged; editorial spacing pass |

## Screenshots (this pass)

- `/tmp/cursor/screenshots/qa-case-studies-1440-hero.png`
- `/tmp/cursor/screenshots/qa-case-studies-390-hero.png`

## Known constraints

- Hero scroll track is tall on desktop; shortened under reduced-motion.
- Founder stack sticky height differs at `lg`.
- Case Studies filter remounts blocks → ScrollTrigger refresh required (implemented).
- Mathew: source states both 28-day and 60-day windows — both kept; strip leads with $16K to match title.
- Bhumika WhatsApp evidence excluded pending clearance (copy-only outcomes).
- Newsletter submit not wired (`Newsletter service not connected yet`).
