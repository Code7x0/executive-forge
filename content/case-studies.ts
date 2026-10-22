import type { CaseStudy } from "@/content/types";

export const caseFilters = [
  "All",
  "Founders",
  "Finance",
  "Healthcare",
  "Coaching",
  "Leadership",
] as const;

export const caseStudiesIntro = {
  headline: "Real people. Real numbers. Real wins!",
  text: "Founders, executives and experts across the UAE, Saudi Arabia, Oman, Hong Kong and India. Here's where they started, what we built together, and what changed.",
} as const;

export const caseStudiesClosing = {
  headline: "Want to be our next best kept client?",
} as const;

/**
 * Privacy / conflict notes (not public UI):
 * - Remy PDFs and DM collages with emails/phones excluded from media.
 * - Bhumika WhatsApp chats excluded pending clearance — outcomes kept as copy only.
 * - Mathew: source states both 60-day funnel metrics and $16K in first 28 days.
 * - Filenames that look like client portraits but show Suhana are not used as client images.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "pooja-lakhani",
    client: "Pooja Lakhani",
    title:
      "How we took a brand-new account from 0 to 7,000 followers in one month...",
    niche: "Pediatric Nutrition, Baby Led Weaning",
    services: "Positioning, Content Strategy, Reels & Content Creation (Instagram)",
    filters: ["Healthcare"],
    timeframe: "About 30 days · 30 posts",
    layout: "split",
    challenge:
      "Pooja is a Registered Dietitian with over ten years in clinical nutrition and real expertise in Baby Led Weaning. Together with her husband, a NICU pediatrician, she runs Kids Food Clinic. When we started, the account had 0 posts and 0 followers. Parents were getting feeding advice from louder, less qualified voices, and Pooja's credentials weren't reaching any of them.",
    strategy:
      "We built the content around her evidence-based approach and her own story as a new mom drowning in unsolicited advice. That story is what made parents trust her!",
    outcomes: [
      "0 to 7,002 followers within about 30 days and 30 posts",
      "2.3M views in 30 days",
      "One Reel reached 2,186,634 views, shared over 33,000 times, saved 7,600 times, and brought in 6,090 new followers",
    ],
    highlight: '"7k followers in a month. Far from my own expectation."',
    media: [
      {
        src: "/assets/Testimonial/Pooja Lakhani/Pooja and Suhana 7k celebration (2).png",
        alt: "Pooja Lakhani and Suhana celebrating the Kids Food Clinic milestone",
        fit: "cover",
      },
      {
        src: "/assets/Testimonial/Pooja Lakhani/30 days professional dash (1).jpg",
        alt: "Instagram insights showing about 2.3 million views over 30 days",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Pooja Lakhani/2M viral reel (1).jpg",
        alt: "Viral Reel performance metrics for Kids Food Clinic",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Pooja Lakhani/Engagement insights of viral reel (1).jpg",
        alt: "Engagement insights for the viral Reel including shares and saves",
        fit: "contain",
      },
    ],
    flags: [
      "Pooja video testimonial requested in copy — file missing from archive (C4).",
    ],
  },
  {
    slug: "remy-zambarakji",
    client: "Remy Zambarakji",
    title:
      "How a capital strategist grew 50% and brought in inbound from capital firms in 16 weeks...",
    niche: "Frontier Markets, Capital Strategy, Finance",
    services:
      "Done-For-You LinkedIn: Positioning, Profile Optimisation, Ghostwriting, Daily Engagement, Connection Strategy",
    filters: ["Finance", "Leadership"],
    timeframe: "16 weeks",
    layout: "rail",
    challenge:
      "Remy is a Frontier Market Capital Strategist covering Syria, Iraq and the UAE's financial centres. He was well known inside his firm, but not outside it. When we started, he had 5,301 followers and 2,621 impressions a week. The audience existed. Nothing was reaching it!",
    strategy:
      "We rewrote his profile around frontier-market capital strategy and built four content pillars, each mapped to a market: Syria, Iraq, the UAE, and frontier-market entry strategy.",
    outcomes: [
      "Month one impressions jumped to 58,201, up 558%",
      "Weeks 13 to 16: 190,628 impressions in four weeks; 93% of people reached were not already in his network",
      "One post on JP Morgan Chase in Syria hit 128,073 impressions",
      "Grew from 5,301 to 7,975 followers (+50%)",
      "Featured in Best of LinkedIn: Strategy & Consulting",
      "Inbound from a capital fund, an institutional partnerships lead, and a podcast — none of it outbound",
    ],
    media: [
      {
        src: "/assets/Testimonial/Remy/Remy Case study.png",
        alt: "Remy Zambarakji case study overview slide",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Remy/Remy Zambarakji/Feature in Linkedin Strategy and Consulting.png",
        alt: "Best of LinkedIn Strategy & Consulting feature evidence",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Remy/Remy Zambarakji/69K content impressions in 28 days.jpg",
        alt: "LinkedIn analytics showing roughly 69K content impressions in 28 days",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Remy/Remy Zambarakji/83_ out of network reach.jpg",
        alt: "LinkedIn analytics highlighting high out-of-network reach",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Remy/Remy Zambarakji/Top performing Posts_.png",
        alt: "Top performing LinkedIn posts from the engagement period",
        fit: "contain",
      },
    ],
    flags: [
      "Excluded Remy monthly/3-month PDFs from public pages (confidential reports).",
      "Excluded Revenue Generated / Conversations collage (third-party DMs, emails, phone numbers).",
      "Excluded Podcast Invite DM screenshot (contact details).",
    ],
  },
  {
    slug: "dr-arif",
    client: "Dr Arif Khan",
    title:
      "How a pediatric neurologist went from unknown online to 22,000+ profile views...",
    niche: "Gene Therapy, Pediatric Neurology, Healthcare Leadership",
    services:
      "Positioning, Content Strategy, Ghostwriting, Thought Leadership",
    filters: ["Healthcare", "Leadership"],
    timeframe: "Engagement period as reported in source case copy",
    layout: "stack",
    challenge:
      "Dr Arif Khan is a pediatric neurologist, Founder of Neuropedia and Director of Gene Therapy at Fakeeh University Hospital. His credentials are seriously impressive, but his LinkedIn didn't show any of it. He wanted to be recognised as a thought leader and build a network of fellow doctors for his medical symposiums.",
    strategy:
      "We built a content strategy around authority: insight-led posts, his own story, and clear points of view on where the industry is heading.",
    outcomes: [
      "Profile views grew to 22,000+, a 21,000% increase",
      "Several posts went viral beyond healthcare",
      "Speaker invitation to the HealthInfluencer Summit, major conference speaking requests, and award invitations",
    ],
    media: [
      {
        src: "/assets/Testimonial/Dr. Arif/Result Deck_The Executive Forge (1).png",
        alt: "Dr Arif Khan results overview",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Dr. Arif/Result Deck_The Executive Forge (3).png",
        alt: "Dr Arif Khan profile and reach metrics",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Dr. Arif/Result Deck_The Executive Forge (4).png",
        alt: "Dr Arif Khan content outcomes",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Dr. Arif/Result Deck_The Executive Forge (6).png",
        alt: "Dr Arif Khan speaking and recognition outcomes",
        fit: "contain",
      },
    ],
  },
  {
    slug: "hussain",
    client: "Hussain Ali",
    title:
      "How a Hong Kong SaaS founder booked 25+ qualified calls in the UAE in 90 days...",
    niche: "SaaS, Tech Founder, Market Expansion",
    services:
      "Positioning, Ghostwriting, LinkedIn Networking Strategy, Media Features",
    filters: ["Founders"],
    timeframe: "90 days",
    layout: "split",
    challenge:
      "Hussain is a SaaS founder in Hong Kong who wanted to break into the UAE. He had a proven product, but no local presence, no media coverage, and zero inbound conversations.",
    strategy:
      "We reframed his story for a UAE audience, published 20 posts a month of UAE-specific insight, set up networking calls through LinkedIn, and secured media features.",
    outcomes: [
      "25+ qualified calls within 90 days",
      "Investor conversations",
      "3 media features",
      "300+ new UAE-based connections",
    ],
    highlight:
      '"I just got off a call with the CFO, and we are mind blown by the inquiries we are getting. 5 calls in 4 days, while sitting in Hong Kong."',
    testimonial: {
      quote:
        "I just got off a call with the CFO, and we are mind blown by the inquiries we are getting. 5 calls in 4 days, while sitting in Hong Kong.",
      name: "Hussain Ali",
      title: "SaaS Founder",
      image: "/assets/Testimonial/Hussain/Hussain Testimonial.png",
    },
    media: [
      {
        src: "/assets/Testimonial/Hussain/Copy of Hussain.png",
        alt: "Hussain Ali portrait",
        fit: "cover",
      },
      {
        src: "/assets/Testimonial/Hussain/Result Deck_The Executive Forge (13).png",
        alt: "Hussain Ali case results overview",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Hussain/Result Deck_The Executive Forge (15).png",
        alt: "Hussain Ali UAE market outcomes",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Hussain/Result Deck_The Executive Forge (16).png",
        alt: "Hussain Ali media and networking outcomes",
        fit: "contain",
      },
    ],
  },
  {
    slug: "mathew",
    client: "Mathew",
    title:
      "How a consulting CEO closed $16K in 28 days by ditching salesy DMs...",
    niche: "High-Ticket B2B Consulting (GCC)",
    services:
      "Positioning, Lead Demand System, DM Outreach Strategy, Lead Magnet",
    filters: ["Founders", "Leadership"],
    timeframe: "28 days and 60 days (both stated in source)",
    layout: "stack",
    challenge:
      "Mathew is the CEO of a consulting firm in Saudi Arabia, selling high-ticket services across the GCC. His outreach felt salesy, and he was getting 2 to 3 calls and 0 to 1 deals a month.",
    strategy:
      "We anchored his message to one buyer, one problem and one outcome. Then we built an outbound system of 10 to 15 high-context DMs a day, with a lead magnet to warm people up before calls.",
    // Presentation order: lead with the $16K / 28-day close (title metric); keep 60-day funnel intact.
    // Flag: source states both 28-day and 60-day windows — do not silently merge.
    outcomes: [
      "$16K closed in the first 28 days",
      "In 60 days: 22 to 26 qualified conversations, 9 to 11 calls booked, and 2 high-ticket deals at $4K a month each",
    ],
    media: [
      {
        src: "/assets/Testimonial/Mathew/Result Deck_The Executive Forge (7).png",
        alt: "Mathew consulting case overview",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Mathew/Result Deck_The Executive Forge (8).png",
        alt: "Mathew outreach system summary",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Mathew/Result Deck_The Executive Forge (9).png",
        alt: "Mathew pipeline outcomes",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Mathew/Result Deck_The Executive Forge (10).png",
        alt: "Mathew closed revenue outcomes",
        fit: "contain",
      },
    ],
    flags: [
      "C2 — Source states both “In 60 days…” outcomes and “$16K closed in the first 28 days!” — both kept as written.",
    ],
  },
  {
    slug: "revanshi",
    client: "Revanshi",
    title:
      "How a sales coach closed $10K in 60 days by posting for buyers, not likes...",
    niche: "Sales Coaching for Founders",
    services:
      "Positioning, Content Strategy, Ghostwriting, Lead Magnet Strategy",
    filters: ["Coaching", "Founders"],
    timeframe: "60 days",
    layout: "rail",
    challenge:
      "Revanshi is a sales coach for founders with around 4,800 followers. Her content attracted attention, not buyers: 6 to 8 inbound conversations and 2 to 3 calls a month.",
    strategy:
      "We repositioned her profile for decision-stage buyers, moved her to 12 buyer-focused posts a month, and added a lead magnet that filtered inbound before calls.",
    outcomes: [
      "Closed $10,000 within 60 days",
      "12 to 15 inbound conversations",
      "20 high-intent qualified calls",
    ],
    media: [
      {
        src: "/assets/Testimonial/Revanshi/Result Deck_The Executive Forge (17).png",
        alt: "Revanshi case overview",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Revanshi/Result Deck_The Executive Forge (18).png",
        alt: "Revanshi positioning and content shift",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Revanshi/Result Deck_The Executive Forge (19).png",
        alt: "Revanshi inbound and call outcomes",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Revanshi/Result Deck_The Executive Forge (20).png",
        alt: "Revanshi closed revenue summary",
        fit: "contain",
      },
    ],
  },
  {
    slug: "dr-marko",
    client: "Dr Marko",
    title:
      "How a wellness coach grew impressions by 60% while moving to Dubai...",
    niche: "Wellness Coaching (Dubai)",
    services: "Profile Repositioning, Lead Magnet Strategy",
    filters: ["Coaching"],
    timeframe: "90 days",
    layout: "split",
    challenge:
      "Dr Marko had 2,000 followers and decent engagement, but no clients from Dubai. His audience wasn't his ideal client, so he was attracting low-paying work.",
    strategy:
      "We rewrote his headline and About section for a UAE audience and built a quiz lead magnet that pre-qualified his ideal Dubai client.",
    outcomes: [
      "Followers grew 21.8% in 90 days",
      "Reached 18,545 unique members",
      "85,565 impressions, up 60.3%",
    ],
    highlight:
      '"Few weeks ago, I had zero clients, now I already booked 3 calls."',
    media: [
      {
        src: "/assets/Testimonial/Dr.Marko/Result Deck_The Executive Forge (21).png",
        alt: "Dr Marko case overview",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Dr.Marko/Result Deck_The Executive Forge (22).png",
        alt: "Dr Marko profile repositioning",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Dr.Marko/Result Deck_The Executive Forge (23).png",
        alt: "Dr Marko impression growth",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Dr.Marko/Result Deck_The Executive Forge (25).png",
        alt: "Dr Marko audience and call outcomes",
        fit: "contain",
      },
    ],
  },
  {
    slug: "kensho",
    client: "Kenshō Mindful Communications",
    title:
      "How we positioned a PR agency's leadership team as the region's best...",
    niche: "PR & Communications Leadership (Oman)",
    services:
      "Ghostwriting, Thought Leadership, Executive Team LinkedIn Strategy",
    filters: ["Leadership"],
    timeframe: "Engagement as described in source (qualitative)",
    layout: "stack",
    challenge:
      "Kenshō Mindful Communications is a leading PR agency in Oman. Their CEO, CMO and COO wanted personal brands that matched the agency's standing in the region.",
    strategy:
      "We ghostwrote thought-leadership content for each executive, kept one consistent tone in line with Kenshō's standards, and built a full LinkedIn strategy around them.",
    outcomes: [
      "Leadership personal brands aligned with Kenshō's regional standing (qualitative outcome as supplied)",
    ],
    testimonial: {
      quote:
        "Working with Suhana is like going to therapy... It's a process that sheds light on you, through which you can discover yourself and find what was forgotten.",
      name: "Islam AbdelWahab",
      title: "Managing Partner & Creative Director",
    },
    media: [
      {
        src: "/assets/Testimonial/Kensho/Result Deck_The Executive Forge (38).png",
        alt: "Kenshō leadership branding overview",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Kensho/Result Deck_The Executive Forge (39).png",
        alt: "Kenshō executive LinkedIn strategy",
        fit: "contain",
      },
      {
        src: "/assets/Testimonial/Kensho/Result Deck_The Executive Forge (40).png",
        alt: "Kenshō thought leadership outcomes",
        fit: "contain",
      },
    ],
    flags: [
      "LinkedIn UI screenshots under Kensho folder held back — deck slides preferred for editorial treatment.",
      "C7 — Islam quote shortened here; full quote on Home testimonials.",
    ],
  },
  {
    slug: "bhumika",
    client: "Bhumika",
    title: "How one coaching client landed interviews with Amazon...",
    niche: "Finance Professional, Career Growth",
    services:
      "Done-With-You Coaching, Profile Optimisation, Outreach Strategy",
    filters: ["Finance", "Coaching"],
    timeframe: "After Done-With-You coaching sessions (as supplied)",
    layout: "type-led",
    challenge:
      "Bhumika worked with me through Done-With-You coaching. After our sessions, she started reaching out to HR leads directly on LinkedIn.",
    strategy:
      "Profile optimisation and outreach strategy through Done-With-You coaching (as supplied).",
    outcomes: [
      "Amazon responded for a Senior Finance Associate role",
      "A talent agency responded for a Director of Finance role",
      "Both sent her resume straight to the interview round",
    ],
    media: [],
    flags: [
      "PRIVACY — Job search.jpg and Finance consultancy launch.jpg are identifiable private WhatsApp conversations; withheld from public pages pending clearance. Outcomes presented as supplied copy only.",
    ],
  },
];

/** Compact metrics for Home — figures from case copy only. */
export const selectedResults = [
  {
    client: "Pooja Lakhani",
    metric: "0 → 7,002 followers",
    detail: "About 30 days · 2.3M views",
    href: "/case-studies#pooja-lakhani",
  },
  {
    client: "Remy Zambarakji",
    metric: "+50% followers",
    detail: "16 weeks · inbound from capital firms",
    href: "/case-studies#remy-zambarakji",
  },
  {
    client: "Dr Arif Khan",
    metric: "22,000+ profile views",
    detail: "21,000% increase",
    href: "/case-studies#dr-arif",
  },
  {
    client: "Hussain Ali",
    metric: "25+ qualified calls",
    detail: "UAE market entry in 90 days",
    href: "/case-studies#hussain",
  },
  {
    client: "Mathew",
    metric: "$16K closed",
    detail: "First 28 days · 60-day funnel in source",
    href: "/case-studies#mathew",
  },
  {
    client: "Revanshi",
    metric: "$10K closed",
    detail: "60 days · buyer-focused content",
    href: "/case-studies#revanshi",
  },
] as const;
