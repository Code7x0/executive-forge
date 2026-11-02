import Image from "next/image";
import { cn } from "@/lib/utils";
import { brand } from "@/data/content";

/** Square EF mark (1024×1024). */
const LOGO_ASPECT = 1;

type BrandLogoProps = {
  className?: string;
  /** Visual height in px — width matches for the square mark. */
  height?: number;
  priority?: boolean;
};

export function BrandLogo({ className, height = 56, priority = false }: BrandLogoProps) {
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <span
      className={cn("relative inline-block overflow-hidden rounded-full bg-transparent", className)}
      style={{ height, width }}
    >
      <Image
        src={brand.logo}
        alt={brand.name}
        width={width}
        height={height}
        priority={priority}
        unoptimized
        className="h-full w-full bg-transparent object-cover"
      />
    </span>
  );
}
