"use client";

import { about } from "@/data/content";
import { Reveal } from "@/components/providers/Reveal";
import {
  OrbitCardStack,
  type OrbitStackItem,
} from "@/components/ui/orbit-card-stack";

const orbitItems: OrbitStackItem[] = about.photos.map((photo, index) => ({
  name: `${about.name} — ${index + 1}`,
  role: about.role,
  description: about.lead,
  image: photo.src,
}));

export function About() {
  return (
    <section id="about" className="section-mesh surface-alt overflow-visible py-[var(--section-y)]">
      <div className="page-shell grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="display mt-4 max-w-[14ch] text-[clamp(2.1rem,4vw,3.2rem)]">{about.title}</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="mt-6 max-w-[38ch] text-[1.12rem] leading-[1.55] text-[var(--ink)]">{about.lead}</p>
          </Reveal>
          <div className="mt-6 max-w-[44ch] space-y-4 text-[var(--soft)]">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p.slice(0, 24)} delay={80 + i * 40}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-8 border-l-2 border-[var(--brand)] pl-4">
              <p className="display text-2xl">{about.name}</p>
              <p className="mt-1 text-[0.95rem] text-[var(--soft)]">{about.role}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80} className="relative z-10 overflow-visible lg:col-span-7">
          <div className="mx-auto h-[640px] w-full max-w-[820px] overflow-visible lg:h-[680px] lg:max-w-none">
            <OrbitCardStack
              items={orbitItems}
              imageOnly
              defaultActiveIndex={1}
              spread={148}
              lift={32}
              className="!overflow-visible px-4 py-4 sm:px-8"
              cardClassName="bg-[var(--elevated)] border-white/10"
            />
          </div>
          <p className="mt-2 text-center text-[0.85rem] text-[var(--soft)]">
            Hover or focus a card to fan the stack
          </p>
        </Reveal>
      </div>
    </section>
  );
}
