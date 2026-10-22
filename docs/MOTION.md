# Motion ownership — Executive Forge

| System | Owns | Does not own |
|---|---|---|
| **Lenis** | Page smooth scrolling (`SmoothScroll`) | DOM tweens |
| **GSAP + ScrollTrigger** | Hero layer crossfade, section reveals, proximity type | — |
| **Three.js** | `/dev/particles` lab only | Homepage hero |

## Homepage hero

One sticky **electric-blue** stage (same card throughout):

1. Layer A — oversized `EXECUTIVE FORGE` wordmark
2. Layer B — headline, lede, CTAs

Scroll progress (Lenis-safe geometry + rAF) fades A out / B in. No second background card.
