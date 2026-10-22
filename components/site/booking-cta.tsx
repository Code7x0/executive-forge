import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { booking, strategyCall } from "@/content/site";
import { cn } from "@/lib/cn";

type BookingCtaProps = {
  variant?: "home" | "services" | "cases";
  className?: string;
};

export function BookingCta({ variant = "home", className }: BookingCtaProps) {
  if (variant === "cases") {
    return (
      <Section id="booking" tone="ink" className={className}>
        <h2 data-reveal="up" className="type-h2 max-w-[18ch] text-cream">
          Want to be our next best kept client?
        </h2>
        <div data-reveal="fade" className="mt-8 flex flex-wrap gap-3">
          <Button href={booking.introHref}>{booking.introCallLabel}</Button>
          <Button
            href={booking.strategyHref}
            variant="secondary"
            className="border-cream text-cream hover:bg-cream hover:text-ink"
          >
            Book a one-time strategy call →
          </Button>
        </div>
      </Section>
    );
  }

  /* Home closing CTA — copy: strategy call only */
  if (variant === "home") {
    return (
      <Section id="booking" tone="ink" className={cn(className)}>
        <p data-reveal="up" className="type-label text-cream/60">
          {strategyCall.homeEyebrow}
        </p>
        <h2 data-reveal="up" className="type-h2 mt-3 max-w-[16ch] text-cream">
          {strategyCall.headline}
        </h2>
        <p data-reveal="fade" className="type-lede mt-5 max-w-[36ch] text-cream/85">
          {strategyCall.text}
        </p>
        <div data-reveal="fade" className="mt-8">
          <Button href={strategyCall.ctaHref}>{strategyCall.cta}</Button>
        </div>
      </Section>
    );
  }

  /* Services — same strategy-call block (used if needed; page also has inline section) */
  return (
    <Section id="booking" tone="ink" className={cn(className)}>
      <p data-reveal="up" className="type-label text-cream/60">
        {strategyCall.eyebrow}
      </p>
      <p data-reveal="up" className="type-label mt-4 text-cream/45">
        {strategyCall.label}
      </p>
      <h2 data-reveal="up" className="type-h2 mt-3 max-w-[16ch] text-cream">
        {strategyCall.headline}
      </h2>
      <p data-reveal="fade" className="type-lede mt-5 max-w-[40rem] text-cream/85">
        {strategyCall.servicesText}
      </p>
      <p data-reveal="fade" className="type-body mt-4 max-w-[40rem] text-cream/70">
        {strategyCall.after}
      </p>
      <div data-reveal="fade" className="mt-8">
        <Button href={strategyCall.ctaHref}>{strategyCall.cta}</Button>
      </div>
    </Section>
  );
}
