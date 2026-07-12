import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Početna" },
  { to: "/oprema", label: "Oprema" },
  { to: "/clanarine", label: "Članarine" },
  { to: "/recenzije", label: "Recenzije" },
  { to: "/kontakt", label: "Kontakt" },
];

// Isti "solid" izgled i za header (kad je meni otvoren) i za dropdown ispod,
// da nav bar i meni budu vizuelno jedna celina dok je meni otvoren.
const SOLID_BG = "bg-[#080808]/98 backdrop-blur-lg";
const SCROLLED_BG = "bg-[#080808]/90 backdrop-blur-md";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Kad je meni otvoren, header dobija ISTU pozadinu kao dropdown (SOLID_BG),
  // bez obzira da li je korisnik skrolovao. Van toga, ponaša se kao pre.
  const headerBg = open ? SOLID_BG : scrolled ? SCROLLED_BG : "bg-transparent";

  return (
    // VAŽNO: <nav> sam po sebi NE sme imati backdrop-blur/filter klase.
    // Filter (i backdrop-filter) na pretku pravi novi "containing block" za
    // position: fixed potomke, pa bi mobilni meni ispod (koji je fixed)
    // izgubio referencu na ceo viewport i "kolabirao" na visinu svog sadržaja.
    // Zato je pozadina/blur premeštena na unutrašnji div, a mobilni meni je
    // sada sibling tog diva, ne potomak.
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className={`transition-colors duration-300 ${headerBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-display text-white text-[28px] leading-none tracking-[0.15em]">
              SEGMENT
            </span>
            <div className="w-full h-[2px] bg-[#C8FF00] mt-0.5" />
            <span className="text-[9px] text-white/45 tracking-[0.5em] uppercase font-sans mt-0.5">
              TERETANA
            </span>
          </Link>

          <div className="hidden min-[800px]:flex items-center gap-8">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative text-sm tracking-widest uppercase pb-1 transition-colors ${
                    active ? "text-[#C8FF00]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                  {active && (
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C8FF00]" />
                  )}
                </Link>
              );
            })}
          </div>

          <a
            href="tel:+381621528290"
            className="hidden min-[800px]:inline-block bg-[#C8FF00] text-[#080808] font-bold px-6 py-2.5 text-sm tracking-wider uppercase hover:scale-[1.03] transition-transform"
          >
            Pozovite nas
          </a>

          {/* Cisto hamburger -> X dugme, bez border-a/box-a oko njega */}
          <button
            type="button"
            className="min-[800px]:hidden relative w-10 h-10 flex items-center justify-center bg-transparent border-none outline-none appearance-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute w-6 h-[2px] bg-white transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-[7px]"
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`min-[800px]:hidden fixed inset-0 top-16 ${SOLID_BG} flex flex-col items-center justify-center gap-8 z-40`}
          >
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`font-display text-5xl tracking-wider transition-colors ${
                    active ? "text-[#C8FF00]" : "text-white/60 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <a
              href="tel:+381621528290"
              className="mt-4 bg-[#C8FF00] text-[#080808] font-bold px-8 py-3 text-lg tracking-wider uppercase"
            >
              Pozovite nass
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
