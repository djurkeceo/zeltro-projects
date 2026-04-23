import { PageShell } from "@/components/landing/page-shell";
import { PricingSection } from "@/components/landing/pricing-section";

export default function PricingPage() {
  return (
    <PageShell>
      <section className="section-shell pt-24 sm:pt-28">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Pricing
        </h1>
      </section>
      <PricingSection />
    </PageShell>
  );
}
