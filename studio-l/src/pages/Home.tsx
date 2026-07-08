import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <span className="block w-12 h-px bg-[#BFA980]/40" />
      <span className="text-[#BFA980]/60 text-xs">✦</span>
      <span className="block w-12 h-px bg-[#BFA980]/40" />
    </div>
  )
}

function SectionHeading({ eyebrow, title, dark }: { eyebrow?: string; title: string; dark?: boolean }) {
  return (
    <div className="text-center mb-12">
      {eyebrow && (
        <p className="text-[#BFA980] text-xs tracking-[0.45em] uppercase mb-3">{eyebrow}</p>
      )}
      <h2 className={`font-display italic text-4xl md:text-5xl ${dark ? 'text-[#0c0b09]' : 'text-white'}`}>
        {title}
      </h2>
      <GoldDivider />
    </div>
  )
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

const isOpen = (): { open: boolean; text: string } => {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours()
  const mins = now.getMinutes()
  const time = hours * 60 + mins

  const schedule: Record<number, [number, number] | null> = {
    1: [480, 1200],
    2: [480, 960],
    4: [480, 1200],
    5: [480, 1200],
    6: [480, 840],
  }

  const range = schedule[day]
  if (!range) return { open: false, text: 'Zatvoreno' }
  const [start, end] = range
  if (time >= start && time < end) return { open: true, text: 'Trenutno otvoreno' }
  return { open: false, text: 'Trenutno zatvoreno' }
}

export default function Home() {
  const status = isOpen()

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BokehCircle className="bg-[#BFA980]/6 blur-[120px] h-96 w-96 top-20 left-10" />
        <BokehCircle className="bg-[#BFA980]/4 blur-[100px] h-80 w-80 bottom-20 right-10" />
        <BokehCircle className="bg-[#D4C4A8]/3 blur-[140px] h-64 w-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-2xl mx-auto px-6 text-center pt-24"
        >
          <motion.div variants={fadeUp} className="w-12 h-px bg-[#BFA980]/40 mx-auto mb-6" />
          <motion.p variants={fadeUp} className="text-[#BFA980] text-xs tracking-[0.45em] uppercase mb-8">
            OD 2010. GODINE · SUBOTICA
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display italic text-[clamp(4rem,9vw,7rem)] leading-[0.88] text-white"
          >
            Vaša kosa u
            <br />
            pravim rukama.
          </motion.h1>
          <GoldDivider />
          <motion.p
            variants={fadeUp}
            className="text-white/55 max-w-md mx-auto leading-relaxed"
          >
            Frizerski salon Studio L u srcu Subotice.
            Više od 14 godina posvećenosti lepoti i stilu.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="tel:0631106320"
              className="inline-flex px-8 py-3.5 rounded-full border border-[#BFA980]/60 text-[#BFA980] text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#BFA980] hover:text-[#0c0b09]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Zakažite termin
            </a>
            <Link
              to="/usluge"
              className="text-white/50 hover:text-white underline-offset-4 hover:underline text-sm tracking-wider uppercase transition-colors"
            >
              Naše usluge &rarr;
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8">
            <a
              href="tel:0631106320"
              className="text-white/40 hover:text-[#BFA980] text-sm transition-colors"
            >
              063/110-6320
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '✦',
              title: '14+ GODINA ISKUSTVA',
              desc: 'Salon Studio L osnovan je 2010. godine i od tada neguje poverenje klijentkinja.',
            },
            {
              icon: '✦',
              title: 'CENTAR SUBOTICE',
              desc: 'Nalazimo se na adresi Ivana Gorana Kovačića 9/4 — lako dostupno.',
            },
            {
              icon: '✦',
              title: 'LIČNA POSVEĆENOST',
              desc: 'Larisa Kalinić lično se brine o svakoj klijentkinji.',
            },
          ].map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="bg-[#131209] border border-white/7 rounded-2xl p-6 border-l-2 border-l-[#BFA980]/50 hover:border-[#BFA980]/30 transition-all duration-500"
            >
              <span className="text-[#BFA980] text-lg">{pillar.icon}</span>
              <h3 className="font-display italic text-xl text-white mt-3 mb-2">{pillar.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="font-display italic text-[clamp(2.5rem,4vw,3.8rem)] text-white/12 leading-[1.1] select-none">
              Lepota je
              <br />
              stvar poverenja.
            </div>
            <p className="text-white text-lg md:text-xl leading-relaxed mt-4 relative z-10">
              Svaka klijentinja zaslužuje pažnju,
              <br />
              stručnost i rezultat koji je čini
              <br />
              ponosnom.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="text-white/55 leading-relaxed mb-6">
              Studio L nije samo frizerski salon — to je mesto gde se osećate prijatno,
              saslušano i zadovoljno. Larisa Kalinić i njen tim posvećeni su svakom detalju,
              od prvog susreta do savršene frizure.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Osnovan 2010.', 'Centar Subotice', 'Parking u blizini', 'Individualni pristup'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/40 border border-white/10 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <GoldDivider />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="NAŠE USLUGE" title="Šta nudimo" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { icon: '✂️', title: 'Šišanje & Feniranje', desc: 'Precizno šišanje i profesionalno feniranje svake dužine kose.' },
            { icon: '🎨', title: 'Farbanje kose', desc: 'Jednobojno farbanje, izrastak, prelivi i moderne tehnike bojenja.' },
            { icon: '✨', title: 'Pramenovi & Balayage', desc: 'Prirodni prelazi boja prilagođeni vašem tipu i tenu lica.' },
            { icon: '💆', title: 'Nega kose', desc: 'Tretmani koji vraćaju sjaj, vlažnost i snagu vašoj kosi.' },
          ].map((service) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="bg-[#131209] border border-white/7 rounded-2xl p-6 border-t-2 border-t-[#BFA980]/30 hover:bg-[#1a1814] hover:border-[#BFA980]/50 transition-all duration-500"
            >
              <span className="text-2xl">{service.icon}</span>
              <h3 className="font-display italic text-xl text-white mt-3 mb-2">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/usluge"
            className="inline-flex text-[#BFA980] hover:text-white text-sm tracking-wider uppercase transition-colors"
          >
            Sve usluge &rarr;
          </Link>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="RECENZIJE" title="Šta kažu klijentice" />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { name: 'Martina Kulić', stars: '★★★★★', text: 'Best hair salon in Subotica.' },
            { name: 'Jasna Pušin', stars: '★★★★★', text: 'The best in town!' },
            { name: 'Dulac Sanja', stars: '★★★★★', text: 'The best hairdresser.' },
          ].map((review) => (
            <motion.div
              key={review.name}
              variants={fadeUp}
              className="bg-[#131209] border border-white/7 rounded-2xl p-6 border-l-2 border-l-[#BFA980]/50"
            >
              <span className="text-[#BFA980] text-sm">{review.stars}</span>
              <h3 className="font-display italic text-lg text-white mt-2">{review.name}</h3>
              <p className="text-white/55 text-sm leading-relaxed mt-2">{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/recenzije"
            className="inline-flex text-[#BFA980] hover:text-white text-sm tracking-wider uppercase transition-colors"
          >
            Sve recenzije &rarr;
          </Link>
        </motion.div>
      </section>

      <section className="bg-[#131209] border-t border-white/7 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="font-display italic text-2xl text-white mb-4">Radno vreme</h3>
              <div className="space-y-2">
                {[
                  { day: 'Ponedeljak', time: '08:00 – 20:00' },
                  { day: 'Utorak', time: '08:00 – 16:00' },
                  { day: 'Sreda', time: 'Zatvoreno' },
                  { day: 'Četvrtak', time: '08:00 – 20:00' },
                  { day: 'Petak', time: '08:00 – 20:00' },
                  { day: 'Subota', time: '08:00 – 14:00' },
                  { day: 'Nedelja', time: 'Zatvoreno' },
                ].map((h) => (
                  <div key={h.day} className="flex gap-8 text-sm">
                    <span className="text-white/40 w-28">{h.day}</span>
                    <span className="text-white/60">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status.open ? 'bg-[#BFA980]' : 'bg-white/30'}`} />
                <span className={`text-xs ${status.open ? 'text-[#BFA980]' : 'text-white/40'}`}>
                  {status.text}
                </span>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-white/40 text-sm mb-3">Pozovite nas</p>
              <a
                href="tel:0631106320"
                className="font-display italic text-3xl text-[#BFA980] hover:text-white transition-colors"
              >
                063/110-6320
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
