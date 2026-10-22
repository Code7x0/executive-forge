import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { EditorialSplit } from "@/components/ui/editorial-split";
import { MediaFrame } from "@/components/ui/media-frame";
import { Section } from "@/components/ui/section";
import { TextLink } from "@/components/ui/text-link";

export const metadata: Metadata = {
  title: "Style Guide",
  description: "Executive Forge design system — Heist-aligned tokens and components.",
};

const swatches = [
  { name: "Cream", token: "cream", className: "bg-cream border border-line" },
  { name: "Cream soft", token: "cream-soft", className: "bg-cream-soft border border-line" },
  { name: "Ink", token: "ink", className: "bg-ink" },
  { name: "Ink soft", token: "ink-soft", className: "bg-ink-soft" },
  { name: "Accent", token: "accent", className: "bg-accent" },
  { name: "Muted", token: "muted", className: "bg-muted" },
] as const;

const spaces = [
  { name: "Gutter", value: "var(--gutter)" },
  { name: "Section Y", value: "var(--section-y)" },
  { name: "Section Y sm", value: "var(--section-y-sm)" },
  { name: "Container", value: "72rem max" },
  { name: "Prose", value: "36rem max" },
] as const;

export default function StyleGuidePage() {
  return (
    <>
      <Section tone="ink" pad="compact">
        <p className="type-label text-cream/60">Development · Temporary</p>
        <h1 className="type-display-sm mt-3 max-w-[16ch] text-cream">
          Style guide
        </h1>
        <p className="type-lede mt-5 max-w-[34ch] text-cream/80">
          Typography, whitespace, and composition carry the Heist reference —
          without relying on animation.
        </p>
      </Section>

      {/* Type */}
      <Section id="type">
        <p className="type-label text-muted">Typography</p>
        <h2 className="type-h2 mt-3">Type scale</h2>
        <div className="mt-10 space-y-10 border-t border-line pt-10">
          <div>
            <p className="type-label text-muted mb-3">Display</p>
            <p className="type-display">Expertise, seen.</p>
          </div>
          <div>
            <p className="type-label text-muted mb-3">Display sm / H1 alt</p>
            <p className="type-display-sm">Coffee Without a Curfew — energy, not copy.</p>
          </div>
          <div>
            <p className="type-label text-muted mb-3">H2</p>
            <p className="type-h2">World-class personal brands.</p>
          </div>
          <div>
            <p className="type-label text-muted mb-3">H3</p>
            <p className="type-h3">Done-With-You and Done-For-You, same goal.</p>
          </div>
          <div>
            <p className="type-label text-muted mb-3">Lede</p>
            <p className="type-lede max-w-[var(--container-narrow)]">
              I help founders, executives and experts turn what they know into a
              LinkedIn presence that gets them noticed.
            </p>
          </div>
          <div>
            <p className="type-label text-muted mb-3">Body</p>
            <p className="type-body max-w-[var(--container-prose)] text-ink-soft">
              We focus on organic growth only. No bots, no automation blasts —
              just your real expertise, finally out where people can find it.
              Spacing and measure stay restrained so the words can breathe.
            </p>
          </div>
          <div>
            <p className="type-label text-muted mb-3">Label / mono</p>
            <p className="type-label">Independent studio — est. reference craft</p>
          </div>
        </div>
      </Section>

      {/* Color & spacing */}
      <Section id="color" tone="cream" className="border-t border-line">
        <p className="type-label text-muted">Color</p>
        <h2 className="type-h2 mt-3">Palette</h2>
        <p className="type-body mt-3 max-w-[var(--container-prose)] text-ink-soft">
          Cream field, near-black ink, one hot accent — verified from Heist. No
          purple gradients or decorative glass stacks.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {swatches.map((s) => (
            <li key={s.token}>
              <div className={`h-24 w-full ${s.className}`} />
              <p className="type-label mt-2 text-ink">{s.name}</p>
              <p className="type-body text-sm text-muted">{s.token}</p>
            </li>
          ))}
        </ul>

        <p className="type-label mt-16 text-muted">Spacing</p>
        <h3 className="type-h3 mt-3">Rhythm</h3>
        <ul className="mt-8 space-y-4">
          {spaces.map((s) => (
            <li key={s.name} className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <span className="type-label w-40 shrink-0 text-muted">{s.name}</span>
              <div className="h-3 bg-accent/80" style={{ width: s.name.includes("Container") || s.name.includes("Prose") ? "40%" : "min(100%, 8rem)" }} />
              <span className="type-body text-sm text-muted">{s.value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-2">
          <div className="h-4 bg-ink/10" style={{ width: "var(--gutter)" }} title="gutter" />
          <div className="h-8 bg-ink/15" style={{ width: "4rem" }} />
          <div className="h-12 bg-ink/20" style={{ width: "6rem" }} />
        </div>
      </Section>

      {/* Buttons & links */}
      <Section id="actions" tone="ink">
        <p className="type-label text-cream/60">Actions</p>
        <h2 className="type-h2 mt-3 text-cream">Buttons & links</h2>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href="#actions">Primary CTA →</Button>
          <Button
            href="#actions"
            variant="secondary"
            className="border-cream text-cream hover:bg-cream hover:text-ink"
          >
            Secondary
          </Button>
          <Button href="#actions" variant="ghost" className="text-cream hover:text-cream">
            Ghost text
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap gap-6">
          <TextLink href="#type" tone="cream" arrow>
            Text link on ink
          </TextLink>
          <TextLink href="#media" tone="accent" arrow>
            Accent link
          </TextLink>
        </div>
        <p className="type-body mt-8 max-w-[var(--container-prose)] text-cream/65">
          Hover uses a slight scale (1.03) and 160ms transitions — snappy, not
          bouncy. Focus rings use the accent-tinted focus token.
        </p>
      </Section>

      {/* Media */}
      <Section id="media">
        <p className="type-label text-muted">Imagery</p>
        <h2 className="type-h2 mt-3">Image treatments</h2>
        <p className="type-body mt-3 max-w-[var(--container-prose)] text-ink-soft">
          Full-bleed confidence, sharp corners, object-fit cover — matching Heist
          media behavior.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <MediaFrame
              src="/assets/Founder/WhatsApp Image 2026-10-01 at 14.55.48 (9).jpeg"
              alt="Suhana Siddika seated at a professional event"
              aspect="portrait"
            />
            <p className="type-label mt-3 text-muted">Portrait 3:4</p>
          </div>
          <div className="md:col-span-2">
            <MediaFrame
              src="/assets/Founder/WhatsApp Image 2026-10-01 at 15.01.10 (4).jpeg"
              alt="Suhana Siddika speaking on stage"
              aspect="landscape"
            />
            <p className="type-label mt-3 text-muted">Landscape 16:10</p>
          </div>
        </div>
      </Section>

      {/* Sections / editorial */}
      <Section id="sections" tone="cream" className="border-t border-line">
        <p className="type-label text-muted">Layout</p>
        <h2 className="type-h2 mt-3">Section & editorial</h2>
        <div className="mt-12">
          <EditorialSplit
            media={
              <MediaFrame
                src="/assets/Recognized/WhatsApp Image 2026-10-01 at 15.01.12 (2).jpeg"
                alt="Suhana Siddika in a podcast setting"
                aspect="landscape"
              />
            }
            mediaSide="end"
          >
            <p className="type-label text-muted">Editorial split</p>
            <h3 className="type-h3 mt-3">One idea. One image. Room to breathe.</h3>
            <p className="type-body-lg mt-4 text-ink-soft">
              Composition-led sections alternate open type with confident
              photography. No card farms. Mobile stacks content above media.
            </p>
            <div className="mt-6">
              <Button href="#type">Review type →</Button>
            </div>
          </EditorialSplit>
        </div>
      </Section>

      <Section tone="ink" pad="compact">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="type-label text-cream/60">Mobile</p>
            <p className="type-h3 mt-3 max-w-[22ch] text-cream">
              Resize the viewport — type scales, gutters flex, nav collapses.
            </p>
          </div>
          <Button href="/" variant="secondary" className="border-cream text-cream hover:bg-cream hover:text-ink">
            Back to home
          </Button>
        </div>
      </Section>
    </>
  );
}
