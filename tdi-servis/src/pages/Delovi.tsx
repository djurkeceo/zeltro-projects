import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

export default function Delovi() {
  return (
    <div>
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px),
              repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)
            `,
          }}
        />
        <span className="absolute left-0 top-0 w-[3px] h-full bg-[#C0392B]" />
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-16"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeUp} className="font-display text-7xl md:text-9xl text-white leading-none mb-6">
            AUTO DELOVI
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl">
            Originalni GM delovi — direktno iz EU.
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3">
          {[
            { num: 3500, suffix: '+', label: 'Originalnih artikala', euro: true },
            { num: 70, suffix: '%', label: 'Delova na stanju odmah', euro: false },
            { num: null, label: 'Sertifikovani uvoz', text: 'EU' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className={`py-12 px-6 text-center ${i === 0 ? 'bg-[#C0392B] text-white' : ''} ${i !== 0 ? 'text-white' : ''}`}
            >
              {stat.num !== null ? (
                <AnimatedCounter
                  to={stat.num}
                  suffix={stat.suffix ?? ''}
                  formatFn={stat.euro ? (n) => Math.round(n).toLocaleString('de-DE') : undefined}
                  className="font-display text-5xl leading-none"
                />
              ) : (
                <div className="font-display text-5xl leading-none">{stat.text}</div>
              )}
              <div className="text-sm mt-2 opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/60 text-base leading-relaxed">
              Naša prodavnica poseduje 3.500 originalnih artikala koji obezbeđuju 100% rezervnih delova potrebnih za redovno servisiranje Opel, Daewoo i Chevrolet vozila. 70% najpotrebnijih delova uvek je na stanju. Ostale delove nabavljamo za nekoliko dana.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {[
              'GM originalna ambala\u017Ea',
              'Hologramska nalepnica',
              'Katalo\u0161ki broj i zemlja proizvodnje',
              'Tr\u017Ei\u0161te EU \u2014 uvezeno iz EU',
              'Dostava do 13h isti dan',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[#111111] border border-white/8 p-4 rounded-none">
                <svg className="w-5 h-5 text-[#C0392B] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block bg-[#C0392B] text-white text-xs font-bold px-3 py-1 mb-4">TOP ARTIKAL</span>
            <h2 className="font-display text-3xl md:text-5xl text-white mb-4">AKTUELNA PONUDA</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Svaki mesec imamo posebnu ponudu. Posetite nas ili nas pozovite za aktuelnu akciju.
            </p>
            <a
              href="tel:0245255850"
              className="inline-block bg-[#C0392B] text-white font-bold px-8 py-4 rounded-none hover:bg-[#E74C3C] transition-colors"
            >
              Pozovite za detalje &rarr;
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#111111] border-y border-[#C0392B]/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-6xl text-white mb-4">NARUČITE ONLINE</h2>
            <p className="text-white/60 text-lg mb-8">
              Posetite naš webshop za kompletan asortiman originalnih Opel delova.
            </p>
            <a
              href="https://www.autodeloviopel.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C0392B] text-white font-bold px-8 py-4 rounded-none hover:bg-[#E74C3C] transition-colors"
            >
              Idite na webshop &rarr;
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
