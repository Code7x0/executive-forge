import type { Metadata } from "next";
import { BookingCta } from "@/components/site/booking-cta";
import { CaseFilters } from "@/components/site/case-filters";
import { Section } from "@/components/ui/section";
import { caseStudies, caseStudiesIntro } from "@/content/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Client stories with challenges, strategy, timeframes, and verified outcomes from Executive Forge.",
};

/**
 * Case studies — editorial proof page.
 * Intro stays short so stories begin quickly; filters + TOC then the nine bands.
 */
export default function CaseStudiesPage() {
  return (
    <>
      <Section pad="compact" className="border-b border-line">
        <p data-reveal="up" className="type-label text-muted">
          {caseStudies.length} client stories
        </p>
        <h1
          data-reveal="up"
          className="type-display-sm mt-4 max-w-[14ch] [text-wrap:balance]"
        >
          {caseStudiesIntro.headline}
        </h1>
        <p
          data-reveal="fade"
          className="type-lede mt-6 max-w-[36ch] text-ink-soft [text-wrap:pretty]"
        >
          {caseStudiesIntro.text}
        </p>
      </Section>

      <div className="pb-[var(--section-y)] pt-10">
        <CaseFilters />
      </div>

      <BookingCta variant="cases" />
    </>
  );
}
