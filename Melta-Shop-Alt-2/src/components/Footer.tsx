import { Link } from 'react-router-dom';
import { company, departments } from '../data/company';
import './Footer.css';

const quickLinks = [
  { to: '/', label: 'Početna' },
  { to: '/o-nama', label: 'O nama' },
  { to: '/proizvodi/gradjevinska-limarija', label: 'Građevinska limarija' },
  { to: '/proizvodi/profilisani-limovi', label: 'Profilisani limovi' },
  { to: '/metalurgija', label: 'Metalurgija' },
  { to: '/sendvic-paneli', label: 'Sendvič paneli' },
  { to: '/usluge', label: 'Usluge' },
  { to: '/vesti', label: 'Vesti' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-metal">METAL</span>
            <span className="footer__logo-shop">SHOP</span>
          </Link>
          <p className="footer__tagline">
            Vaš pouzdani partner u metalu od 2006. — kvalitet, poverenje, pouzdanost i odgovornost.
          </p>
        </div>

        <div className="footer__links">
          <h3>Brzi linkovi</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h3>Kontakt</h3>
          <address>
            <p>{company.address}</p>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>Maloprodaja: {company.phones.retail} / {company.phones.retailMobile}</p>
            <p>Proizvodnja: {company.phones.production}</p>
            <p>{company.hours}</p>
          </address>
        </div>

        <div className="footer__departments">
          <h3>Odeljenja</h3>
          {departments.map((dept) => (
            <div key={dept.id} className="footer__dept">
              <strong>{dept.title}</strong>
              <span>{dept.contact} — {dept.phone}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2006–{year} Metal Shop d.o.o. Sva prava zadržana.</p>
          <p>PIB: {company.pib}</p>
        </div>
      </div>
    </footer>
  );
}
