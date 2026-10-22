import { processHeadline, processSteps } from "@/content/site";
import { cn } from "@/lib/cn";

type ProcessStepsProps = {
  preview?: boolean;
  tone?: "cream" | "ink";
  className?: string;
};

export function ProcessSteps({
  preview = false,
  tone = "cream",
  className,
}: ProcessStepsProps) {
  const steps = preview ? processSteps.slice(0, 4) : processSteps;
  const muted = tone === "ink" ? "text-cream/55" : "text-muted";
  const title = tone === "ink" ? "text-cream" : "text-ink";
  const body = tone === "ink" ? "text-cream/80" : "text-ink-soft";
  const rule = tone === "ink" ? "border-cream/15" : "border-line";

  return (
    <div className={cn(className)}>
      <p data-reveal="up" className={cn("type-label", muted)}>
        Our process
      </p>
      <h2 data-reveal="up" className={cn("type-h2 mt-3 max-w-[18ch]", title)}>
        {processHeadline}
      </h2>
      <ol data-reveal-process className="mt-12 space-y-0">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className={cn(
              "grid gap-3 border-t py-8 md:grid-cols-[6rem_1fr] md:gap-10",
              rule,
            )}
          >
            <span className={cn("type-label", muted)}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className={cn("type-h3", title)}>{step.title}</h3>
              <p className={cn("type-body mt-3 max-w-[40rem]", body)}>
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {preview ? (
        <p className={cn("type-label mt-2", muted)}>
          Full seven-step process on Services
        </p>
      ) : null}
    </div>
  );
}
