import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, Button, BokehCircle, PageTransition } from '../components/ui/Motion'
import OpenStatus from '../components/ui/OpenStatus'

const servicePills = [
  { icon: '💅', label: 'Nokti' },
  { icon: '✨', label: 'Trepavice' },
  { icon: '💆', label: 'Kozmetika lica' },
  { icon: '🪒', label: 'Depilacija' },
  { icon: '💇', label: 'Frizerske usluge' },
  { icon: '💄', label: 'Makeup' },
]

const features = [
  { title: 'TIM STRUČNJAKA', text: 'Ljubazne i edukovane devojke posvećene svakom detalju vašeg tretmana.' },
  { title: 'PRIJATNA ATMOSFERA', text: 'Čist, uredan salon u kom se osećate opušteno od prvog trenutka.' },
  { title: 'KOMPLETNA USLUGA', text: 'Sve usluge lepote na jednom mestu — bez potrebe da idete bilo gde drugde.' },
]

const services = [
  { icon: '💅', title: 'Izlivanje noktiju', desc: 'Gel, akril, izlivanje — dugotrajni nokti savršenog oblika.' },
  { icon: '✂️', title: 'Korekcija noktiju', desc: 'Popravka i održavanje već izrađenih noktiju.' },
  { icon: '✨', title: 'Nadogradnja trepavica', desc: 'Klasik, volumen, mega volumen — trepavice koje traju.' },
  { icon: '💆', title: 'Kozmetika lica', desc: 'Čišćenje lica, hidratacija i stručni tretmani kože.' },
  { icon: '🪒', title: 'Depilacija', desc: 'Brza i precizna depilacija voskom svih zona.' },
  { icon: '💇', title: 'Frizerske usluge', desc: 'Šišanje, feniranje, bojenje i nega kose.' },
  { icon: '💄', title: 'Makeup', desc: 'Dnevni i večernji makeup prilagođen vašem tipu lica.' },
  { icon: '🌸', title: 'Sve usluge', desc: 'Posetite nas ili pozovite za kompletnu ponudu.', cta: true },
]

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <BokehCircle className="bg-[#D4A8B0]/6 blur-[140px] h-[480px] w-[480px] top-[-5%] right-[-5%]" duration={14} />
        <BokehCircle className="bg-[#D4A8B0]/4 blur-[120px] h-80 w-80 bottom-10 left-5" duration={16} />
        <BokehCircle className="bg-[#F5EDE8]/3 blur-[160px] h-72 w-72 top-1/2 left-1/3" duration={12} />
        <BokehCircle className="bg-[#D4A8B0]/3 blur-[100px] h-56 w-56 bottom-1/4 right-1/4" duration={15} />

        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-block border border-[#D4A8B0]/25 bg-[#D4A8B0]/8 rounded-full px-4 py-1.5 text-[#D4A8B0] text-[0.65rem] tracking-[0.4em] font-sans mb-8">
              ✦ SUBOTICA · OD 2017. · 4.7 ★ GOOGLE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display italic font-light text-white leading-[0.86] mb-6"
            style={{ fontSize: 'clamp(4rem, 9vw, 7.5rem)' }}
          >
            Tvoja lepota,<br />naša strast.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="flex-1 max-w-[80px] h-px bg-[#D4A8B0]/20" />
            <span className="text-[#D4A8B0] text-xs">✦</span>
            <span className="flex-1 max-w-[80px] h-px bg-[#D4A8B0]/20" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/50 font-light leading-relaxed max-w-sm mx-auto mb-10"
          >
            Kompletan salon lepote u srcu Subotice.
            Nokti, trepavice, kozmetika, makeup i frizerske usluge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button href="tel:024571167">Zakažite termin</Button>
            <Button href="/usluge" variant="secondary">Naše usluge →</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-3 text-white/30 text-sm"
          >
            <a href="tel:024571167" className="hover:text-[#D4A8B0] transition-colors">024/571-167</a>
            <span className="text-white/15">·</span>
            <a href="tel:0641182068" className="hover:text-[#D4A8B0] transition-colors">064/118-20-68</a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="w-full bg-[#141112] border-y border-white/7">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 py-5 px-6">
          {servicePills.map((s) => (
            <motion.a
              key={s.label}
              href="/usluge"
              className="border border-white/10 rounded-full px-4 py-2 text-sm text-white/60 hover:border-[#D4A8B0]/40 hover:text-[#D4A8B0] transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {s.icon} {s.label}
            </motion.a>
          ))}
        </div>
      </section>

      {/* O SALONU */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center font-display italic font-light text-white/[0.06] leading-[0.9] select-none pointer-events-none"
            style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
            Profesionalnost<br />i osmeh u svakom<br />tretmanu.
          </div>
          <div className="relative z-10">
            <FadeUp>
              <p className="text-[#D4A8B0] text-[0.65rem] tracking-[0.4em] mb-4 uppercase">O NAMA</p>
              <h2 className="font-display italic font-light text-white mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                Salon koji voli svoju klijentelu
              </h2>
              <p className="text-white/55 leading-loose text-sm">
                Studio White je frizersko-kozmetički salon osnovan 2017. godine u Subotici.
                Naš tim stručnih i ljubaznih devojaka pruža kompletne usluge lepote — od noktiju
                i trepavica, do frizerskih usluga i profesionalnog makeupa. Prijatna atmosfera
                i posvećenost svakoj klijentkinji naš su zaštitni znak.
              </p>
            </FadeUp>
          </div>
        </div>

        <StaggerContainer className="flex flex-col gap-4">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <div className="bg-[#141112] border border-white/7 rounded-3xl p-5 border-l-2 border-l-[#D4A8B0]/40 hover:border-[#D4A8B0]/30 transition-colors duration-300">
                <p className="text-[#D4A8B0] text-[0.6rem] tracking-[0.3em] mb-2">✦ {f.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{f.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* USLUGE PREVIEW */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              {s.cta ? (
                <motion.a
                  href="tel:024571167"
                  className="block bg-[#D4A8B0] text-[#0c0a0b] rounded-3xl p-6 h-full hover:shadow-[0_0_60px_rgba(212,168,176,0.15)] transition-shadow duration-300"
                  whileHover={{ y: -4 }}
                >
                  <span className="text-2xl mb-3 block">{s.icon}</span>
                  <h3 className="font-display italic text-lg mb-2">{s.title}</h3>
                  <p className="text-[#0c0a0b]/70 text-sm leading-relaxed">{s.desc}</p>
                </motion.a>
              ) : (
                <motion.div
                  className="bg-[#141112] border border-white/7 rounded-3xl p-6 h-full hover:border-[#D4A8B0]/30 hover:bg-[#1c181a] transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <span className="text-2xl mb-3 block">{s.icon}</span>
                  <h3 className="font-display italic text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                  {s.title === 'Makeup' && <p className="text-[#D4A8B0]/60 text-xs mt-3 italic">Ines — specijalistkinja za makeup</p>}
                </motion.div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* RATING BANNER */}
      <section className="w-full bg-[#141112] border-y border-[#D4A8B0]/15 py-20 px-6">
        <FadeUp className="max-w-3xl mx-auto text-center">
          <span className="font-display italic font-light text-[#D4A8B0]" style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}>
            4.7
          </span>
          <div className="flex items-center justify-center gap-1 my-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#D4A8B0] text-lg">★</span>
            ))}
          </div>
          <p className="text-white/40 text-sm mb-8">od 93 recenzije na Google</p>
          <p className="text-white/30 text-xs mb-4">Jedna od naših klijentica kaže:</p>
          <p className="font-display italic text-white/80 text-lg mb-8">
            "Profesionalne, ljubazne, osmeh uvek na licu. Topla preporuka!"
          </p>
          <Button href="/recenzije">Pročitajte sve recenzije →</Button>
        </FadeUp>
      </section>

      {/* RADNO VREME */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <FadeUp>
          <div className="bg-[#141112] border border-white/7 border-l-2 border-l-[#D4A8B0]/40 rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[#D4A8B0] text-[0.6rem] tracking-[0.3em] mb-4">✦ RADNO VREME</p>
              <div className="space-y-1.5 text-sm">
                <p className="text-white/50">Pon–Pet: <span className="text-white/80">09:00 – 19:00</span></p>
                <p className="text-white/50">Subota: <span className="text-white/80">09:00 – 15:00</span></p>
                <p className="text-white/50">Nedelja: <span className="text-white/35">Zatvoreno</span></p>
              </div>
              <div className="mt-4">
                <OpenStatus />
              </div>
            </div>
            <div className="text-right">
              <a href="tel:024571167" className="text-white/40 hover:text-[#D4A8B0] transition-colors text-sm block">
                Zakažite termin
              </a>
              <a href="tel:024571167" className="text-[#D4A8B0] text-lg font-display italic mt-1 block hover:text-[#E8C8D0] transition-colors">
                024/571-167
              </a>
            </div>
          </div>
        </FadeUp>
      </section>
    </PageTransition>
  )
}
