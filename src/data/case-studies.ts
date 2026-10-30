export type CaseStudy = {
  slug: string;
  sector: "Founders" | "Finance" | "Healthcare" | "Coaching" | "Leadership";
  headline: string;
  name: string;
  role: string;
  summary: string;
  result: string;
  quote?: string;
  niche: string;
  services: string;
  image: string;
  gallery?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pooja-lakhani",
    sector: "Healthcare",
    headline: "How we took a brand-new account from 0 to 7,000 followers in one month...",
    name: "Pooja Lakhani",
    role: "Registered Dietitian · Kids Food Clinic",
    summary:
      "Pooja is a Registered Dietitian with over ten years in clinical nutrition and real expertise in Baby Led Weaning. Together with her husband, a NICU pediatrician, she runs Kids Food Clinic. When we started, the account had 0 posts and 0 followers.",
    result:
      "Within about 30 days and 30 posts, she went from 0 to 7,002 followers, with 2.3M views in 30 days. One Reel alone reached 2,186,634 views.",
    quote: "7k followers in a month. Far from my own expectation.",
    niche: "Pediatric Nutrition, Baby Led Weaning",
    services: "Positioning, Content Strategy, Reels & Content Creation (Instagram)",
    image: "/assets/testimonials/clean/pooja-case.png",
  },
  {
    slug: "remy",
    sector: "Finance",
    headline:
      "How a capital strategist grew 50% and brought in inbound from capital firms in 16 weeks...",
    name: "Remy Zambarakji",
    role: "Frontier Market Capital Strategist",
    summary:
      "Remy is a Frontier Market Capital Strategist covering Syria, Iraq and the UAE's financial centres. He was well known inside his firm, but not outside it. When we started, he had 5,301 followers and 2,621 impressions a week.",
    result:
      "Over 16 weeks, he grew from 5,301 to 7,975 followers (+50%), was featured in Best of LinkedIn: Strategy & Consulting, and received inbound from a capital fund, an institutional partnerships lead, and a podcast.",
    niche: "Frontier Markets, Capital Strategy, Finance",
    services:
      "Done-For-You LinkedIn: Positioning, Profile Optimisation, Ghostwriting, Daily Engagement, Connection Strategy",
    image: "/assets/testimonials/clean/remy-case.png",
  },
  {
    slug: "dr-arif",
    sector: "Healthcare",
    headline: "How a pediatric neurologist went from unknown online to 22,000+ profile views...",
    name: "Dr Arif Khan",
    role: "Pediatric Neurologist · Founder, Neuropedia",
    summary:
      "Dr Arif Khan is a pediatric neurologist, Founder of Neuropedia and Director of Gene Therapy at Fakeeh University Hospital. His credentials are seriously impressive, but his LinkedIn didn't show any of it.",
    result:
      "His profile views grew to 22,000+, a 21,000% increase. He received a speaker invitation to the HealthInfluencer Summit, major conference speaking requests, and award invitations.",
    niche: "Gene Therapy, Pediatric Neurology, Healthcare Leadership",
    services: "Positioning, Content Strategy, Ghostwriting, Thought Leadership",
    image: "/assets/testimonials/clean/deck-1.png",
  },
  {
    slug: "hussain",
    sector: "Founders",
    headline: "How a Hong Kong SaaS founder booked 25+ qualified calls in the UAE in 90 days...",
    name: "Hussain Ali",
    role: "SaaS Founder",
    summary:
      "Hussain is a SaaS founder in Hong Kong who wanted to break into the UAE. He had a proven product, but no local presence, no media coverage, and zero inbound conversations.",
    result:
      "Within 90 days: 25+ qualified calls, investor conversations, 3 media features, and 300+ new UAE-based connections.",
    quote:
      "I just got off a call with the CFO, and we are mind blown by the inquiries we are getting. 5 calls in 4 days, while sitting in Hong Kong.",
    niche: "SaaS, Tech Founder, Market Expansion",
    services: "Positioning, Ghostwriting, LinkedIn Networking Strategy, Media Features",
    image: "/assets/testimonials/clean/hussain.png",
  },
  {
    slug: "mathew",
    sector: "Founders",
    headline: "How a consulting CEO closed $16K in 28 days by ditching salesy DMs...",
    name: "Mathew",
    role: "CEO, Consulting Firm · Saudi Arabia",
    summary:
      "Mathew is the CEO of a consulting firm in Saudi Arabia, selling high-ticket services across the GCC. His outreach felt salesy, and he was getting 2 to 3 calls and 0 to 1 deals a month.",
    result:
      "In 60 days: 22 to 26 qualified conversations, 9 to 11 calls booked, and 2 high-ticket deals at $4K a month each. That's $16K closed in the first 28 days.",
    niche: "High-Ticket B2B Consulting (GCC)",
    services: "Positioning, Lead Demand System, DM Outreach Strategy, Lead Magnet",
    image: "/assets/testimonials/clean/deck-2.png",
  },
  {
    slug: "revanshi",
    sector: "Coaching",
    headline: "How a sales coach closed $10K in 60 days by posting for buyers, not likes...",
    name: "Revanshi",
    role: "Sales Coach for Founders",
    summary:
      "Revanshi is a sales coach for founders with around 4,800 followers. Her content attracted attention, not buyers: 6 to 8 inbound conversations and 2 to 3 calls a month.",
    result:
      "Within 60 days, she closed $10,000, had 12 to 15 inbound conversations, and 20 high-intent qualified calls.",
    niche: "Sales Coaching for Founders",
    services: "Positioning, Content Strategy, Ghostwriting, Lead Magnet Strategy",
    image: "/assets/testimonials/clean/deck-3.png",
  },
  {
    slug: "dr-marko",
    sector: "Coaching",
    headline: "How a wellness coach grew impressions by 60% while moving to Dubai...",
    name: "Dr Marko",
    role: "Wellness Coach",
    summary:
      "Dr Marko had 2,000 followers and decent engagement, but no clients from Dubai. His audience wasn't his ideal client, so he was attracting low-paying work.",
    result:
      "In 90 days, followers grew 21.8%, he reached 18,545 unique members, and earned 85,565 impressions, up 60.3%.",
    quote: "Few weeks ago, I had zero clients, now I already booked 3 calls.",
    niche: "Wellness Coaching (Dubai)",
    services: "Profile Repositioning, Lead Magnet Strategy",
    image: "/assets/testimonials/clean/deck-4.png",
  },
  {
    slug: "kensho",
    sector: "Leadership",
    headline: "How we positioned a PR agency's leadership team as the region's best...",
    name: "Kenshō Mindful Communications",
    role: "PR Agency Leadership · Oman",
    summary:
      "Kenshō Mindful Communications is a leading PR agency in Oman. Their CEO, CMO and COO wanted personal brands that matched the agency's standing in the region.",
    result:
      "We ghostwrote thought-leadership content for each executive, kept one consistent tone in line with Kenshō's standards, and built a full LinkedIn strategy around them.",
    quote:
      "Working with Suhana is like going to therapy... It's a process that sheds light on you, through which you can discover yourself and find what was forgotten.",
    niche: "PR & Communications Leadership (Oman)",
    services: "Ghostwriting, Thought Leadership, Executive Team LinkedIn Strategy",
    image: "/assets/testimonials/clean/deck-5.png",
  },
  {
    slug: "bhumika",
    sector: "Coaching",
    headline: "How one coaching client landed interviews with Amazon...",
    name: "Bhumika",
    role: "Finance Professional",
    summary:
      "Bhumika worked with me through Done-With-You coaching. After our sessions, she started reaching out to HR leads directly on LinkedIn.",
    result:
      "Two responded: Amazon, for a Senior Finance Associate role, and a talent agency, for a Director of Finance role. Both sent her resume straight to the interview round.",
    niche: "Finance Professional, Career Growth",
    services: "Done-With-You Coaching, Profile Optimisation, Outreach Strategy",
    image: "/assets/testimonials/clean/deck-6.png",
  },
];
