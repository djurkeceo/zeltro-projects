import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PriceItem {
  name: string
  duration: string
  price: number
}

interface Category {
  title: string
  items: PriceItem[]
}

const categories: Category[] = [
  {
    title: 'Šišanje i feniranje',
    items: [
      { name: 'Žensko šišanje - suvo', duration: '30 min', price: 1200 },
      { name: 'Šišanje šiški', duration: '15 min', price: 300 },
      { name: 'Feniranje na ravno - ekstra kratka kosa', duration: '40 min', price: 1000 },
      { name: 'Feniranje na ravno - kratka kosa', duration: '40 min', price: 1000 },
      { name: 'Feniranje na ravno - kosa srednje dužine', duration: '60 min', price: 1300 },
      { name: 'Feniranje na ravno - duga kosa', duration: '55 min', price: 1400 },
      { name: 'Feniranje na ravno - ekstra duga kosa', duration: '60 min', price: 1500 },
      { name: 'Žensko šišanje + feniranje - kratka kosa', duration: '60 min', price: 2000 },
      { name: 'Žensko šišanje + feniranje - kosa srednje dužine', duration: '60 min', price: 2400 },
      { name: 'Žensko šišanje + feniranje - duga kosa', duration: '60 min', price: 2500 },
      { name: 'Žensko šišanje + feniranje - ekstra duga kosa', duration: '60 min', price: 3000 },
    ],
  },
  {
    title: 'Farbanje i blajhanje',
    items: [
      { name: 'Farbanje izrastka - manji izrastak', duration: '90 min', price: 2000 },
      { name: 'Farbanje izrastka - veći izrastak', duration: '90 min', price: 2200 },
      { name: 'Farbanje izrastka + šišanje + feniranje - kratka kosa', duration: '120 min', price: 4000 },
      { name: 'Farbanje izrastka + šišanje + feniranje - duga kosa', duration: '120 min', price: 5000 },
      { name: 'Uslužno farbanje - sve dužine', duration: '60 min', price: 1300 },
      { name: 'Farbanje cele dužine - kratka kosa', duration: '90 min', price: 3000 },
      { name: 'Farbanje cele dužine + šišanje + feniranje - kratka kosa', duration: '90 min', price: 5000 },
      { name: 'Farbanje cele dužine + feniranje - kratka kosa', duration: '90 min', price: 3900 },
      { name: 'Farbanje cele dužine - kosa srednje dužine', duration: '90 min', price: 4000 },
      { name: 'Farbanje cele dužine + šišanje + feniranje - srednja dužina', duration: '90 min', price: 7000 },
      { name: 'Farbanje cele dužine + feniranje - srednja dužina', duration: '60 min', price: 6000 },
      { name: 'Farbanje cele dužine - duga kosa', duration: '60 min', price: 5000 },
      { name: 'Farbanje cele dužine + šišanje + feniranje - duga kosa', duration: '90 min', price: 8000 },
      { name: 'Farbanje cele dužine + feniranje - duga kosa', duration: '90 min', price: 6000 },
      { name: 'Farbanje cele dužine - ekstra duga kosa', duration: '60 min', price: 6000 },
      { name: 'Farbanje cele dužine + šišanje + feniranje - ekstra duga', duration: '90 min', price: 8500 },
      { name: 'Farbanje cele dužine + feniranje - ekstra duga', duration: '120 min', price: 7500 },
      { name: 'Blanširanje izrastka + preliv + šišanje + feniranje', duration: '90 min', price: 8000 },
      { name: 'Blanširanje izrastka + preliv + feniranje', duration: '60 min', price: 7000 },
    ],
  },
  {
    title: 'Pramenovi i prelivi',
    items: [
      { name: 'Balayage + zaštita K20 - kratka kosa', duration: '180 min', price: 9000 },
      { name: 'Balayage + zaštita K20 - kosa srednje dužine', duration: '180 min', price: 11000 },
      { name: 'Balayage + zaštita K20 - duga kosa', duration: '180 min', price: 13000 },
      { name: 'Balayage + zaštita K20 - ekstra duga kosa', duration: '180 min', price: 14000 },
      { name: 'Preliv - kratka kosa', duration: '60 min', price: 1300 },
      { name: 'Preliv - kosa srednje dužine', duration: '60 min', price: 1500 },
      { name: 'Preliv - duga kosa', duration: '60 min', price: 2000 },
    ],
  },
  {
    title: 'Frizure',
    items: [
      { name: 'Afro lokne - sve dužine', duration: '120 min', price: 3000 },
      { name: 'Afro lokne + pranje kose', duration: '120 min', price: 4000 },
      { name: 'Lokne na presu - duga kosa', duration: '45 min', price: 1800 },
      { name: 'Lokne na presu - kratka kosa', duration: '30 min', price: 1500 },
      { name: 'Svečana frizura - jednostavna', duration: '60 min', price: 3000 },
      { name: 'Svečana frizura - složena', duration: '90 min', price: 4000 },
    ],
  },
  {
    title: 'Nega kose',
    items: [
      { name: 'Detox tretman kose', duration: '60 min', price: 2900 },
      { name: 'Farbanje i šišanje + tretman K20 - duga kosa', duration: '120 min', price: 9000 },
      { name: 'Farbanje i šišanje + K20 - srednja dužina', duration: '120 min', price: 7600 },
      { name: 'Keratinsko ispravljanje - kosa srednje dužine', duration: '180 min', price: 9000 },
      { name: 'Keratinsko ispravljanje - duga kosa', duration: '200 min', price: 9000 },
      { name: 'Keratinsko ispravljanje - ekstra duga kosa', duration: '210 min', price: 10000 },
      { name: 'Tretman pro ageing + feniranje - duga kosa', duration: '70 min', price: 3500 },
      { name: 'Tretman pro ageing + feniranje - srednja dužina', duration: '60 min', price: 3000 },
      { name: 'K20 tretman - kratka kosa', duration: '30 min', price: 2500 },
      { name: 'K20 tretman + feniranje - kratka kosa', duration: '60 min', price: 3300 },
      { name: 'K20 tretman - kosa srednje dužine', duration: '30 min', price: 2700 },
      { name: 'K20 tretman + šišanje + feniranje - srednja dužina', duration: '90 min', price: 4500 },
      { name: 'K20 tretman + feniranje - srednja dužina', duration: '60 min', price: 3600 },
      { name: 'K20 tretman - duga kosa', duration: '30 min', price: 3000 },
      { name: 'K20 tretman + feniranje - duga kosa', duration: '60 min', price: 4000 },
      { name: 'K20 tretman + šišanje + feniranje - duga kosa', duration: '90 min', price: 5000 },
      { name: 'Nega kose + plex maska', duration: '30 min', price: 1000 },
      { name: 'Lakme Repair tretman - kratka kosa', duration: '30 min', price: 2000 },
      { name: 'Nadogradnja kose - po pramenu', duration: '15 min', price: 150 },
    ],
  },
  {
    title: 'Šminkanje',
    items: [
      { name: 'Profesionalno šminkanje dnevno', duration: '60 min', price: 2500 },
      { name: 'Večernja šminka + veštačke trepavice', duration: '70 min', price: 3000 },
    ],
  },
  {
    title: 'Usluge za muškarce',
    items: [
      { name: 'Muško šišanje', duration: '30 min', price: 1000 },
      { name: 'Muško šišanje + pranje kose', duration: '30 min', price: 1200 },
    ],
  },
]

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' RSD'
}

function AccordionCategory({ category, defaultOpen }: { category: Category; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false)

  return (
    <div className="border border-white/8 rounded-xl overflow-hidden bg-surface">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <h3 className="font-display text-xl text-white">{category.title}</h3>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-rose text-lg"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 space-y-1">
              {category.items.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between py-2 gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/80">{item.name}</p>
                      <p className="text-xs text-white/40">{item.duration}</p>
                    </div>
                    <span className="text-rose text-sm font-semibold shrink-0">{formatPrice(item.price)}</span>
                  </div>
                  {idx < category.items.length - 1 && <div className="border-t border-white/5" />}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Cenovnik() {
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
            Cenovnik
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/60 max-w-xl mx-auto"
          >
            Transparentne cene bez skrivenih troškova.
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionCategory category={cat} defaultOpen={i === 0} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="pb-16 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-2 text-sm text-white/40">
          <p>* Cene su informativnog karaktera. Za tačnu cenu konsultujte se sa frizerkom pre zakazivanja.</p>
          <p>* Plaćanje isključivo gotovinom.</p>
        </div>
      </section>
    </div>
  )
}
