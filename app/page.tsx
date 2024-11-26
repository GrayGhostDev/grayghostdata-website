import { HeroSection } from "@/components/hero-section";
import { ServicesOverview } from "@/components/services-overview";
import { FeaturedCaseStudies } from "@/components/featured-case-studies";
import { ContactCTA } from "@/components/contact-cta";
import { Testimonials } from "@/components/testimonials";
import { StatsSection } from "@/components/stats-section";
import { PricingSection } from "@/components/pricing-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <FeaturedCaseStudies />
      <Testimonials />
      <PricingSection />
      <ContactCTA />
    </div>
  );
}