import Link from "next/link";

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-ink text-cream">
      <header className="flex items-center justify-between border-b border-cream/10 px-5 py-3">
        <p className="type-label text-cream/60">Executive Forge · Lab</p>
        <nav className="flex gap-4">
          <Link
            href="/dev/particles"
            className="type-label text-cream/80 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
          >
            Particles
          </Link>
          <Link
            href="/"
            className="type-label text-cream/80 hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus"
          >
            Site →
          </Link>
        </nav>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
}
