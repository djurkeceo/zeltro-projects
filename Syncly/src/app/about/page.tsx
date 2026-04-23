import { PageShell } from "@/components/landing/page-shell";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-shell pt-24 sm:pt-28">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          About Syncly
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-300">
          We build unified workflow infrastructure for teams that operate across tools, time zones,
          and systems.
        </p>
      </section>
      <TestimonialsSection />
    </PageShell>
  );
}
