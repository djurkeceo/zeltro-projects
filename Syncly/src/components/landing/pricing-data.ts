export type BillingCycle = "monthly" | "yearly";

export type PricingPlan = {
  name: "Free" | "Pro" | "Enterprise";
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  popular?: boolean;
};

export const pricingPlans: PricingPlan[] = [
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
