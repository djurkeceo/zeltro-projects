import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Usluge', href: '#usluge' },
    { name: 'O nama', href: '#o-nama' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/50 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#pocetna" className="flex items-center gap-2 group" aria-label="Početak stranice Jovanić Elektro">
          <div className="flex flex-col leading-none">
            <span className="font-heading text-3xl font-bold tracking-wider text-brand-white">JOVANIĆ</span>
            <span className="font-heading text-xl font-bold tracking-[0.2em] text-brand-gold">ELEKTRO</span>
          </div>
          <svg className="w-8 h-8 text-brand-gold group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(245,166,35,0.5)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
          </svg>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-text-sec hover:text-brand-white transition-colors font-medium text-sm tracking-wide uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a
            href="tel:0658275055"
            className="bg-brand-gold hover:bg-yellow-500 text-brand-black px-6 py-2.5 rounded font-bold transition-all hover:scale-105 uppercase tracking-wide text-sm shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_20px_rgba(245,166,35,0.5)]"
          >
            Pozovite nas
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-brand-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-surface1 border-t border-brand-surface2 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-heading text-brand-white hover:text-brand-gold tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0658275055"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-brand-gold text-brand-black text-center mt-4 px-6 py-3 rounded font-bold uppercase tracking-wider"
              >
                Pozovite nas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
