import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  { icon: '✂️', title: 'Šišanje & Feniranje', desc: 'Precizno šišanje i profesionalno feniranje svake dužine kose.', price: '300 RSD' },
  { icon: '🎨', title: 'Farbanje kose', desc: 'Jednobojno farbanje, izrastak, blanširanje — sa Lakme profesionalnim bojama koje neguju kosu.', price: '1.300 RSD' },
  { icon: '✨', title: 'Balayage & Pramenovi', desc: 'Balayage, air touch, prelivi — prirodni prelazi boja prilagođeni vašem tipu kose.', price: '1.300 RSD' },
  { icon: '💆', title: 'Nega kose', desc: 'Detox tretmani, K20 zaštita, plex maska, Lakme Repair — nega koja vraća život vašoj kosi.', price: '1.000 RSD' },
  { icon: '🌀', title: 'Frizure & Lokne', desc: 'Afro lokne, lokne na presu, svečane frizure — za svaku prigodu.', price: '1.500 RSD' },
  { icon: '🌿', title: 'Keratinski tretman', desc: 'Trajno ispravljanje kose bez formaldehida. Glatka, sjajna i laka za održavanje kosa.', price: '9.000 RSD' },
  { icon: '💄', title: 'Šminkanje', desc: 'Dnevna i večernja šminka sa veštačkim trepavicama — za posebne trenutke.', price: '2.500 RSD' },
  { icon: '👤', title: 'Muško šišanje', desc: 'Precizno muško šišanje sa pranjem kose.', price: '1.000 RSD' },
]

export default function Usluge() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose/10 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cream/8 blur-[100px]"
          />
        </div>
        <div className="relative z-10 text-center px-4 pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display italic text-5xl md:text-7xl text-white mb-4"
          >
            Naše usluge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/60 max-w-xl mx-auto"
          >
            Sve što vam treba za savršenu kosu — na jednom mestu.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-surface border border-white/8 rounded-xl p-6 hover:border-rose/40 hover:bg-[#1e1818] transition-all"
            >
              <span className="text-3xl mb-3 block">{svc.icon}</span>
              <h3 className="font-display text-xl text-white mb-2">{svc.title}</h3>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">{svc.desc}</p>
              <p className="text-rose font-semibold text-sm">Od {svc.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <Link
            to="/cenovnik"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose text-dark font-semibold rounded-full shadow-[0_16px_48px_rgba(201,149,108,0.18)] hover:opacity-90 transition-all"
          >
            Pogledajte kompletan cenovnik →
          </Link>
          <div>
            <a
              href="https://www.sredime.rs/subotica/salon-beauty-room-by-nada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose text-sm hover:underline"
            >
              Zakažite termin online →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
