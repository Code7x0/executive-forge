import type { Metadata } from "next";
import { DwyJourney } from "@/components/site/dwy-journey";
import { ProcessGallery } from "@/components/site/process-gallery";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import {
  dfyProgram,
  dwySprint,
  principles,
  servicesIntro,
  strategyCall,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Done-With-You Authority Sprint, Done-For-You personal branding, and a 60-minute strategy call with Suhana Siddika.",
};

/**
 * Services — order matches website-copy.md:
 * Intro → DWY → DFY → Strategy call → Process → In every engagement
 */
export default function ServicesPage() {
  return (
    <>
      <Section className="border-b border-line">
        <p data-reveal="up" className="type-label text-muted">
          Ways to work together
        </p>
        <h1
          data-reveal="up"
          className="type-display-sm mt-4 max-w-[16ch] [text-wrap:balance]"
        >
          {servicesIntro.headline}
        </h1>
        <p
          data-reveal="fade"
          className="type-lede mt-6 max-w-[40ch] text-ink-soft [text-wrap:pretty]"
        >
          {servicesIntro.text}
        </p>
      </Section>

      {/* Program 1: DWY Authority Sprint */}
      <Section
        id="dwy"
        tone="ink"
        width="full"
        containerClassName="dwy-section"
      >
        <div className="dwy-section__intro">
          <p data-reveal="up" className="type-label text-cream/55">
            {dwySprint.label}
          </p>
          <h2
            data-reveal="up"
            className="dwy-section__headline mt-5 text-cream [text-wrap:balance]"
          >
            {dwySprint.headline}
          </h2>
          <p
            data-reveal="fade"
            className="dwy-section__lede mt-7 text-cream/85 [text-wrap:pretty]"
          >
            {dwySprint.text}
          </p>
        </div>

        <DwyJourney weeks={dwySprint.weeks} className="mt-16 md:mt-20" />

        <div className="dwy-section__outro">
          <p className="dwy-section__outro-lede text-cream">
            What you get: {dwySprint.whatYouGet}
          </p>
          <p className="dwy-section__outro-body mt-5 text-cream/70">
            One important thing: {dwySprint.disclaimer}
          </p>
          <div className="mt-8">
            <Button href={dwySprint.ctaHref}>{dwySprint.cta}</Button>
          </div>
        </div>
      </Section>

      {/* Program 2: Done-For-You */}
      <Section id="dfy">
        <p data-reveal="up" className="type-label text-muted">
          {dfyProgram.label}
        </p>
        <h2 data-reveal="up" className="type-h2 mt-3 max-w-[16ch]">
          {dfyProgram.headline}
        </h2>
        <p data-reveal="fade" className="type-body-lg mt-6 max-w-[42rem] text-ink-soft">
          {dfyProgram.text}
        </p>

        <h3 className="type-label mt-12 text-muted">What&apos;s included</h3>
        <ul className="mt-6 space-y-0">
          {dfyProgram.included.map((item) => (
            <li
              key={item}
              className="border-t border-line py-4 type-body text-ink-soft"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-6">
          {dfyProgram.addOns.map((addon) => (
            <p key={addon.title} className="type-body max-w-[42rem] text-ink-soft">
              {addon.body}
            </p>
          ))}
        </div>

        <p className="type-label mt-10 text-muted">{dfyProgram.timeNote}</p>
        <div className="mt-8">
          <Button href={dfyProgram.ctaHref}>{dfyProgram.cta}</Button>
        </div>
      </Section>

      {/* Not sure yet? Start with a 1:1 Strategy Call */}
      <Section id="strategy-call" tone="ink" pad="compact">
        <p data-reveal="up" className="type-label text-cream/55">
          {strategyCall.eyebrow}
        </p>
        <p data-reveal="up" className="type-label mt-4 text-cream/45">
          {strategyCall.label}
        </p>
        <p className="type-body-lg mt-6 max-w-[40rem] text-cream/85">
          {strategyCall.servicesText}
        </p>
        <p className="type-body mt-4 max-w-[40rem] text-cream/70">
          {strategyCall.after}
        </p>
        <div className="mt-8">
          <Button href={strategyCall.ctaHref}>{strategyCall.cta}</Button>
        </div>
      </Section>

      {/* Our process — editorial cream panels on amber field */}
      <Section
        id="process"
        tone="transparent"
        width="full"
        className="process-gallery-section"
        containerClassName="process-gallery-shell"
        pad="none"
      >
        <ProcessGallery />
      </Section>

      {/* In every engagement */}
      <Section tone="ink" id="principles">
        <p data-reveal="up" className="type-label text-cream/55">
          In every engagement
        </p>
        <ul data-reveal-stagger className="mt-12 grid gap-8 md:grid-cols-2">
          {principles.map((item) => (
            <li key={item.title} className="border-t border-cream/15 pt-6">
              <h3 className="type-h3 text-cream">{item.title}</h3>
              <p className="type-body mt-3 text-cream/75">{item.body}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
