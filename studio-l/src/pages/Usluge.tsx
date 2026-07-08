import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

function BokehCircle({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

const services = [
  { icon: '✂️', title: 'Žensko šišanje', desc: 'Precizno šišanje prilagođeno obliku lica i željenom stilu.' },
  { icon: '💨', title: 'Feniranje', desc: 'Profesionalno feniranje ravno, na lokne ili voluminozno.' },
  { icon: '🎨', title: 'Farbanje kose', desc: 'Jednobojno farbanje i farbanje izrastka vrhunskim bojama.' },
  { icon: '✨', title: 'Pramenovi & Balayage', desc: 'Ručno rađeni pramenovi, balayage i air touch tehnika.' },
  { icon: '💆', title: 'Nega & Tretmani', desc: 'Regenerativni tretmani za suvu, oštećenu i hemijski tretiranu kosu.' },
  { icon: '🌀', title: 'Svečane frizure', desc: 'Frizure za venčanja, maturske večeri i posebne prilike.' },
  { icon: '🌿', title: 'Keratinski tretman', desc: 'Trajno ispravljanje i zaglađivanje kose bez agresivnih hemikalija.' },
  { icon: '👤', title: 'Muško šišanje', desc: 'Precizno muško šišanje i uređivanje.' },
]

export default function Usluge() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <BokehCircle className="bg-[#BFA980]/6 blur-[120px] h-96 w-96 top-10 left-10" />
        <BokehCircle className="bg-[#BFA980]/4 blur-[100px] h-80 w-80 bottom-10 right-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 pt-24"
        >
          <p className="text-[#BFA980] text-xs tracking-[0.45em] uppercase mb-4">USLUGE</p>
          <h1 className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-white">
            Naše usluge
          </h1>
          <p className="text-white/50 max-w-md mx-auto mt-4 leading-relaxed">
            Sve što vam je potrebno za savršenu kosu.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="group bg-[#131209] border border-white/7 rounded-2xl p-6 hover:border-[#BFA980]/35 hover:bg-[#1a1814] transition-all duration-500 hover:-translate-y-1"
            >
              <span className="text-2xl">{service.icon}</span>
              <h3 className="font-display italic text-xl text-white mt-3 mb-2">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{service.desc}</p>
              <span className="text-xs text-[#BFA980]/60 border border-[#BFA980]/20 rounded-full px-3 py-1">
                Cena na upit
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#BFA980]/25 bg-[#BFA980]/5 rounded-2xl p-6 text-center"
        >
          <p className="text-white/60 text-sm leading-relaxed">
            Za informacije o cenama i zakazivanje pozovite nas ili pošaljite email:
          </p>
          <p className="text-[#BFA980] text-sm mt-2">
            063/110-6320 &middot; lara.kalinic@gmail.com
          </p>
          <a
            href="tel:0631106320"
            className="inline-flex mt-4 px-6 py-2.5 rounded-full border border-[#BFA980]/50 text-[#BFA980] text-sm tracking-wider uppercase transition-all hover:bg-[#BFA980] hover:text-[#0c0b09]"
          >
            Pozovite nas &rarr;
          </a>
        </motion.div>
      </section>
    </>
  )
}
