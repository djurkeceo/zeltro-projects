"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";

const testimonials = [
  {
    quote:
      "Syncly gave us one orchestration layer for all our internal tooling. We ship faster with less overhead.",
    name: "Avery Chen",
    role: "Head of Platform",
    company: "Northline",
  },
  {
    quote:
      "The reliability and API-first architecture made migration painless. Our team adopted it in days.",
    name: "Noah Rivera",
    role: "CTO",
    company: "Arcspan",
  },
  {
    quote:
      "We cut repetitive operations by half and finally got visibility across distributed teams.",
    name: "Mina Patel",
    role: "Ops Lead",
    company: "Voxenta",
  },
];

export function TestimonialsSection() {
  const marqueeItems = [...testimonials.map((item) => item.company), ...testimonials.map((item) => item.company)];

  return (
    <AnimatedSection id="about" className="section-shell mt-28 sm:mt-36" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-2xl text-center">
        <h2 id="testimonials-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Trusted by product teams worldwide
        </h2>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
          className="flex w-max gap-3"
        >
          {marqueeItems.map((company, index) => (
            <span
              key={`${company}-${index}`}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-zinc-300"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.08,
            },
          },
        }}
        className="mt-10 grid gap-5 md:grid-cols-3"
      >
        {testimonials.map((item) => (
          <motion.article
            key={item.name}
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="glass-panel rounded-2xl p-6"
          >
            <p className="text-sm leading-6 text-zinc-200">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <motion.div
                aria-hidden="true"
                className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-500/60"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 3.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />
              <div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-zinc-400">
                  {item.role} · {item.company}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
