import { HeroSection } from "@/components/sections/hero-section";
import { ServiceSection } from "@/components/sections/service-section";
import { StrengthsSection } from "@/components/sections/strengths-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServiceSection />
      <StrengthsSection />
      <CaseStudiesSection />
      <PricingSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
