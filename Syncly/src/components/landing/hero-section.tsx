"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { AnimatedSection } from "./animated-section";

export function HeroSection() {
  return (
    <AnimatedSection className="section-shell pt-24 sm:pt-28" aria-labelledby="hero-heading">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-200"
        >
          Global workflow infrastructure
        </motion.p>
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl"
        >
          Workflow orchestration, harmonized.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-300 sm:text-lg"
        >
          Connect your tools, automate your tasks, and scale your team with Syncly&apos;s
          unified interface.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start for Free
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.a>
          <motion.a
            href="#about"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <PlayCircle className="h-4 w-4" />
            Watch Demo
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 w-full max-w-4xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="glass-panel rounded-2xl p-5 sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-sm font-medium text-zinc-200">Dashboard Preview</h2>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">
                Live
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-4"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs text-zinc-400">Tasks automated</p>
                <p className="mt-2 text-2xl font-semibold text-white">24,320</p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-4"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs text-zinc-400">Global uptime</p>
                <p className="mt-2 text-2xl font-semibold text-white">99.99%</p>
              </motion.div>
              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-4"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-xs text-zinc-400">Team velocity</p>
                <p className="mt-2 text-2xl font-semibold text-white">+38%</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
