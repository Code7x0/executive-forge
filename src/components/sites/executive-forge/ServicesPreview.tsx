"use client";

import Link from "next/link";
import { servicesPreview } from "@/data/content";
import { Reveal } from "@/components/providers/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { AliveCard } from "./AliveCard";

export function ServicesPreview() {
  return (
    <section className="section-mesh surface-alt py-[var(--section-y)]">
      <div className="page-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">How we work</p>
            <h2 className="display mt-3 max-w-[16ch] text-[clamp(2rem,4vw,3rem)]">
              Two ways to work with me. One goal: get you seen.
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <MagneticButton href="/services" className="btn btn-ghost">
              All services →
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {servicesPreview.map((s, i) => (
            <Reveal key={s.id} delay={i * 70}>
              <AliveCard
                as="article"
                className={`group flex h-full flex-col p-5 md:p-6${i % 2 === 1 ? " site-card-blue" : ""}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(111,140,255,0.28),transparent_70%)] opacity-50 transition duration-500 group-hover:opacity-100"
                />
                <p className="text-[0.85rem] text-[var(--brand)]">{s.label}</p>
                <h3 className="display mt-2 text-[1.45rem] leading-[1.15] md:text-[1.55rem]">{s.title}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-[var(--soft)]">{s.text}</p>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex items-center gap-1 text-[0.92rem] text-[var(--ink)] transition group-hover:gap-2.5"
                >
                  Learn more <span aria-hidden>→</span>
                </Link>
              </AliveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
