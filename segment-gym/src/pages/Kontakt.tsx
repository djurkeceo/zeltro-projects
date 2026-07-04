import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

function isOpen(): { open: boolean; label: string } {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours()
  const mins = now.getMinutes()
  const time = hours * 60 + mins

  const schedules: Record<number, [number, number]> = {
    1: [420, 1335], 2: [420, 1335], 3: [420, 1335], 4: [420, 1335], 5: [420, 1335],
    6: [480, 1295],
    0: [840, 1200],
  }

  const sched = schedules[day]
  if (!sched) return { open: false, label: 'ZATVORENO' }

  const [openMin, closeMin] = sched
  const open = time >= openMin && time < closeMin
  return { open, label: open ? 'OTVORENO' : 'ZATVORENO' }
}

export default function Kontakt() {
  const status = isOpen()

  return (
    <main>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 30% 100%)', background: '#111111' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <h1 className="font-display text-7xl sm:text-9xl text-white leading-none mb-6">KONTAKT</h1>
            <p className="text-white/60 text-lg max-w-xl">
              Dođite, pozovite ili nas pronađite na mapi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeUp} className="bg-[#111111] border border-white/8 p-6">
              <span className="text-lg block mb-2">📍</span>
              <h3 className="font-display text-xl tracking-wider text-white mb-1">ADRESA</h3>
              <p className="text-white/60 text-sm">Kireška 59</p>
              <p className="text-white/60 text-sm">24000 Subotica, Srbija</p>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#111111] border border-white/8 p-6">
              <span className="text-lg block mb-2">📞</span>
              <h3 className="font-display text-xl tracking-wider text-white mb-1">TELEFON</h3>
              <a href="tel:+381621528290" className="text-white/60 text-sm hover:text-[#C8FF00] transition-colors">
                +381 62 15 28 290
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#111111] border border-white/8 p-6">
              <span className="text-lg block mb-2">🕐</span>
              <h3 className="font-display text-xl tracking-wider text-white mb-1">RADNO VREME</h3>
              <div className="text-white/60 text-sm space-y-1 mb-3">
                <p>Pon–Pet: 07:00 – 22:15</p>
                <p>Subota: 08:00 – 21:15</p>
                <p>Nedelja: 14:00 – 20:00</p>
              </div>
              <span
                className={`text-sm font-bold tracking-wider ${
                  status.open ? 'text-[#C8FF00]' : 'text-white/45'
                }`}
              >
                ● {status.label}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-[#111111] border border-white/8 p-6">
              <span className="text-lg block mb-2">📘</span>
              <h3 className="font-display text-xl tracking-wider text-white mb-1">FACEBOOK</h3>
              <a
                href="https://www.facebook.com/spraveza.teretane/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 text-sm hover:text-[#C8FF00] transition-colors"
              >
                Pratite nas na Facebook-u →
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-h-[400px] lg:min-h-full"
          >
            <iframe
              src="https://www.google.com/maps?q=Kireška+59,+Subotica,+Srbija&output=embed"
              width="100%"
              height="100%"
              className="border border-white/10 w-full h-80 lg:h-full min-h-[400px]"
              style={{ border: 'none' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Segment Teretana - Kireška 59 Subotica"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#C8FF00] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl sm:text-7xl text-[#080808] tracking-wider leading-tight">
            POČNI DANAS.
          </h2>
          <p className="text-[#080808]/70 text-base sm:text-lg mt-4 max-w-xl mx-auto">
            Vrata su otvorena. Jedino što treba da uradiš — da dođeš.
          </p>
          <a
            href="tel:+381621528290"
            className="inline-block mt-8 bg-[#080808] text-white px-10 py-4 text-sm tracking-widest uppercase font-bold hover:scale-[1.03] active:scale-[0.97] transition-transform"
          >
            Pozovite nas →
          </a>
        </div>
      </section>
    </main>
  )
}
