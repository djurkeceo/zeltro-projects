"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedSection } from "./animated-section";

const pricingPlans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    description: "For individuals exploring workflow automation.",
    features: ["1 workspace", "Basic integrations", "Community support"],
  },
  {
    name: "Pro",
    monthly: 39,
    yearly: 32,
    description: "For fast-moving teams scaling operations.",
    features: ["Unlimited workflows", "Priority support", "Advanced analytics"],
    popular: true,
  },
  {
    name: "Enterprise",
    monthly: 99,
    yearly: 85,
    description: "For global organizations with custom requirements.",
    features: ["SAML/SSO", "Audit logs", "Dedicated success manager"],
  },
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const isYearly = billingCycle === "yearly";

  const plans = useMemo(
    () =>
      pricingPlans.map((plan) => ({
        ...plan,
        price: isYearly ? plan.yearly : plan.monthly,
      })),
    [isYearly]
  );

  return (
    <AnimatedSection id="pricing" className="section-shell mt-28 sm:mt-36" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="pricing-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Transparent pricing
        </h2>
        <p className="mt-4 text-zinc-300">Choose the plan that matches your growth stage.</p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="glass-panel inline-flex rounded-xl p-1 text-sm">
          <button
            type="button"
            onClick={() => setBillingCycle("monthly")}
            className={`relative rounded-lg px-4 py-2 transition ${
              !isYearly ? "text-white" : "text-zinc-300"
            }`}
            aria-pressed={!isYearly}
          >
            {!isYearly ? (
              <motion.span
                layoutId="billing-cycle-pill"
                className="absolute inset-0 -z-10 rounded-lg bg-white/15"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : null}
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle("yearly")}
            className={`relative rounded-lg px-4 py-2 transition ${
              isYearly ? "text-white" : "text-zinc-300"
            }`}
            aria-pressed={isYearly}
          >
            {isYearly ? (
              <motion.span
                layoutId="billing-cycle-pill"
                className="absolute inset-0 -z-10 rounded-lg bg-white/15"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            ) : null}
            Yearly
          </button>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.08 },
          },
        }}
        className="mt-10 grid gap-5 lg:grid-cols-3"
      >
        {plans.map((plan) => (
          <motion.article
            key={plan.name}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.01 }}
            className={`glass-panel rounded-2xl p-6 ${
              plan.popular ? "relative border-blue-400/40 bg-blue-500/10" : ""
            }`}
          >
            {plan.popular ? (
              <span className="absolute right-5 top-5 rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-200">
                Popular
              </span>
            ) : null}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-sm text-zinc-300">{plan.description}</p>
            <p className="mt-6 text-4xl font-semibold">
              <motion.span
                key={`${plan.name}-${billingCycle}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="inline-block"
              >
                ${plan.price}
              </motion.span>
              <span className="ml-1 text-base font-normal text-zinc-400">/mo</span>
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-zinc-200">
                  <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="#waitlist"
              className="mt-8 inline-flex w-full justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium transition hover:bg-white/15"
            >
              Choose {plan.name}
            </a>
          </motion.article>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
