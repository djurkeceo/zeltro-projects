import { Link } from 'react-router-dom'

export default function Footer() {
  const hours = [
    { day: 'Pon, Čet, Pet', time: '08:00 – 20:00' },
    { day: 'Utorak', time: '08:00 – 16:00' },
    { day: 'Subota', time: '08:00 – 14:00' },
    { day: 'Sreda, Nedelja', time: 'Zatvoreno' },
  ]

  return (
    <footer className="bg-[#080706] border-t border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-display italic text-[32px] text-[#BFA980] leading-none">L</span>
              <div>
                <div className="font-display italic text-lg text-white">Studio L</div>
                <div className="text-[10px] text-white/45 tracking-[0.15em]">by Larisa Kalinić</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Ivana Gorana Kovačića 9/4, Subotica
            </p>
            <p className="text-white/45 text-sm">Osnovano 2010. godine</p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white/30 text-xs tracking-[0.25em] uppercase mb-1">Navigacija</h4>
            {[
              { to: '/', label: 'Početna' },
              { to: '/usluge', label: 'Usluge' },
              { to: '/recenzije', label: 'Recenzije' },
              { to: '/kontakt', label: 'Kontakt' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/50 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-white/30 text-xs tracking-[0.25em] uppercase mb-1">Kontakt</h4>
            <a
              href="tel:0631106320"
              className="text-white/50 hover:text-[#BFA980] text-sm transition-colors"
            >
              063/110-6320
            </a>
            <a
              href="mailto:lara.kalinic@gmail.com"
              className="text-white/50 hover:text-[#BFA980] text-sm transition-colors"
            >
              lara.kalinic@gmail.com
            </a>
            <div className="mt-2 space-y-1">
              {hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 text-xs text-white/40">
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/30">
          &copy; 2025 Studio L &mdash; Larisa Kalinić PR. Sva prava zadržana.
        </div>
      </div>
    </footer>
  )
}
