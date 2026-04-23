"use client";

import Link from "next/link";
import { useState } from "react";
import type { BillingCycle, PricingPlan } from "./pricing-data";

type PaymentSimulationProps = {
  selectedPlan: PricingPlan;
  billingCycle: BillingCycle;
};

export function PaymentSimulation({ selectedPlan, billingCycle }: PaymentSimulationProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const amount = billingCycle === "yearly" ? selectedPlan.yearly : selectedPlan.monthly;

  const handlePayment = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1200);
    });
    setIsSubmitting(false);
    setIsPaid(true);
  };

  return (
    <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="glass-panel rounded-2xl p-6">
        <h2 className="text-xl font-semibold">Card details</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="text-sm text-zinc-300 sm:col-span-2">
            Cardholder name
            <input
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-white/40"
              placeholder="Jane Doe"
            />
          </label>
          <label className="text-sm text-zinc-300 sm:col-span-2">
            Card number
            <input
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-white/40"
              placeholder="4242 4242 4242 4242"
            />
          </label>
          <label className="text-sm text-zinc-300">
            Expiration
            <input
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-white/40"
              placeholder="MM/YY"
            />
          </label>
          <label className="text-sm text-zinc-300">
            CVC
            <input
              className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-white outline-none ring-0 placeholder:text-zinc-500 focus:border-white/40"
              placeholder="123"
            />
          </label>
        </div>
        <button
          type="button"
          onClick={handlePayment}
          disabled={isSubmitting}
          className="mt-6 inline-flex w-full justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Processing..." : `Pay $${amount}/${billingCycle === "yearly" ? "yr" : "mo"} (Simulated)`}
        </button>
        {isPaid ? (
          <p className="mt-3 text-sm text-emerald-300">
            Simulated payment successful. Your {selectedPlan.name} plan is ready.
          </p>
        ) : null}
      </div>

      <aside className="glass-panel rounded-2xl p-6">
        <h2 className="text-lg font-semibold">Order summary</h2>
        <p className="mt-4 text-sm text-zinc-300">Plan</p>
        <p className="text-base font-medium">{selectedPlan.name}</p>
        <p className="mt-4 text-sm text-zinc-300">Billing</p>
        <p className="text-base font-medium capitalize">{billingCycle}</p>
        <p className="mt-4 text-sm text-zinc-300">Total today</p>
        <p className="text-3xl font-semibold">${amount}</p>
        <Link href="/pricing" className="mt-6 inline-flex text-sm text-zinc-300 transition hover:text-white">
          Back to pricing
        </Link>
      </aside>
    </div>
  );
}
