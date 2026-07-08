import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

const services = [
  {
    icon: '\uD83D\uDD27',
    title: 'AUTO-MEHANI\u010CARSKE USLUGE',
    intro: 'Na \u010Detiri radna mesta pru\u017Eamo usluge remonta:',
    items: [
      'Motora i njegovih komponenti',
      'Menja\u010Da i diferencijala',
      'Trapova',
      'Ko\u010Dionog sistema',
      'Sistema za upravljanje',
    ],
    note: 'Ugra\u0111ujemo isklju\u010Divo ORIGINALNE rezervne delove!',
    spec: 'Specijalizacija: Opel vozila',
  },
  {
    icon: '\u26A1',
    title: 'AUTO-ELEKTRI\u010CARSKE USLUGE',
    intro: 'Servisiramo sve elektri\u010Dne ure\u0111aje na vozilu:',
    items: [
      'Svetlosna signalizacija',
      'Zvu\u010Dna signalizacija',
      'Bolja vidljivost (brisa\u010Di, farovi)',
      'Proizvodnja elektri\u010Dne struje (alternatori)',
      'Pokretanje motora (anlaseri)',
      'Priklju\u010Dna vozila',
      'Sve \u0161to radi na struju',
    ],
  },
  {
    icon: '\uD83D\uDCBB',
    title: 'AUTO-ELEKTRONI\u010CARSKE USLUGE',
    intro: 'Dijagnostika najsavremenijim ure\u0111ajima:',
    items: [
      'TECH 2',
      'MDI GM',
      'Daewoo-scanner',
      'Digitalni osciloskop',
      'Elektronska tehni\u010Dka dokumentacija',
    ],
    note: 'Popravi\u0107emo svaki kvar na va\u0161em vozilu.',
  },
  {
    icon: '\u2744\uFE0F',
    title: 'SERVIS AUTO KLIMA URE\u0110AJA',
    intro: 'Opremljeni potpuno automatizovanom klima stanicom.',
    items: [
      'Punjenje freona R134a i R1234yf',
      'PAG ulje',
      'Dezinfekcija kabinskih elemenata ultrazvukom',
      'Bez upotrebe hemikalija',
      'Stru\u010Dne opravke klima ure\u0111aja',
    ],
  },
  {
    icon: '\uD83C\uDFEA',
    title: 'PRODAVNICA AUTO DELOVA',
    intro: '3.500 originalnih artikala u prodavnici.',
    items: [
      '70% potrebnih delova za Opel/Daewoo/Chevrolet na stanju',
      'Svi delovi originalni',
      'Naru\u010Divanje \u2014 dostupno za nekoliko dana',
      'Svaki mesec TOP ARTIKAL na popustu',
    ],
    cta: { label: 'Posetite webshop \u2192', href: 'https://www.autodeloviopel.rs' },
  },
  {
    icon: '\uD83D\uDE9A',
    title: 'UVOZ ORIGINALNIH GM DELOVA',
    intro: 'TDI Servis \u2014 uvoznik i distributer Opel rezervnih delova.',
    items: [
      'Isklju\u010Divo ORIGINAL GM',
      'Namenjeni tr\u017Ei\u0161tu EU, uvezeni iz EU',
      'GM pakovanje sa hologramskom nalepnicom',
      'Katalo\u0161ki broj i zemlja proizvodnje na svakom delu',
    ],
  },
]

export default function Usluge() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
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
            USLUGE
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl">
            Kompletno servisiranje vašeg vozila na jednom mestu.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="bg-[#111111] border border-white/8 rounded-none p-8 border-t-2 border-t-[#C0392B]"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h2 className="font-display text-2xl text-white mb-4">{service.title}</h2>
              <p className="text-white/60 text-sm mb-4">{service.intro}</p>
              <ul className="space-y-2 mb-4">
                {service.items.map((item) => (
                  <li key={item} className="text-white/50 text-sm flex items-start gap-2">
                    <span className="text-[#C0392B] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              {service.note && (
                <p className="text-white font-semibold text-sm mb-2">{service.note}</p>
              )}
              {service.spec && (
                <p className="text-[#C0392B] text-xs uppercase tracking-wider">{service.spec}</p>
              )}
              {service.cta && (
                <a
                  href={service.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-[#C0392B] text-white font-bold px-6 py-3 rounded-none text-sm hover:bg-[#E74C3C] transition-colors"
                >
                  {service.cta.label}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-[#C0392B] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">ZAKAŽITE SERVIS DANAS.</h2>
          <p className="text-white/80 text-lg mb-8">
            Pozovite nas i dogovorite termin — brzo, jednostavno, pouzdano.
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
