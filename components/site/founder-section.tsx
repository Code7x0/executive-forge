"use client";

import { FounderPhotoStack } from "@/components/site/founder-photo-stack";
import { Section } from "@/components/ui/section";
import { founder } from "@/content/site";

const founderPhotos = [
  { src: founder.images[0], alt: founder.photoAlts[0] },
  { src: founder.images[1], alt: founder.photoAlts[1] },
  { src: founder.images[2], alt: founder.photoAlts[2] },
] as const;

function FounderBio() {
  return (
    <div className="min-w-0">
      <p className="type-label text-cream/55">{founder.sectionLabel}</p>
      <h2 className="type-h2 mt-3 text-cream">{founder.headline}</h2>
      <div className="mt-6 space-y-4">
        {founder.paragraphs.map((p) => (
          <p key={p.slice(0, 32)} className="type-body-lg text-cream/85">
            {p}
          </p>
        ))}
      </div>
      <p className="type-label mt-8 text-cream/55">{founder.attribution}</p>
    </div>
  );
}

/**
 * Founder / About — biography + scroll-driven overlapping photo stack.
 * Desktop: pinned two-column stage. Mobile: bio first, then shorter stack pin.
 */
export function FounderSection() {
  return (
    <Section
      tone="ink"
      id="founder"
      pad="none"
      contain={false}
      className="overflow-visible"
    >
      {/* Mobile: readable bio, then stack track */}
      <div className="px-[var(--gutter)] pt-[var(--section-y)] lg:hidden">
        <div className="mx-auto max-w-[var(--container-max)]">
          <FounderBio />
        </div>
      </div>

      <div
        data-founder-stack-track
        className="founder-stack-track relative h-[180vh] w-full lg:h-[230vh]"
      >
        <div className="founder-stack-stage sticky top-0 flex min-h-[min(100svh,42rem)] items-center lg:min-h-svh">
          <div className="mx-auto grid w-full max-w-[var(--container-max)] gap-10 px-[var(--gutter)] py-[var(--section-y-sm)] lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-[var(--section-y)]">
            <div className="hidden lg:block">
              <FounderBio />
            </div>
            <FounderPhotoStack photos={founderPhotos} />
          </div>
        </div>
      </div>
    </Section>
  );
}
