"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { Reveal } from "@/components/providers/Reveal";
import { AliveCard } from "./AliveCard";

export function Testimonials() {
  return (
    <section className="section-mesh py-[var(--section-y)]">
      <div className="page-shell">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow">Client love</p>
          <h2 className="display mt-3 text-[clamp(2rem,4vw,3rem)]">
            Don&apos;t just take my word for it!
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 55}>
              <AliveCard as="article" glass className="flex h-full flex-col p-6">
                <motion.span
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.04, type: "spring", bounce: 0.2, duration: 0.45 }}
                  className="display text-3xl leading-none text-[var(--brand)]"
                  aria-hidden
                >
                  “
                </motion.span>
                <p className="mt-2 flex-1 text-[1.02rem] leading-[1.55] text-[var(--ink)]">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                  {t.portrait ? (
                    <div className="relative h-11 w-11 overflow-hidden rounded-full bg-[var(--secondary)] shadow-[var(--shadow-product)]">
                      <Image
                        src={t.portrait}
                        alt={t.name}
                        fill
                        className="object-cover object-[50%_20%]"
                        sizes="44px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--secondary)] text-[0.95rem] text-[var(--ink)]">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-[0.95rem] font-medium text-[var(--ink)]">{t.name}</p>
                    <p className="text-[0.82rem] text-[var(--soft)]">{t.role}</p>
                  </div>
                </div>
              </AliveCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
