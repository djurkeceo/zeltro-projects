import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboard } from '../hooks/useKeyboard';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useKeyboard({ onEscape: () => setIsOpen(false) }, isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/', label: '01' },
    { name: 'Portfolio', path: '/portfolio', label: '02' },
    { name: 'About', path: '/about', label: '03' }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-main">L <span className="dot">·</span> M</div>
          <div className="logo-sub">PHOTOGRAPHY</div>
        </Link>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              {link.name}
            </NavLink>
          ))}
          <Link to="/about#contact" className="btn btn-primary nav-cta">Book a Session</Link>
        </div>

        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Menu">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-links">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * (i + 1), duration: 0.5 }}
                >
                  <NavLink to={link.path} className="mobile-nav-link">
                    <span className="link-number">{link.label} —</span>
                    <span className="link-text">{link.name}</span>
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Link to="/about#contact" className="btn btn-primary mobile-cta">Book a Session</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
