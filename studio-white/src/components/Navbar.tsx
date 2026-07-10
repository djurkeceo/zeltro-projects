import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/recenzije', label: 'Recenzije' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0c0a0b]/92 backdrop-blur-xl border-b border-[#D4A8B0]/15' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex flex-col items-start leading-none">
          <span className="font-display italic text-xl lg:text-[22px]">
            <span className="text-white/80">Studio</span>{' '}
            <span className="text-white font-medium">White</span>{' '}
            <span className="text-[#D4A8B0] text-sm">✦</span>
          </span>
          <span className="text-white/30 text-[9px] tracking-[0.4em] font-sans mt-0.5">
            FRIZERSKO-KOZMETIČKI SALON · SUBOTICA
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-sans transition-colors duration-200 ${
                  isActive ? 'text-[#D4A8B0]' : 'text-white/50 hover:text-white'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="tel:024571167"
            className="hidden md:inline-block border border-[#D4A8B0]/50 text-[#D4A8B0] rounded-full px-5 py-2.5 text-sm font-sans hover:bg-[#D4A8B0] hover:text-[#0c0a0b] transition-all duration-300"
          >
            Zakažite termin
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white/70"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-white/70"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white/70"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#0c0a0b]/98 backdrop-blur-xl border-b border-[#D4A8B0]/15"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `text-lg font-display italic transition-colors ${
                      isActive ? 'text-[#D4A8B0]' : 'text-white/50'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="tel:024571167"
                className="border border-[#D4A8B0]/50 text-[#D4A8B0] rounded-full px-6 py-3 text-sm font-sans hover:bg-[#D4A8B0] hover:text-[#0c0a0b] transition-all"
              >
                Zakažite termin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
