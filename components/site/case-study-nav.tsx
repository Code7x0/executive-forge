import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { cn } from "@/lib/cn";

type CaseStudyNavProps = {
  prev?: CaseStudy | null;
  next?: CaseStudy | null;
  invert?: boolean;
};

export function CaseStudyNav({ prev, next, invert }: CaseStudyNavProps) {
  if (!prev && !next) return null;

  const muted = invert ? "text-cream/55" : "text-muted";
  const strong = invert ? "text-cream" : "text-ink";
  const border = invert ? "border-cream/20" : "border-line";

  return (
    <nav
      aria-label="Adjacent case studies"
      className={cn("mt-14 grid gap-6 border-t pt-8 sm:grid-cols-2", border)}
    >
      {prev ? (
        <Link
          href={`#${prev.slug}`}
          className={cn(
            "group flex flex-col gap-1",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
          )}
        >
          <span className={cn("type-label", muted)}>Previous</span>
          <span
            className={cn(
              "type-lede transition-colors duration-[var(--duration-fast)] group-hover:text-accent",
              strong,
            )}
          >
            ← {prev.client}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`#${next.slug}`}
          className={cn(
            "group flex flex-col gap-1 sm:items-end sm:text-right",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus",
          )}
        >
          <span className={cn("type-label", muted)}>Next</span>
          <span
            className={cn(
              "type-lede transition-colors duration-[var(--duration-fast)] group-hover:text-accent",
              strong,
            )}
          >
            {next.client} →
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
