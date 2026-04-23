import { FeaturesSection } from "@/components/landing/features-section";
import { PageShell } from "@/components/landing/page-shell";

export default function FeaturesPage() {
  return (
    <PageShell>
      <section className="section-shell pt-24 sm:pt-28">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Features
        </h1>
      </section>
      <FeaturesSection />
    </PageShell>
  );
}
