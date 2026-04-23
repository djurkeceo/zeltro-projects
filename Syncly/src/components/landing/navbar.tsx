"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-4 z-50 px-4 sm:px-6"
    >
      <nav className="section-shell glass-panel flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Syncly
        </Link>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          className="hidden items-center gap-6 text-sm text-zinc-300 md:flex"
        >
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              variants={{
                hidden: { opacity: 0, y: -8 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <a href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <motion.a
          href="#waitlist"
          className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.a>
      </nav>
    </motion.header>
  );
}
