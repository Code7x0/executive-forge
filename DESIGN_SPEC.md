# DESIGN_SPEC.md

Visual specification derived from the primary reference:

**https://www.heist.co/?ref=land-book.com**

Inspected in-browser (Cursor browser + Chrome DevTools Protocol) on **2026-10-21**.  
Executive Forge must follow this site’s **observable visual direction** (typography contrast, spacing rhythm, imagery confidence, CTA sharpness) while telling Suhana’s story — not copy Heist’s coffee commerce content.

Forma remains **particle-only** (see `PROJECT_BRIEF.md` / `references.md`).

---

## 0. Reference identity (verified)

| Observation | Status |
|---|---|
| Live title: “Specialty Decaf and 1/4 Caf Coffee without a Curfew – Heist” | **Verified** |
| Platform signals: Shopify sections, product cart, Typekit kit | **Verified** |
| Land-book lists this same Heist URL under ecommerce inspiration | **Verified** (search) |
| This is **not** a design-agency portfolio site at time of inspection | **Verified** |

**Implication for Executive Forge:** Treat Heist as a **premium editorial / brand-commerce craft** reference (type scale, contrast, section pacing, photography, decisive CTAs)—not as a structural template of coffee SKUs. Do not invent a different “agency Heist” URL.

---

## 1. Typography & font-loading

### Verified font families (computed / `@font-face` / Typekit)

| Role on Heist | Family (as loaded) | Loading notes |
|---|---|---|
| Display / H1–H2 | **Feature Display Condensed** | Self-hosted woff2 under `/cdn/shop/files/…`; `font-display: swap` |
| Body UI | **forma-djr-micro** | Adobe Typekit kit `https://use.typekit.net/jmu4nzm.css` |
| Mono labels / microcopy | **forma-djr-mono** | Same Typekit kit |
| Condensed CTA / product names | **Aro** (narrow) | Self-hosted woff2; fallback `"Arial Narrow", system-ui, sans-serif` |
| Secondary / widgets | **Inter** | Shopify CDN woff2; used in some secondary contexts (`--font-h4--family: Inter`) |

**Do not invent other family names.** If Executive Forge cannot license Feature Display Condensed / Forma DJR / Aro, choose **audited substitutes** later and document the swap — do not claim Heist uses an unverified font.

### Verified scale samples

| Element | Viewport | `font-family` | `font-size` | `font-weight` | `letter-spacing` | `line-height` | Color |
|---|---|---|---|---|---|---|---|
| H1 “Coffee Without a Curfew.” | ~2227×1253 | Feature Display Condensed | **164px** | 400 | **-3.28px** | ~170.56px | `rgb(221, 214, 199)` on dark photo |
| H1 (mobile emulation 390×844) | 390×844 | Feature Display Condensed | **80px** | 400 | **-1.6px** | ~76.8px | cream; `max-width: 752px` |
| H2 sample | desktop | Feature Display Condensed | **72px** | 400 | **-1.44px** | ~74.88px | `rgb(22, 20, 20)` on light |
| Hero supporting paragraph | desktop | Feature Display Condensed | **32px** | 400 | **-0.64px** | ~35.84px | cream |
| Body default | — | forma-djr-micro | **16px** | 400 | normal | ~20.48px (tight on body root) | `rgb(22, 20, 20)` |
| Nav links | desktop | forma-djr-mono | **16px** | 400 | normal | ~20.48px | cream on hero |
| Micro labels (uppercase) | mobile sample | forma-djr-mono | **12–14px** | 500 | normal | ~1.1–1.4 | cream or near-black |
| Primary CTA “SHOP NOW” | desktop | Aro | **20px** | **800** | normal | 20px | near-black on `#ff3b27` |

CSS tokens observed:

- `--font-body: "forma-djr-micro", system-ui, -apple-system, sans-serif`
- `--font-heading--spacing: 0.25em` (token present; H1 used negative tracking instead)
- `--font-paragraph--line-height: 1.6`
- `--line-height--heading-loose: 1.35`

### Estimates (not measured as hard rules)

- Display type is intentionally **tight, condensed, oversized** — often filling a large fraction of the first viewport.
- Body reading measure appears **narrower than full bleed**; hero paragraph sample ~320px wide on a large desktop canvas (layout-dependent).

---

## 2. Layout grid & content widths

### Verified

- Full-bleed hero photography (`object-fit: cover` on large background imagery).
- Section wrappers often span full viewport width (~2227px in the inspection window).
- Vertical section padding samples (computed):
  - Product showcase ≈ `90px 0 97px`
  - Viewport video ≈ `96px 0`
  - Coffee/story blocks ≈ `120px 0 104–106px`
  - Quality showcase bottom pad ≈ `105px`
- CSS tokens: `--section-height-medium: 65svh`; spacing scale includes `--space-36` (2.25rem) through `--space-146` (9.125rem).
- Drawer width token: `--theme-drawer-width: 37.5rem`.

### Estimates

- Composition alternates **full-bleed media** with **editorial text blocks** rather than a dense 12-column SaaS card grid.
- Large desktop inspection window; design is comfortable at ultra-wide — content still clusters into readable groups, not edge-to-edge paragraphs.

### Executive Forge application

- Prefer **one composition per viewport** (aligned with PROJECT_BRIEF anti-patterns).
- Use generous section padding (~80–120px desktop) before introducing card UI.
- Case/proof grids may exist later, but hero/founder should remain open and photographic/particle-led.

---

## 3. Color & contrast

### Verified palette samples

| Token / sample | Value | Usage |
|---|---|---|
| Page / light field | `rgb(221, 214, 199)` ≈ `#DDD6C7` | Body background; cream text on dark hero |
| Near-black ink | `rgb(22, 20, 20)` ≈ `#161414` | Body text; also `--card-border`, `--input-border` |
| Accent red | `--red: #ff3b27` | Primary CTA fill |
| Promo / modal field | Near-black + cream type + red CTAs | Overlay screenshot |

Contrast pattern: **cream ↔ near-black** with a **single hot accent** for action. Not purple-gradient SaaS.

### Estimates

- Warm, slightly “paper” neutrals rather than pure `#FFF` / `#000`.
- Photography carries secondary browns/ambers; UI stays restrained.

### Executive Forge note

- Do **not** import Heist’s coffee-red as brand identity without a client color decision — borrow the **contrast logic** (warm neutral + deep ink + one decisive accent). Accent may become Executive Forge’s own brand color once defined.

---

## 4. Image composition & cropping

### Verified

- Hero uses large photographic stills; at least one homepage BG asset requested at width=2400.
- Product/lifestyle imagery often **edge-to-edge**, `object-fit: cover`, **0px border-radius** on sampled images.
- Logo SVGs served from Shopify CDN; sharp vector wordmark.
- Modal promo used **split composition**: macro photo | solid dark panel + stacked CTAs (observed via screenshot).

### Estimates

- Cropping favors **tactile close-ups** and confident human/product presence.
- Little reliance on floating rounded media cards in the hero.

### Executive Forge application

- Founder/recognition photos: prefer full-bleed or large asymmetric crops; avoid tiny circular avatars as the primary treatment.
- Proof screenshots: keep sharp; consider subtle framing only if needed for UI chrome — not default “card stack.”

---

## 5. Buttons, links, hover, motion

### Verified

| Control | Properties |
|---|---|
| Primary CTA | Background `#ff3b27`; text near-black; **uppercase**; Aro weight 800; padding ~`9.6px 20.8px` desktop; **border-radius 2px** on the sampled SHOP NOW (token `--style-border-radius-buttons-primary: 14px` also exists — **multiple radii in system**) |
| Transition | `filter 0.16s, transform 0.16s` on CTA |
| Hover tokens | `--hover-scale-amount: 1.03`; `--hover-subtle-zoom-amount: 1.015` |
| Motion curves | `--animation-timing-fade-out: cubic-bezier(0.4, 0, 0.2, 1)`; `--surface-transition-timing: cubic-bezier(0.32, 0.72, 0, 1)` |
| Fast/slow | `--animation-values-fast: 0.0625s ease-in-out`; `--animation-values-slow: 0.2s ease-in-out` |

Nav links: muted cream, mono, no heavy underlines observed on the sampled nav text.

### Estimates

- Interactions feel **snappy and slight** (1–3% scale), not bouncy.
- Uppercase CTAs + condensed display create a “poster” voice.

### Executive Forge application

- Prefer short, decisive CTA labels (already in copy: “Book an intro call →”).
- Arrow suffixes can stay; avoid pill-heavy clusters in the hero.

---

## 6. Responsive behavior

### Verified (device metrics override 390×844)

- H1 drops from **164px → 80px**.
- Hero copy remains cream on dark; stacked vertically.
- CTA font-size sample ~14.4px on small viewport.
- Section structure remains long-scroll; no separate “mobile site.”

### Estimates

- Type scales fluidly; display stays dominant on small screens.
- Horizontal nav likely collapses (mobile navigation region present in a11y tree).

---

## 7. What to take / what not to take

| Take from Heist | Leave behind |
|---|---|
| Oversized condensed display type | Coffee product catalog IA |
| Warm cream ↔ near-black contrast | Mandatory `#ff3b27` if brand differs |
| Full-bleed photography / media confidence | Shopify cart patterns |
| Snappy, slight hover scale | Dense feature-card grids |
| Long, paced sections with breathing room | Promo modal clutter |
| Mono micro-labels for meta info | Unrelated brewing-guide sections |

| From Forma (separate) | Constraint |
|---|---|
| Liquid particle ribbon | Hero interaction only |

---

## 8. Open questions (flagged — do not guess)

1. **Brand accent color** for Executive Forge (Heist red is reference behavior, not necessarily EF identity).  
2. **Licensable font stack** equivalent to Feature Display Condensed + Forma DJR + Aro.  
3. Whether client wants light warm field (Heist body `#DDD6C7`) or a darker luxury shell for the particle hero (Forma-like) with Heist type/spacing on surrounding pages — **both are compatible** if contrast rules stay consistent.  
4. Final confirmation that land-book’s Heist (coffee) is the intended craft reference (URL matches; category is ecommerce).

---

## 9. Inspection artifacts

- Live DOM/CSS extraction via CDP (`getComputedStyle`, `@font-face`, CSS variables).  
- Screenshot of promo overlay + hero photography (session capture).  
- Mobile metrics via `Emulation.setDeviceMetricsOverride` (cleared after inspection).

No page components were implemented in this stage.
