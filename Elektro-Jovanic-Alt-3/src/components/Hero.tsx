import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-surface2/50 via-brand-black to-brand-black opacity-80" />
        
        {/* Decorative diagonal split */}
        <div className="absolute top-0 right-0 w-[150%] h-full bg-brand-surface1/40 transform -skew-x-[15deg] translate-x-[40%] z-0 border-l border-white/5" />
        
        {/* Giant background lightning */}
        <motion.svg
          animate={{ opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-[15%] w-3/4 h-3/4 text-brand-gold z-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
        </motion.svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-10 md:mt-0">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-heading font-bold text-brand-white leading-[0.9] mb-6 tracking-wide drop-shadow-2xl"
          >
            STRUJA JE <br />
            <span className="text-brand-gold relative inline-block drop-shadow-[0_0_15px_rgba(245,166,35,0.4)]">
              NAŠ POSAO
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1.5 md:h-2.5 bg-brand-gold"
              />
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-brand-text-sec mb-10 max-w-2xl font-light leading-relaxed"
          >
            Profesionalne elektroinstalacije u Subotici i okolini. 
            Brzo, pouzdano i bezbedno.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a
              href="tel:0658275055"
              className="bg-brand-gold hover:bg-yellow-500 text-brand-black px-8 py-4 rounded font-bold text-lg text-center transition-all hover:scale-105 flex items-center justify-center gap-2 group uppercase tracking-wider shadow-[0_0_20px_rgba(245,166,35,0.3)] hover:shadow-[0_0_30px_rgba(245,166,35,0.5)]"
            >
              Pozovite nas
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#usluge"
              className="border border-brand-white/30 hover:border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-black px-8 py-4 rounded font-bold text-lg text-center transition-all flex items-center justify-center uppercase tracking-wider backdrop-blur-sm"
            >
              Pogledajte usluge
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
