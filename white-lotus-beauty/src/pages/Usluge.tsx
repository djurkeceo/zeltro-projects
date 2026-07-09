import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import LotusIcon from '../components/LotusIcon'

const services = [
  {
    icon: '✿', title: 'Šišanje & Feniranje',
    description: 'Precizno šišanje i profesionalno feniranje svake dužine kose — od kratke do ekstra duge.',
    note: 'Žensko šišanje, šišanje šiški, feniranje ravno, feniranje na lokne',
  },
  {
    icon: '✿', title: 'Balayage',
    description: 'Jedni od retkih salona u Subotici specijalizovanih za Balayage tehniku. Balayage je tehnika ručnog bojenja koja daje prirodan prelaz od tamnih do svetlih tonova. Besplatna konsultacija pre svakog tretmana.',
    note: 'Cena: na upit',
  },
  {
    icon: '✿', title: 'Pramenovi',
    description: 'Različite tehnike pramenova — klasični, folija, highlight, lowlight.',
    note: 'Cena: na upit',
  },
  {
    icon: '✿', title: 'Farbanje kose',
    description: 'Jednobojno farbanje, farbanje izrastka, prelivi — sa kvalitetnim profesionalnim bojama.',
    note: 'Cena: na upit',
  },
  {
    icon: '✿', title: 'Keratin tretman',
    description: 'Trajno ispravljanje i zaglađivanje kose. Bez formaldehida. Kosa postaje glatka, sjajna i laka za održavanje.',
    note: 'Cena: na upit',
  },
  {
    icon: '✿', title: 'Nega kose',
    description: 'Tretmani prilagođeni tipu i stanju kose:',
    note: 'Detox tretman • Protiv peruti • Protiv opadanja • Hidratacija • Regeneracija',
  },
  {
    icon: '✿', title: 'Tretmani lica',
    description: 'Kozmetičke procedure za negu, čišćenje i lepotu lica.',
    note: 'Cena: na upit',
  },
  {
    icon: '✿', title: 'Manikir',
    description: 'Uređivanje i nega noktiju.',
    note: 'Cena: na upit',
  },
]

export default function Usluge() {
  return (
    <main>
      <PageHero
        title="Naše usluge"
        subtitle="Zdravlje i lepota kose — naša strast."
      />

      <section className="px-5 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="text-white/50 text-sm md:text-base leading-loose max-w-2xl mx-auto text-center"
        >
          Bavimo se pre svega zdravljem i očuvanjem kvaliteta vaše kose. Radimo tretmane nege za sve tipove kose — od detox tretmana, tretmana protiv peruti i opadanja, do hidratacije i keratina.
        </motion.p>
      </section>

      <section className="px-5 pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="max-w-lg mx-auto bg-[#111413] border border-[#7C9E8F]/25 rounded-3xl p-8 text-center"
        >
          <LotusIcon className="w-8 h-8 mx-auto text-[#7C9E8F] mb-4" />
          <h3 className="font-display italic text-white text-2xl mb-3">Besplatna konsultacija</h3>
          <p className="text-white/45 text-sm leading-relaxed mb-6">
            Pre svakog rada sa blanšom nudimo besplatnu konsultaciju. Jer samo dijagnozom stanja kose možemo postići bezbedan i dugotrajan rezultat.
          </p>
          <a
            href="tel:0631687544"
            className="inline-block border border-[#7C9E8F]/50 text-[#7C9E8F] rounded-full px-8 py-3 text-sm tracking-wide transition-all duration-300 hover:bg-[#7C9E8F] hover:text-[#0a0c0b]"
          >
            Pozovite nas →
          </a>
        </motion.div>
      </section>

      <section className="px-5 pb-16">
        <p className="text-center text-white/30 text-xs sm:text-sm">
          * Cene su na upit. Kontaktirajte nas za detaljne informacije: 063/168-75-44
        </p>
      </section>
    </main>
  )
}
