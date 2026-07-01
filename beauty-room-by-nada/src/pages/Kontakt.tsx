import { motion } from 'framer-motion'

const infoCards = [
  {
    icon: '📍',
    title: 'Adresa',
    content: (
      <>
        <p>Vuka Karadžića 18</p>
        <p>24000 Subotica, Srbija</p>
        <p className="text-rose/70 text-xs mt-1">Parking ispred salona</p>
      </>
    ),
  },
  {
    icon: '🕐',
    title: 'Radno vreme',
    content: <WorkingHours />,
  },
  {
    icon: '💳',
    title: 'Plaćanje',
    content: <p>Isključivo gotovinom</p>,
  },
  {
    icon: '🌐',
    title: 'Online zakazivanje',
    content: (
      <>
        <a
          href="https://www.sredime.rs/subotica/salon-beauty-room-by-nada"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-rose text-dark text-sm font-semibold rounded-full hover:opacity-90 transition-all mt-2"
        >
          Zakažite termin →
        </a>
        <p className="text-xs text-white/40 mt-2">Brzo i jednostavno preko SrediMe platforme</p>
      </>
    ),
  },
]

function WorkingHours() {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours()
  const minutes = now.getMinutes()

  const isWeekday = day >= 1 && day <= 5
  const isSaturday = day === 6
  const isSunday = day === 0

  let open = false
  if (isWeekday) {
    open = hours >= 9 && (hours < 18 || (hours === 18 && minutes === 0))
  } else if (isSaturday) {
    open = hours >= 8 && (hours < 14 || (hours === 14 && minutes === 0))
  }

  const statusText = isSunday ? 'Zatvoreno' : open ? 'Trenutno otvoreno' : 'Trenutno zatvoreno'
  const statusColor = isSunday ? 'text-rose/60' : open ? 'text-green-400' : 'text-rose/60'

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-white/50">Ponedeljak – Petak</span>
        <span className="text-white">09:00 – 18:00</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-white/50">Subota</span>
        <span className="text-white">08:00 – 14:00</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-white/50">Nedelja</span>
        <span className="text-rose/60">Zatvoreno</span>
      </div>
      <p className={`text-xs font-semibold mt-2 ${statusColor}`}>{statusText}</p>
    </div>
  )
}

export default function Kontakt() {
  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose/10 blur-[120px]"
          />
        </div>
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display italic text-5xl md:text-7xl text-white mb-4"
          >
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/60 max-w-xl mx-auto"
          >
            Zakažite termin ili nas kontaktirajte.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-surface border border-white/8 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{card.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg text-white mb-2">{card.title}</h3>
                    <div className="text-sm text-white/60">{card.content}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface border border-white/8 rounded-xl overflow-hidden"
          >
            <div className="w-full h-[300px]">
              <iframe
                src="https://www.google.com/maps?q=Vuka+Karadžića+18,+Subotica&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Beauty Room by Nada - Lokacija"
              />
            </div>
            <div className="p-4 text-center">
              <a
                href="https://www.google.com/maps?q=Vuka+Karadžića+18,+Subotica"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose text-sm hover:underline"
              >
                Pronađite nas na Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface border-t border-white/5 py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display italic text-3xl md:text-4xl text-white mb-3">
            Vaša nova frizura čeka vas.
          </h2>
          <p className="text-white/50 mb-8">
            Zakažite termin online i prepustite se rukama stručnjaka.
          </p>
          <a
            href="https://www.sredime.rs/subotica/salon-beauty-room-by-nada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose text-dark font-semibold rounded-full shadow-[0_16px_48px_rgba(201,149,108,0.18)] hover:opacity-90 transition-all"
          >
            Zakaži sada →
          </a>
        </div>
      </section>
    </div>
  )
}
