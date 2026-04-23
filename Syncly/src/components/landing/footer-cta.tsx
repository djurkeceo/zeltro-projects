"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";

export function FooterCta() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleRequestEarlyAccess = async () => {
    if (status === "loading") return;
    setStatus("loading");

    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.9) {
            resolve();
            return;
          }
          reject(new Error("Temporary network issue"));
        }, 900);
      });

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatedSection id="waitlist" className="section-shell relative z-10 pb-16 pt-12 sm:pt-16">
      <motion.div
        className="rounded-3xl bg-gradient-to-r from-blue-500/80 via-indigo-500/80 to-purple-500/80 p-[1px]"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      >
        <div className="rounded-[calc(1.5rem-1px)] bg-[#0b0b0c] px-6 py-12 text-center sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Join the Syncly waitlist
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            Be the first to access a unified workflow platform designed for modern global teams.
          </p>
          <motion.button
            type="button"
            onClick={handleRequestEarlyAccess}
            disabled={status === "loading"}
            className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === "loading" ? "Sending request..." : "Request Early Access"}
          </motion.button>
          {status === "success" ? (
            <p className="mt-3 text-sm text-emerald-300">Request sent. We&apos;ll reach out soon.</p>
          ) : null}
          {status === "error" ? (
            <p className="mt-3 text-sm text-rose-300">
              Request failed. Please try again in a moment.
            </p>
          ) : null}
        </div>
      </motion.div>
    </AnimatedSection>
  );
}
