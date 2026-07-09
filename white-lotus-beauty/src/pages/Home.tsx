import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LotusIcon from '../components/LotusIcon'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import OpenStatus from '../components/OpenStatus'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' as const } },
} as const

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const bokeh = [
  { className: 'h-[500px] w-[500px] top-0 left-[-10%] bg-[#7C9E8F]/7 blur-[140px]', dur: 14 },
  { className: 'h-96 w-96 bottom-10 right-5 bg-[#7C9E8F]/4 blur-[120px]', dur: 17 },
  { className: 'h-80 w-80 top-1/3 right-1/4 bg-[#E8D5C4]/4 blur-[160px]', dur: 12 },
  { className: 'h-64 w-64 bottom-0 left-1/3 bg-[#7C9E8F]/3 blur-[100px]', dur: 18 },
]

const services = [
  { icon: '✿', title: 'Šišanje', description: 'Precizno šišanje prilagođeno vašem tipu lica i željenom stilu.' },
  { icon: '✿', title: 'Feniranje', description: 'Profesionalno feniranje — ravno, na lokne ili voluminozno.' },
  { icon: '✿', title: 'Balayage', description: 'Ručno rađeni prelazi boja. Specijalizovani za Balayage tehniku.' },
  { icon: '✿', title: 'Pramenovi', description: 'Različite tehnike pramenova prilagođene vašoj boji i tipu kose.' },
  { icon: '✿', title: 'Keratin tretman', description: 'Ispravljanje i zaglađivanje kose. Bez formaldehida.' },
  { icon: '✿', title: 'Nega kose', description: 'Detox, hidratacija, tretman protiv peruti i opadanja kose.' },
  { icon: '✿', title: 'Tretmani lica', description: 'Kozmetičke procedure za negu i lepotu lica.' },
  { icon: '✿', title: 'Manikir', description: 'Uređivanje i nega noktiju.' },
]

const philosophyCards = [
  {
    icon: '✿', title: 'KONSULTACIJA',
    text: 'Besplatna konsultacija pre svakog blanš tretmana.',
  },
  {
    icon: '✿', title: 'ZDRAVLJE KOSE',
    text: 'Tretmani prilagođeni tipu kose — detox, hidratacija, keratin.',
  },
  {
    icon: '✿', title: 'BALAYAGE SPECIJALISTI',
    text: 'Jedni od retkih salona u Subotici specijalizovanih za Balayage.',
  },
]

export default function Home() {
  return (
    <main>
      {/* ───── HERO ───── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {bokeh.map((b, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full pointer-events-none ${b.className}`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <LotusIcon className="text-[#7C9E8F]/6 h-[28rem] w-[28rem]" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative text-center px-5 max-w-2xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <LotusIcon className="w-8 h-8 mx-auto text-[#7C9E8F] mb-6" />
          </motion.div>
          <motion.p variants={fadeUp} className="text-[#7C9E8F] text-[0.65rem] tracking-[0.5em] uppercase mb-6">
            PROZIVKA · SUBOTICA · OD 2022.
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display italic font-light text-white leading-[0.88] mb-6"
            style={{ fontSize: 'clamp(3.8rem, 9vw, 7rem)' }}
          >
            Samo zdrava kosa<br />je lepa kosa.
          </motion.h1>
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 text-[#7C9E8F]/40 mb-6">
            <span className="block w-12 h-px bg-[#7C9E8F]/30" />
            <span>✿</span>
            <span className="block w-12 h-px bg-[#7C9E8F]/30" />
          </motion.div>
          <motion.p variants={fadeUp} className="text-white/50 text-base leading-relaxed max-w-sm mx-auto mb-8">
            Specijalizovani frizerski salon na Prozivci.<br />
            Balayage, keratin, nega kose i tretmani lepote.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0631687544"
              className="inline-block border border-[#7C9E8F]/60 text-[#7C9E8F] rounded-full px-8 py-3.5 text-sm tracking-wide transition-all duration-300 hover:bg-[#7C9E8F] hover:text-[#0a0c0b]"
            >
              Zakažite termin
            </a>
            <Link
              to="/usluge"
              className="text-white/40 hover:text-white text-sm tracking-wide transition-colors duration-300"
            >
              Naše usluge →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ───── FILOZOFIJA ───── */}
      <section className="relative py-28 px-5 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <p
            className="font-display italic text-white/[0.04] font-light leading-[0.9] text-center"
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
          >
            Zdravlje kose<br />je lepota kose.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            className="text-[#7C9E8F] text-[0.65rem] tracking-[0.5em] uppercase mb-4"
          >
            NAŠA FILOZOFIJA
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
            className="font-display italic font-light text-white leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            Pristup koji polazi od zdravlja
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
            className="text-white/55 text-sm md:text-base leading-loose max-w-xl mx-auto mb-16"
          >
            U White Lotus Beauty verujemo da je zdrava kosa temelj svake lepe frizure. Zato pre svakog rada sa blanšom nudimo besplatne konsultacije — jer samo uz pravu dijagnostiku kose možemo postići dugotrajan i bezbedan rezultat.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut', delay: 0.3 + i * 0.1 } }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ scale: 1.02, y: -4, transition: { type: 'spring', stiffness: 320, damping: 26 } }}
                className="bg-[#111413] border border-white/7 rounded-3xl p-6 border-t-2 border-t-[#7C9E8F]/30 hover:border-[#7C9E8F]/30 hover:bg-[#181c1a] transition-all duration-300"
              >
                <p className="text-[#7C9E8F] text-lg mb-2">{c.icon}</p>
                <h3 className="font-display italic text-white text-base mb-2">{c.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── USLUGE PREVIEW ───── */}
      <section className="py-28 px-5">
        <SectionHeading
          eyebrow="USLUGE"
          title="Šta nudimo"
          subtitle="Kompletan frizerski i kozmetički tretman na jednom mestu."
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            to="/usluge"
            className="text-[#7C9E8F] text-sm tracking-wide hover:text-white transition-colors duration-300"
          >
            Zakažite konsultaciju →
          </Link>
        </motion.div>
      </section>

      {/* ───── SPECIJALIZACIJA ───── */}
      <section className="bg-[#111413] border-y border-[#7C9E8F]/15 py-20 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <h2
              className="font-display italic font-light text-white leading-[0.9]"
              style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}
            >
              Balayage<br />specijalisti.
            </h2>
            <p className="text-[#7C9E8F] text-sm tracking-[0.3em] uppercase mt-2">Subotica</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-white/55 text-sm md:text-base leading-relaxed mb-6">
              White Lotus Beauty je jedan od retkih salona u Subotici koji je specijalizovan za Balayage tehniku bojenja. Radimo besplatne konsultacije pre svakog rada sa blanšom, jer samo zdrava kosa daje savršen rezultat.
            </p>
            <Link
              to="/usluge"
              className="text-[#7C9E8F] text-sm tracking-wide hover:text-white transition-colors duration-300 inline-flex items-center gap-1"
            >
              Saznajte više →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ───── RADNO VREME ───── */}
      <section className="py-16 px-5 bg-[#0e1210]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-8">
            <OpenStatus />
            <div className="text-white/45 text-sm leading-relaxed">
              <p>Pon–Pet: 10:00 – 19:00</p>
              <p>Subota: 09:00 – 14:00</p>
              <p className="text-white/25">Nedelja: Zatvoreno</p>
            </div>
          </div>
          <a
            href="tel:0631687544"
            className="text-[#7C9E8F] text-sm tracking-wide hover:text-white transition-colors whitespace-nowrap"
          >
            Zakažite termin · 063/168-75-44
          </a>
        </motion.div>
      </section>
    </main>
  )
}
