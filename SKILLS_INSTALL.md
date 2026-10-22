# Design skills installation — Executive Forge

Recorded 2026-10-22 during the design-engineering upgrade.

## Already present (project `.cursor/skills/`)

| Skill | Path |
|---|---|
| UI/UX Pro Max | `.cursor/skills/ui-ux-pro-max` |
| Impeccable | `.cursor/skills/impeccable` |
| Brand / Design / Design-system / UI-styling / etc. | `.cursor/skills/*` |

## Newly installed (official CLIs)

| Family | Install command | Location |
|---|---|---|
| Taste Skill (`design-taste-frontend`) | `npx skills add Leonxlnx/taste-skill --skill design-taste-frontend` | `.agents/skills/design-taste-frontend` + symlink in `.cursor/skills/` |
| Emil Kowalski skills | `npx skills@latest add emilkowalski/skills` | `.agents/skills/{emil-design-eng,animate,…}` + key symlinks in `.cursor/skills/` |

## Discovery

Cursor Agent Skills reads project skills from `.cursor/skills/`. Symlinks were added for Taste + Emil core skills so they appear alongside Impeccable / UI-UX Pro Max.

**If a skill does not appear in the agent skill list, restart Cursor** or re-open the project so Agent Skills refreshes.

## Guidance applied to this project

- Preserve Heist-inspired EF identity (`DESIGN.md`).
- Taste targets: variance 8 / motion 7 / density 4.
- No `framer-motion` added — GSAP + Lenis remain scroll authority (`MOTION_SYSTEM.md`).
