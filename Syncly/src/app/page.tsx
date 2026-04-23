import { HeroSection } from "@/components/landing/hero-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { PageShell } from "@/components/landing/page-shell";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
    </PageShell>
  );
}
