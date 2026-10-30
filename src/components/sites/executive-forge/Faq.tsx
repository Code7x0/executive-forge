"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/data/content";
import { Reveal } from "@/components/providers/Reveal";

export function Faq() {
  const baseId = useId();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-mesh surface-alt py-[var(--section-y)]">
      <div className="page-shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-3 max-w-[10ch] text-[clamp(2rem,4vw,3rem)]">Questions, answered</h2>
          <p className="mt-4 max-w-[30ch] text-[var(--soft)]">
            Straight answers about how we work, who we work with, and what to expect.
          </p>
        </Reveal>
        <Reveal delay={60} className="lg:col-span-8">
          {faqItems.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="faq-item">
                <h3>
                  <button
                    type="button"
                    id={`${baseId}-b-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`${baseId}-p-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="faq-q">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-[var(--brand)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`${baseId}-p-${index}`}
                      role="region"
                      aria-labelledby={`${baseId}-b-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 max-w-[58ch] text-[var(--soft)]">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
