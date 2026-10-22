import Image from "next/image";
import { Section } from "@/components/ui/section";
import { RecognitionWall } from "@/components/site/recognition-wall";
import { collaborations } from "@/content/site";

function BrandMark({ name, logo }: { name: string; logo: string }) {
  const isSvg = logo.endsWith(".svg");
  const box =
    name === "Keyers"
      ? "h-12 w-12 md:h-14 md:w-14"
      : name === "Emirates NBD"
        ? "h-12 w-[11rem] md:h-14 md:w-[12.5rem]"
        : name === "Guildhall"
          ? "h-10 w-[11.5rem] md:h-12 md:w-[13.5rem]"
          : "h-11 w-[11rem] md:h-12 md:w-[12.5rem]";

  if (isSvg) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- SVG wordmark
      <img
        src={logo}
        alt={name}
        className={`${box} object-contain object-center`}
      />
    );
  }

  return (
    <div className={`relative ${box}`}>
      <Image
        src={logo}
        alt={name}
        fill
        sizes="220px"
        quality={90}
        className="object-contain object-center"
      />
    </div>
  );
}

/**
 * Press logos + editorial Recognition wall.
 */
export function SeenHereBand() {
  return (
    <Section
      id="recognition"
      pad="default"
      width="full"
      className="border-b border-line"
      containerClassName="seen-here !max-w-[90rem] !px-[clamp(1.75rem,6vw,4rem)]"
    >
      <div
        data-reveal="up"
        className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-x-20 lg:gap-x-28 xl:gap-x-32"
      >
        <h2 className="seen-here-label shrink-0 text-ink [text-wrap:balance] md:max-w-[13ch] lg:max-w-[12ch]">
          {collaborations.label}
        </h2>

        <ul className="flex w-full flex-wrap items-center gap-x-4 gap-y-4 sm:gap-x-5 md:ml-auto md:w-auto md:flex-nowrap md:justify-end md:gap-x-5 lg:gap-x-6">
          {collaborations.items.map((item) => (
            <li key={item.name} className="flex shrink-0 items-center">
              <BrandMark name={item.name} logo={item.logo} />
            </li>
          ))}
        </ul>
      </div>

      <RecognitionWall />
    </Section>
  );
}
