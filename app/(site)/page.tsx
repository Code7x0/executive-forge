import { BookingCta } from "@/components/site/booking-cta";
import { ClientLoveCarousel } from "@/components/site/client-love-carousel";
import { FounderSection } from "@/components/site/founder-section";
import { HomeHero } from "@/components/site/home-hero";
import { SeenHereBand } from "@/components/site/seen-here-band";
import { VideoTestimonial } from "@/components/site/video-testimonial";
import { Section } from "@/components/ui/section";
import { clientLove } from "@/content/site";

/**
 * Home — order matches website-copy.md:
 * Hero → Founder → Featured in & recognition → Client love → Strategy call CTA
 */
export default function HomePage() {
  return (
    <>
      <HomeHero />

      <FounderSection />

      {/* Featured in & collaborated with + Recognition */}
      <SeenHereBand />

      {/* Client love — two videos first */}
      <Section tone="ink" id="videos">
        <p data-reveal="up" className="type-label text-cream/55">
          Client love
        </p>
        <h2 data-reveal="up" className="type-h2 mt-3 max-w-[14ch] text-cream">
          {clientLove.headline}
        </h2>
        <div data-reveal-stagger className="mt-12 grid gap-8 md:grid-cols-2">
          {clientLove.videos.map((video) => (
            <VideoTestimonial
              key={video.name}
              name={video.name}
              title={video.title}
              src={video.src}
              poster={video.poster}
              caption={video.caption}
              autoplayOnView={video.autoplayOnView}
            />
          ))}
        </div>
      </Section>

      {/* Written stories — Heist-style horizontal track */}
      <ClientLoveCarousel />

      {/* Want to book a one-time strategy call instead? */}
      <BookingCta variant="home" />
    </>
  );
}
