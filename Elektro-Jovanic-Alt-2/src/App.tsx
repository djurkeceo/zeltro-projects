import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Elektroinstalacije",
    description:
      "Slabe i jake struje, izvođenje svih vrsta elektroinstalacija.",
    icon: "⚡",
  },
  {
    title: "Konektori, prekidači, osigurači",
    description: "Postavljanje i zamena elemenata za bezbedan i pouzdan rad.",
    icon: "🔌",
  },
  {
    title: "Rasveta & LED",
    description:
      "Postavljanje i zamena rasvete, LED program i dekorativna svetla.",
    icon: "💡",
  },
  {
    title: "Interfoni",
    description:
      "Instalacija i servis interfonskih sistema za stanove i objekte.",
    icon: "🔔",
  },
  {
    title: "Video nadzor",
    description:
      "Ugradnja sistema video nadzora za kuće, lokale i poslovne prostore.",
    icon: "📹",
  },
  {
    title: "Pametne kuće",
    description: "Smart home sistemi, automatizacija i upravljanje potrošnjom.",
    icon: "🏠",
  },
  {
    title: "Gromobransko",
    description:
      "Gromobranska instalacija i zaštita objekata od atmosferskog pražnjenja.",
    icon: "⛈️",
  },
];

const links = [
  { label: "Usluge", href: "#usluge" },
  { label: "O nama", href: "#o-nama" },
  { label: "Kontakt", href: "#kontakt" },
];

const heroStats = [
  { value: "Subotica", label: "i okolina" },
  { value: "Brz izlazak", label: "na teren" },
  { value: "Pouzdan rad", label: "i uredan završetak" },
];

const principles = [
  {
    title: "Precizno",
    text: "Detaljan rad i čist završni izgled na svakom objektu.",
  },
  {
    title: "Bezbedno",
    text: "Usklađeno izvođenje uz fokus na funkcionalnost i zaštitu.",
  },
  {
    title: "Praktično",
    text: "Rešenja koja su laka za korišćenje i održavanje.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function BoltMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M13.2 1 4 13.3h6.4L9.1 23l10.9-13.2h-6.1L13.2 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`}
      />
      <span
        className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform duration-300 ${open ? "translate-y-[-5px] -rotate-45" : ""}`}
      />
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroBoltY = useTransform(scrollYProgress, [0, 0.35], [0, -44]);
  const heroBoltRotate = useTransform(scrollYProgress, [0, 0.35], [0, 9]);
  const heroPanelY = useTransform(scrollYProgress, [0, 0.35], [0, 28]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      {/* ── NAVBAR ── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all ${
          scrolled
            ? "bg-[#0a0a0a]/92 backdrop-blur-xl"
            : "bg-[#0a0a0a]/72 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a href="#top" className="group flex items-center gap-3">
            <img src="./assets/logoalt1.png"></img>
            {/* <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white text-[#0a0a0a] shadow-[0_0_35px_rgba(245,166,35,0.25)]"> */}
            {/* <BoltMark className="h-5 w-5 text-[#F5A623]" /> */}
            {/* </span> */}
            <span className="leading-none">
              <span className="block text-[0.72rem] font-bold uppercase tracking-[0.46em] text-white">
                JOVANIĆ
              </span>
              <span className="block text-[0.72rem] font-bold uppercase tracking-[0.44em] text-[#F5A623]">
                ELEKTRO
              </span>
            </span>
          </a>

          <nav className="hidden justify-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-[0.24em] text-white/72 transition hover:text-[#F5A623]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <motion.a
              href="tel:0658275055"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#F5A623] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0a] shadow-[0_14px_40px_rgba(245,166,35,0.18)]"
            >
              Pozovite nas <span aria-hidden="true">→</span>
            </motion.a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/15 p-3 text-white md:hidden"
            aria-expanded={menuOpen}
            aria-label="Otvorite meni"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            menuOpen
              ? "max-h-96 border-t border-white/10 opacity-100"
              : "max-h-0 border-transparent opacity-0"
          } overflow-hidden bg-[#0a0a0a] transition-all duration-300`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.24em] text-white/80"
              >
                {link.label}
              </a>
            ))}
            <motion.a
              href="tel:0658275055"
              whileHover={{ scale: 1.03, x: 2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F5A623] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0a]"
            >
              Pozovite nas <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ── HERO ── */}
        <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
          {/* Backgrounds */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgba(245,166,35,0.18),transparent)]" />
          {/* <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,#0a0a0a_0%,#0d0d0d_45%,#111111_55%,#ffffff_55%,#ffffff_58%,#0a0a0a_58%)]" /> */}
          <div className="absolute left-[-12%] top-1/3 -z-10 h-[42rem] w-[42rem] -translate-y-1/2 rounded-full bg-[#F5A623]/6 blur-[100px]" />

          {/* Giant background bolt */}
          <motion.div
            className="pointer-events-none absolute right-[8%] top-1/2 -z-10 -translate-y-1/2 text-[#F5A623]/[0.04]"
            animate={{ rotate: [0, 3, -3, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <BoltMark className="h-[38rem] w-[38rem]" />
          </motion.div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
            {/* Main 2-col grid */}
            <div className="grid min-h-[calc(100vh-8rem)] grid-rows-[1fr_auto] gap-8 pb-10 lg:grid-cols-2 lg:grid-rows-1 lg:gap-16 lg:pb-14">
              {/* LEFT — Text */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.1 } },
                }}
                className="flex flex-col justify-center"
              >
                {/* Eyebrow */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.7rem] uppercase tracking-[0.36em] text-white/60"
                >
                  <BoltMark className="h-3.5 w-3.5 text-[#F5A623]" />
                  Subotica, Srbija
                </motion.div>

                {/* Headline */}
                <motion.h1
                  variants={fadeUp}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="mt-5 font-display text-[clamp(4.4rem,11vw,7.8rem)] uppercase leading-[0.82] tracking-[0.06em] text-white"
                >
                  Struja
                  <br />
                  <span className="text-[#F5A623]">je naš</span>
                  <br />
                  posao
                </motion.h1>

                {/* Gold divider */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-8 h-px w-16 bg-[#F5A623]"
                />

                {/* Subheadline */}
                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mt-6 max-w-md text-lg leading-8 text-white/65"
                >
                  Profesionalne elektroinstalacije u Subotici i okolini, sa
                  fokusom na bezbednost, urednost i dugotrajno rešenje.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mt-9 flex flex-wrap gap-4"
                >
                  <motion.a
                    href="tel:0658275055"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#F5A623] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0a] shadow-[0_16px_48px_rgba(245,166,35,0.22)]"
                  >
                    Pozovite nas <span aria-hidden="true">→</span>
                  </motion.a>
                  <motion.a
                    href="#usluge"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/18 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white/85 transition-colors hover:border-[#F5A623]/60 hover:text-[#F5A623]"
                  >
                    Pogledajte usluge
                  </motion.a>
                </motion.div>

                {/* Contact strip */}
                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="mt-10 flex items-center gap-5 border-t border-white/8 pt-8"
                >
                  <a
                    href="tel:0658275055"
                    className="text-sm font-semibold tracking-wide text-white/45 transition hover:text-[#F5A623]"
                  >
                    065 827 5055
                  </a>
                  <span className="h-4 w-px bg-white/15" />
                  <a
                    href="mailto:positivevoltage24@gmail.com"
                    className="text-sm font-semibold tracking-wide text-white/45 transition hover:text-[#F5A623]"
                  >
                    positivevoltage24@gmail.com
                  </a>
                </motion.div>
              </motion.div>

              {/* RIGHT — Card panel */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                style={{ y: heroPanelY }}
                className="relative flex items-center lg:justify-end"
              >
                {/* Offset shadow */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] border border-white/8 bg-white/3" />

                <div className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0f0f0f] shadow-[0_32px_100px_rgba(0,0,0,0.55)]">
                  {/* Diagonal split */}
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a0a0a_0%,#0a0a0a_52%,rgba(255,255,255,0.055)_52%,rgba(255,255,255,0.055)_68%,#111111_68%)]" />
                  {/* Gold glow */}
                  <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-[#F5A623]/12 blur-[80px]" />
                  {/* Animated bolt inside card */}

                  <div className="relative flex flex-col gap-8 p-8 sm:p-10">
                    {/* Card header */}
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.5em] text-white/35">
                        Jovanić Elektro · Subotica
                      </p>
                      <p className="mt-4 font-display text-[clamp(3.5rem,7vw,5.5rem)] uppercase leading-none tracking-[0.12em] text-white">
                        JOVANIĆ
                      </p>
                      <p className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] uppercase tracking-[0.4em] text-[#F5A623]">
                        ELEKTRO
                      </p>
                    </div>

                    <div className="h-px bg-white/8" />

                    {/* Service pills */}
                    <div>
                      <p className="mb-4 text-[0.65rem] uppercase tracking-[0.42em] text-white/35">
                        Usluge
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Elektroinstalacije",
                          "Rasveta & LED",
                          "Video nadzor",
                          "Interfoni",
                          "Pametne kuće",
                          "Gromobransko",
                        ].map((tag, i) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              delay: 0.45 + i * 0.07,
                              duration: 0.4,
                              ease: "easeOut",
                            }}
                            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-white/65"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Stat row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        {
                          label: "Servis",
                          value: "Kuće i lokali",
                          gold: false,
                        },
                        { label: "Fokus", value: "Uredan rad", gold: true },
                        { label: "Od", value: "2021. god.", gold: false },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className={`rounded-2xl border px-3 py-4 ${
                            item.gold
                              ? "border-[#F5A623]/30 bg-[#F5A623] text-[#0a0a0a]"
                              : "border-white/8 bg-black/25 text-white"
                          }`}
                        >
                          <p
                            className={`text-[0.6rem] uppercase tracking-[0.32em] ${item.gold ? "text-[#0a0a0a]/50" : "text-white/35"}`}
                          >
                            {item.label}
                          </p>
                          <p className="mt-1.5 text-sm font-semibold leading-snug">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
              className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-sm"
            >
              <div className="grid divide-x divide-white/8 sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{
                      backgroundColor:
                        index === 1 ? "" : "rgba(255,255,255,0.03)",
                    }}
                    transition={{ duration: 0.2 }}
                    className={`px-7 py-5 ${index === 1 ? "bg-[#F5A623]" : ""}`}
                  >
                    <p
                      className={`text-base font-bold uppercase tracking-[0.2em] ${index === 1 ? "text-[#0a0a0a]" : "text-white"}`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className={`mt-1.5 text-sm ${index === 1 ? "text-[#0a0a0a]/65" : "text-white/50"}`}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Section divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>
        </section>

        {/* ── USLUGE ── */}
        <section
          id="usluge"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-sm uppercase tracking-[0.38em] text-[#F5A623]">
                Usluge
              </p>
              <h2 className="mt-4 max-w-sm font-display text-[clamp(3rem,5vw,4.8rem)] uppercase leading-[0.9] tracking-[0.08em] text-white">
                Šta radimo
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-white/72">
                Sve vrste elektroinstalacionih radova, od osnovnih instalacija
                do naprednih sistema za automatizaciju i zaštitu.
              </p>

              <div className="mt-8 grid gap-4">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-[#111111] p-5"
                  >
                    <p className="text-sm uppercase tracking-[0.34em] text-[#F5A623]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-white/68">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <motion.a
                href="tel:0658275055"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
                className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#0a0a0a]"
              >
                Pozovite nas <span aria-hidden="true">→</span>
              </motion.a>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  whileHover={{ y: -6 }}
                  className={`group rounded-[1.75rem] border border-white/10 bg-[#1a1a1a] p-7 transition hover:border-[#F5A623]/45 hover:bg-[#1f1f1f] ${
                    index === services.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623] text-2xl shadow-[0_0_35px_rgba(245,166,35,0.18)]">
                    <span aria-hidden="true">{service.icon}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl uppercase tracking-[0.08em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/68">
                    {service.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ── O NAMA + KONTAKT ── */}
        <section
          id="o-nama"
          className="border-y border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent"
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 sm:p-10 lg:p-12"
            >
              <p className="text-sm uppercase tracking-[0.38em] text-[#F5A623]">
                O nama
              </p>
              <h2 className="mt-4 max-w-xl font-display text-[clamp(3rem,5vw,4.8rem)] uppercase leading-[0.9] tracking-[0.08em] text-white">
                Industrijski izgled, ozbiljan pristup
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Jovanić Elektro izvodi elektroinstalacije za kuće, stanove,
                lokale i poslovne objekte, uz čist završni izgled i jasnu
                komunikaciju.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {principles.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.35rem] border border-white/10 bg-black/30 p-5"
                  >
                    <p className="text-sm uppercase tracking-[0.34em] text-white/45">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/68">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 sm:p-10"
              >
                <p className="text-sm uppercase tracking-[0.38em] text-[#F5A623]">
                  Radni pristup
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    "Dolazak na teren i procena bez zastoja.",
                    "Jasan dogovor oko obima i rokova.",
                    "Izvođenje sa naglaskom na urednost i trajnost.",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 text-white/78"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#F5A623]" />
                      <p className="text-base leading-7">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                id="kontakt"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55 }}
                className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 sm:p-10"
              >
                <p className="text-sm uppercase tracking-[0.38em] text-[#F5A623]">
                  Kontakt
                </p>
                <h3 className="mt-4 font-display text-[clamp(2.4rem,4vw,3.4rem)] uppercase leading-[0.92] tracking-[0.08em] text-white">
                  Pozovite nas za procenu
                </h3>
                <p className="mt-5 text-lg leading-8 text-white/72">
                  Radimo u Subotici i okolnim mestima. Javite se za brzu
                  procenu, dogovor termina i profesionalno izvođenje radova.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.35rem] border border-white/10 bg-black/30 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Telefon
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      065 827 5055
                    </p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-black/30 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">
                      Lokacija
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      Subotica, Srbija
                    </p>
                  </div>
                </div>

                <motion.a
                  href="tel:0658275055"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#0a0a0a]"
                >
                  065 827 5055 <span aria-hidden="true">→</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
