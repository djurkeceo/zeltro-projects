import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/recenzije', label: 'Recenzije' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0c0b09]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="font-display italic text-[36px] text-[#BFA980] leading-none">L</span>
          <div className="flex flex-col leading-tight">
            <span className="font-display italic text-[18px] text-white">Studio L</span>
            <span className="text-[10px] text-white/45 tracking-[0.2em] uppercase">by Larisa Kalinić</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm tracking-wider uppercase transition-colors duration-300 ${
                  active ? 'text-[#BFA980]' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#BFA980]"
                  />
                )}
              </Link>
            )
          })}
        </div>

        <a
          href="tel:0631106320"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full border border-[#BFA980]/50 text-[#BFA980] text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#BFA980] hover:text-[#0c0b09]"
        >
          Zakažite termin
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-white/70"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-px bg-white/70"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-px bg-white/70"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0c0b09]/95 backdrop-blur-md border-t border-white/7"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map((link) => {
                const active = pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-lg tracking-wider uppercase transition-colors ${
                      active ? 'text-[#BFA980]' : 'text-white/60'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href="tel:0631106320"
                className="mt-4 inline-flex self-start px-6 py-3 rounded-full border border-[#BFA980]/50 text-[#BFA980] text-sm tracking-wider uppercase transition-all hover:bg-[#BFA980] hover:text-[#0c0b09]"
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
