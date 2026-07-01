import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const serviceCards = [
  { icon: "✂️", title: "Šišanje & Feniranje" },
  { icon: "🎨", title: "Farbanje kose" },
  { icon: "✨", title: "Balayage & Pramenovi" },
  { icon: "💆", title: "Nega & Tretmani" },
];

const reviews = [
  {
    name: "Iva B.",
    service: "Farbanje cele dužine",
    text: "Zadovoljna sam tretmanom K2.0 i farbanjem kose, doći ću rado ponovo. Nada je vrlo ljubazna i prijatna.",
  },
  {
    name: "Verica",
    service: "Žensko šišanje + feniranje",
    text: "Veoma sam zadovoljna uslugom i frizurom. Koriste se kvalitetni preparati i dobila sam savete za negu kose.",
  },
  {
    name: "Milica",
    service: "Feniranje na ravno",
    text: "Mali slatki salon u centru Subotice. Ima parking ispred salona. Nada vrlo stručna i prijatna osoba.",
  },
  {
    name: "Ana",
    service: "Farbanje izrastka",
    text: "Predivan salon i lux usluga. Uzmite K20, kosa mi je top.",
  },
  {
    name: "Ivana",
    service: "Feniranje na ravno",
    text: "Veoma sam zadovoljna uslugom feniranja. Nada je dobro edukovana i koristi vrhunske preparate. Toplo preporučujem!",
  },
  {
    name: "Snežana",
    service: "Colagen maska i feniranje",
    text: "Izuzetno sam zadovoljna profesionalnošću i ljubaznošću vlasnice salona Nadom. Najtoplije preporuke!",
  },
  {
    name: "Anđela",
    service: "Feniranje na ravno",
    text: "Boravak u salonu je bio jako prijatan, usluga profesionalna, a Nada je super za komunikaciju. Sve preporuke!",
  },
  {
    name: "Olivera",
    service: "Šišanje + feniranje",
    text: "Vrlo lepo i ugodno...",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose/10 blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cream/8 blur-[100px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-amber-500/6 blur-[80px]"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 border border-rose/30 bg-rose/5 text-rose text-xs uppercase tracking-[0.15em] rounded-full mb-6"
          >
            Frizerski salon · Subotica
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display italic text-[clamp(4rem,10vw,8rem)] leading-[0.9] text-white mb-6"
          >
            Vaša kosa,
            <br />
            naša strast.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="block h-px w-16 bg-rose/30" />
            <span className="text-rose text-lg">✦</span>
            <span className="block h-px w-16 bg-rose/30" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/60 text-lg mb-10 max-w-xl mx-auto"
          >
            Balayage, farbanje, nega kose i mnogo više — u srcu Subotice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://www.sredime.rs/subotica/salon-beauty-room-by-nada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-rose text-dark font-semibold rounded-full shadow-[0_16px_48px_rgba(201,149,108,0.18)] hover:opacity-90 transition-all"
            >
              Zakažite termin →
            </a>
            <Link
              to="/usluge"
              className="inline-flex items-center px-8 py-3.5 border border-white/20 text-white/80 font-semibold rounded-full hover:border-rose hover:text-rose transition-all"
            >
              Pogledajte usluge
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCards.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-surface border border-white/8 rounded-xl p-6 text-center hover:border-rose/40 hover:bg-[#1e1818] transition-colors cursor-default"
              >
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-display text-lg text-white">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link to="/usluge" className="text-rose text-sm hover:underline">
              Sve usluge →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="font-display italic text-3xl md:text-4xl text-white/90 leading-snug">
              &ldquo;Dugogodišnje iskustvo i Lakme proizvodi — sve na jednom
              mestu.&rdquo;
            </blockquote>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/60 mb-6 leading-relaxed">
              Salon Beauty Room by Nada nalazi se u centru Subotice. Pružamo
              kompletne frizerske usluge — od šišanja i feniranja, do balayage,
              air touch i keratinskog ispravljanja.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Lakme proizvodi", "Centar Subotice", "Parking ispred"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1 text-xs border border-rose/20 text-rose/80 rounded-full"
                  >
                    {pill}
                  </span>
                ),
              )}
            </div>
            <Link to="/usluge" className="text-rose text-sm hover:underline">
              Više o salonu →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 overflow-hidden bg-dark border-t border-white/5">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-rose/70 mb-3">
            Recenzije
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Šta kažu naši klijenti
          </h2>
        </motion.div>
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            className="flex gap-6 w-max"
            style={{ animation: "marquee 95s linear infinite" }}
          >
            {[...reviews, ...reviews].map((review, i) => (
              <div
                key={i}
                className="w-[min(360px,85vw)] shrink-0 bg-white/[0.06] border border-white/[0.14] rounded-xl p-6"
              >
                <div className="flex text-rose mb-3 text-sm">⭐⭐⭐⭐⭐</div>
                <p className="font-display italic text-lg text-white/90 leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.15em] text-white/70">
                  {review.name}
                </p>
                <p className="text-xs text-white/40 mt-1.5">{review.service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-t border-white/5 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 md:gap-10 text-sm">
            <div>
              <span className="text-white/50">Pon–Pet</span>
              <span className="text-white ml-2">09–18</span>
            </div>
            <div>
              <span className="text-white/50">Subota</span>
              <span className="text-white ml-2">08–14</span>
            </div>
            <div>
              <span className="text-white/50">Nedelja</span>
              <span className="text-rose/60 ml-2">Zatvoreno</span>
            </div>
          </div>
          <a
            href="https://www.sredime.rs/subotica/salon-beauty-room-by-nada"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-rose text-dark text-sm font-semibold rounded-full hover:opacity-90 transition-all"
          >
            Zakažite termin →
          </a>
        </div>
      </section>
    </div>
  );
}
