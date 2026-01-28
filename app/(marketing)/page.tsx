import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Proof } from "@/components/sections/proof";
import { CtaSection } from "@/components/sections/cta-section";
import { ScrollMascotPeek } from "@/components/shared/scroll-mascot";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Proof />
      <CtaSection />
      <ScrollMascotPeek />
    </>
  );
}
