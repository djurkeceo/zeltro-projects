import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import LotusIcon from './LotusIcon'

const links = [
  { to: '/', label: 'Početna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-[#0a0c0b]/90 backdrop-blur-xl border-white/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <LotusIcon className="w-[18px] h-[18px] text-[#7C9E8F] transition-transform duration-300 group-hover:scale-110" />
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-display italic text-[20px] text-white leading-none">White Lotus</span>
              <span className="font-display italic text-[20px] text-[#7C9E8F] leading-none">Beauty</span>
            </div>
            <div className="text-[9px] text-white/35 tracking-[0.4em] uppercase leading-none mt-0.5">
              Frizerski salon · Prozivka, Subotica
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-wide transition-colors duration-300 ${
                pathname === l.to ? 'text-[#7C9E8F]' : 'text-white/65 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="tel:0631687544"
          className="hidden md:inline-block border border-[#7C9E8F]/50 text-[#7C9E8F] rounded-full px-5 py-2.5 text-sm tracking-wide transition-all duration-300 hover:bg-[#7C9E8F] hover:text-[#0a0c0b]"
        >
          Zakažite termin
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-7 h-7 flex flex-col items-center justify-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-white/70 origin-center transition-colors"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-[1.5px] bg-white/70"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-[1.5px] bg-white/70 origin-center transition-colors"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0a0c0b]/95 backdrop-blur-xl border-t border-white/7"
          >
            <div className="px-5 py-8 flex flex-col items-center gap-6">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`font-display italic text-3xl transition-colors duration-300 ${
                    pathname === l.to ? 'text-[#7C9E8F]' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:0631687544"
                className="mt-4 border border-[#7C9E8F]/50 text-[#7C9E8F] rounded-full px-8 py-3 text-base tracking-wide transition-all duration-300 hover:bg-[#7C9E8F] hover:text-[#0a0c0b]"
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
