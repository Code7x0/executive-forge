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
              <AliveCard as="article" className="group flex h-full flex-col p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(225,29,46,0.16),transparent_70%)] opacity-40 transition duration-500 group-hover:opacity-100"
                />
                <p className="relative text-[0.85rem] text-[var(--brand)]">{s.label}</p>
                <h3 className="display relative mt-3 text-[1.65rem] leading-[1.15]">{s.title}</h3>
                <p className="relative mt-4 flex-1 text-[0.98rem] text-[var(--soft)]">{s.text}</p>
                <Link
                  href={s.href}
                  className="relative mt-8 inline-flex items-center gap-1 text-[0.95rem] text-[var(--ink)] transition group-hover:gap-2.5"
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
