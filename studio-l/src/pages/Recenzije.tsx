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

const reviews = [
  { name: 'Martina Kulić', stars: '★★★★★', text: 'Best hair salon in Subotica.' },
  { name: 'Jasna Pušin', stars: '★★★★★', text: 'The best in town!' },
  { name: 'Ekreš', stars: '★★★★★', text: 'Great haircuts.' },
  { name: 'Ana Reljić', stars: '★★★★★', text: 'My best Studio L!' },
  {
    name: 'Dulac Sanja',
    stars: '★★★★★',
    text: 'The best hairdresser.',
    reply: 'Hvala Vam puno, gđo Sanja... hvala na ukazanom poverenju! ❤️',
  },
  { name: 'Helena Nikolovski', stars: '★★★★★', text: 'Perfect hairdressing services.' },
  { name: 'Jovica Kričković', stars: '★★★★★', text: 'A nice place across from the Faculty of Economics.' },
]

export default function Recenzije() {
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
          <p className="text-[#BFA980] text-2xl tracking-widest mb-4">★★★★★</p>
          <p className="text-[#BFA980] text-xs tracking-[0.45em] uppercase mb-4">RECENZIJE</p>
          <h1 className="font-display italic text-[clamp(3rem,6vw,5rem)] leading-[0.9] text-white">
            Recenzije
          </h1>
          <p className="text-white/50 max-w-md mx-auto mt-4 leading-relaxed">
            Poverenje klijenata — naša najveća nagrada.
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
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={fadeUp}
              className="bg-[#131209] border border-white/7 rounded-2xl p-6 border-l-2 border-l-[#BFA980]/50"
            >
              <span className="text-[#BFA980] text-xs tracking-widest">{review.stars}</span>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[#BFA980] text-xs">✦</span>
                <h3 className="font-display italic text-lg text-white">{review.name}</h3>
              </div>
              <p className="text-white/55 text-sm leading-relaxed mt-2">&ldquo;{review.text}&rdquo;</p>
              {review.reply && (
                <p className="text-[#BFA980]/70 text-xs italic mt-3 pl-3 border-l border-[#BFA980]/30">
                  {review.reply}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/30 text-sm mt-12"
        >
          Sve recenzije možete pronaći na{' '}
          <a
            href="https://www.google.com/maps/search/Studio+L+Subotica"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BFA980] hover:text-white transition-colors underline underline-offset-4"
          >
            Google Maps &rarr;
          </a>
        </motion.p>
      </section>
    </>
  )
}
