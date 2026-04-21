import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

  const navItems = [
    { href: '#menu', label: 'Menu' },
    { href: '#reservation', label: 'Reservation' },
    { href: '#location', label: 'Location' }
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="nav-container">
        <a href="#" className="logo">Bella Cucina</a>

        <div className="nav-links desktop-nav">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
          <span className={isOpen ? 'line open' : 'line'}></span>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="nav-links mobile-nav open"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.08 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
