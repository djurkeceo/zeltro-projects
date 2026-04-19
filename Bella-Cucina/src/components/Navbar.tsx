import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo">Bella Cucina</a>
        
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#reservation" onClick={() => setIsOpen(false)}>Reservation</a>
          <a href="#location" onClick={() => setIsOpen(false)}>Location</a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
