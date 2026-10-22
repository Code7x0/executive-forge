# ASSET_AUDIT_REPORT.md

**Date:** 2026-10-22  
**Scope:** Full reconciliation of supplied archives vs implemented Next.js site (Home, Services, Case Studies).  
**Design constraint:** Heist-inspired UI preserved; no redesign. Evidence accuracy prioritized over speculation.

**Method:** Recursive inventory of `public/assets/` (98 canonical files + 89 `_organized/` mirrors); path cross-check against `content/*`, `app/globals.css`, and rendering components; visual inspection of founder, recognition, collaboration, and contested portrait files; `ffprobe` on Sabrina video; content compared to `content/website-copy.md`.

---

## 1. Executive summary

The site’s content model is largely complete and path-correct. All **eight** written testimonials and **nine** case studies are represented in content and wired to pages. Collaboration logos for all **four** copy brands are now on disk and rendered. The main remaining gap is **Pooja Lakhani’s video testimonial** (still missing). Recognition evidence images exist and are mapped in content but the Recognition UI is an editorial **text wall** (by design), so those files are not painted. Written-testimonial screenshot fields exist in data but the Client Stories carousel is **typography-only** (correct: WhatsApp/LinkedIn thumbs are not used as avatars). Private Remy PDFs and Bhumika chats remain correctly unpublished.

| Metric | Count |
|---|---|
| Canonical assets inventoried | 98 |
| `_organized/` mirrors | 89 |
| Used correctly in UI | 42 |
| Referenced in content but not rendered | 10 |
| Unreferenced on disk | 46 |
| Broken content paths | **0** |
| Verified missing placements fixed this pass | **0** (prior session already wired Keyers + Guildhall; no further safe UI fills without new files) |
| Unresolved / needs owner input | See §10 |

---

## 2. Totals by type (canonical)

| Type | Count | Notes |
|---|---|---|
| PNG | 58 | Mostly result-deck slides + graphics |
| JPG/JPEG | 33 | Logos, analytics, WhatsApp exports |
| PDF | 4 | Remy monthly/3-month reports — internal |
| SVG | 2 | Guildhall wordmark (+ duplicate under Collaborated with) |
| MOV | 1 | Sabrina DWY testimonial |
| Texture | 1 | `textures/paper-grain.jpg` (Heist paper tile) |

---

## 3. Home page audit

| Section | Implementation | Asset status |
|---|---|---|
| Hero | `HomeHero` + atmosphere | No archive photos (intentional) |
| About / Founder | `FounderSection` + 3-photo stack | All 3 Founder JPEGs used correctly |
| Collaborations | `SeenHereBand` logos | Khaleej Times, Keyers, Emirates NBD, Guildhall — all rendered |
| Recognition | `RecognitionWall` chip + numbered list | 7 copy lines present; evidence images **not shown** (text wall) |
| Client love videos | `VideoTestimonial` ×2 | Sabrina plays from `.mov`; Pooja poster-only + “coming soon” |
| Written stories | `ClientLoveCarousel` | All 8 quotes; no screenshot thumbs |
| Strategy CTA | `BookingCta` | No media; booking URLs still placeholders (C5) |
| Site grain | `FilmGrain` + body paper tile | `paper-grain.jpg` used |

---

## 4. Founder / About audit

| File | Depicts (inspected) | Used? | Appropriate? |
|---|---|---|---|
| `Founder/…14.55.48 (9).jpeg` | Suhana seated at UAE event booth | Yes — stack photo 1 | Yes |
| `Founder/…15.01.10 (4).jpeg` | Suhana speaking on stage | Yes — stack photo 2 | Yes |
| `Founder/…15.01.12 (1).jpeg` | Suhana podcast / interview | Yes — stack photo 3 | Yes |

Near-duplicate podcast frame also lives under `Recognized/…15.01.12 (2).jpeg` (recognition media claim). Not a publish blocker.

---

## 5. Client video audit

| Intended | File | Identity | Referenced | Resolves | Playback / a11y notes |
|---|---|---|---|---|---|
| Pooja Lakhani | **None found** | Unresolved — no confident Pooja video in project or Downloads materials reviewed | `src: null` + poster | Poster OK | Caption: “Video testimonial coming soon”. Do **not** substitute unrelated MP4s from Downloads. |
| Sabrina | `Testimonial/Sabrina DWY video testimonial (1).mov` | Filename + DWY framing; ~67.4s portrait 1080×1910 h264/aac | Yes | On disk | Autoplay-on-view muted; sources mount for play; no separate poster file |

**Generic MP4s** under `/home/kai/Downloads/` (GMT recordings, songs, etc.) were **not** identified as Pooja testimonials and must not be wired.

---

## 6. Written testimonial audit (all 8)

Carousel renders quote + name + role only (`ClientLoveCarousel` / typography cards). `image` fields in `content/shared.ts` are **data references only** (not painted) — correct per “no WhatsApp thumbs as avatars”.

| # | Client | Quote on site matches copy? | Name/role | Portrait / screenshot asset | Card uses screenshot as avatar? |
|---|---|---|---|---|---|
| 1 | Anastasia Pash | Yes | Yes | `Anastasia Pash Testimonial …jpg` (graphic); `Anastasia.png` unused (**likely founder misfile**) | No |
| 2 | Islam AbdelWahab | Yes | Yes | No portrait; Kensho LinkedIn screenshot unused | N/A (quote-only) |
| 3 | Hussain Ali | Yes | Yes | `Hussain Testimonial.png` referenced, not in carousel UI | No |
| 4 | Amal Al Abbas | Yes | Yes | `Amal Abbas DWY (1).jpg` referenced, not in carousel UI | No |
| 5 | Dr Swati Trivedi Dave | Yes | Yes | `Dr Swati.png` referenced, not in carousel UI | No |
| 6 | Afifa Shafi | Yes | Yes | `Afifa testimonial (1).PNG` referenced; `Afifa Shafi.png` unused | No |
| 7 | Martina Meyer zu Selhausen | Yes | Yes | `Mrtina consultation (1).jpg` referenced, not in carousel UI | No |
| 8 | Chirag Aggarwal | Yes | Title empty (matches copy) | `Chirag consultation.PNG` referenced, not in carousel UI | No |

---

## 7. Case-study evidence audit (all 9)

| # | Client | On `/case-studies`? | Copy/figures | Media wired | Notes |
|---|---|---|---|---|---|
| 1 | Pooja Lakhani | Yes | Matches | 4 images | Video still missing (C4) |
| 2 | Remy Zambarakji | Yes | Matches | 5 public slides | PDFs + PII collages **unpublished** (C10) |
| 3 | Dr Arif Khan | Yes | Matches | 4 deck slides | Extra slides (2)(5) unused — OK |
| 4 | Hussain Ali | Yes | Matches | Deck + quote graphic | Quote also on Home |
| 5 | Mathew | Yes | Matches | 4 deck slides | **C2** dual timeframe preserved |
| 6 | Revanshi | Yes | Matches | 4 deck slides | |
| 7 | Dr Marko | Yes | Matches | 4 deck slides | Extra (24)(26) unused |
| 8 | Kenshō | Yes | Matches | 3 deck slides | Islam quote reused; LinkedIn screenshots unused |
| 9 | Bhumika | Yes | Matches | **type-led** (no images) | Private chats withheld (C9) |

All `src` / `image` paths in `content/case-studies.ts` resolve on disk (**0 missing**).

---

## 8. Recognition audit

| Claim (copy) | Evidence file | UI |
|---|---|---|
| LinkedIn Top Voice 2024 | `Recognized/…14.10.41.jpeg` (badge crop; year not visible in frame — C6) | Text row only |
| Top 5 Personal Branding Strategist, UAE | Favikon card `…15.01.09.jpeg` — multiple ranks (C1) | Text row only |
| Speaker, Tawdheef Abu Dhabi 2025 | Coaching booth `…14.55.48 (10).jpeg` | Text row only |
| Featured on 5 UAE podcasts | Podcast photo `…15.01.12 (2).jpeg` | Text row only |
| Panelist, Konsalidon Soirée | None | Text only |
| Writing Workshop Instructor, BitClass | None | Text only |
| Guest Lecturer, Chitkara University | None | Text only |

**Classification:** Evidence for first four is `referenced_not_rendered` (mapped in `recognitionItems.image`, not painted). Do not invent badges for the last three.

---

## 9. Collaboration logo audit

| Brand (copy) | Asset | Status |
|---|---|---|
| Khaleej Times | `collaborations/khaleej-times.png` | Used correctly (SeekLogo licensing caution) |
| Keyers | `collaborations/keyers.jpg` (= archive `images (1).jpg`) | Used correctly — **owner-identified** as Keyers |
| Emirates NBD | `collaborations/emirates-nbd.jpg` | Used correctly |
| Guildhall | `collaborations/guildhall.svg` | Used correctly (SVG wordmark) |

Archive folder `Collaborated with/` holds originals/duplicates (`mark-unverified.png` unused). Prior gap “Guildhall/Keyers missing” is **closed**.

---

## 10. Missing assets & unresolved identities

| ID | Item | Action needed from owner |
|---|---|---|
| C4 | Pooja video testimonial | Supply verified file |
| C1 | Favikon vs “Top 5” wording | Confirm authoritative line |
| C2 | Mathew 60-day vs 28-day | Confirm if both stay |
| C5 | Booking / sprint URLs | Supply real links |
| C6 | Top Voice year on badge | Confirm 2024 |
| C9 | Bhumika chats | Clearance before any publish |
| C10 | Remy PDFs / PII | Keep internal unless approved |
| C11 | `Anastasia.png` identity | Confirm not founder before any avatar use |
| — | Islam portrait | Optional; quote-only is OK |
| — | Konsalidon / BitClass / Chitkara proof | Optional evidence images |

---

## 11. Broken paths, duplicates, unreferenced

- **Broken paths:** none in content.
- **Duplicates:** Collaborated with ↔ collaborations; Founder podcast ≈ Recognized podcast; `_organized/` hardlinks; Emirates NBD jpg+png.
- **Unreferenced (intentional):** Remy spare analytics, unused deck slides, Bhumika chats, Remy PDFs, archive logo originals, misfiled portraits.

---

## 12. Prioritized recommendations

1. **P0 — Supply Pooja video** when available; keep poster placeholder until then.  
2. **P0 — Do not publish** Bhumika chats or Remy PDFs without written clearance.  
3. **P1 — Confirm** Keyers mark vs any future official Keyers lockup (current file is owner-approved).  
4. **P1 — Confirm** Favikon/Top Voice wording (C1/C6).  
5. **P2 — Optional:** If Recognition should show evidence thumbnails, that is a **design change** — out of scope for this audit pass.  
6. **P2 — Optional:** Remove Next boilerplate `public/*.svg` if unused.  
7. **P3 — Licensing:** Prefer official Khaleej Times asset over SeekLogo download for production.

---

## Checklists

### Eight written testimonials
- [x] Anastasia Pash  
- [x] Islam AbdelWahab  
- [x] Hussain Ali  
- [x] Amal Al Abbas  
- [x] Dr Swati Trivedi Dave  
- [x] Afifa Shafi  
- [x] Martina Meyer zu Selhausen  
- [x] Chirag Aggarwal  

### Nine case studies
- [x] Pooja Lakhani  
- [x] Remy Zambarakji  
- [x] Dr Arif Khan  
- [x] Hussain Ali  
- [x] Mathew  
- [x] Revanshi  
- [x] Dr Marko  
- [x] Kenshō Mindful Communications  
- [x] Bhumika  

### Videos
- [x] Sabrina file present & referenced  
- [ ] Pooja file — **missing**  
