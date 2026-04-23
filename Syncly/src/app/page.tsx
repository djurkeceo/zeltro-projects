import { FooterCta } from "@/components/landing/footer-cta";
import { HeroSection } from "@/components/landing/hero-section";
import { Navbar } from "@/components/landing/navbar";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { AnimatedBackground } from "@/components/landing/animated-background";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 pb-14">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <FooterCta />
    </div>
  );
}
