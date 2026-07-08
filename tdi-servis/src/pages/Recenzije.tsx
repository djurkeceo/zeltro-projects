import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

const reviews = [
  { name: 'Vuk Vukovi\u0107', rating: 5, text: 'Best service in Subotica. I\'ve been their customer for 16 years. Best regards to Tomislav, Zdravko and Dragan!' },
  { name: 'Dejan Petrovi\u0107', rating: 5, text: 'Extremely professional mechanics, fast, precise and very kind. I would especially highlight mechanic Tomislav!' },
  { name: 'Dragana S.', rating: 5, text: 'Very professional and kind. Kudos for being honest \u2014 other mechanics said it was the cylinder head, but the problem was something else entirely.' },
  { name: 'Baram\u0161a Petrovi\u0107', rating: 5, text: 'Very professional staff, very high quality work. In TDI everything is shown to you and you know exactly what was done \u2014 all recommendations!' },
  { name: 'Branislav \u017Divii\u0107', rating: 5, text: 'Excellent service, quality craftsmen, quick response and appointment scheduling.' },
  { name: 'Antal Penovac', rating: 5, text: 'Speed, professionalism, courtesy, quality work! I am very satisfied!' },
  { name: 'Robes K.', rating: 5, text: 'My favorite service. Kudos to the technicians and the boss who is always there to help.' },
  { name: 'Goran Mijatov', rating: 5, text: 'Kudos to the craftsmen. Very satisfied with the service, advice and price. Recommended to all Opel owners.' },
  { name: 'Danijela Joksimovi\u0107', rating: 5, text: 'We had a breakdown in Hungary \u2014 they welcomed us immediately and tried to fix the problem. Professional and caring when we needed help most.' },
  { name: 'Goran M.', rating: 5, text: 'Good people and experts. They know their job. They want to help.' },
  { name: 'Dezs\u0151 Vir\u00E1g', rating: 5, text: 'The perfect location for servicing an Opel or Chevrolet. They also repair French cars properly!' },
  { name: 'Goran Sarcevic', rating: 5, text: 'The best Opel mechanics in the city and the wider area.' },
]

export default function Recenzije() {
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
            RECENZIJE
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mb-4">
            Poverenje klijenata od 1995. godine.
          </motion.p>
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <AnimatedCounter to={4.5} decimals={1} className="font-display text-5xl text-[#C0392B]" />
            <div className="text-[#C0392B] text-xl">★★★★★</div>
            <span className="text-white/40 text-sm ml-2">· 139+ recenzija na Google Maps</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: (i % 12) * 0.04 }}
              className="bg-[#111111] border border-white/8 rounded-none p-6 border-l-2 border-l-[#C0392B]"
            >
              <div className="font-display text-lg text-white mb-1">{review.name}</div>
              <div className="text-[#C0392B] text-sm mb-3">{'★'.repeat(review.rating)}</div>
              <p className="text-white/50 text-sm leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ...."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C0392B] text-white font-bold px-8 py-4 rounded-none hover:bg-[#E74C3C] transition-colors"
          >
            Ostavite recenziju na Google Maps &rarr;
          </a>
        </motion.div>
      </section>
    </div>
  )
}
