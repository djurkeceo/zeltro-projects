import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
} as const

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const equipment = [
  { icon: '🏋️', title: 'FREE WEIGHTS', desc: 'Bučice, šipke i tegovi za slobodne vežbe. Potpuna sloboda pokreta.' },
  { icon: '💪', title: 'SPRAVE ZA SNAGU', desc: 'Nemačke sprave visokog kvaliteta za izolovane i složene vežbe snage.' },
  { icon: '🚴', title: 'KARDIO ZONA', desc: 'Trake za trčanje, bicikli i ostala kardio oprema za izdržljivost i sagorevanje.' },
  { icon: '🔗', title: 'KABLOVSKI SISTEM', desc: 'Višefunkcionalni kablovski sistemi za fleksibilan i sveobuhvatan trening.' },
  { icon: '🧘', title: 'STRETCHING ZONA', desc: 'Prostor za zagrevanje, istezanje i oporavak nakon treninga.' },
  { icon: '🚿', title: 'SVLAČAONICE', desc: 'Čiste svlačaonice sa tuševima odvojene za muškarce i žene.' },
]

export default function Oprema() {
  return (
    <main>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 30% 100%)', background: '#111111' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <h1 className="font-display text-7xl sm:text-9xl text-white leading-none mb-6">OPREMA</h1>
            <p className="text-white/60 text-lg max-w-xl">
              Veliki broj sprava za vežbanje i odlični uslovi za rekreaciju.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {equipment.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="bg-[#111111] border border-white/8 p-8 hover:border-[#C8FF00] hover:bg-[#181818] hover:-translate-y-1 transition-all"
            >
              <span className="text-3xl block mb-4">{item.icon}</span>
              <h3 className="font-display text-2xl tracking-wider text-white mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-[#C8FF00] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-6xl text-[#080808] tracking-wider leading-tight">
            NEMAČKE SPRAVE. VRHUNSKI KVALITET.
          </h2>
          <p className="text-[#080808]/70 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Ulažemo u opremu koja traje — jer ti zaslužuješ najbolje.
          </p>
        </div>
      </section>
    </main>
  )
}
