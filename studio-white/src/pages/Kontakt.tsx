import { FadeUp, StaggerContainer, StaggerItem, Button, BokehCircle, PageTransition } from '../components/ui/Motion'
import PageHero from '../components/ui/PageHero'
import OpenStatus from '../components/ui/OpenStatus'

const contactCards = [
  {
    icon: '✦',
    title: 'ADRESA',
    children: (
      <>
        <p className="text-white/60 text-sm leading-relaxed">
          Arsenije Čarnojevića 84<br />
          24000 Subotica, Srbija
        </p>
      </>
    ),
  },
  {
    icon: '✦',
    title: 'TELEFONI',
    children: (
      <div className="space-y-1">
        <a href="tel:024571167" className="block text-white/60 text-sm hover:text-[#D4A8B0] transition-colors">024/571-167</a>
        <a href="tel:0641182068" className="block text-white/60 text-sm hover:text-[#D4A8B0] transition-colors">064/118-20-68</a>
      </div>
    ),
  },
  {
    icon: '✦',
    title: 'EMAIL',
    children: (
      <a href="mailto:studio.white.no1@gmail.com" className="text-white/60 text-sm hover:text-[#D4A8B0] transition-colors">
        studio.white.no1@gmail.com
      </a>
    ),
  },
  {
    icon: '✦',
    title: 'INSTAGRAM',
    children: (
      <div>
        <a
          href="https://www.instagram.com/studio_white__/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4A8B0] text-sm hover:text-[#E8C8D0] transition-colors"
        >
          @studio_white__ ↗
        </a>
        <p className="text-white/30 text-xs mt-1">605 objava · 1.330 pratilaca</p>
      </div>
    ),
  },
  {
    icon: '✦',
    title: 'RADNO VREME',
    children: (
      <div>
        <div className="space-y-1 text-sm">
          <p className="text-white/50">Pon–Pet: <span className="text-white/80">09:00 – 19:00</span></p>
          <p className="text-white/50">Subota: <span className="text-white/80">09:00 – 15:00</span></p>
          <p className="text-white/50">Nedelja: <span className="text-white/35">Zatvoreno</span></p>
        </div>
        <div className="mt-3">
          <OpenStatus />
        </div>
      </div>
    ),
  },
]

export default function Kontakt() {
  return (
    <PageTransition>
      <PageHero title="Kontakt" subtitle="Zakažite termin ili nas posetite." />

      <div className="relative">
        <BokehCircle className="bg-[#D4A8B0]/4 blur-[130px] h-[300px] w-[300px] top-10 right-[-10%]" duration={14} />
        <BokehCircle className="bg-[#F5EDE8]/3 blur-[110px] h-60 w-60 bottom-20 left-[-5%]" duration={16} />
      </div>

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left — Contact cards */}
          <StaggerContainer className="flex flex-col gap-4">
            {contactCards.map((c) => (
              <StaggerItem key={c.title}>
                <div className="bg-[#141112] border border-white/7 rounded-3xl p-6 hover:border-[#D4A8B0]/30 transition-colors duration-300">
                  <p className="text-[#D4A8B0] text-[0.6rem] tracking-[0.3em] mb-3">{c.icon} {c.title}</p>
                  {c.children}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Right — Map */}
          <FadeUp>
            <div className="bg-[#141112] border border-white/8 rounded-3xl overflow-hidden h-full min-h-[420px]">
              <iframe
                src="https://maps.google.com/?q=Arsenije+Čarnojevića+84,+Subotica&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio White lokacija"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Arsenije+Čarnojevića+84,+Subotica"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[#D4A8B0] text-sm mt-4 hover:text-[#E8C8D0] transition-colors"
            >
              Pronađite nas na Google Maps →
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <FadeUp>
          <h2 className="font-display italic font-light text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Vaš sledeći termin<br />čeka vas.
          </h2>
          <p className="text-white/40 text-sm mb-10">
            Zakažite pozivom ili nas posetite lično.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="tel:024571167">024/571-167</Button>
            <Button href="tel:0641182068">064/118-20-68</Button>
          </div>
        </FadeUp>
      </section>
    </PageTransition>
  )
}
