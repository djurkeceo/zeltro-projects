import { useEffect, useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import './index.css'

const phoneHref = 'tel:0658275055'
const phoneNumber = '065 827 5055'

const navLinks = [
  { href: '#usluge', label: 'Usluge' },
  { href: '#o-nama', label: 'O nama' },
  { href: '#kontakt', label: 'Kontakt' },
]

const services = [
  {
    icon: 'bolt',
    title: 'Elektroinstalacije',
    description: 'Slabe i jake struje, izvođenje svih vrsta elektroinstalacija za stanove, kuće i poslovne prostore.',
  },
  {
    icon: 'plug',
    title: 'Konektori, prekidači, osigurači',
    description: 'Postavljanje i zamena instalacionog materijala, priprema razvoda i sigurno povezivanje uređaja.',
  },
  {
    icon: 'light',
    title: 'Rasveta & LED',
    description: 'Postavljanje i zamena rasvete, LED program, dekorativno i funkcionalno osvetljenje prostora.',
  },
  {
    icon: 'intercom',
    title: 'Interfoni',
    description: 'Instalacija i servis interfonskih sistema za stambene zgrade, kuće i manje poslovne objekte.',
  },
  {
    icon: 'camera',
    title: 'Video nadzor',
    description: 'Ugradnja sistema video nadzora, pozicioniranje kamera i podešavanje pregleda za veću sigurnost.',
  },
  {
    icon: 'home',
    title: 'Pametne kuće',
    description: 'Smart home sistemi i automatizacija za udobnije, efikasnije i sigurnije upravljanje domom.',
  },
  {
    icon: 'storm',
    title: 'Gromobranska zaštita',
    description: 'Gromobranska instalacija i zaštita objekata od atmosferskih pražnjenja i prenapona.',
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-black text-white">
      <Navbar
        menuOpen={menuOpen}
        scrolled={scrolled}
        onMenuToggle={() => setMenuOpen((open) => !open)}
        onCloseMenu={closeMenu}
      />

      <Hero />

      <ServicesSection />
      <AboutSection />
      <ContactSection />

      <Footer />
    </main>
  )
}

function Navbar({
  menuOpen,
  scrolled,
  onMenuToggle,
  onCloseMenu,
}: {
  menuOpen: boolean
  scrolled: boolean
  onMenuToggle: () => void
  onCloseMenu: () => void
}) {
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-white/10 bg-black/75 backdrop-blur-xl'
          : 'border-transparent bg-black/35 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Jovanić Elektro navigacija">
        <a href="#top" className="group flex shrink-0 items-center gap-3" onClick={onCloseMenu} aria-label="Jovanić Elektro početna">
          <LogoIcon className="h-10 w-10 text-brand-gold transition-transform duration-300 group-hover:scale-110" />
          <span className="leading-none">
            <span className="block font-heading text-2xl tracking-[0.18em] sm:text-3xl">JOVANIĆ</span>
            <span className="block font-heading text-sm tracking-[0.42em] text-white/80 sm:text-base">ELEKTRO</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={phoneHref}
            className="rounded-none border border-brand-gold bg-brand-gold px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white hover:text-black"
          >
            Pozovite nas
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white lg:hidden"
          onClick={onMenuToggle}
          aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 lg:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } transition-[max-height] duration-300`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onCloseMenu}
              className="rounded-none border-l-2 border-transparent px-3 py-4 text-lg font-black uppercase tracking-[0.22em] text-white/80 transition-colors hover:border-brand-gold hover:text-brand-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={phoneHref}
            onClick={onCloseMenu}
            className="mt-3 rounded-none bg-brand-gold px-3 py-4 text-center text-sm font-black uppercase tracking-[0.2em] text-black"
          >
            Pozovite nas
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden bg-brand-black pt-24">
      <div className="absolute inset-0 -z-20 bg-industrial opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_25%,rgba(245,166,35,0.16),transparent_34rem),radial-gradient(circle_at_15%_85%,rgba(255,255,255,0.06),transparent_28rem)]" />

      <motion.svg
        className="pointer-events-none absolute -right-24 bottom-8 -z-10 h-[42rem] w-[42rem] text-brand-gold opacity-[0.08] sm:right-10 sm:bottom-0"
        viewBox="0 0 240 240"
        fill="currentColor"
        aria-hidden="true"
        animate={{ y: [0, -18, 0], rotate: [0, 2, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M148 4 58 4l32 82H44l100 150 25-94h42L148 4Z" />
      </motion.svg>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <motion.div
          className="relative z-10 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-none border border-brand-gold/40 bg-brand-gold/10 px-4 py-2">
            <span className="h-2 w-12 bg-brand-gold" />
            <span className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Subotica i okolina</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-[clamp(5rem,11vw,6.25rem)] leading-[0.86] tracking-[0.08em] text-white"
          >
            STRUJA JE
            <span className="block text-brand-gold">NAŠ POSAO</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg font-medium text-white/72 sm:text-xl"
          >
            Profesionalne elektroinstalacije u Subotici i okolini — precizan rad, siguran razvod i moderan pristup svakom projektu.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={phoneHref}
              className="group inline-flex items-center justify-center gap-3 rounded-none bg-brand-gold px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white"
            >
              Pozovite nas
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#usluge"
              className="inline-flex items-center justify-center rounded-none border border-white/30 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold"
            >
              Pogledajte usluge
            </a>
          </motion.div>
        </motion.div>

        <motion.aside
          className="relative hidden min-h-[520px] lg:block"
          initial={{ opacity: 0, x: 60, rotate: -1 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Jovanić Elektro brend vizuel"
        >
          <div className="absolute inset-6 rounded-none border border-white/15 bg-brand-surface shadow-2xl shadow-black/40" />
          <div className="absolute left-0 top-0 h-full w-[34%] overflow-hidden border-l border-t border-white/20 bg-white">
            <div className="absolute left-[-45%] top-[-10%] h-[120%] w-[90%] rotate-[22deg] bg-brand-gold" />
            <div className="absolute left-[-38%] top-[-8%] h-[110%] w-2 rotate-[22deg] bg-brand-black" />
          </div>
          <div className="absolute left-[44%] top-[17%] flex h-44 w-44 items-center justify-center rounded-none border border-brand-gold/30 bg-brand-gold text-brand-black shadow-[0_0_80px_rgba(245,166,35,0.35)]">
            <BoltIcon className="h-28 w-28" />
          </div>
          <div className="absolute bottom-12 left-12 right-12">
            <p className="font-heading text-7xl leading-none tracking-[0.12em] text-white">JOVANIĆ</p>
            <p className="mt-2 font-heading text-3xl tracking-[0.38em] text-brand-gold">ELEKTRO</p>
            <div className="mt-8 h-px w-full bg-white/20" />
            <p className="mt-6 max-w-sm text-base leading-7 text-white/65">
              Crno-beli industrijski identitet, zlatan energetski simbol i pouzdan elektro servis za svaki objekat.
            </p>
          </div>
        </motion.aside>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-70" />
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="usluge" className="relative overflow-hidden bg-brand-black py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,166,35,0.12),transparent_36rem)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={stagger}
        >
          <motion.span variants={fadeUp} className="section-eyebrow">Usluge</motion.span>
          <motion.h2 variants={fadeUp} className="mt-5 font-heading text-5xl uppercase tracking-[0.1em] text-white sm:text-6xl">
            ŠTA RADIMO
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Sve vrste elektroinstalacionih radova — od osnovnih priključaka do kompleksnijih sistema za savremene domove i poslovne prostore.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              transition={{ delay: index * 0.04, duration: 0.55 }}
              className="group relative overflow-hidden rounded-none border border-white/10 bg-brand-surface-2 p-7 transition-colors duration-300 hover:border-brand-gold/60 hover:bg-[#202020]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-gold/10 blur-2xl transition-all duration-300 group-hover:bg-brand-gold/20" />
              <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-none border border-brand-gold/35 bg-brand-gold/10 text-brand-gold transition-colors duration-300 group-hover:bg-brand-gold group-hover:text-black">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-heading text-3xl uppercase tracking-[0.08em] text-white">{service.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/62">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="o-nama" className="relative overflow-hidden bg-brand-surface py-24 sm:py-28">
      <div className="absolute inset-y-0 left-0 w-full max-w-[42%] bg-white" aria-hidden="true" />
      <div className="absolute inset-y-0 left-[calc(50%-2px)] w-px bg-brand-gold" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <motion.div
          className="relative min-h-[500px] overflow-hidden bg-brand-black"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-industrial opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,166,35,0.2),transparent_22rem)]" />
          <div className="absolute left-0 top-0 h-full w-[34%] bg-white" />
          <div className="absolute left-[-8%] top-[-8%] h-[116%] w-2 rotate-[22deg] bg-brand-gold" />
          <div className="absolute bottom-14 left-10 right-10 rounded-none border border-white/15 bg-black/70 p-7 backdrop-blur">
            <BoltIcon className="mb-5 h-16 w-16 text-brand-gold" />
            <p className="font-heading text-5xl leading-none tracking-[0.12em] text-white">ELEKTRO</p>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.35em] text-brand-gold">Jovanić</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">O nama</span>
          <h2 className="mt-5 font-heading text-5xl uppercase tracking-[0.1em] text-white sm:text-6xl">
            SIGURAN RAD. JASAN DOGOVOR.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/68">
            Jovanić Elektro je elektro servis iz Subotice posvećen kvalitetnim instalacijama, preglednom razvodu i trajnim rešenjima za domove, stanove i poslovne objekte.
          </p>
          <p className="mt-5 text-lg leading-8 text-white/68">
            Radimo pažljivo, bez kompromisa na bezbednosti, uz poštovanje dogovorenih rokova i jasnu komunikaciju na svakom projektu.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <AboutCard label="Lokacija" value="Subotica" />
            <AboutCard label="Područje" value="Okolina" />
            <AboutCard label="Fokus" value="Kvalitet" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="kontakt" className="relative overflow-hidden bg-brand-black py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(245,166,35,0.14),transparent_30rem)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="section-eyebrow">Kontakt</span>
            <h2 className="mt-5 font-heading text-5xl uppercase tracking-[0.1em] text-white sm:text-6xl">
              POTREBNE SU VAM ELEKTROUSLUGE?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Pozovite Jovanić Elektro za konsultacije, izradu, zamenu ili servis elektroinstalacija u Subotici i okolini.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-none bg-brand-gold px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-white"
              >
                <PhoneIcon className="h-5 w-5" />
                {phoneNumber}
              </a>
              <a
                href="#usluge"
                className="inline-flex items-center justify-center rounded-none border border-white/25 px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold"
              >
                Vrati se na usluge
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative overflow-hidden border border-white/10 bg-brand-surface-2 p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gold/15 blur-3xl" aria-hidden="true" />
            <div className="relative space-y-6">
              <ContactRow label="Telefon" value={phoneNumber} href={phoneHref} />
              <ContactRow label="Lokacija" value="Subotica, Srbija" />
              <ContactRow label="Radno vreme" value="Po dogovoru" />
              <ContactRow label="Uslužno područje" value="Subotica i okolina" />
            </div>

            <div className="mt-9 rounded-none border border-brand-gold/30 bg-brand-gold/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">Brz poziv. Jasan dogovor.</p>
              <p className="mt-3 text-base leading-7 text-white/65">
                Pozovite nas za procenu obima radova, zamenu dotrajalih instalacija ili ugradnju novih sistema.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <div className="flex items-center gap-3">
          <BoltIcon className="h-7 w-7 text-brand-gold" />
          <div className="leading-none">
            <p className="font-heading text-2xl tracking-[0.18em] text-white">JOVANIĆ</p>
            <p className="text-xs font-black uppercase tracking-[0.36em] text-white/55">ELEKTRO</p>
          </div>
        </div>
        <p className="text-sm text-white/45">© {new Date().getFullYear()} Jovanić Elektro. Sva prava zadržana.</p>
      </div>
    </footer>
  )
}

function AboutCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-none border border-white/10 bg-black/35 p-5">
      <p className="text-xs font-black uppercase tracking-[0.26em] text-brand-gold">{label}</p>
      <p className="mt-2 font-heading text-3xl uppercase tracking-[0.08em] text-white">{value}</p>
    </div>
  )
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="text-sm font-black uppercase tracking-[0.24em] text-brand-gold">{label}</span>
      <span className="mt-1 block text-2xl font-heading uppercase tracking-[0.08em] text-white sm:text-3xl">{value}</span>
    </>
  )

  return href ? (
    <a href={href} className="block rounded-none border border-white/10 bg-black/25 p-5 transition-colors hover:border-brand-gold/60 hover:bg-brand-gold/10">
      {content}
    </a>
  ) : (
    <div className="block rounded-none border border-white/10 bg-black/25 p-5">{content}</div>
  )
}

function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case 'plug':
      return <PlugIcon />
    case 'light':
      return <LightIcon />
    case 'intercom':
      return <IntercomIcon />
    case 'camera':
      return <CameraIcon />
    case 'home':
      return <HomeIcon />
    case 'storm':
      return <StormIcon />
    default:
      return <BoltIcon />
  }
}

function BoltIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.2 2 4 13.4h7.1L9.8 22 20 8.7h-7.3L13.2 2Z" />
    </svg>
  )
}

function PlugIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M8 2v7M16 2v7M7 9h10v4a5 5 0 0 1-10 0V9Z" />
      <path d="M9 13h6" />
    </svg>
  )
}

function LightIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M9 18h6M10 22h4M8 14h8" />
      <path d="M7 14V8a5 5 0 0 1 10 0v6l-2 2H9l-2-2Z" />
      <path d="M9 8h.01M15 8h.01M12 11v3" />
    </svg>
  )
}

function IntercomIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M6 3h12v18H6V3Z" />
      <path d="M8 7h8M8 12h4M16 12h.01M8 17h8" />
    </svg>
  )
}

function CameraIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M4 8h4l2-3h4l2 3h4v11H4V8Z" />
      <path d="M12 13a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M18 12h.01" />
    </svg>
  )
}

function HomeIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M3 11 12 4l9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  )
}

function StormIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M12 3v7" />
      <path d="m9 5 3-3 3 3" />
      <path d="M5 11h14" />
      <path d="M6 11l2 9h8l2-9" />
      <path d="M9 20l2-5 2 5" />
    </svg>
  )
}

function PhoneIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M7 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4c0 1-1 2-2 2C10.6 21 3 13.4 3 3c0-1 1-2 2-2h2Z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

function LogoIcon({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-white" />
      <BoltIcon className="absolute inset-0 m-auto h-5 w-5 text-brand-gold" />
      <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-brand-black" />
    </div>
  )
}

export default App
