import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

type Aspect = "portrait" | "landscape" | "square" | "bleed";

const aspectClass: Record<Aspect, string> = {
  portrait: "media-frame--portrait",
  landscape: "media-frame--landscape",
  square: "media-frame--square",
  bleed: "media-frame--bleed",
};

type MediaFrameProps = {
  src: ImageProps["src"];
  alt: string;
  aspect?: Aspect;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function MediaFrame({
  src,
  alt,
  aspect = "landscape",
  className,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: MediaFrameProps) {
  return (
    <div
      data-reveal="image"
      className={cn("media-frame", aspectClass[aspect], className)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={priority ? 78 : 72}
        className="object-cover"
      />
    </div>
  );
}
