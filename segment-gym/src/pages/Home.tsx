import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

function StatCard({ value, label, highlighted }: { value: string; label: string; highlighted?: boolean }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`flex flex-col items-center justify-center py-8 px-4 border-r border-white/8 last:border-r-0 ${
        highlighted ? 'bg-[#C8FF00] text-[#080808]' : ''
      }`}
    >
      <span className={`font-display text-5xl sm:text-6xl leading-none ${highlighted ? 'text-[#080808]' : 'text-[#C8FF00]'}`}>
        {value}
      </span>
      <span className={`text-xs tracking-widest uppercase mt-2 text-center ${highlighted ? 'text-[#080808]/70' : 'text-white/45'}`}>
        {label}
      </span>
    </motion.div>
  )
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-[#111111] border border-white/8 p-6 flex flex-col"
    >
      <div className="flex text-[#C8FF00] text-sm mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <span className="font-display text-lg tracking-wider text-white mb-2">{name}</span>
      <p className="text-white/60 text-sm leading-relaxed">{text}</p>
    </motion.div>
  )
}

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)', background: '#111111' }}
        />
        <div className="absolute left-6 top-1/2 -translate-y-1/2 w-1 h-48 bg-[#C8FF00]" />
        <div className="absolute right-0 top-0 text-[25vw] font-display text-white/[0.04] leading-none select-none pointer-events-none rotate-90 origin-top-right translate-x-1/2">
          SEGMENT
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.span variants={fadeUp} className="text-[#C8FF00] text-xs tracking-[0.5em] uppercase block mb-4">
              SUBOTICA · KIREŠKA 59
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display leading-none text-white" style={{ fontSize: 'clamp(5rem, 14vw, 11rem)' }}>
              TRENIRAŠ.
            </motion.h1>
            <motion.h1 variants={fadeUp} className="font-display leading-none text-white" style={{ fontSize: 'clamp(5rem, 14vw, 11rem)' }}>
              RASTEŠ.
            </motion.h1>
            <motion.h1 variants={fadeUp} className="font-display leading-none text-[#C8FF00]" style={{ fontSize: 'clamp(5rem, 14vw, 11rem)' }}>
              POBEĐUJEŠ.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-lg mt-6 leading-relaxed">
              Teretana Segment — veliki broj sprava, čist prostor i atmosfera koja te tera da daš sve od sebe.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/oprema"
                className="bg-[#C8FF00] text-[#080808] font-bold px-8 py-4 text-sm tracking-widest uppercase hover:scale-[1.03] active:scale-[0.97] transition-transform"
              >
                Pogledaj opremu →
              </Link>
              <a
                href="tel:+381621528290"
                className="border border-white/20 text-white px-8 py-4 text-sm tracking-widest uppercase hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
              >
                Pozovi nas
              </a>
            </motion.div>
            <motion.a
              variants={fadeUp}
              href="tel:+381621528290"
              className="block mt-8 text-white/30 font-bold text-lg hover:text-[#C8FF00] transition-colors"
            >
              +381 62 15 28 290
            </motion.a>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid grid-cols-2 md:grid-cols-4 border-y border-white/8 bg-[#111111]"
      >
        <StatCard value="15+" label="Godina iskustva" />
        <StatCard value="07:00" label="Otvaramo ujutru" highlighted />
        <StatCard value="6/7" label="Dana u nedelji" />
        <StatCard value="GER" label="Kvalitetne sprave" />
      </motion.section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl sm:text-7xl text-white mb-16 tracking-wider"
        >
          ZAŠTO SEGMENT
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: '💪', title: 'OPREMA', desc: 'Veliki broj sprava nemačkih proizvođača. Sve što ti treba za kompletan trening.' },
            { icon: '🕐', title: 'RADNO VREME', desc: 'Otvoreni 7 dana u nedelji. Pon–Pet do 22:15, Subota do 21:15, Nedelja od 14:00.' },
            { icon: '💰', title: 'PRISTUPAČNO', desc: 'Fleksibilne cene i radno vreme prilagođeno svačijem rasporedu.' },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="bg-[#111111] border border-white/8 border-l-[3px] border-l-[#C8FF00] p-8 hover:border-[#C8FF00] transition-colors"
            >
              <span className="text-2xl">{card.icon}</span>
              <h3 className="font-display text-2xl tracking-wider text-white mt-4 mb-3">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="font-display text-6xl sm:text-8xl text-white/[0.08] leading-none select-none tracking-wider">
              ZDRAV ŽIVOT JE VIŠE OD VEŽBANJA.
            </div>
            <div className="absolute inset-0 flex items-center">
              <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-md">
                Ponosni smo na uslove i atmosferu koja vlada u teretani. Znamo da je zdrav život mnogo više od samog vežbanja. Potrebno je da se osećate prijatno i uz to dobro zabavljate. Naše ljubazno osoblje uvek je tu da vam pomogne.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Čist prostor', 'Ljubazno osoblje', 'Svlačaonice', 'Klima uređaj', 'Centralna lokacija'].map((tag) => (
              <span key={tag} className="border border-white/15 text-white/70 text-xs tracking-wider px-4 py-2 uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl sm:text-6xl text-white mb-12 tracking-wider"
        >
          ŠTA KAŽU NAŠI ČLANOVI
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <ReviewCard name="Boris D." text="Good gym. Well ventilated, not that crowded, not bad assortment of equipment. Great." />
          <ReviewCard name="Bojan L." text="Affordable prices and very flexible working hours, just great!" />
          <ReviewCard name="Natalia" text="Great gym with a wide variety of equipment. The staff always greet you with a smile." />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-right"
        >
          <Link to="/recenzije" className="text-[#C8FF00] text-sm tracking-widest uppercase hover:underline">
            Sve recenzije →
          </Link>
        </motion.div>
      </section>

      <section className="bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="border-l-[3px] border-[#C8FF00] pl-6">
            <h3 className="font-display text-3xl text-white tracking-wider mb-4">RADNO VREME</h3>
            <div className="text-white/60 text-sm space-y-1">
              <p>Pon–Pet: 07:00 – 22:15</p>
              <p>Subota: 08:00 – 21:15</p>
              <p>Nedelja: 14:00 – 20:00</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/45 text-sm mb-2">Zakažite dolazak</p>
            <a href="tel:+381621528290" className="text-[#C8FF00] font-bold text-xl hover:underline">+381 62 15 28 290</a>
          </div>
        </div>
      </section>
    </main>
  )
}
