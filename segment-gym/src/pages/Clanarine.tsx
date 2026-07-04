import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

export default function Clanarine() {
  return (
    <main>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 35% 100%)', background: '#111111' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <h1 className="font-display text-7xl sm:text-9xl text-white leading-none mb-6">ČLANARINE</h1>
            <p className="text-white/60 text-lg max-w-xl">
              Fleksibilne opcije prilagođene svakom rasporedu i budžetu.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/8 p-8 flex flex-col">
            <h3 className="font-display text-3xl tracking-wider text-white mb-2">DNEVNA</h3>
            <p className="text-white/45 text-xs tracking-widest uppercase mb-4">Pristup za jedan dan</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
              Idealno za goste i one koji žele da isprobaju.
            </p>
            <span className="text-white/30 text-sm mb-4">Cena na upit</span>
            <Link to="/kontakt" className="bg-white/10 text-white text-sm tracking-widest uppercase px-6 py-3 text-center hover:bg-white/20 transition-colors">
              Pozovite nas →
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#C8FF00] p-8 flex flex-col relative">
            <span className="absolute top-3 right-3 bg-[#080808] text-[#C8FF00] text-[10px] tracking-widest px-2 py-1 uppercase">
              Popularno
            </span>
            <h3 className="font-display text-3xl tracking-wider text-[#080808] mb-2">MESEČNA</h3>
            <p className="text-[#080808]/60 text-xs tracking-widest uppercase mb-4">Neograničen pristup mesec dana</p>
            <p className="text-[#080808]/70 text-sm leading-relaxed mb-6 flex-1">
              Najpopularnija opcija za redovne posetioce.
            </p>
            <span className="text-[#080808]/40 text-sm mb-4">Cena na upit</span>
            <Link to="/kontakt" className="bg-[#080808] text-white text-sm tracking-widest uppercase px-6 py-3 text-center hover:bg-[#080808]/80 transition-colors">
              Pozovite nas →
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-[#111111] border border-white/8 p-8 flex flex-col">
            <h3 className="font-display text-3xl tracking-wider text-white mb-2">GODIŠNJA</h3>
            <p className="text-white/45 text-xs tracking-widest uppercase mb-4">Najisplativija opcija</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
              Neograničen pristup tokom cele godine.
            </p>
            <span className="text-white/30 text-sm mb-4">Cena na upit</span>
            <Link to="/kontakt" className="bg-white/10 text-white text-sm tracking-widest uppercase px-6 py-3 text-center hover:bg-white/20 transition-colors">
              Pozovite nas →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#C8FF00]/30 bg-[#C8FF00]/5 p-6 mt-10"
        >
          <p className="text-white/80 text-sm leading-relaxed">
            📞 Za aktuelne cene i informacije o kardio kartici, kontaktirajte nas direktno:{' '}
            <a href="tel:+381621528290" className="text-[#C8FF00] underline">+381 62 15 28 290</a>{' '}
            ili posetite nas na Kireška 59.
          </p>
        </motion.div>
      </section>
    </main>
  )
}
