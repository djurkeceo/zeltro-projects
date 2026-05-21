import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const productLinks = [
  { to: '/proizvodi/gradjevinska-limarija', label: 'Građevinska limarija' },
  { to: '/proizvodi/profilisani-limovi', label: 'Profilisani limovi' },
];

const navLinks = [
  { to: '/metalurgija', label: 'METALURGIJA' },
  { to: '/sendvic-paneli', label: 'SENDVIČ PANELI' },
  { to: '/usluge', label: 'USLUGE' },
  { to: '/vesti', label: 'VESTI' },
  { to: '/kontakt', label: 'KONTAKT' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isProductsActive = location.pathname.startsWith('/proizvodi');

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo" aria-label="METAL SHOP — početna">
          <span className="navbar__logo-metal">METAL</span>
          <span className="navbar__logo-shop">SHOP</span>
          <span className="navbar__logo-sub">d.o.o.</span>
        </Link>

        <button
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`} aria-label="Glavna navigacija">
          <ul className="navbar__menu">
            <li className="navbar__dropdown" ref={dropdownRef}>
              <button
                className={`navbar__link navbar__dropdown-btn ${isProductsActive ? 'navbar__link--active' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                PROIZVODI
                <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </button>
              <ul className={`navbar__dropdown-menu ${dropdownOpen ? 'navbar__dropdown-menu--open' : ''}`}>
                {productLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `navbar__dropdown-item ${isActive ? 'navbar__dropdown-item--active' : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
