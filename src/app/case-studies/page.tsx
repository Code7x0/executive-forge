"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Header } from "@/components/sites/executive-forge/Header";
import { Footer } from "@/components/sites/executive-forge/Footer";
import { Reveal } from "@/components/providers/Reveal";
import { CtaBand } from "@/components/sites/executive-forge/CtaBand";
import { caseStudies } from "@/data/case-studies";
import { cn } from "@/lib/utils";

const filters = ["All", "Founders", "Finance", "Healthcare", "Coaching", "Leadership"] as const;

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => (filter === "All" ? caseStudies : caseStudies.filter((c) => c.sector === filter)),
    [filter],
  );

  return (
    <>
      <Header />
      <main>
        <section className="pt-12 pb-10 md:pt-16 md:pb-12">
          <div className="page-shell max-w-3xl">
            <Reveal>
              <p className="eyebrow">Case studies</p>
              <h1 className="display mt-4 text-[clamp(2.4rem,5vw,3.6rem)]">
                Real people. Real numbers. Real wins!
              </h1>
            </Reveal>
            <Reveal delay={70}>
              <p className="mt-5 max-w-[52ch] text-[1.05rem] text-[var(--soft)]">
                Founders, executives and experts across the UAE, Saudi Arabia, Oman, Hong Kong and
                India. Here&apos;s where they started, what we built together, and what changed.
              </p>
            </Reveal>

            <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filters">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={filter === item}
                  onClick={() => setFilter(item)}
                  className={cn(
                    "rounded-full px-4 py-2 text-[0.88rem] transition",
                    filter === item
                      ? "bg-[var(--ink)] text-[var(--cream)]"
                      : "border border-[var(--border)] bg-[var(--elevated)] text-[var(--soft)] hover:text-[var(--ink)]",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-[var(--section-y)]">
          <div className="page-shell space-y-8 md:space-y-10">
            {visible.map((study, index) => (
              <article
                key={study.slug}
                id={study.slug}
                className="site-card grid overflow-hidden lg:grid-cols-12"
              >
                <Reveal className="relative aspect-[4/3] bg-[var(--secondary)] lg:col-span-5 lg:aspect-auto lg:min-h-[420px]">
                  <Image
                    src={study.image}
                    alt={`${study.name} case study`}
                    fill
                    className="object-contain p-5 md:p-8"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={index === 0}
                  />
                </Reveal>
                <div className="p-6 md:p-9 lg:col-span-7">
                  <Reveal delay={40}>
                    <p className="text-[0.82rem] font-medium tracking-[0.08em] uppercase text-[var(--brand)]">
                      {study.sector}
                    </p>
                    <h2 className="display mt-3 text-[clamp(1.35rem,2.4vw,1.95rem)] leading-[1.2]">
                      {study.headline}
                    </h2>
                    <p className="mt-2 text-[0.92rem] text-[var(--soft)]">
                      {study.name} · {study.role}
                    </p>
                  </Reveal>
                  <Reveal delay={70}>
                    <p className="mt-5 text-[1rem] leading-relaxed text-[var(--soft)]">{study.summary}</p>
                    <p className="mt-4 text-[1rem] leading-relaxed text-[var(--ink)]">{study.result}</p>
                    {study.quote ? (
                      <p className="mt-5 border-l-2 border-[var(--brand)] pl-4 text-[1.05rem] italic text-[var(--ink)]">
                        “{study.quote}”
                      </p>
                    ) : null}
                    <p className="mt-5 text-[0.88rem] text-[var(--soft)]">
                      <span className="text-[var(--ink)]">Client Niche:</span> {study.niche}
                    </p>
                    <p className="mt-1 text-[0.88rem] text-[var(--soft)]">
                      <span className="text-[var(--ink)]">Services Provided:</span> {study.services}
                    </p>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-4">
          <div className="page-shell flex flex-col gap-5 border-t border-[var(--border)] pt-12 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <h2 className="display max-w-[14ch] text-[clamp(1.9rem,3.5vw,2.8rem)]">
                Want to be our next best kept client?
              </h2>
            </Reveal>
            <Reveal delay={60} className="flex flex-wrap gap-3">
              <Link href="#book" className="btn btn-primary">
                Book an intro call
              </Link>
              <Link href="/services" className="btn btn-ghost">
                View services
              </Link>
            </Reveal>
          </div>
        </section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
