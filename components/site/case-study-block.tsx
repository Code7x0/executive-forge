import Image from "next/image";
import type { CaseMedia, CaseStudy } from "@/content/types";
import { CaseStudyNav } from "@/components/site/case-study-nav";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { outcomeMetrics } from "@/lib/case-metrics";
import { cn } from "@/lib/cn";

type CaseStudyBlockProps = {
  study: CaseStudy;
  index: number;
  total: number;
  prev?: CaseStudy | null;
  next?: CaseStudy | null;
};

function EvidenceImage({
  item,
  className,
  sizes,
  priority = false,
}: {
  item: CaseMedia;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  const fit = item.fit ?? "cover";
  return (
    <div
      data-reveal="image"
      className={cn("case-evidence relative overflow-hidden border", className)}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={sizes}
        quality={75}
        priority={priority}
        className={
          fit === "contain"
            ? "object-contain bg-ink/5 p-3 md:p-5"
            : "object-cover"
        }
      />
    </div>
  );
}

function Narrative({
  study,
  invert,
}: {
  study: CaseStudy;
  invert: boolean;
}) {
  const label = invert ? "text-cream/55" : "text-muted";
  const body = invert ? "text-cream/85" : "text-ink-soft";

  return (
    <>
      <div>
        <h3 className={cn("type-label", label)}>Starting point</h3>
        <p className={cn("type-body-lg mt-3 [text-wrap:pretty]", body)}>
          {study.challenge}
        </p>
      </div>
      <div>
        <h3 className={cn("type-label", label)}>The work</h3>
        <p className={cn("type-body-lg mt-3 [text-wrap:pretty]", body)}>
          {study.strategy}
        </p>
      </div>
    </>
  );
}

export function CaseStudyBlock({
  study,
  index,
  total,
  prev,
  next,
}: CaseStudyBlockProps) {
  const invert = index % 2 === 1;
  const layout = study.layout ?? (index % 2 === 0 ? "split" : "stack");
  const hero = study.media[0];
  const rest = study.media.slice(1);
  const rail = rest.slice(0, 3);
  const typeLed = layout === "type-led" || study.media.length === 0;
  const metrics = outcomeMetrics(study.outcomes, 3);
  const n = String(index + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  return (
    <article
      id={study.slug}
      data-case-block
      className={cn(
        "case-study scroll-mt-[calc(var(--header-h)+1rem)] border-t border-line py-[var(--section-y)]",
        invert ? "case-study--ink bg-ink text-cream" : "case-study--cream bg-cream text-ink",
      )}
    >
      <div className="mx-auto w-full max-w-[min(90rem,100%)] px-[clamp(1.25rem,4vw,2.75rem)]">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div data-reveal="up" className="min-w-0">
            <p
              className={cn(
                "type-label",
                invert ? "text-cream/55" : "text-muted",
              )}
            >
              {n} / {totalLabel} · {study.client}
            </p>
            <h2
              className={cn(
                "type-h2 mt-3 max-w-[20ch] [text-wrap:balance]",
                invert ? "text-cream" : "text-ink",
              )}
            >
              {study.title}
            </h2>
            <p
              className={cn(
                "type-label mt-4 max-w-[62ch]",
                invert ? "text-cream/55" : "text-muted",
              )}
            >
              {study.timeframe} · {study.niche} · {study.services}
            </p>
          </div>
        </header>

        {/* Oversized metrics — figures already present in outcomes */}
        {metrics.length > 0 ? (
          <ul
            data-reveal-stagger
            className="case-metrics mt-10 grid gap-6 border-y border-current/15 py-8 md:grid-cols-3 md:gap-8"
          >
            {metrics.map(({ punch, label }) => (
              <li key={label} className="min-w-0">
                {punch ? (
                  <p
                    className={cn(
                      "case-metric-punch font-[family-name:var(--font-display-family)] tracking-[-0.03em]",
                      invert ? "text-cream" : "text-ink",
                    )}
                  >
                    {punch}
                  </p>
                ) : null}
                <p
                  className={cn(
                    "type-body mt-2 max-w-[28ch] text-sm leading-snug [text-wrap:pretty]",
                    invert ? "text-cream/70" : "text-ink-soft",
                  )}
                >
                  {label}
                </p>
              </li>
            ))}
          </ul>
        ) : null}

        {typeLed ? (
          <div className="mt-12 max-w-3xl space-y-10">
            <Narrative study={study} invert={invert} />
          </div>
        ) : layout === "stack" ? (
          <div className="mt-12 space-y-10">
            {hero ? (
              <EvidenceImage
                item={hero}
                className="aspect-[21/9] w-full"
                sizes="(min-width: 1280px) 1400px, 100vw"
                priority={index === 0}
              />
            ) : null}
            <div className="grid gap-10 md:grid-cols-2">
              <Narrative study={study} invert={invert} />
            </div>
          </div>
        ) : layout === "rail" ? (
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="space-y-8 lg:col-span-4">
              <Narrative study={study} invert={invert} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
              {hero ? (
                <EvidenceImage
                  item={hero}
                  className="aspect-[4/3] sm:col-span-2"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  priority={index === 0}
                />
              ) : null}
              {rail.map((item) => (
                <EvidenceImage
                  key={item.src}
                  item={item}
                  className="aspect-[4/3]"
                  sizes="(min-width: 1024px) 28vw, 50vw"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
            <div className="space-y-8 lg:col-span-5">
              <Narrative study={study} invert={invert} />
            </div>
            <div className="lg:col-span-7">
              {hero ? (
                <EvidenceImage
                  item={hero}
                  className="aspect-[16/10] w-full"
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  priority={index === 0}
                />
              ) : null}
            </div>
          </div>
        )}

        {/* Full outcomes list (verbatim) */}
        <div className="mt-14">
          <h3
            className={cn(
              "type-label",
              invert ? "text-cream/55" : "text-muted",
            )}
          >
            Outcomes
          </h3>
          <ul data-reveal-stagger className="mt-6 grid gap-4 md:grid-cols-2">
            {study.outcomes.map((outcome) => (
              <li
                key={outcome}
                className={cn(
                  "border-t pt-4 type-lede [text-wrap:pretty]",
                  invert ? "border-cream/15 text-cream" : "border-line text-ink",
                )}
              >
                {outcome}
              </li>
            ))}
          </ul>
          {study.highlight ? (
            <p
              data-reveal="up"
              className={cn(
                "type-h3 mt-10 max-w-[28ch] [text-wrap:pretty]",
                invert ? "text-cream" : "text-ink",
              )}
            >
              {study.highlight}
            </p>
          ) : null}
        </div>

        {!typeLed && layout !== "rail" && rest.length > 0 ? (
          <div
            className={cn(
              "mt-12 grid gap-4",
              rest.length === 1
                ? "max-w-xl"
                : rest.length === 2
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {rest.map((item) => (
              <EvidenceImage
                key={item.src}
                item={item}
                className="aspect-[4/3]"
                sizes="(min-width: 1024px) 30vw, 50vw"
              />
            ))}
          </div>
        ) : null}

        {study.testimonial ? (
          <div className="mt-12 max-w-3xl">
            <TestimonialCard
              item={study.testimonial}
              tone={invert ? "ink" : "cream"}
            />
          </div>
        ) : null}

        <CaseStudyNav prev={prev} next={next} invert={invert} />
      </div>
    </article>
  );
}
