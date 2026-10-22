import type { ProcessStep, Testimonial } from "@/content/types";

/** Booking URLs were placeholders in source copy — do not invent destinations. */
export const booking = {
  introCallLabel: "Book an intro call →",
  strategyCallLabel: "Book your strategy call →",
  sprintLabel: "Start the 4-week sprint →",
  /** Anchors until client supplies real booking URLs — do not invent Calendly/etc. */
  introHref: "/#booking",
  strategyHref: "/services#strategy-call",
  sprintHref: "/services#dwy",
  note: "Booking links pending client URLs (source used placeholder tokens).",
} as const;

export const processHeadline =
  "From first call to a steady pipeline, in seven simple steps.";

export const processSteps: ProcessStep[] = [
  {
    title: "Onboarding",
    body: "A short form and a call about your goals, your story, your voice, and what you want LinkedIn to do for you.",
  },
  {
    title: "Profile audit",
    body: "We audit your profile for search (SEO), answer engines (AEO) and AI results (GEO), then fix what's holding you back.",
  },
  {
    title: "Goal roadmap",
    body: "Clear targets for the next quarter, tied to what you actually want: deals, hires, invitations or investors.",
  },
  {
    title: "Strategy & calendar",
    body: "Your content pillars, formats and posting calendar, planned a month ahead.",
  },
  {
    title: "Audience research",
    body: "We map the people who matter to your goals and learn what they read, share and respond to.",
  },
  {
    title: "Outreach",
    body: "Personal, relevant DMs that start conversations with the right people. No spam, ever!",
  },
  {
    title: "Weekly review",
    body: "We look at engagement, saves, shares, impressions and outreach results every week, so the plan keeps getting better.",
  },
];

export const principles = [
  {
    title: "You stay in control",
    body: "We draft, you approve. Nothing goes live without your sign-off.",
  },
  {
    title: "It sounds like you",
    body: "We learn how you speak and think, so readers hear you, not an agency.",
  },
  {
    title: "Found by people and by AI",
    body: "Profiles and posts written to show up in search and AI answers about your field.",
  },
  {
    title: "Measured every week",
    body: "So we can adjust quickly and you always know what's working.",
  },
] as const;

/**
 * Written wall — quotes verbatim from source.
 * Images only when the file is a verified quote artifact for that person
 * (not misfiled portraits of Suhana under client folders).
 */
export const writtenTestimonials: Testimonial[] = [
  {
    quote:
      "She is amazing! She literally transformed my account from dead to active, and I still can't believe how far we've come. Her team is the best you could ask for.",
    name: "Anastasia Pash",
    title: "Amazon Bestselling Author, Founder @Soulbridge",
    image: "/assets/Testimonial/Anastasia/Anastasia Pash Testimonial 🩷 (1).jpg",
  },
  {
    quote:
      "Working with Suhana is like going to therapy. It's not just about your business and tone of voice. It's a process that sheds light on you, through which you can discover yourself and find what was forgotten.",
    name: "Islam AbdelWahab",
    title: "Managing Partner & Creative Director, Kenshō Mindful Communications",
    // No verified portrait for Islam — quote stands alone (C7)
  },
  {
    quote:
      "I just got off a call with the CFO, and we are mind blown by the inquiries we are getting. 5 calls in 4 days, while sitting in Hong Kong.",
    name: "Hussain Ali",
    title: "SaaS Founder",
    image: "/assets/Testimonial/Hussain/Hussain Testimonial.png",
  },
  {
    quote:
      "Suhana and her team is amazing. They are highly professional, understands the branding aspect of LinkedIn too well. I highly recommend her.",
    name: "Amal Al Abbas",
    title: "Senior Human Resource Manager",
    image: "/assets/Testimonial/Amal/Amal Abbas DWY (1).jpg",
  },
  {
    quote:
      "Her customized strategy & strategic ideas have really increased my engagement reach.",
    name: "Dr Swati Trivedi Dave",
    title: "Metabolic Dietitian Nutritionist",
    image: "/assets/Testimonial/Dr. Swati/Dr Swati.png",
  },
  {
    quote:
      "The kind of advice she gave me and the insights she shared made me think, 'Yes, I really need to come back here.'",
    name: "Afifa Shafi",
    title: "Strategic Content Growth Partner",
    image: "/assets/Testimonial/Afifa/Afifa testimonial (1).PNG",
  },
  {
    quote:
      "Suhana did a very structured review of my profile and gave me a number of very specific pointers to better support the goal of building community.",
    name: "Martina Meyer zu Selhausen",
    title: "Founder, Viatitude Health Ltd",
    image: "/assets/Testimonial/Martina/Mrtina consultation (1).jpg",
  },
  {
    quote:
      "She brought a wealth of insights that completely changed the way I approach my LinkedIn presence.",
    name: "Chirag Aggarwal",
    title: "",
    image: "/assets/Testimonial/Chirag consultation.PNG",
  },
];
