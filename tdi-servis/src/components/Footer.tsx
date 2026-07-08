import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t-2 border-[#C0392B]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-baseline gap-0 mb-4">
              <span className="font-display text-2xl text-[#C0392B] tracking-wide">TDI</span>
              <span className="font-display text-2xl text-white ml-1">SERVIS</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Majšanski put 239, 24110 Subotica
            </p>
            <p className="text-white/30 text-sm mt-2">Od 1995. godine</p>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-4">Linkovi</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-white/45 text-sm hover:text-[#C0392B] transition-colors">Početna</Link>
              <Link to="/usluge" className="text-white/45 text-sm hover:text-[#C0392B] transition-colors">Usluge</Link>
              <Link to="/delovi" className="text-white/45 text-sm hover:text-[#C0392B] transition-colors">Auto delovi</Link>
              <Link to="/recenzije" className="text-white/45 text-sm hover:text-[#C0392B] transition-colors">Recenzije</Link>
              <Link to="/kontakt" className="text-white/45 text-sm hover:text-[#C0392B] transition-colors">Kontakt</Link>
              <a
                href="https://www.autodeloviopel.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/45 text-sm hover:text-[#C0392B] transition-colors"
              >
                Webshop
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-white mb-4">Kontakt</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:0245255850" className="text-white/45 hover:text-[#C0392B] transition-colors">024/525-585</a>
              <a href="tel:0245309300" className="text-white/45 hover:text-[#C0392B] transition-colors">024/530-930</a>
              <a href="tel:0635139420" className="text-white/45 hover:text-[#C0392B] transition-colors">063/513-942</a>
              <a href="mailto:office@tdiservis.rs" className="text-white/45 hover:text-[#C0392B] transition-colors">office@tdiservis.rs</a>
              <p className="text-white/30 mt-2">Pon–Pet: 09:00–17:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-6">
        <p className="text-center text-white/30 text-xs">
          &copy; 1995–2025 TDI Servis. Sva prava zadržana.
        </p>
      </div>
    </footer>
  )
}
