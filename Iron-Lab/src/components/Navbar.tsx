import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <span className="accent-bar"></span>
          <h1>IRON LAB</h1>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <li><a href="/#programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</a></li>
          <li><a href="/#trainers" onClick={() => setIsMobileMenuOpen(false)}>Trainers</a></li>
          <li><a href="/#pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a></li>
          <li><a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          <li className="mobile-cta">
            <button className="btn-primary">Join Now</button>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="btn-primary desktop-cta">Join Now</button>
          <button className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
