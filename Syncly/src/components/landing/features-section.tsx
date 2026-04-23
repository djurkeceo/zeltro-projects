"use client";

import { motion } from "framer-motion";
import { Activity, BarChart3, RefreshCw, Users2 } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "Real-time Sync",
    description:
      "Keep every workflow, team update, and integration instantly synchronized across regions.",
    icon: RefreshCw,
  },
  {
    title: "Advanced Analytics",
    description:
      "Track throughput, bottlenecks, and outcomes with actionable intelligence in one place.",
    icon: BarChart3,
  },
  {
    title: "Team Collaboration",
    description: "Align engineering, operations, and product teams with shared automation pipelines.",
    icon: Users2,
  },
  {
    title: "API First",
    description: "Build on robust APIs and ship custom automations with enterprise-grade reliability.",
    icon: Activity,
  },
];

export function FeaturesSection() {
  return (
    <AnimatedSection id="features" className="section-shell mt-28 sm:mt-36">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built to scale globally</h2>
        <p className="mt-4 text-zinc-300">
          Syncly provides the flexibility modern teams need to move quickly with confidence.
        </p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12, delayChildren: 0.1 },
          },
        }}
        className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2"
      >
        <motion.div
          variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="md:col-span-4 md:row-span-1"
        >
          <FeatureCard {...features[0]} />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="md:col-span-2 md:row-span-1"
        >
          <FeatureCard {...features[1]} />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="md:col-span-2 md:row-span-1"
        >
          <FeatureCard {...features[2]} />
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="md:col-span-4 md:row-span-1"
        >
          <FeatureCard {...features[3]} />
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
