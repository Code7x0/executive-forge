import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EditorialSplitProps = {
  media: ReactNode;
  children: ReactNode;
  mediaSide?: "start" | "end";
  className?: string;
};

export function EditorialSplit({
  media,
  children,
  mediaSide = "end",
  className,
}: EditorialSplitProps) {
  return (
    <div
      className={cn(
        "editorial-split",
        mediaSide === "start"
          ? "editorial-split--media-start"
          : "editorial-split--media-end",
        className,
      )}
    >
      <div className="min-w-0">{children}</div>
      <div className="min-w-0">{media}</div>
    </div>
  );
}
