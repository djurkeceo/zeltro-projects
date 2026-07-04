import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const reviews = [
  { name: 'Boris D.', text: 'Good gym. Well ventilated, not that crowded, not bad assortment of equipment. Great.' },
  { name: 'Bojan L.', text: 'Affordable prices and very flexible working hours, just great!' },
  { name: 'Zsolt L.', text: 'A well equipped gym in Subotica.' },
  { name: 'Natalia', text: 'Great gym with a wide variety of equipment. The staff always greet you with a smile and are always ready to help.' },
  { name: 'Kriszti', text: 'I love working out here, the girls are so friendly. The place is pretty good — perfect for what I need.' },
  { name: 'Orsolya B.', text: 'German, good quality machines. The gym and changing rooms are clean, staff members are friendly, and it\'s very simple to sign up.' },
  { name: 'Tejmur Š.', text: 'Large and well equipped. Everyone is pleasant and kind — both staff and gym users. Equipment is always wiped down after use.' },
  { name: 'Dita', text: 'Exzellent!' },
]

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-[#111111] border border-white/8 p-6"
    >
      <div className="flex text-[#C8FF00] text-sm mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <span className="font-display text-lg tracking-wider text-white mb-2 block">{name}</span>
      <p className="text-white/60 text-sm leading-relaxed">{text}</p>
    </motion.div>
  )
}

export default function Recenzije() {
  return (
    <main>
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 30% 100%)', background: '#111111' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <h1 className="font-display text-7xl sm:text-9xl text-white leading-none mb-6">RECENZIJE</h1>
            <p className="text-white/60 text-lg max-w-xl">
              Reči naših članova.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#111111] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center gap-4">
          <span className="font-display text-5xl text-[#C8FF00] leading-none">4.5★</span>
          <span className="text-white/60 text-sm tracking-wider">16+ recenzija na Google Maps</span>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((r) => (
            <ReviewCard key={r.name} name={r.name} text={r.text} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.google.com/maps?q=Kireška+59,+Subotica,+Srbija"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/20 text-white px-8 py-4 text-sm tracking-widest uppercase hover:border-[#C8FF00] hover:text-[#C8FF00] transition-colors"
          >
            Ostavi recenziju na Google Maps →
          </a>
        </motion.div>
      </section>
    </main>
  )
}
