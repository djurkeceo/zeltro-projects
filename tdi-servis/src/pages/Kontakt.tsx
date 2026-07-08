import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

function isOpen() {
  const now = new Date()
  const day = now.getDay()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const totalMinutes = hours * 60 + minutes
  if (day >= 1 && day <= 5) {
    return totalMinutes >= 9 * 60 && totalMinutes < 17 * 60
  }
  return false
}

const contacts = [
  {
    icon: '\uD83D\uDCCD',
    title: 'ADRESA',
    children: (
      <>
        <p className="text-white/60 text-sm">Majšanski put 239</p>
        <p className="text-white/60 text-sm">24110 Subotica, Srbija</p>
      </>
    ),
  },
  {
    icon: '\uD83D\uDCDE',
    title: 'TELEFONI',
    children: (
      <div className="flex flex-col gap-1">
        <a href="tel:0245255850" className="text-white/60 text-sm hover:text-[#C0392B] transition-colors">024/525-585</a>
        <a href="tel:0245309300" className="text-white/60 text-sm hover:text-[#C0392B] transition-colors">024/530-930</a>
        <a href="tel:0635139420" className="text-white/60 text-sm hover:text-[#C0392B] transition-colors">063/513-942</a>
      </div>
    ),
  },
  {
    icon: '\uD83D\uDCE7',
    title: 'EMAIL & WEB',
    children: (
      <div className="flex flex-col gap-1">
        <a href="mailto:office@tdiservis.rs" className="text-white/60 text-sm hover:text-[#C0392B] transition-colors">office@tdiservis.rs</a>
        <p className="text-white/60 text-sm">www.tdiservis.rs</p>
        <a href="https://www.autodeloviopel.rs" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm hover:text-[#C0392B] transition-colors">www.autodeloviopel.rs</a>
      </div>
    ),
  },
  {
    icon: '\uD83D\uDD50',
    title: 'RADNO VREME',
    children: (
      <>
        <p className="text-white/60 text-sm">Ponedeljak – Petak: 09:00 – 17:00</p>
        <p className="text-white/60 text-sm">Subota – Nedelja: Zatvoreno</p>
        <div className="flex items-center gap-2 mt-2">
          <span className={`w-2 h-2 rounded-full ${isOpen() ? 'bg-[#C0392B]' : 'bg-white/40'}`} />
          <span className={`text-sm font-semibold ${isOpen() ? 'text-[#C0392B]' : 'text-white/40'}`}>
            {isOpen() ? '● OTVORENO' : '● ZATVORENO'}
          </span>
        </div>
      </>
    ),
  },
  {
    icon: '\uD83D\uDD17',
    title: 'PRATITE NAS',
    children: (
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/pages/TDI-servis-Subotica/119264338130050"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#C0392B] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/tdiservis/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-[#C0392B] transition-colors"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </div>
    ),
  },
]

export default function Kontakt() {
  return (
    <div>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
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
            KONTAKT
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl">
            Zakažite servis ili nas kontaktirajte.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            {contacts.map((contact, i) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="bg-[#111111] border border-white/8 rounded-none p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{contact.icon}</span>
                  <h3 className="font-display text-lg text-white">{contact.title}</h3>
                </div>
                {contact.children}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full min-h-[400px] border border-white/8 rounded-none overflow-hidden"
          >
            <iframe
              src="https://maps.google.com/?q=Maj%C5%A1anski+put+239,+Subotica&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TDI Servis lokacija"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#C0392B] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">ZAKAŽITE SERVIS.</h2>
          <p className="text-white/80 text-lg mb-8">
            Pozovite nas i dogovorite termin. Čekamo vas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0245255850" className="border-2 border-white text-white font-bold px-8 py-4 rounded-none hover:bg-white hover:text-[#C0392B] transition-colors">
              024/525-585
            </a>
            <a href="tel:0245309300" className="border-2 border-white text-white font-bold px-8 py-4 rounded-none hover:bg-white hover:text-[#C0392B] transition-colors">
              024/530-930
            </a>
            <a href="tel:0635139420" className="border-2 border-white text-white font-bold px-8 py-4 rounded-none hover:bg-white hover:text-[#C0392B] transition-colors">
              063/513-942
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
