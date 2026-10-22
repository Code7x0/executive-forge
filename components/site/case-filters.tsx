"use client";

import { useMemo, useState } from "react";
import { CaseStudyBlock } from "@/components/site/case-study-block";
import { CaseStudyStack } from "@/components/site/case-study-stack";
import { CaseToc } from "@/components/site/case-toc";
import { Container } from "@/components/ui/container";
import { caseFilters, caseStudies } from "@/content/site";
import type { CaseFilter } from "@/content/types";
import { cn } from "@/lib/cn";

export function CaseFilters() {
  const [active, setActive] = useState<CaseFilter>("All");

  const visible = useMemo(() => {
    if (active === "All") return caseStudies;
    return caseStudies.filter((c) => c.filters.includes(active));
  }, [active]);

  const sequenceKey = visible.map((s) => s.slug).join("|");

  return (
    <>
      <Container>
        <div
          className="flex flex-wrap gap-2 border-b border-line pb-6"
          role="tablist"
          aria-label="Filter case studies"
        >
          {caseFilters.map((filter) => {
            const selected = active === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={selected}
                className={cn(
                  "type-label min-h-11 px-4 py-2 transition-colors duration-[var(--duration-fast)]",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
                  selected
                    ? "bg-ink text-cream"
                    : "bg-transparent text-ink hover:bg-ink/5",
                )}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>
        <p className="type-label mt-6 text-muted">
          Showing {visible.length} of {caseStudies.length}
        </p>

        {active === "All" ? (
          <CaseToc className="mt-8" />
        ) : null}
      </Container>

      <CaseStudyStack sequenceKey={sequenceKey} className="mt-10">
        {visible.map((study, index) => (
          <div
            key={study.slug}
            data-case-panel
            className="case-stack__panel"
            style={{ zIndex: index + 1 }}
          >
            <CaseStudyBlock
              study={study}
              index={index}
              total={visible.length}
              prev={visible[index - 1] ?? null}
              next={visible[index + 1] ?? null}
            />
          </div>
        ))}
      </CaseStudyStack>
    </>
  );
}
