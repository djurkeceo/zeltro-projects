const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo */}
          <a href="#pocetna" className="flex items-center gap-2 group" aria-label="Početak stranice Jovanić Elektro">
            <div className="flex flex-col leading-none">
              <span className="font-heading text-2xl font-bold tracking-wider text-brand-white">JOVANIĆ</span>
              <span className="font-heading text-lg font-bold tracking-[0.2em] text-brand-gold">ELEKTRO</span>
            </div>
            <svg className="w-6 h-6 text-brand-gold group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
            </svg>
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#usluge" className="text-brand-text-sec hover:text-brand-white transition-colors uppercase tracking-wide text-sm">Usluge</a>
            <a href="#o-nama" className="text-brand-text-sec hover:text-brand-white transition-colors uppercase tracking-wide text-sm">O nama</a>
            <a href="#kontakt" className="text-brand-text-sec hover:text-brand-white transition-colors uppercase tracking-wide text-sm">Kontakt</a>
          </div>
          
          {/* Copyright Desktop */}
          <div className="hidden md:block text-brand-text-sec text-sm">
            &copy; 2025 Jovanić Elektro.<br/> Sva prava zadržana.
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-brand-text-sec text-sm flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>Majšanski put 134A, Subotica</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <a href="tel:0658275055" className="hover:text-brand-gold transition-colors">065 / 827-5055</a>
          </div>
          
          {/* Copyright Mobile */}
          <div className="md:hidden text-brand-text-sec text-sm text-center">
            &copy; 2025 Jovanić Elektro. Sva prava zadržana.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
