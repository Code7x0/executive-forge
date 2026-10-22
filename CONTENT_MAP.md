# CONTENT_MAP.md

Maps all supplied Executive Forge copy to destination pages and sections.  
**Source of truth:** `content/website-copy.md` (extracted from `content/source/ExecutiveForge Website Copy (3 pages) (1).docx`).

Two DOCX copies on disk (`…(1).docx` and the non-`(1)` file) are **byte-identical** (SHA-256 prefix `b55714de700dfc23`) — no cross-file copy conflict.

Wording, figures, client names, and timeframes below are preserved from the source. Conflicts are flagged, not resolved.

---

## Global / shared

| Element | Destination | Notes |
|---|---|---|
| Brand: Executive Forge · Suhana Siddika | All pages (nav / footer) | |
| Primary CTAs: Book an intro call → · Book your strategy call → | Home, Services, Case Studies | Strategy call URL marked `[your strategy call link]` in source — **UNVERIFIED / placeholder** |
| Secondary CTA: Read case studies → | Home hero → `/case-studies` | |
| Markets mentioned: UAE, Saudi Arabia, Oman, Hong Kong, India | Home founder story; Case Studies intro | Keep as written |

---

## 1. Home (`/`)

### 1.1 Hero
| Field | Copy (verbatim intent) |
|---|---|
| Headline | You've built the expertise. Let's make sure the right people actually see it! |
| Subheadline | I help founders, executives and experts turn what they know into a LinkedIn presence that gets them noticed by the right people and creates real business opportunities. |
| Buttons | Read case studies → · Book an intro call → |
| Visual | Forma-inspired particle scene (not from asset zips) — see PROJECT_BRIEF |

### 1.2 The mind behind Executive Forge
| Field | Content |
|---|---|
| Headline | Hey, there! So happy you're here. |
| Body | Founder story paragraphs (strategist; LinkedIn 0→~30,000; Dubai move in five days; cold pitching UAE founders; organic-only; markets list) |
| Attribution | Suhana Siddika, Founder, Executive Forge |
| Assets | `public/assets/Founder/*` (+ select recognition portraits if needed) |

### 1.3 Featured in & collaborated with
| Field | Content |
|---|---|
| Label | You may have seen me here |
| Collaborated with (copy list) | Khaleej Times · Emirates NBD · Guildhall · Keyers |
| Assets in use | `collaborations/khaleej-times.png` · `collaborations/keyers.jpg` (owner-ID’d; same bitmap as archive `images (1).jpg`) · `collaborations/emirates-nbd.jpg` · `collaborations/guildhall.svg` |
| **Gap** | None for logos — all four brands have files on the Home strip (see ASSET_AUDIT_REPORT §9) |

### 1.4 Recognition
| Item (from copy) | Asset support |
|---|---|
| LinkedIn Top Voice 2024 | Badge image present (`Recognized/…14.10.41.jpeg`) — year on asset not independently OCR-verified beyond copy |
| Top 5 Personal Branding Strategist, UAE | Favikon card present — **see conflict flag** |
| Speaker, Tawdheef Abu Dhabi 2025 | Event coaching photo present (Tawdheef standee visible) |
| Featured on 5 UAE podcasts | Podcast-style seated photo present; specific show names **not in copy** |
| Panelist, Konsalidon Soirée | **No dedicated asset identified** |
| Writing Workshop Instructor, BitClass | **No dedicated asset identified** |
| Guest Lecturer, Chitkara University | **No dedicated asset identified** |

### 1.5 Client love
| Field | Content |
|---|---|
| Headline | Don't just take my word for it! |
| Editorial note in source | Suggestion to place Pooja + Sabrina videos side by side, then scrolling written wall |
| Video 1 | Pooja Lakhani, Registered Dietitian, Kids Food Clinic — **video file still MISSING**; celebration PNG used as poster + “coming soon” |
| Video 2 | Sabrina, Done-With-You client — `Sabrina DWY video testimonial (1).mov` present (~67s) |
| Written quotes (8) | Anastasia Pash; Islam AbdelWahab (Kenshō); Hussain Ali; Amal Al Abbas; Dr Swati Trivedi Dave; Afifa Shafi; Martina Meyer zu Selhausen; Chirag Aggarwal — keep wording intact |
| Assets | Quote screenshots exist under `Testimonial/`; Home carousel is **typography-led** (does not paint WhatsApp thumbs as avatars) |

### 1.6 Strategy call CTA (Home footer block)
| Field | Content |
|---|---|
| Eyebrow framing | Want to book a one-time strategy call instead? |
| Headline | Not ready for a full program? Let's start with one call. |
| Body | 60 minutes; profile review; personalised 30-Day LinkedIn Action Plan |
| Button | Book your strategy call → `[your strategy call link]` |

---

## 2. Services (`/services`)

### 2.1 Intro
| Field | Content |
|---|---|
| Headline | Two ways to work with me. One goal: get you seen by the right people. |
| Body | DWY vs DFY framing paragraph |

### 2.2 Program 1 — DWY Authority Sprint
| Field | Content |
|---|---|
| Label | Done-With-You · 4 weeks · 1:1 |
| Headline | Build your personal brand with me, while you do the posting. |
| Structure | Weeks 1–4 detail blocks + “What you get” + Done-With-You disclaimer |
| Button | Start the 4-week sprint → |
| **Note** | Sprint booking URL **not supplied** in source |

### 2.3 Program 2 — Done-For-You Personal Branding
| Field | Content |
|---|---|
| Label | Done-For-You · Monthly |
| Headline | Your expertise, your voice, without you writing every post. |
| Includes | Positioning, profile rebuild, voice interview, 12 posts/month, calendar, reporting |
| Add-ons | Appointment setting / DM openers; Instagram repurposing |
| Time | about 30–60 minutes a week |
| Button | Book an intro call → |

### 2.4 1:1 Strategy Call
| Field | Content |
|---|---|
| Label | 60 minutes · 1:1 |
| Body | Pre-call audit + hour with Suhana + personalized 30-Day LinkedIn Action Plan |
| Button | Book your strategy call → `[your strategy call link]` |
| **Overlap** | Same offer also on Home §1.6 — intentional reuse, not a conflict |

### 2.5 Our process (7 steps)
| # | Step | Copy anchor |
|---|---|---|
| 1 | Onboarding | short form + call |
| 2 | Profile audit | SEO / AEO / GEO |
| 3 | Goal roadmap | quarterly targets |
| 4 | Strategy & calendar | pillars + month-ahead calendar |
| 5 | Audience research | map people who matter |
| 6 | Outreach | personal DMs; no spam |
| 7 | Weekly review | engagement + outreach metrics |

Headline: *From first call to a steady pipeline, in seven simple steps.*

### 2.6 In every engagement
Four principles: You stay in control · It sounds like you · Found by people and by AI · Measured every week.

---

## 3. Case Studies (`/case-studies`)

### 3.1 Intro
| Field | Content |
|---|---|
| Headline | Real people. Real numbers. Real wins! |
| Body | Markets list + “where they started…” |
| Filters | All · Founders · Finance · Healthcare · Coaching · Leadership |

Suggested filter tags (inferred for IA only — **not** new marketing copy):

| Case | Suggested filters |
|---|---|
| Pooja | Healthcare |
| Remy | Finance · Leadership |
| Dr Arif | Healthcare · Leadership |
| Hussain | Founders |
| Mathew | Founders · Leadership |
| Revanshi | Coaching · Founders |
| Dr Marko | Coaching |
| Kenshō | Leadership |
| Bhumika | Finance · Coaching |

### 3.2 Nine cases (preserve all figures)

| # | Title (source casing) | Client | Key figures to keep intact | Services (source) | Primary assets folder |
|---|---|---|---|---|---|
| 1 | HOW WE TOOK A BRAND-NEW ACCOUNT FROM 0 TO 7,000 FOLLOWERS IN ONE MONTH... | Pooja — Kids Food Clinic | 0→7,002 followers; ~30 days / 30 posts; 2.3M views; Reel 2,186,634 views; 33,000+ shares; 7,600 saves; 6,090 new followers | Positioning, Content Strategy, Reels & Content Creation (Instagram) | `Testimonial/Pooja Lakhani/` |
| 2 | HOW A CAPITAL STRATEGIST GREW 50% AND BROUGHT IN INBOUND FROM CAPITAL FIRMS IN 16 WEEKS... | Remy — Frontier Market Capital Strategist | Start 5,301 followers / 2,621 impressions/week; month-one 58,201 (+558%); weeks 13–16: 190,628 impressions; 93% out-of-network; one post 128,073; end 7,975 (+50%) | DFY LinkedIn suite | `Testimonial/Remy/` |
| 3 | HOW A PEDIATRIC NEUROLOGIST WENT FROM UNKNOWN ONLINE TO 22,000+ PROFILE VIEWS... | Dr Arif Khan | 22,000+ profile views; 21,000% increase | Positioning, Content Strategy, Ghostwriting, Thought Leadership | `Testimonial/Dr. Arif/` |
| 4 | HOW A HONG KONG SAAS FOUNDER BOOKED 25+ QUALIFIED CALLS IN THE UAE IN 90 DAYS... | Hussain Ali | 25+ calls; 3 media features; 300+ UAE connections; quote “5 calls in 4 days” | Positioning, Ghostwriting, Networking, Media | `Testimonial/Hussain/` |
| 5 | HOW A CONSULTING CEO CLOSED $16K IN 28 DAYS BY DITCHING SALESY DMS... | Mathew — consulting CEO, Saudi / GCC | Prior 2–3 calls / 0–1 deals/mo; 10–15 DMs/day; **60 days:** 22–26 conversations, 9–11 calls; **$16K in first 28 days**; 2 deals @ $4K/mo | Positioning, Lead Demand, DMs, Lead Magnet | `Testimonial/Mathew/` |
| 6 | HOW A SALES COACH CLOSED $10K IN 60 DAYS BY POSTING FOR BUYERS, NOT LIKES... | Revanshi | ~4,800 followers start; $10,000 closed; 12–15 inbound; 20 qualified calls / 60 days | Positioning, Content, Ghostwriting, Lead Magnet | `Testimonial/Revanshi/` |
| 7 | HOW A WELLNESS COACH GREW IMPRESSIONS BY 60% WHILE MOVING TO DUBAI... | Dr Marko | Start ~2,000 followers; +21.8% followers; 18,545 unique members; 85,565 impressions (+60.3%); “booked 3 calls” | Profile Repositioning, Lead Magnet | `Testimonial/Dr.Marko/` |
| 8 | HOW WE POSITIONED A PR AGENCY'S LEADERSHIP TEAM AS THE REGION'S BEST... | Kenshō Mindful Communications (Oman) | Qualitative; Islam quote (also on Home) | Ghostwriting, Thought Leadership, Executive Team LinkedIn | `Testimonial/Kensho/` |
| 9 | HOW ONE COACHING CLIENT LANDED INTERVIEWS WITH AMAZON... | Bhumika | Amazon Senior Finance Associate interview path; talent agency Director of Finance interview path | DWY Coaching, Profile Optimisation, Outreach | `Testimonial/Bhumika/` |

### 3.3 Closing CTA
| Field | Content |
|---|---|
| Headline | Want to be our next best kept client? |
| Buttons | Book an intro call → · Book a one-time strategy call → |

---

## Flagged conflicts & ambiguities

| ID | Issue | Sources | Resolution for build |
|---|---|---|---|
| C1 | **Recognition rank wording** | Copy: “Top 5 Personal Branding Strategist, UAE.” Favikon asset shows multiple ranks (#5 graphic, #7 Personal Branding & Audience Building UAE, #236 LinkedIn UAE, score 82.9, dated Sep 4, 2025). | **Do not invent a merged claim.** Keep copy as written until client confirms which line is authoritative; asset may support a more precise caption if approved. |
| C2 | **Mathew timeframe** | Same case: outcomes listed “In 60 days…” and “$16K closed in the first 28 days!” | Keep both phrases as in source; do not “fix” by rewriting. |
| C3 | **Collaboration logos vs copy** | Copy lists four brands. **Resolved in build:** Guildhall SVG wordmark + Keyers blue mark (owner-confirmed; archive `images (1).jpg`) + Khaleej Times + Emirates NBD. | Keep current four logos; prefer official Khaleej Times asset over SeekLogo long-term. |
| C4 | **Pooja video** | Copy layout note requires Pooja + Sabrina videos; only Sabrina file present. | Flag missing asset; do not fabricate video. |
| C5 | **Booking URLs** | `[your strategy call link]` placeholders; sprint CTA has no URL. | Blocked until client supplies links. |
| C6 | **LinkedIn Top Voice year** | Copy says 2024; badge image is generic “Top Voice” without visible year in frame. | Keep copy; verify badge year with client if challenged. |
| C7 | **Islam quote duplication** | Full quote on Home; shortened ellipsis version on Kenshō case. | Intentional reuse — render each as written in its section. |
| C8 | **Hussain quote duplication** | Home testimonials + Hussain case. | Same — keep both placements. |
| C9 | **Bhumika private chats** | `Job search.jpg`, `Finance consultancy launch.jpg` are identifiable WhatsApp threads (personal context + full names). | **Withheld from public pages** pending clearance. Outcomes rendered as supplied copy only (`layout: type-led`). |
| C10 | **Remy confidential / PII evidence** | Monthly PDFs; “Revenue Generated / Conversations” collage (emails, phones, third-party DMs); Podcast Invite DM. | **Not published.** Public media limited to case deck + analytics/feature slides that support stated outcomes. |
| C11 | **Misfiled “client portraits”** | `Anastasia.png`, `Afifa Shafi.png` appear to show Suhana, not the named clients. | **Not used** as client avatars. Quote screenshots used where verified. |

---

## Route map (implemented)

```
/                 → Home: Hero → Founder → Collaborations + Recognition → Client videos → Written carousel → Booking CTA
/services         → Services 2.1–2.6
/case-studies     → Case Studies intro → filters + nine stories → Booking CTA
/style-guide      → Internal tokens / components
```

See `ASSET_MANIFEST.md` and `ASSET_AUDIT_REPORT.md` for file-level reconciliation (2026-10-22).
