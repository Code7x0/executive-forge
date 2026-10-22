"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type VideoTestimonialProps = {
  name: string;
  title: string;
  src: string | null;
  poster: string | null;
  caption?: string | null;
  /** Start muted playback when the card enters the viewport */
  autoplayOnView?: boolean;
  className?: string;
};

/**
 * Video testimonial card.
 * Default: poster first; sources mount only on Play (large .mov files).
 * autoplayOnView: load + muted play when scrolled into view.
 */
export function VideoTestimonial({
  name,
  title,
  src,
  poster,
  caption,
  autoplayOnView = false,
  className,
}: VideoTestimonialProps) {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const stillOnly = !src;

  /* Mount sources + play after user click */
  useEffect(() => {
    if (!started || autoplayOnView) return;
    const video = videoRef.current;
    if (!video) return;
    video.load();
    void video.play().catch(() => {
      /* Native controls remain available */
    });
  }, [started, autoplayOnView]);

  /* Sabrina-style: autoplay muted when in view, pause when leaving */
  useEffect(() => {
    if (!autoplayOnView || !src) return;
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!entry?.isIntersecting) {
          video?.pause();
          return;
        }
        setStarted(true);
        if (!video) return;
        video.muted = true;
        if (video.readyState < 2) video.load();
        void video.play().catch(() => {
          /* Autoplay may still be blocked; controls stay available */
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(root);
    return () => io.disconnect();
  }, [autoplayOnView, src]);

  useEffect(() => {
    if (!autoplayOnView || !started) return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    if (video.readyState < 2) video.load();
    void video.play().catch(() => {});
  }, [autoplayOnView, started]);

  return (
    <figure ref={rootRef} className={cn("space-y-4", className)}>
      <div className="relative aspect-[9/16] max-h-[34rem] overflow-hidden bg-ink-soft md:max-h-[40rem]">
        {stillOnly ? (
          <>
            {poster ? (
              <Image
                src={poster}
                alt={`${name} — ${caption ?? "client still"}`}
                fill
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover"
                quality={72}
              />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center bg-ink/45">
              <span className="type-label rounded-[var(--radius-cta)] border-2 border-cream/30 bg-cream px-4 py-2 text-ink">
                Video coming soon
              </span>
            </div>
          </>
        ) : (
          <>
            {!started && poster ? (
              <Image
                src={poster}
                alt=""
                fill
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover"
                quality={70}
              />
            ) : null}
            <video
              ref={videoRef}
              className={cn(
                "h-full w-full object-cover",
                !started && "invisible absolute inset-0",
              )}
              controls={started}
              playsInline
              muted={autoplayOnView}
              loop={autoplayOnView}
              preload={autoplayOnView ? "metadata" : "none"}
              poster={poster ?? undefined}
              aria-label={`${name} video testimonial`}
            >
              {started ? (
                <>
                  <source src={src} type="video/quicktime" />
                  <source src={src} type="video/mp4" />
                </>
              ) : null}
            </video>
            {!started && !autoplayOnView ? (
              <button
                type="button"
                className="absolute inset-0 flex items-center justify-center bg-ink/30 transition-colors hover:bg-ink/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-focus"
                onClick={() => setStarted(true)}
              >
                <span className="type-label rounded-[var(--radius-cta)] bg-cream px-4 py-2 text-ink">
                  Play video
                </span>
              </button>
            ) : null}
          </>
        )}
      </div>
      <figcaption>
        <p className="type-label text-cream">{name}</p>
        <p className="type-body mt-1 text-cream/60">{title}</p>
        {caption ? (
          <p className="type-label mt-2 text-cream/40">{caption}</p>
        ) : null}
        {src && !autoplayOnView ? (
          <p className="type-label mt-2 text-cream/35">
            No transcript supplied with this video.
          </p>
        ) : null}
        {src && autoplayOnView ? (
          <p className="type-label mt-2 text-cream/35">
            Plays muted on view — use controls for sound.
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
