import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/sites/executive-forge/Header";
import { Footer } from "@/components/sites/executive-forge/Footer";
import { Reveal } from "@/components/providers/Reveal";
import { Faq } from "@/components/sites/executive-forge/Faq";
import { CtaBand } from "@/components/sites/executive-forge/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DWY Authority Sprint, Done-For-You Personal Branding, and 1:1 Strategy Call with Executive Forge.",
};

const weekOne = [
  "What you should be known for",
  "Who you want to attract",
  "What makes you different",
  "Your personal brand positioning",
  "Headline and About section optimization",
  "Featured section recommendations",
];
const weekTwo = [
  "3–5 content pillars",
  "Your POV and key topics",
  "Content angles and story ideas",
  "Hook and CTA frameworks",
  "Your content calendar",
];
const weekThree = [
  "I review your real posts",
  "We improve your hooks and post structure",
  "We make sure your content sounds like you",
  "We refine your ideas and messaging",
];
const weekFour = [
  "LinkedIn engagement strategy",
  "Building the right network",
  "Starting better conversations, and turning them into opportunities",
  "Reviewing what's working",
  "Your next 30-day plan",
];
const dfyIncluded = [
  "Personal brand positioning and ICP alignment",
  "A one-time LinkedIn profile rebuild",
  "Voice extraction through a recorded interview, so every post sounds like you",
  "Content pillars and a monthly strategy",
  "12 LinkedIn posts a month, from your stories, opinions and industry insights",
  "Research, writing, editing, and design where needed",
  "A content calendar and simple approval workflow",
  "Monthly performance reporting",
];
const processSteps = [
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
const alwaysOn = [
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
];

function WeekCard({
  title,
  intro,
  points,
}: {
  title: string;
  intro?: string;
  points: string[];
}) {
  return (
    <Reveal className="site-card p-6 md:p-7">
      <h3 className="display text-[1.45rem]">{title}</h3>
      {intro ? <p className="mt-3 text-[var(--soft)]">{intro}</p> : null}
      <ul className="mt-5 space-y-2.5 text-[var(--soft)]">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-12 pb-16 md:pt-16 md:pb-20">
          <div className="page-shell max-w-3xl text-center md:text-left">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h1 className="display mt-4 text-[clamp(2.3rem,5vw,3.5rem)]">
                Two ways to work with me. One goal: get you seen by the right people.
              </h1>
            </Reveal>
            <Reveal delay={70}>
              <p className="mt-6 max-w-[52ch] text-[1.05rem] text-[var(--soft)] md:mx-0 mx-auto">
                Some of you want to learn to do this yourself, with someone in your corner. Some of
                you want it done for you, in your voice, while you run your business. Both work, so
                pick the one that fits your life right now!
              </p>
            </Reveal>
            <nav className="mt-10 grid gap-3 md:grid-cols-3">
              {[
                { href: "#dwy-sprint", label: "Done-With-You · 4 weeks", title: "Authority Sprint" },
                { href: "#dfy-retainer", label: "Done-For-You · Monthly", title: "Personal Branding" },
                { href: "#one-time-strategy", label: "60 minutes · 1:1", title: "Strategy Call" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="site-card p-5 text-left transition hover:-translate-y-0.5">
                  <p className="text-[0.82rem] text-[var(--soft)]">{item.label}</p>
                  <p className="display mt-2 text-xl">{item.title}</p>
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section id="dwy-sprint" className="surface-alt py-[var(--section-y)]">
          <div className="page-shell">
            <Reveal>
              <p className="text-[0.9rem] text-[var(--brand)]">Done-With-You · 4 weeks · 1:1</p>
              <h2 className="display mt-3 max-w-[18ch] text-[clamp(1.9rem,3.8vw,3rem)]">
                Build your personal brand with me, while you do the posting.
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-5 max-w-[52ch] text-[1.02rem] text-[var(--soft)]">
                You know your work, but building a personal brand on LinkedIn gets confusing when
                you&apos;re doing everything yourself. That&apos;s where I come in! For 4 weeks,
                we&apos;ll build your personal brand together while you handle the actual execution.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <WeekCard
                title="Week 1: Get your positioning right"
                intro="We start with the basics and make sure your profile and personal brand are crystal clear."
                points={weekOne}
              />
              <WeekCard title="Week 2: Build your content system." points={weekTwo} />
              <WeekCard title="Week 3: Work on your actual content." points={weekThree} />
              <WeekCard
                title="Week 4: Build your growth system"
                intro="We'll look at how to get your content in front of the right people."
                points={weekFour}
              />
            </div>
            <Reveal className="site-card mt-8 p-6 md:p-8">
              <p className="text-[var(--ink)]">
                <span className="text-[var(--brand)]">What you get:</span> 4 weekly 1:1 calls ·
                Personalized strategy · Content frameworks & reviews · Execution guidance ·
                Accountability
              </p>
              <p className="mt-4 text-[var(--soft)]">
                <span className="text-[var(--ink)]">One important thing:</span> This is
                Done-With-You, not Done-For-You. You&apos;ll do the actual posting. I&apos;ll be
                right there to guide you.
              </p>
              <Link href="#book" className="btn btn-primary mt-7">
                Start the 4-week sprint
              </Link>
            </Reveal>
          </div>
        </section>

        <section id="dfy-retainer" className="py-[var(--section-y)]">
          <div className="page-shell">
            <Reveal>
              <p className="text-[0.9rem] text-[var(--brand)]">Done-For-You · Monthly</p>
              <h2 className="display mt-3 max-w-[18ch] text-[clamp(1.9rem,3.8vw,3rem)]">
                Your expertise, your voice, without you writing every post.
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-5 max-w-[52ch] text-[1.02rem] text-[var(--soft)]">
                For founders, executives and experts who have so much to say but zero time to write
                it. My team & I handle the strategy, the writing and the growth, and you approve
                everything before it goes live.
              </p>
            </Reveal>
            <Reveal className="mt-10">
              <h3 className="display text-2xl">What&apos;s included</h3>
            </Reveal>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {dfyIncluded.map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * 30} className="site-card px-5 py-4 text-[var(--soft)]">
                    {item}
                  </Reveal>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Reveal className="site-card p-6">
                <h3 className="display text-xl">Want leads, not just likes?</h3>
                <p className="mt-3 text-[var(--soft)]">
                  Add appointment setting. Strategic engagement, prospect research, decision-maker
                  lists, and 10 high-quality DM openers a day. No bots. Just real conversations.
                </p>
              </Reveal>
              <Reveal delay={50} className="site-card p-6">
                <h3 className="display text-xl">Taking it to Instagram?</h3>
                <p className="mt-3 text-[var(--soft)]">
                  We can repurpose your LinkedIn authority into Reels and carousels too. Your time:
                  about 30–60 minutes a week.
                </p>
              </Reveal>
            </div>
            <Reveal className="mt-8">
              <Link href="#book" className="btn btn-primary">
                Book an intro call
              </Link>
            </Reveal>
          </div>
        </section>

        <section id="one-time-strategy" className="surface-alt py-[var(--section-y)]">
          <div className="page-shell max-w-3xl">
            <Reveal>
              <p className="text-[0.9rem] text-[var(--brand)]">60 minutes · 1:1</p>
              <h2 className="display mt-3 text-[clamp(1.9rem,3.8vw,3rem)]">
                Not sure yet? Start with a 1:1 Strategy Call
              </h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="mt-5 text-[1.02rem] text-[var(--soft)]">
                Before our call, I&apos;ll go through your profile: your positioning, headline, About
                and Featured sections, and your CTA. Then you get the full hour with me.
              </p>
              <p className="mt-4 text-[1.02rem] text-[var(--soft)]">
                <span className="text-[var(--ink)]">After the call:</span> You&apos;ll get a
                personalized 30-Day LinkedIn Action Plan.
              </p>
            </Reveal>
            <Reveal delay={90} className="mt-8">
              <Link href="#book" className="btn btn-brand">
                Book your strategy call
              </Link>
            </Reveal>
          </div>
        </section>

        <section className="py-[var(--section-y)]">
          <div className="page-shell">
            <Reveal>
              <h2 className="display max-w-[18ch] text-[clamp(1.9rem,3.8vw,3rem)]">
                From first call to a steady pipeline, in seven simple steps.
              </h2>
            </Reveal>
            <ol className="mt-10 grid list-none gap-3 p-0 md:grid-cols-2">
              {processSteps.map((step, i) => (
                <li key={step.title}>
                  <Reveal delay={i * 35} className="site-card p-6">
                    <p className="text-[0.8rem] text-[var(--brand)]">0{i + 1}</p>
                    <h3 className="display mt-2 text-xl">{step.title}</h3>
                    <p className="mt-3 text-[var(--soft)]">{step.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="surface-alt py-[var(--section-y)]">
          <div className="page-shell">
            <Reveal>
              <h2 className="display max-w-[12ch] text-[clamp(1.9rem,3.5vw,2.8rem)]">
                In every engagement
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {alwaysOn.map((item, i) => (
                <Reveal key={item.title} delay={i * 40} className="site-card p-5">
                  <h3 className="display text-xl">{item.title}</h3>
                  <p className="mt-3 text-[var(--soft)]">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
