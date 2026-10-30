import { Header } from "@/components/sites/executive-forge/Header";
import { Footer } from "@/components/sites/executive-forge/Footer";
import { Hero } from "@/components/sites/executive-forge/Hero";
import { Stats } from "@/components/sites/executive-forge/Stats";
import { About } from "@/components/sites/executive-forge/About";
import { Recognition } from "@/components/sites/executive-forge/Recognition";
import { ServicesPreview } from "@/components/sites/executive-forge/ServicesPreview";
import { Testimonials } from "@/components/sites/executive-forge/Testimonials";
import { StrategyCall } from "@/components/sites/executive-forge/StrategyCall";
import { Faq } from "@/components/sites/executive-forge/Faq";
import { CtaBand } from "@/components/sites/executive-forge/CtaBand";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Recognition />
        <ServicesPreview />
        <Testimonials />
        <StrategyCall />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
