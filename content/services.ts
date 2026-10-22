import { booking } from "@/content/shared";

export const servicesIntro = {
  headline: "Two ways to work with me. One goal: get you seen by the right people.",
  text: "Some of you want to learn to do this yourself, with someone in your corner. Some of you want it done for you, in your voice, while you run your business. Both work, so pick the one that fits your life right now!",
} as const;

export const dwySprint = {
  label: "Done-With-You · 4 weeks · 1:1",
  headline: "Build your personal brand with me, while you do the posting.",
  text: "You know your work, but building a personal brand on LinkedIn gets confusing when you're doing everything yourself. That's where I come in! For 4 weeks, we'll build your personal brand together while you handle the actual execution.",
  weeks: [
    {
      title: "Week 1: Get your positioning right",
      intro:
        "We start with the basics and make sure your profile and personal brand are crystal clear.",
      items: [
        "What you should be known for",
        "Who you want to attract",
        "What makes you different",
        "Your personal brand positioning",
        "Headline and About section optimization",
        "Featured section recommendations",
      ],
    },
    {
      title: "Week 2: Build your content system",
      intro: "",
      items: [
        "3–5 content pillars",
        "Your POV and key topics",
        "Content angles and story ideas",
        "Hook and CTA frameworks",
        "Your content calendar",
      ],
    },
    {
      title: "Week 3: Work on your actual content",
      intro: "",
      items: [
        "I review your real posts",
        "We improve your hooks and post structure",
        "We make sure your content sounds like you",
        "We refine your ideas and messaging",
      ],
    },
    {
      title: "Week 4: Build your growth system",
      intro:
        "We'll look at how to get your content in front of the right people.",
      items: [
        "LinkedIn engagement strategy",
        "Building the right network",
        "Starting better conversations, and turning them into opportunities",
        "Reviewing what's working",
        "Your next 30-day plan",
      ],
    },
  ],
  whatYouGet:
    "4 weekly 1:1 calls · Personalized strategy · Content frameworks & reviews · Execution guidance · Accountability",
  disclaimer:
    "This is Done-With-You, not Done-For-You. You'll do the actual posting. I'll be right there to guide you, review your work and help you make better decisions along the way.",
  cta: booking.sprintLabel,
  ctaHref: booking.sprintHref,
} as const;

export const dfyProgram = {
  label: "Done-For-You · Monthly",
  headline: "Your expertise, your voice, without you writing every post.",
  text: "For founders, executives and experts who have so much to say but zero time to write it. My team & I handle the strategy, the writing and the growth, and you approve everything before it goes live.",
  included: [
    "Personal brand positioning and ICP alignment",
    "A one-time LinkedIn profile rebuild",
    "Voice extraction through a recorded interview, so every post sounds like you",
    "Content pillars and a monthly strategy",
    "12 LinkedIn posts a month, from your stories, opinions and industry insights",
    "Research, writing, editing, and design where needed",
    "A content calendar and simple approval workflow",
    "Monthly performance reporting",
  ],
  addOns: [
    {
      title: "Appointment setting",
      body: "Want leads, not just likes? Add appointment setting. Our flagship adds strategic engagement with your target accounts, prospect research, decision-maker lists, and 10 high-quality DM openers a day. No bots, no automation. Just real conversations that turn into qualified calls.",
    },
    {
      title: "Instagram repurposing",
      body: "Taking it to Instagram? We can repurpose your LinkedIn authority into Reels and carousels too.",
    },
  ],
  timeNote:
    "Your time: about 30–60 minutes a week for context, feedback and approvals.",
  cta: booking.introCallLabel,
  ctaHref: booking.introHref,
} as const;

export const strategyCall = {
  label: "60 minutes · 1:1",
  eyebrow: "Not sure yet? Start with a 1:1 Strategy Call",
  homeEyebrow: "Want to book a one-time strategy call instead?",
  headline: "Not ready for a full program? Let's start with one call.",
  text: "Bring me whatever you're stuck on with LinkedIn. In 60 minutes, I'll review your profile, help you figure out what you should be known for, and send you home with a personalised 30-Day LinkedIn Action Plan.",
  servicesText:
    "Before our call, I'll go through your profile: your positioning, headline, About and Featured sections, and your CTA. Then you get the full hour with me. Bring whatever you're stuck on, from \"not sure what to post\" to \"I can't reach the right people.\" We'll figure out what you should be known for, your key content pillars, and how to turn your network into leads.",
  after:
    "After the call: You'll get a personalized 30-Day LinkedIn Action Plan, so you know exactly what to focus on next.",
  cta: booking.strategyCallLabel,
  ctaHref: booking.strategyHref,
} as const;

/** Compact preview for Home service section */
export const servicePreview = [
  {
    label: dwySprint.label,
    headline: dwySprint.headline,
    href: "/services#dwy",
  },
  {
    label: dfyProgram.label,
    headline: dfyProgram.headline,
    href: "/services#dfy",
  },
  {
    label: strategyCall.label,
    headline: strategyCall.headline,
    href: "/services#strategy-call",
  },
] as const;
