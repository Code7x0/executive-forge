import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from founders, executives and experts across the UAE, Saudi Arabia, Oman, Hong Kong and India.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
