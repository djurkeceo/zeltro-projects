import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      console.log('Form submitted');
    }, 1500);
  };

  return (
    <div className="contact-form-container">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            className="success-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="success-icon">✓</div>
            <h3>Poruka je poslata!</h3>
            <p>Javljam se uskoro.</p>
            <button className="btn btn-outline" onClick={() => setStatus('idle')}>Pošalji ponovo</button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Ime i Prezime</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" required placeholder=" " />
                <label htmlFor="email">Email Adresa</label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="tel" id="phone" placeholder=" " />
                <label htmlFor="phone">Telefon</label>
              </div>
              <div className="form-group">
                <select id="type" required defaultValue="">
                  <option value="" disabled>Vrsta sesije</option>
                  <option value="portret">Portretna</option>
                  <option value="wedding">Wedding</option>
                  <option value="porodicna">Porodična</option>
                  <option value="editorijal">Editorijal</option>
                  <option value="brand">Brand</option>
                  <option value="other">Nešto drugo</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="date" id="date" placeholder=" " />
                <label htmlFor="date">Željeni datum</label>
              </div>
              <div className="form-group">
                <select id="budget" required defaultValue="">
                  <option value="" disabled>Okvirni budžet</option>
                  <option value="150">Do €150</option>
                  <option value="300">€150 – €300</option>
                  <option value="600">€300 – €600</option>
                  <option value="1000">Više od €600</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <textarea id="message" rows={4} required placeholder=" "></textarea>
              <label htmlFor="message">Vaša poruka</label>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Slanje...' : 'Pošalji Upit'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
