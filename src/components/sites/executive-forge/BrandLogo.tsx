import Image from "next/image";
import { cn } from "@/lib/utils";
import { brand } from "@/data/content";

/** Intrinsic logo ratio after trim (659×537 transparent PNG). */
const LOGO_ASPECT = 659 / 537;

type BrandLogoProps = {
  className?: string;
  /** Visual height in px — width follows the stacked mark + wordmark. */
  height?: number;
  priority?: boolean;
};

export function BrandLogo({ className, height = 72, priority = false }: BrandLogoProps) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <span
      className={cn("relative inline-block bg-transparent", className)}
      style={{ height, width }}
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        width={width}
        height={height}
        priority={priority}
        unoptimized
        className="brand-logo-img h-full w-full bg-transparent object-contain"
      />
    </span>
  );
}
