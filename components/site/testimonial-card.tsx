import type { Testimonial } from "@/content/types";
import { cn } from "@/lib/cn";

type TestimonialCardProps = {
  item: Testimonial;
  tone?: "cream" | "ink";
  className?: string;
};

/**
 * Typography-led quote card — no WhatsApp / screenshot thumbnails.
 */
export function TestimonialCard({
  item,
  tone = "cream",
  className,
}: TestimonialCardProps) {
  const quote = tone === "ink" ? "text-cream" : "text-ink";
  const meta = tone === "ink" ? "text-cream/55" : "text-muted";

  return (
    <figure
      data-reveal="up"
      className={cn(
        "motion-card flex h-full flex-col justify-between gap-6 border-2 border-black p-6 md:p-8",
        tone === "ink" && "border-cream/25",
        className,
      )}
    >
      <blockquote className={cn("type-lede", quote)}>
        “{item.quote}”
      </blockquote>
      <figcaption>
        <p className={cn("type-label", quote)}>{item.name}</p>
        {item.title ? (
          <p className={cn("type-body mt-1 text-sm", meta)}>{item.title}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}
