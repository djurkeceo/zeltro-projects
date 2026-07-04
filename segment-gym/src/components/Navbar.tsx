import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/oprema', label: 'Oprema' },
  { to: '/clanarine', label: 'Članarine' },
  { to: '/recenzije', label: 'Recenzije' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#080808]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
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

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.to
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative text-sm tracking-widest uppercase pb-1 transition-colors ${
                  active ? 'text-[#C8FF00]' : 'text-white/60 hover:text-white'
                }`}
              >
                {l.label}
                {active && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C8FF00]" />
                )}
              </Link>
            )
          })}
        </div>

        <a
          href="tel:+381621528290"
          className="hidden md:inline-block bg-[#C8FF00] text-[#080808] font-bold px-6 py-2.5 text-sm tracking-wider uppercase hover:scale-[1.03] transition-transform"
        >
          Pozovite nas
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-all ${open ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-all ${open ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 top-16 bg-[#080808]/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 z-40"
          >
            {links.map((l) => {
              const active = pathname === l.to
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`font-display text-5xl tracking-wider transition-colors ${
                    active ? 'text-[#C8FF00]' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              )
            })}
            <a
              href="tel:+381621528290"
              className="mt-4 bg-[#C8FF00] text-[#080808] font-bold px-8 py-3 text-lg tracking-wider uppercase"
            >
              Pozovite nas
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
