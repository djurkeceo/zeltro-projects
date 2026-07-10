import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, Button, BokehCircle, PageTransition } from '../components/ui/Motion'
import PageHero from '../components/ui/PageHero'

const services = [
  {
    icon: '💅',
    title: 'NOKTI',
    subtitle: 'Izlivanje i korekcija noktiju.',
    items: ['Izlivanje noktiju (gel, akril)', 'Korekcija i punjenje', 'Skidanje noktiju', 'Nail art'],
  },
  {
    icon: '✨',
    title: 'NADOGRADNJA TREPAVICA',
    subtitle: 'Najlepše trepavice u gradu.',
    items: ['Klasična nadogradnja', 'Volumen', 'Mega volumen', 'Punjenje trepavica', 'Skidanje trepavica'],
    note: 'Doriana kaže: Najbolja nadogradnja trepavica u gradu.',
  },
  {
    icon: '💆',
    title: 'KOZMETIKA LICA',
    subtitle: 'Stručni tretmani za zdravlje i lepotu vaše kože.',
    items: ['Čišćenje lica', 'Hidratacija', 'Anti-age tretmani', 'Tretmani za problematičnu kožu'],
  },
  {
    icon: '🪒',
    title: 'DEPILACIJA',
    subtitle: 'Brza, precizna i efikasna depilacija.',
    items: ['Depilacija voskom', 'Sve zone tela'],
  },
  {
    icon: '💇',
    title: 'FRIZERSKE USLUGE',
    subtitle: 'Savršena frizura za svaku prigodu.',
    items: ['Šišanje (muško i žensko)', 'Feniranje', 'Bojenje kose', 'Nega kose', 'Pramenovi'],
    note: 'Anica — preporučena frizerka od naših klijenata.',
  },
  {
    icon: '💄',
    title: 'MAKEUP',
    subtitle: 'Profesionalni makeup prilagođen vašem tipu lica.',
    items: ['Dnevni makeup', 'Večernji makeup', 'Makeup za posebne prilike', 'Prilagođavanje proizvoda tipu kože'],
    note: 'Ines — specijalistkinja za makeup.',
  },
]

export default function Usluge() {
  return (
    <PageTransition>
      <PageHero title="Naše usluge" subtitle="Kompletna nega lepote na jednom mestu." />

      {/* Bokeh */}
      <div className="relative">
        <BokehCircle className="bg-[#D4A8B0]/4 blur-[140px] h-[350px] w-[350px] top-0 right-[-10%]" duration={14} />
        <BokehCircle className="bg-[#F5EDE8]/3 blur-[120px] h-64 w-64 bottom-20 left-[-5%]" duration={16} />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                className="bg-[#141112] border border-white/7 rounded-3xl p-8 border-t-2 border-t-[#D4A8B0]/30 hover:border-[#D4A8B0]/30 transition-colors duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="font-display italic text-white text-xl mb-2">{s.title}</h3>
                <p className="text-white/40 text-sm mb-5">{s.subtitle}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-white/55 text-sm flex items-start gap-2">
                      <span className="text-[#D4A8B0] mt-0.5 text-xs">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {s.note && (
                  <p className="text-[#D4A8B0]/60 text-xs mt-4 italic">{s.note}</p>
                )}
                <p className="text-white/25 text-xs mt-5">Cena: na upit</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Notice */}
        <FadeUp className="mt-16">
          <div className="border border-[#D4A8B0]/25 bg-[#D4A8B0]/5 rounded-3xl p-6 text-center max-w-xl mx-auto">
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Za informacije o cenama i zakazivanje pozovite nas:
            </p>
            <p className="text-[#D4A8B0] text-lg font-display italic mb-4">
              024/571-167 · 064/118-20-68
            </p>
            <Button href="tel:024571167">Pozovite nas →</Button>
          </div>
        </FadeUp>
      </section>
    </PageTransition>
  )
}
