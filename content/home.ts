import { booking } from "@/content/shared";

export const hero = {
  headline:
    "You've built the expertise. Let's make sure the right people actually see it!",
  subheadline:
    "I help founders, executives and experts turn what they know into a LinkedIn presence that gets them noticed by the right people and creates real business opportunities.",
  primary: { label: "Read case studies →", href: "/case-studies" },
  secondary: { label: booking.introCallLabel, href: booking.introHref },
} as const;

export const collaborations = {
  label: "You may have seen me here",
  items: [
    {
      name: "Khaleej Times",
      logo: "/assets/collaborations/khaleej-times.png",
      kind: "image" as const,
    },
    {
      name: "Keyers",
      logo: "/assets/collaborations/keyers.jpg",
      kind: "image" as const,
    },
    {
      name: "Emirates NBD",
      logo: "/assets/collaborations/emirates-nbd.jpg",
      kind: "image" as const,
    },
    {
      name: "Guildhall",
      logo: "/assets/collaborations/guildhall.svg",
      kind: "image" as const,
    },
  ],
} as const;

/**
 * Recognition list from copy. Images only when a matching asset exists.
 * C1: Favikon card shows multiple ranks — copy line kept as written; do not
 * invent a merged claim. Flag retained for implementers, not public UI.
 */
export const recognition = {
  eyebrow: "Recognition",
} as const;

export const recognitionItems = [
  {
    title: "LinkedIn Top Voice 2024",
    image: "/assets/Recognized/WhatsApp Image 2026-10-06 at 14.10.41.jpeg" as
      | string
      | null,
  },
  {
    title: "Top 5 Personal Branding Strategist, UAE",
    image: "/assets/Recognized/WhatsApp Image 2026-10-01 at 15.01.09.jpeg" as
      | string
      | null,
    reviewNote:
      "Favikon asset shows #5 / #7 / #236 ranks — keep copy until client confirms (C1).",
  },
  {
    title: "Speaker, Tawdheef Abu Dhabi 2025",
    image: "/assets/Recognized/WhatsApp Image 2026-10-01 at 14.55.48 (10).jpeg" as
      | string
      | null,
  },
  {
    title: "Featured on 5 UAE podcasts",
    image: "/assets/Recognized/WhatsApp Image 2026-10-01 at 15.01.12 (2).jpeg" as
      | string
      | null,
  },
  {
    title: "Panelist, Konsalidon Soirée",
    image: null as string | null,
  },
  {
    title: "Writing Workshop Instructor, BitClass",
    image: null as string | null,
  },
  {
    title: "Guest Lecturer, Chitkara University",
    image: null as string | null,
  },
] as const;

export const founder = {
  sectionLabel: "The mind behind Executive Forge",
  headline: "Hey, there! So happy you're here.",
  paragraphs: [
    "I'm Suhana, a personal branding strategist and the founder of Executive Forge.",
    "I love a good founder story and that moment when a client texts me a screenshot in all caps. Oh, and helping founders and senior leaders become the name their market recognises.",
    "I grew my own LinkedIn from zero to around 30,000 followers. That's how I learned what actually works, and it's how my entire agency runs today. Every single client has found me through LinkedIn!",
    "When the chance to move to Dubai came up, I planned the move and booked my ticket within five days. Before I even landed, I was cold pitching UAE founders to see if there was real demand. There was, and here we are.",
    "Today my team & I work with founders, executives and experts across the UAE, Saudi Arabia, Oman, Hong Kong and India. We focus on organic growth only. No bots, no automation blasts, just your real expertise, finally out where people can find it.",
  ],
  attribution: "Suhana Siddika, Founder, Executive Forge",
  images: [
    "/assets/Founder/WhatsApp Image 2026-10-01 at 14.55.48 (9).jpeg",
    "/assets/Founder/WhatsApp Image 2026-10-01 at 15.01.10 (4).jpeg",
    "/assets/Founder/WhatsApp Image 2026-10-01 at 15.01.12 (1).jpeg",
  ],
  photoAlts: [
    "Suhana Siddika seated at an event in a black blazer",
    "Suhana Siddika speaking on stage in a pink blazer",
    "Suhana Siddika recording a podcast interview in a cream outfit",
  ],
} as const;

export const clientLove = {
  headline: "Don't just take my word for it!",
  /** Written-track intro (videos keep the headline above) */
  storiesEyebrow: "Client stories",
  storiesHeadline: "Good people. Real results.",
  storiesSupport: "Words from founders and leaders we've worked with.",
  videos: [
    {
      name: "Pooja Lakhani",
      title: "Registered Dietitian, Kids Food Clinic",
      src: null as string | null,
      poster:
        "/assets/Testimonial/Pooja Lakhani/Pooja and Suhana 7k celebration (2).png",
      /** C4 — video missing; celebration still used until footage arrives */
      caption: "Video testimonial coming soon",
      autoplayOnView: false as const,
    },
    {
      name: "Sabrina",
      title: "Done-With-You client",
      src: "/assets/Testimonial/Sabrina DWY video testimonial.mp4",
      poster: null as string | null,
      caption: null as string | null,
      autoplayOnView: true as const,
    },
  ],
} as const;
