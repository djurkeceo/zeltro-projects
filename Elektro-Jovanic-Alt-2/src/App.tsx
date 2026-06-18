import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type Service = {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Elektroinstalacije',
    description: 'Slabe i jake struje, izvođenje svih vrsta elektroinstalacija.',
    icon: '⚡',
  },
  {
    title: 'Konektori, prekidači, osigurači',
    description: 'Postavljanje i zamena elemenata za bezbedan i pouzdan rad.',
    icon: '🔌',
  },
  {
    title: 'Rasveta & LED',
    description: 'Postavljanje i zamena rasvete, LED program i dekorativna svetla.',
    icon: '💡',
  },
  {
    title: 'Interfoni',
    description: 'Instalacija i servis interfonskih sistema za stanove i objekte.',
    icon: '🔔',
  },
  {
    title: 'Video nadzor',
    description: 'Ugradnja sistema video nadzora za kuće, lokale i poslovne prostore.',
    icon: '📹',
  },
  {
    title: 'Pametne kuće',
    description: 'Smart home sistemi, automatizacija i upravljanje potrošnjom.',
    icon: '🏠',
  },
  {
    title: 'Gromobransko',
    description: 'Gromobranska instalacija i zaštita objekata od atmosferskog pražnjenja.',
    icon: '⛈️',
  },
]

const links = [
  { label: 'Usluge', href: '#usluge' },
  { label: 'O nama', href: '#o-nama' },
  { label: 'Kontakt', href: '#kontakt' },
]

const heroStats = [
  { value: 'Subotica', label: 'i okolina' },
  { value: 'Brz izlazak', label: 'na teren' },
  { value: 'Pouzdan rad', label: 'i uredan završetak' },
]

const principles = [
  {
    title: 'Precizno',
    text: 'Detaljan rad i čist završni izgled na svakom objektu.',
  },
  {
    title: 'Bezbedno',
    text: 'Usklađeno izvođenje uz fokus na funkcionalnost i zaštitu.',
  },
  {
    title: 'Praktično',
    text: 'Rešenja koja su laka za korišćenje i održavanje.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function BoltMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M13.2 1 4 13.3h6.4L9.1 23l10.9-13.2h-6.1L13.2 1Z"
        fill="currentColor"
      />
    </svg>
  )
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-transform duration-300 ${
          open ? 'translate-y-[7px] rotate-45' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-300 ${
          open ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-transform duration-300 ${
          open ? 'translate-y-[-5px] -rotate-45' : ''
        }`}
      />
    </span>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const heroBoltY = useTransform(scrollYProgress, [0, 0.35], [0, -44])
  const heroBoltRotate = useTransform(scrollYProgress, [0, 0.35], [0, 9])
  const heroPanelY = useTransform(scrollYProgress, [0, 0.35], [0, 28])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all ${
          scrolled ? 'bg-[#0a0a0a]/92 backdrop-blur-xl' : 'bg-[#0a0a0a]/72 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-10">
          <a href="#top" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white text-[#0a0a0a] shadow-[0_0_35px_rgba(245,166,35,0.25)]">
              <BoltMark className="h-5 w-5 text-[#F5A623]" />
            </span>
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
              transition={{ type: 'spring', stiffness: 380, damping: 24 }}
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
            onClick={() => setMenuOpen((value) => !value)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        <div
          className={`md:hidden ${
            menuOpen ? 'max-h-96 border-t border-white/10 opacity-100' : 'max-h-0 border-transparent opacity-0'
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
              transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F5A623] px-5 py-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0a]"
            >
              Pozovite nas <span aria-hidden="true">→</span>
            </motion.a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden pt-28 sm:pt-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(245,166,35,0.15),transparent_28%),linear-gradient(135deg,#0a0a0a_0%,#0a0a0a_50%,#111111_50%,#111111_70%,#ffffff_70%,#ffffff_74%,#0a0a0a_74%)]" />
          <div className="absolute left-[-8%] top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-[#F5A623]/8 blur-3xl" />
          <div className="absolute right-[-8rem] top-10 -z-10 hidden h-[36rem] w-[36rem] rounded-full bg-white/6 blur-3xl lg:block" />

          <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-start gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
              className="flex flex-col gap-8 lg:pt-4"
            >
              <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: 'easeOut' }}>
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.72rem] uppercase tracking-[0.34em] text-white/70">
                  <span className="text-[#F5A623]">
                    <BoltMark className="h-4 w-4" />
                  </span>
                  Subotica, Srbija
                </div>

                <h1 className="mt-6 max-w-4xl font-display text-[clamp(4.2rem,10vw,7.25rem)] uppercase leading-[0.84] tracking-[0.07em] text-white">
                  Struja je naš posao
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
                  Profesionalne elektroinstalacije u Subotici i okolini, sa fokusom na
                  bezbednost, urednost i dugotrajno rešenje.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    href="tel:0658275055"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F5A623] px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#0a0a0a] shadow-[0_14px_40px_rgba(245,166,35,0.18)]"
                  >
                    Pozovite nas <span aria-hidden="true">→</span>
                  </motion.a>
                  <motion.a
                    href="#usluge"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                    className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white/90 transition hover:border-[#F5A623] hover:text-[#F5A623]"
                  >
                    Pogledajte usluge
                  </motion.a>
                </div>
              </motion.div>

            </motion.div>

            <motion.div style={{ y: heroPanelY }} className="relative lg:pt-10">
              <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2.25rem] border border-white/10 bg-white/5" />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0f0f0f] shadow-[0_24px_90px_rgba(0,0,0,0.48)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a0a0a_0%,#0a0a0a_56%,rgba(255,255,255,0.08)_56%,rgba(255,255,255,0.08)_72%,#111111_72%)] opacity-90" />
                <div className="absolute right-0 top-0 h-full w-[38%] bg-white/6" />
                <div className="absolute left-[-2rem] top-[-2rem] h-64 w-64 rounded-full bg-[#F5A623]/15 blur-3xl" />
                <motion.div
                  style={{ y: heroBoltY, rotate: heroBoltRotate }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-4 top-4 hidden text-[#F5A623]/18 lg:block"
                >
                  <BoltMark className="h-56 w-56" />
                </motion.div>

                <div className="relative flex min-h-[34rem] flex-col justify-between p-8 sm:p-10">
                  <div className="max-w-lg">
                    <p className="text-xs uppercase tracking-[0.44em] text-white/45">
                      Jovanić Elektro
                    </p>
                    <p className="mt-5 font-display text-[clamp(3.8rem,7vw,6rem)] uppercase leading-none tracking-[0.16em] text-white">
                      JOVANIĆ
                    </p>
                    <p className="font-display text-[clamp(2rem,4vw,3rem)] uppercase tracking-[0.38em] text-[#F5A623]">
                      ELEKTRO
                    </p>
                    <p className="mt-6 max-w-md text-lg leading-8 text-white/72">
                      Jedan jasan vizuelni blok, inspirisan vozilom i zlatnim bolt motivom.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.25rem] border border-white/10 bg-black/30 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">Servis</p>
                      <p className="mt-2 text-lg font-semibold text-white">Kuće i stanovi</p>
                    </div>
                    <div className="rounded-[1.25rem] border border-white/10 bg-[#F5A623] px-4 py-4 text-[#0a0a0a]">
                      <p className="text-xs uppercase tracking-[0.35em] text-[#0a0a0a]/55">
                        Fokus
                      </p>
                      <p className="mt-2 text-lg font-semibold">Uredan završetak</p>
                    </div>
                    <div className="rounded-[1.25rem] border border-white/10 bg-black/30 px-4 py-4">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/45">Poziv</p>
                      <p className="mt-2 text-lg font-semibold text-white">065 827 5055</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-2 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111111]/80 backdrop-blur-sm"
            >
              <div className="grid gap-px sm:grid-cols-3">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -2 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                    className={`px-6 py-5 ${
                      index === 1 ? 'bg-[#F5A623] text-[#0a0a0a]' : 'bg-[#111111]'
                    }`}
                  >
                    <p
                      className={`text-xl font-semibold uppercase tracking-[0.22em] ${
                        index === 1 ? 'text-[#0a0a0a]' : 'text-white'
                      }`}
                    >
                      {stat.value}
                    </p>
                    <p
                      className={`mt-2 text-sm leading-6 ${
                        index === 1 ? 'text-[#0a0a0a]/80' : 'text-white/62'
                      }`}
                    >
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-10">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </section>

        <section id="usluge" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-sm uppercase tracking-[0.38em] text-[#F5A623]">Usluge</p>
              <h2 className="mt-4 max-w-sm font-display text-[clamp(3rem,5vw,4.8rem)] uppercase leading-[0.9] tracking-[0.08em] text-white">
                Šta radimo
              </h2>
              <p className="mt-5 max-w-md text-lg leading-8 text-white/72">
                Sve vrste elektroinstalacionih radova, od osnovnih instalacija do naprednih
                sistema za automatizaciju i zaštitu.
              </p>

              <div className="mt-8 grid gap-4">
                {principles.map((item) => (
                  <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-[#111111] p-5">
                    <p className="text-sm uppercase tracking-[0.34em] text-[#F5A623]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-white/68">{item.text}</p>
                  </div>
                ))}
              </div>

              <motion.a
                href="tel:0658275055"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
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
                    index === services.length - 1 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5A623] text-2xl shadow-[0_0_35px_rgba(245,166,35,0.18)]">
                    <span aria-hidden="true">{service.icon}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-display uppercase tracking-[0.08em] text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/68">{service.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

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
              <p className="text-sm uppercase tracking-[0.38em] text-[#F5A623]">O nama</p>
              <h2 className="mt-4 max-w-xl font-display text-[clamp(3rem,5vw,4.8rem)] uppercase leading-[0.9] tracking-[0.08em] text-white">
                Industrijski izgled, ozbiljan pristup
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Jovanić Elektro izvodi elektroinstalacije za kuće, stanove, lokale i poslovne
                objekte, uz čist završni izgled i jasnu komunikaciju.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {principles.map((item) => (
                  <div key={item.title} className="rounded-[1.35rem] border border-white/10 bg-black/30 p-5">
                    <p className="text-sm uppercase tracking-[0.34em] text-white/45">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/68">{item.text}</p>
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
                    'Dolazak na teren i procena bez zastoja.',
                    'Jasan dogovor oko obima i rokova.',
                    'Izvođenje sa naglaskom na urednost i trajnost.',
                  ].map((point) => (
                    <div key={point} className="flex items-start gap-3 text-white/78">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#F5A623]" />
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
                <p className="text-sm uppercase tracking-[0.38em] text-[#F5A623]">Kontakt</p>
                <h3 className="mt-4 font-display text-[clamp(2.4rem,4vw,3.4rem)] uppercase leading-[0.92] tracking-[0.08em] text-white">
                  Pozovite nas za procenu
                </h3>
                <p className="mt-5 text-lg leading-8 text-white/72">
                  Radimo u Subotici i okolnim mestima. Javite se za brzu procenu, dogovor termina
                  i profesionalno izvođenje radova.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.35rem] border border-white/10 bg-black/30 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">Telefon</p>
                    <p className="mt-3 text-2xl font-semibold text-white">065 827 5055</p>
                  </div>
                  <div className="rounded-[1.35rem] border border-white/10 bg-black/30 p-5">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">Lokacija</p>
                    <p className="mt-3 text-2xl font-semibold text-white">Subotica, Srbija</p>
                  </div>
                </div>

                <motion.a
                  href="tel:0658275055"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 24 }}
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
  )
}
