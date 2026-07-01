import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/', label: 'Početna' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/cenovnik', label: 'Cenovnik' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex flex-col leading-none mb-3">
              <span className="font-display italic text-[22px] text-cream leading-none">Beauty Room</span>
              <span className="font-sans text-[11px] text-muted tracking-[0.2em] leading-none mt-0.5">by Nada</span>
            </Link>
            <p className="text-sm text-white/50 mt-3 italic">Vaša kosa, naša strast.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Navigacija</h4>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/50 hover:text-rose transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Kontakt</h4>
            <div className="text-sm text-white/50 space-y-2">
              <p>Vuka Karadžića 18, Subotica</p>
              <p>Pon–Pet 09–18 | Sub 08–14</p>
              <a
                href="https://www.sredime.rs/subotica/salon-beauty-room-by-nada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-5 py-2.5 bg-rose text-dark text-sm font-semibold rounded-full hover:opacity-90 transition-all"
              >
                Zakažite termin
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Beauty Room by Nada. Sva prava zadržana.</p>
          <p>PIB: 114430384</p>
        </div>
      </div>
    </footer>
  )
}
