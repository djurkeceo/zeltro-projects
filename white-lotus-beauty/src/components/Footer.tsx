import { Link } from 'react-router-dom'
import LotusIcon from './LotusIcon'

export default function Footer() {
  return (
    <footer className="bg-[#070908] border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <LotusIcon className="w-6 h-6 text-[#7C9E8F]" />
              <span className="font-display italic text-lg text-white">White Lotus Beauty</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Prvomajska 95, Subotica<br />
              Prozivka · od 2022.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center gap-3">
            <Link to="/" className="text-white/50 hover:text-white text-sm transition-colors">Početna</Link>
            <Link to="/usluge" className="text-white/50 hover:text-white text-sm transition-colors">Usluge</Link>
            <Link to="/kontakt" className="text-white/50 hover:text-white text-sm transition-colors">Kontakt</Link>
            <a
              href="https://www.instagram.com/white_lotus_beauty_su"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#7C9E8F] text-sm transition-colors mt-2"
            >
              Instagram →
            </a>
          </div>

          <div className="flex flex-col gap-2.5 text-sm text-white/45">
            <a href="tel:0631687544" className="hover:text-[#7C9E8F] transition-colors">
              063/168-75-44
            </a>
            <a
              href="mailto:suzana.whitelotusbeauty@gmail.com"
              className="hover:text-[#7C9E8F] transition-colors break-all"
            >
              suzana.whitelotusbeauty@gmail.com
            </a>
            <p className="mt-2 leading-relaxed">
              Pon–Pet: 10–19<br />
              Sub: 09–14
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.07] py-6">
        <div className="max-w-6xl mx-auto px-5 flex flex-col items-center gap-3">
          <div className="flex items-center gap-3 text-[#7C9E8F]/30">
            <LotusIcon className="w-5 h-5" />
          </div>
          <p className="text-white/30 text-xs text-center">
            &copy; 2025 White Lotus Beauty — Suzana Cvjetković PR.
          </p>
        </div>
      </div>
    </footer>
  )
}
