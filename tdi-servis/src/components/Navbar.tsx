import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/delovi', label: 'Auto delovi' },
  { to: '/recenzije', label: 'Recenzije' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#090909]/92 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <div className="flex items-baseline gap-0">
            <span className="font-display text-[32px] text-[#C0392B] leading-none tracking-wide">TDI</span>
            <span className="font-display text-[32px] text-white leading-none tracking-wide ml-1">SERVIS</span>
          </div>
          <span className="text-[9px] text-white/40 tracking-[0.4em] uppercase leading-tight">
            Specijalizovani Opel servis · od 1995.
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-medium transition-colors ${
                  active ? 'text-[#C0392B]' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#C0392B]" />
                )}
              </Link>
            )
          })}
        </div>

        <a
          href="tel:0245255850"
          className="hidden lg:inline-flex bg-[#C0392B] text-white font-bold px-5 py-2.5 rounded-none text-sm hover:bg-[#E74C3C] transition-colors"
        >
          Pozovite nas
        </a>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform ${open ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-transform ${open ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#090909] border-t border-white/8"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => {
                const active = pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-display text-3xl ${
                      active ? 'text-[#C0392B]' : 'text-white/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <a
                href="tel:0245255850"
                className="bg-[#C0392B] text-white font-bold text-center px-5 py-3 rounded-none"
              >
                Pozovite nas
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
