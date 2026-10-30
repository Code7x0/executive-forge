"use client";

import { stats } from "@/data/content";
import { Reveal } from "@/components/providers/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { AliveCard } from "./AliveCard";

export function Stats() {
  return (
    <section className="section-mesh pb-[var(--section-y)]">
      <div className="page-shell">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item, i) => (
            <Reveal key={item.label} delay={i * 50}>
              <AliveCard glass className="h-full px-6 py-7">
                <p className="display text-[2.35rem] tracking-[-0.04em] md:text-[2.7rem]">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-2 text-[0.95rem] text-[var(--soft)]">{item.label}</p>
              </AliveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
