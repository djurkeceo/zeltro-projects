import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
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

export default function Kontakt() {
  const status = isOpen()

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <BokehCircle className="bg-[#BFA980]/6 blur-[120px] h-96 w-96 top-10 left-10" />
        <BokehCircle className="bg-[#BFA980]/4 blur-[100px] h-80 w-80 bottom-10 right-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-6 pt-24"
        >
          <p className="text-[#BFA980] text-xs tracking-[0.45em] uppercase mb-4">KONTAKT</p>
          <h1 className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-white">
            Kontakt
          </h1>
          <p className="text-white/50 max-w-md mx-auto mt-4 leading-relaxed">
            Pronađite nas, pozovite ili pošaljite email.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.div
              variants={fadeUp}
              className="bg-[#131209] border border-white/7 rounded-2xl p-6 border-l-2 border-l-[#BFA980]/50"
            >
              <span className="text-[#BFA980] text-xs">✦</span>
              <h3 className="font-display italic text-lg text-white mt-2">ADRESA</h3>
              <p className="text-white/55 text-sm mt-1">
                Ivana Gorana Kovačića 9/4
                <br />
                24000 Subotica, Srbija
              </p>
              <p className="text-white/30 text-xs mt-1">Nasuprot Ekonomskog fakulteta</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#131209] border border-white/7 rounded-2xl p-6 border-l-2 border-l-[#BFA980]/50"
            >
              <span className="text-[#BFA980] text-xs">✦</span>
              <h3 className="font-display italic text-lg text-white mt-2">TELEFON</h3>
              <a
                href="tel:0631106320"
                className="text-[#BFA980] hover:text-white text-sm transition-colors mt-1 inline-block"
              >
                063/110-6320
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#131209] border border-white/7 rounded-2xl p-6 border-l-2 border-l-[#BFA980]/50"
            >
              <span className="text-[#BFA980] text-xs">✦</span>
              <h3 className="font-display italic text-lg text-white mt-2">EMAIL</h3>
              <a
                href="mailto:lara.kalinic@gmail.com"
                className="text-[#BFA980] hover:text-white text-sm transition-colors mt-1 inline-block"
              >
                lara.kalinic@gmail.com
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#131209] border border-white/7 rounded-2xl p-6 border-l-2 border-l-[#BFA980]/50"
            >
              <span className="text-[#BFA980] text-xs">✦</span>
              <h3 className="font-display italic text-lg text-white mt-2">RADNO VREME</h3>
              <div className="space-y-1 mt-2">
                {[
                  { day: 'Pon, Čet, Pet', time: '08:00 – 20:00' },
                  { day: 'Utorak', time: '08:00 – 16:00' },
                  { day: 'Subota', time: '08:00 – 14:00' },
                  { day: 'Sreda', time: 'Zatvoreno' },
                  { day: 'Nedelja', time: 'Zatvoreno' },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 text-sm">
                    <span className="text-white/40">{h.day}</span>
                    <span className="text-white/60">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${status.open ? 'bg-[#BFA980]' : 'bg-white/30'}`} />
                <span className={`text-xs ${status.open ? 'text-[#BFA980]' : 'text-white/40'}`}>
                  {status.text}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps?q=Ivana+Gorana+Kovačića+9,+Subotica&output=embed"
              width="100%"
              height="100%"
              className="rounded-2xl border border-white/8 min-h-[300px] lg:min-h-[500px]"
              style={{ filter: 'invert(0.9) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio L lokacija"
            />
            <a
              href="https://www.google.com/maps/search/Studio+L+Subotica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#BFA980] hover:text-white text-sm transition-colors underline underline-offset-4"
            >
              Pronađite nas na Google Maps &rarr;
            </a>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#131209] border-t border-white/7 py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display italic text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-white">
              Vaš sledeći termin
              <br />
              čeka vas.
            </h2>
            <p className="text-white/45 text-sm mt-4 mb-8 leading-relaxed">
              Pozovite nas ili pošaljite email — odgovaramo brzo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:0631106320"
                className="inline-flex px-8 py-3.5 rounded-full border border-[#BFA980]/60 text-[#BFA980] text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#BFA980] hover:text-[#0c0b09]"
              >
                063/110-6320
              </a>
              <a
                href="mailto:lara.kalinic@gmail.com"
                className="text-white/40 hover:text-[#BFA980] text-sm tracking-wider uppercase transition-colors"
              >
                lara.kalinic@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
