import { motion } from 'framer-motion'
import PageHero from '../components/PageHero'
import ContactCard from '../components/ContactCard'
import OpenStatus from '../components/OpenStatus'
import LotusIcon from '../components/LotusIcon'

export default function Kontakt() {
  return (
    <main>
      <PageHero
        title="Kontakt"
        subtitle="Zakažite termin ili nas kontaktirajte."
      />

      <section className="px-5 pb-28">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-5">
            <ContactCard icon="✿" title="Adresa">
              <p>Prvomajska 95</p>
              <p>24000 Subotica (Prozivka)</p>
            </ContactCard>

            <ContactCard icon="✿" title="Telefon">
              <a href="tel:0631687544" className="hover:text-[#7C9E8F] transition-colors">
                063/168-75-44
              </a>
            </ContactCard>

            <ContactCard icon="✿" title="Email">
              <a
                href="mailto:suzana.whitelotusbeauty@gmail.com"
                className="hover:text-[#7C9E8F] transition-colors break-all"
              >
                suzana.whitelotusbeauty@gmail.com
              </a>
            </ContactCard>

            <ContactCard icon="✿" title="Instagram">
              <a
                href="https://www.instagram.com/white_lotus_beauty_su"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7C9E8F] transition-colors"
              >
                @white_lotus_beauty_su
              </a>
            </ContactCard>

            <ContactCard icon="✿" title="Radno vreme">
              <div className="space-y-1">
                <p>Ponedeljak – Petak: 10:00 – 19:00</p>
                <p>Subota: 09:00 – 14:00</p>
                <p className="text-white/30">Nedelja: Zatvoreno</p>
                <div className="mt-3">
                  <OpenStatus />
                </div>
              </div>
            </ContactCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-3xl overflow-hidden border border-white/8 min-h-[420px] w-full">
              <iframe
                src="https://maps.google.com/?q=Prvomajska+95,+Subotica&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="White Lotus Beauty location"
                className="w-full"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Prvomajska+95,+Subotica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7C9E8F] text-sm tracking-wide hover:text-white transition-colors"
            >
              Pronađite nas na Google Maps →
            </a>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <LotusIcon className="w-10 h-10 mx-auto text-[#7C9E8F] mb-6" />
          <h2
            className="font-display italic font-light text-white leading-[0.9] mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            Vaša kosa zaslužuje<br />pravu pažnju.
          </h2>
          <p className="text-white/45 text-sm md:text-base mb-8">
            Zakažite konsultaciju — besplatno i bez obaveza.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:0631687544"
              className="inline-block border border-[#7C9E8F]/60 text-[#7C9E8F] rounded-full px-8 py-3.5 text-sm tracking-wide transition-all duration-300 hover:bg-[#7C9E8F] hover:text-[#0a0c0b]"
            >
              063/168-75-44
            </a>
            <a
              href="https://www.instagram.com/white_lotus_beauty_su"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white text-sm tracking-wide transition-colors duration-300"
            >
              @white_lotus_beauty_su
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
