import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#C8FF00] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="font-display text-white text-2xl tracking-[0.15em]">SEGMENT</span>
            <div className="w-full h-[2px] bg-[#C8FF00] mt-1 max-w-[100px]" />
            <p className="text-white/45 text-sm mt-3">Kireška 59, 24000 Subotica</p>
          </div>

          <div className="flex flex-col gap-3">
            <Link to="/" className="text-white/60 hover:text-[#C8FF00] text-sm tracking-wider uppercase transition-colors">Početna</Link>
            <Link to="/oprema" className="text-white/60 hover:text-[#C8FF00] text-sm tracking-wider uppercase transition-colors">Oprema</Link>
            <Link to="/clanarine" className="text-white/60 hover:text-[#C8FF00] text-sm tracking-wider uppercase transition-colors">Članarine</Link>
            <Link to="/recenzije" className="text-white/60 hover:text-[#C8FF00] text-sm tracking-wider uppercase transition-colors">Recenzije</Link>
            <Link to="/kontakt" className="text-white/60 hover:text-[#C8FF00] text-sm tracking-wider uppercase transition-colors">Kontakt</Link>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+381621528290" className="text-white/60 hover:text-[#C8FF00] transition-colors">+381 62 15 28 290</a>
            <p className="text-white/45">Pon–Pet: 07:00–22:15</p>
            <p className="text-white/45">Sub: 08:00–21:15</p>
            <p className="text-white/45">Ned: 14:00–20:00</p>
            <a
              href="https://www.facebook.com/spraveza.teretane/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-[#C8FF00] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="border-t border-white/8 mt-10 pt-6 text-center text-white/30 text-xs">
          &copy; 2025 Segment Teretana. Sva prava zadržana.
        </div>
      </div>
    </footer>
  )
}
