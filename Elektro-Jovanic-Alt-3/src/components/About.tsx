import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="o-nama" className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative background split */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-surface1/20 transform skew-x-[20deg] -translate-x-[20%] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-white mb-6 tracking-wide uppercase">
              O Nama
            </h2>
            <div className="w-20 h-1 bg-brand-gold mb-8"></div>
            <p className="text-xl text-brand-text-sec leading-relaxed mb-6">
              Firma <span className="text-brand-white font-medium">Jovanić Elektro</span> registrovana je 2021. godine u Subotici. 
            </p>
            <p className="text-lg text-brand-text-sec leading-relaxed mb-8">
              Pružamo kompletne elektroinstalacione usluge za stambene i poslovne objekte. 
              Naš cilj je da svaki posao bude obavljen na najvišem nivou, poštujući standarde struke.
              <strong className="block mt-4 text-brand-gold font-normal">
                Radimo brzo, pouzdano i po dogovorenim cenama.
              </strong>
            </p>
            
            <a
              href="#kontakt"
              className="inline-block border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black px-8 py-3 rounded font-bold transition-all uppercase tracking-wider text-sm"
            >
              Kontaktirajte nas
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full max-w-lg"
          >
            <div className="absolute inset-0 bg-brand-gold/10 blur-3xl rounded-full" />
            <div className="relative bg-brand-surface2 border border-white/10 p-10 rounded-2xl shadow-2xl backdrop-blur-sm">
              <div className="absolute -top-6 -right-6 text-brand-gold w-16 h-16 bg-brand-surface1 border border-brand-gold/30 rounded-xl flex items-center justify-center shadow-lg transform rotate-12">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                </svg>
              </div>
              
              <h3 className="font-heading text-2xl text-brand-white mb-6 tracking-wider uppercase border-b border-white/10 pb-4">
                Podaci o firmi
              </h3>
              
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-brand-text-sec text-sm uppercase tracking-wide">Registrovana</span>
                  <span className="text-brand-white font-medium">8. 4. 2021.</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-brand-text-sec text-sm uppercase tracking-wide">Sedište</span>
                  <span className="text-brand-white font-medium text-right">Majšanski put 134A<br/>24000 Subotica</span>
                </li>
                <li className="flex justify-between items-center pt-2">
                  <span className="text-brand-text-sec text-sm uppercase tracking-wide">Status</span>
                  <span className="text-green-400 flex items-center gap-2 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Aktivan
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
