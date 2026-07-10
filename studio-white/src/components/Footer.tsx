import { NavLink } from 'react-router-dom'
import OpenStatus from './ui/OpenStatus'

const navLinks = [
  { to: '/', label: 'Početna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/recenzije', label: 'Recenzije' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080607] border-t border-[#D4A8B0]/20">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left */}
        <div>
          <span className="font-display italic text-xl text-white">
            Studio <span className="font-medium">White</span> <span className="text-[#D4A8B0] text-sm">✦</span>
          </span>
          <p className="text-white/40 text-sm mt-4 leading-relaxed">
            Arsenije Čarnojevića 84<br />
            24000 Subotica, Srbija
          </p>
          <p className="text-white/30 text-xs mt-2">Osnovano 2017. godine</p>
          <div className="mt-4 inline-flex items-center gap-1.5 bg-[#D4A8B0]/10 border border-[#D4A8B0]/20 rounded-full px-3 py-1">
            <span className="text-[#D4A8B0] text-sm">4.7 ★</span>
            <span className="text-white/40 text-xs">Google</span>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col gap-3">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? 'text-[#D4A8B0]' : 'text-white/40 hover:text-white/70'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href="https://www.instagram.com/studio_white__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 hover:text-[#D4A8B0] transition-colors mt-2"
          >
            @studio_white__ ↗
          </a>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <a href="tel:024571167" className="text-sm text-white/50 hover:text-[#D4A8B0] transition-colors">
            024/571-167
          </a>
          <a href="tel:0641182068" className="text-sm text-white/50 hover:text-[#D4A8B0] transition-colors">
            064/118-20-68
          </a>
          <a href="mailto:studio.white.no1@gmail.com" className="text-sm text-white/50 hover:text-[#D4A8B0] transition-colors">
            studio.white.no1@gmail.com
          </a>
          <p className="text-white/30 text-xs mt-2">Pon–Pet: 09–19 · Sub: 09–15</p>
          <OpenStatus />
        </div>
      </div>

      <div className="border-t border-[#D4A8B0]/10" />
      <p className="text-center text-white/20 text-xs py-6 px-6">
        © 2025 Studio White — Verica Dukić PR. Sva prava zadržana.
      </p>
    </footer>
  )
}
