import type { Metadata } from "next";
import { ParticleDemo } from "@/components/particles/ParticleDemo";

export const metadata: Metadata = {
  title: "Particle sculpture lab",
  description:
    "Isolated development page for the Executive Forge hero particle sculpture.",
  robots: { index: false, follow: false },
};

export default function ParticleLabPage() {
  return <ParticleDemo />;
}
