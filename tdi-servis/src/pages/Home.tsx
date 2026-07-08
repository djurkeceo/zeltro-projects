import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedCounter from '../components/AnimatedCounter'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const services = [
  {
    icon: '\uD83D\uDD27',
    title: 'Auto-mehani\u010Darske usluge',
    desc: 'Remont motora, menja\u010Da, trapova, ko\u010Dionog sistema i upravljanja.',
  },
  {
    icon: '\u26A1',
    title: 'Auto-elektri\u010Darske usluge',
    desc: 'Svetlosna i zvu\u010Dna signalizacija, alternatori, anlaseri, priklju\u010Dna vozila.',
  },
  {
    icon: '\uD83D\uDCBB',
    title: 'Auto-elektroni\u010Darske usluge',
    desc: 'Dijagnostika TECH2, MDI GM, Daewoo-scanner i digitalni osciloskop.',
  },
  {
    icon: '\u2744\uFE0F',
    title: 'Klima ure\u0111aji',
    desc: 'Servis i punjenje klime R134a i R1234yf. Dezinfekcija ultrazvukom bez hemikalija.',
  },
  {
    icon: '\uD83C\uDFEA',
    title: 'Prodavnica delova',
    desc: '3.500 originalnih artikala na stanju. 70% delova za Opel/Chevrolet odmah dostupno.',
  },
  {
    icon: '\uD83D\uDE9A',
    title: 'Uvoz GM delova',
    desc: 'Uvoznici originalnih GM delova iz EU. Hologramska nalepnica, katalo\u0161ki broj.',
  },
]

const stats = [
  { num: 30, suffix: '+', label: 'Godina iskustva', format: 'int' as const },
  { num: 3500, suffix: '+', label: 'Evidentiranih vozila', highlighted: true, format: 'euro' as const },
  { num: 2500, suffix: '+', label: 'Zadovoljnih klijenata', format: 'euro' as const },
  { num: 3500, suffix: '', label: 'Originalnih artikala', format: 'euro' as const },
  { num: 4, suffix: '', label: 'Radna mesta', format: 'int' as const },
]

const whyItems = [
  {
    title: 'SAMO ORIGINALNI DELOVI',
    text: 'Ugra\u0111ujemo isklju\u010Divo originalne rezervne delove. Nema kompromisa po pitanju kvaliteta.',
  },
  {
    title: 'SPECIJALIZOVANI ZA OPEL',
    text: 'Tridesetogodi\u0161nje iskustvo sa Opel, Chevrolet i Daewoo vozilima.',
  },
  {
    title: 'DOSTAVA DO 13H ISTI DAN',
    text: 'Naru\u010Dite deo ujutru \u2014 stigne pre podne.',
  },
]

const reviews = [
  { name: 'Vuk Vukovi\u0107', rating: 5, text: 'Best service in Subotica. I\'ve been their customer for 16 years.' },
  { name: 'Dejan Petrovi\u0107', rating: 5, text: 'Extremely professional mechanics, fast, precise and very kind. Especially Tomislav!' },
  { name: 'Dragana S.', rating: 5, text: 'Very professional and kind. Kudos for being honest.' },
]

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)
            `,
          }}
        />
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[20vw] text-white/3 select-none pointer-events-none leading-none"
          aria-hidden
        >
          OPEL
        </span>
        <span className="absolute left-0 top-0 w-[3px] h-full bg-[#C0392B]" />

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="text-[#C0392B] text-xs tracking-[0.5em] uppercase mb-6">
            Subotica · Majšanski put 239 · Od 1995.
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-display leading-none">
            <span className="text-white" style={{ fontSize: 'clamp(5.5rem,12vw,10rem)' }}>VAŠ OPEL.</span><br />
            <span className="text-white" style={{ fontSize: 'clamp(5.5rem,12vw,10rem)' }}>NAŠA STRUKA.</span><br />
            <span className="text-[#C0392B]" style={{ fontSize: 'clamp(5.5rem,12vw,10rem)' }}>30 GODINA.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-xl mt-6 leading-relaxed">
            Specijalizovani servis za Opel, Chevrolet i Daewoo vozila.
            Originalni GM delovi, vrhunska dijagnostika i iskusni majstori.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/usluge"
              className="bg-[#C0392B] text-white font-bold px-8 py-4 rounded-none hover:bg-[#E74C3C] transition-colors"
            >
              Pogledajte usluge &rarr;
            </Link>
            <a
              href="tel:0245255850"
              className="border border-white/20 text-white px-8 py-4 rounded-none hover:border-[#C0392B] hover:text-[#C0392B] transition-colors"
            >
              Pozovite nas
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40">
            <a href="tel:0245255850" className="hover:text-[#C0392B] transition-colors">024/525-585</a>
            <a href="tel:0245309300" className="hover:text-[#C0392B] transition-colors">024/530-930</a>
            <a href="tel:0635139420" className="hover:text-[#C0392B] transition-colors">063/513-942</a>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`py-10 px-4 text-center ${stat.highlighted ? 'bg-[#C0392B] text-white' : ''} ${!stat.highlighted && i < stats.length - 1 ? 'border-r border-white/8' : ''}`}
            >
              <AnimatedCounter
                to={stat.num}
                suffix={stat.suffix}
                formatFn={stat.format === 'euro' ? (n) => Math.round(n).toLocaleString('de-DE') : undefined}
                className="font-display text-4xl md:text-5xl leading-none"
              />
              <div className="text-sm mt-2 opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white mb-16 text-center"
          >
            NAŠE USLUGE
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="bg-[#111111] border border-white/8 rounded-none p-6 hover:border-[#C0392B]/40 hover:bg-[#181818] hover:-translate-y-1 transition-all group"
              >
                <div className="absolute left-0 top-0 w-0 h-full bg-[#C0392B] group-hover:w-[3px] transition-all" />
                <div className="text-2xl mb-4">{service.icon}</div>
                <h3 className="font-display text-xl text-white mb-3">{service.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/usluge" className="text-[#C0392B] font-semibold hover:underline">
              Sve usluge &rarr;
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/8">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="py-12 px-8"
            >
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-[#C0392B] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl text-white mb-16 text-center"
          >
            ŠTA KAŽU NAŠI KLIJENTI
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="bg-[#111111] border border-white/8 rounded-none p-6 border-l-2 border-l-[#C0392B]"
              >
                <div className="font-display text-lg text-white mb-1">{review.name}</div>
                <div className="text-[#C0392B] text-sm mb-3">{'★'.repeat(review.rating)}</div>
                <p className="text-white/50 text-sm leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/recenzije" className="text-[#C0392B] font-semibold hover:underline">
              Sve recenzije &rarr;
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
