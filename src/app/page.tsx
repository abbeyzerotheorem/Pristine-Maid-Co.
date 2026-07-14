import { TopPromoBar } from "@/components/sections/TopPromoBar";
import { Hero } from "@/components/sections/Hero";
import { CredibilityMatrix } from "@/components/sections/CredibilityMatrix";
import { QuoteEstimator } from "@/components/sections/QuoteEstimator";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TeamShowcase } from "@/components/sections/TeamShowcase";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { SatisfactionGuarantee } from "@/components/sections/SatisfactionGuarantee";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Footer } from "@/components/sections/Footer";
import { MobileConversionRibbon } from "@/components/sections/MobileConversionRibbon";

export default function Home() {
  return (
    <>
      <TopPromoBar />
      <main>
        <Hero />
        <CredibilityMatrix />
        <QuoteEstimator />
        <ServicesGrid />
        <TeamShowcase />
        <BeforeAfterSlider />
        <SatisfactionGuarantee />
        <Testimonials />
        <FAQAccordion />
      </main>
      <Footer />
      <MobileConversionRibbon />
    </>
  );
}
