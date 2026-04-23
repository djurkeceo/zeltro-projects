import { PageShell } from "@/components/landing/page-shell";
import { PaymentSimulation } from "@/components/landing/payment-simulation";
import { pricingPlans, type BillingCycle } from "@/components/landing/pricing-data";

const FALLBACK_PLAN = "Pro";

type PaymentPageProps = {
  searchParams: Promise<{
    plan?: string | string[];
    cycle?: string | string[];
  }>;
};

export default async function PaymentPage({ searchParams }: PaymentPageProps) {
  const params = await searchParams;
  const planName = Array.isArray(params.plan) ? params.plan[0] : params.plan;
  const cycle = Array.isArray(params.cycle) ? params.cycle[0] : params.cycle;

  const billingCycle: BillingCycle = cycle === "yearly" ? "yearly" : "monthly";
  const selectedPlan =
    pricingPlans.find((plan) => plan.name === planName) ??
    pricingPlans.find((plan) => plan.name === FALLBACK_PLAN) ??
    pricingPlans[0];

  return (
    <PageShell>
      <section className="section-shell pt-24 sm:pt-28">
        <h1 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Payment simulation
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-zinc-300">
          This is a demo checkout page. No real payment is processed.
        </p>
      </section>

      <section className="section-shell mt-10 pb-8">
        <PaymentSimulation selectedPlan={selectedPlan} billingCycle={billingCycle} />
      </section>
    </PageShell>
  );
}
