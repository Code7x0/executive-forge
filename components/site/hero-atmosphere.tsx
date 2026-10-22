/**
 * Full-bleed electric-blue field (Heist-inspired).
 * Grain is global — do not stack a second grain layer here.
 */

export function HeroAtmosphere() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 95% 75% at 50% 48%,
              #5a9af0 0%,
              var(--hero-electric) 28%,
              #2f6fd0 55%,
              var(--hero-navy) 100%),
            linear-gradient(180deg, var(--hero-navy) 0%, var(--hero-electric) 55%, #3a7fdc 100%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-85"
        style={{
          background:
            "radial-gradient(ellipse 58% 48% at 50% 46%, rgba(180, 210, 255, 0.32) 0%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 52%, rgba(16, 26, 58, 0.5) 100%)",
        }}
      />
    </div>
  );
}
