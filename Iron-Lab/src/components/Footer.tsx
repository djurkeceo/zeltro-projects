import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo">
            <span className="accent-bar"></span>
            <h1>IRON LAB</h1>
          </div>
          <p className="brand-text">
            The ultimate destination for those who push beyond their limits. 
            Join the elite, train with the best.
          </p>
          <div className="social-links">
            <a href="#"><Instagram /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Facebook /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#trainers">Trainers</a></li>
            <li><a href="#pricing">Membership</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><MapPin size={20} color="var(--primary-red)" /> 123 Iron Street, Muscle City</li>
            <li><Phone size={20} color="var(--primary-red)" /> +1 (555) 123-4567</li>
            <li><Mail size={20} color="var(--primary-red)" /> info@ironlab.com</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Join The Newsletter</h3>
          <p>Get training tips and exclusive offers.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button className="btn-primary">Join</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 IRON LAB. ALL RIGHTS RESERVED. DESIGNED FOR PERFORMANCE.</p>
      </div>
    </footer>
  );
};

export default Footer;
