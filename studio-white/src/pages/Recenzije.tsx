import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem, Button, BokehCircle, PageTransition } from '../components/ui/Motion'
import PageHero from '../components/ui/PageHero'

const reviews = [
  { name: 'Tatjana Novaković', text: 'Ines odlično radi šminku, ne samo da je ispunila moja očekivanja već je prilagodila proizvode mom tipu kože tako da šminka ostala sveža ceo dan. Uz to je izuzetno ljubazna — topla preporuka!' },
  { name: 'Jovana Petrović', text: 'Savršenstvo. Veoma prijatne devojke, ljubazne, nasmejane, kulturne i dobre. Frizerka je odlična mlada devojka koja radi dobro i uvek ima vremena i strpljenja.' },
  { name: 'Marina Dimić', text: 'Dolazim u salon godinama, besprekorna usluga i uživanje u prijatnoj atmosferi sa devojkama koje profesionalno obavljaju posao.' },
  { name: 'Aleksandar Purić', text: 'Izuzetno profesionalno — moja preporuka kada je reč o muškim šišanjima.' },
  { name: 'Maja Petković', text: 'Najbolji salon u gradu! Usluga za 10+ Nastavite tako, sjajne ste!' },
  { name: 'Nada Aleksandrović', text: 'Profesionalno osoblje, prijatna atmosfera, sve pohvale!' },
  { name: 'Doriana Satmari', text: 'Najbolja nadogradnja trepavica u gradu.' },
  { name: 'Slobodan Todorčević', text: 'Profesionalni, pažljivi, tačni, vredni i najbolje osoblje u gradu, uz lep ambijent.' },
  { name: 'Ksenija Konjović', text: 'Ljubazno i obučeno osoblje. Prijatna atmosfera.' },
  { name: 'Zoran Sarčević', text: 'Lepo, čisto, uredno — profesionalno osoblje. Preporuka.' },
  { name: 'Nera Petrović', text: 'Divne devojke, opuštena atmosfera, profesionalnost na najvišem nivou.' },
  { name: 'Ljubinka Sulejmanovič', text: 'Ne znam šta bih bez ovih sjajnih devojaka!' },
  { name: 'Tamara Gabor', text: 'Najbolji salon u gradu.' },
  { name: 'Ankica Orčić', text: 'Ljubazna Melinda, uredna, pažljiva, profesionalna.' },
  { name: 'Žužana Segi', text: 'Devojke su veoma profesionalne, znaju svoj zanat.' },
]

const ownerReplies: Record<string, string> = {
  'Tatjana Novaković': 'Hvala vam najlepše, Tatjana! 💕 Ines je divna, prenećemo joj vaše reči!',
  'Jovana Petrović': 'Hvala vam, Jovana! Vaše zadovoljstvo je naš najveći uspeh. 🌸',
  'Marina Dimić': 'Hvala vam na dugogodišnjoj vernosti, Marina! 💖',
}

export default function Recenzije() {
  return (
    <PageTransition>
      <PageHero title="Recenzije" subtitle="Šta kažu naše klijentice." />

      <div className="relative">
        <BokehCircle className="bg-[#D4A8B0]/4 blur-[130px] h-[300px] w-[300px] top-0 left-[-8%]" duration={14} />
        <BokehCircle className="bg-[#F5EDE8]/3 blur-[100px] h-56 w-56 bottom-20 right-[-5%]" duration={16} />
      </div>

      {/* Rating display */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-12 text-center">
        <FadeUp>
          <span className="font-display italic font-light text-[#D4A8B0]" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)' }}>
            4.7 ★
          </span>
          <p className="text-white/40 text-sm mt-2">93 recenzije na Google Maps</p>
        </FadeUp>
      </section>

      {/* Reviews grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <StaggerItem key={r.name}>
              <motion.div
                className="bg-[#141112] border border-white/7 rounded-3xl p-5 border-l-2 border-l-[#D4A8B0]/30 hover:border-[#D4A8B0]/30 transition-colors duration-300 h-full flex flex-col"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#D4A8B0] text-sm">★</span>
                  ))}
                </div>
                <p className="text-white/65 text-sm leading-relaxed flex-1 mb-4">"{r.text}"</p>
                <p className="font-display italic text-white/80 text-sm">{r.name}</p>
                {ownerReplies[r.name] && (
                  <p className="text-[#D4A8B0]/60 text-xs italic mt-2 ml-4">
                    — Studio White 🌸
                  </p>
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center">
        <FadeUp>
          <Button href="https://www.google.com/maps/place/Studio+White/" className="inline-block">
            Ostavite recenziju na Google Maps →
          </Button>
        </FadeUp>
      </section>
    </PageTransition>
  )
}
