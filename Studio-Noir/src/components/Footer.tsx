import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-logo">STUDIO NOIR</div>
          <p className="footer-tagline">Svaka kosa priča priču. Naša misija je da tu priču učinimo nezaboravnom.</p>
          <div className="footer-social">
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31v8.7c.01 2.33-.53 4.74-2.22 6.41-1.89 1.94-4.94 2.45-7.39 1.42-2.82-1.12-4.6-4.22-4.07-7.22.31-2.02 1.68-3.9 3.56-4.68 1.1-.48 2.3-.65 3.49-.51.01 1.46.01 2.91.01 4.37-1.12-.23-2.35-.11-3.32.53-1.11.75-1.63 2.22-1.25 3.49.33 1.31 1.64 2.27 2.98 2.22 1.58-.02 2.92-1.36 2.92-2.94V0h.01z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>NAVIGACIJA</h3>
          <ul>
            <li><Link to="/">Početna</Link></li>
            <li><Link to="/services">Usluge</Link></li>
            <li><Link to="/gallery">Galerija</Link></li>
            <li><Link to="/services#booking">Kontakt</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>KONTAKT</h3>
          <p>Knez Mihailova 42, Beograd</p>
          <p>+381 11 234 5678</p>
          <p>info@studionoir.rs</p>
          <p>Pon–Pet: 09:00–20:00</p>
          <p>Sub: 09:00–17:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2025 Studio Noir. Sva prava zadržana.</p>
          <p>Made with ♥ in Beograd</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
