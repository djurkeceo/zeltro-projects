import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BookingForm.css';

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Šišanje & Styling',
    date: '',
    time: '09:00',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setSubmitted(true);
  };

  const times = [];
  for (let h = 9; h < 20; h++) {
    times.push(`${h.toString().padStart(2, '0')}:00`);
    times.push(`${h.toString().padStart(2, '0')}:30`);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  if (submitted) {
    return (
      <motion.div 
        className="success-message"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="success-icon">✓</div>
        <h2>Termin je zakazan!</h2>
        <p>Kontaktiraćemo vas radi potvrde u najkraćem mogućem roku.</p>
        <button onClick={() => setSubmitted(false)} className="btn-gold">NAZAD</button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      className="booking-form"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      id="booking-form"
    >
      <div className="form-row">
        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="name">Ime i Prezime</label>
          <input 
            type="text" id="name" required 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </motion.div>
        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="email">Email adresa</label>
          <input 
            type="email" id="email" required 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </motion.div>
      </div>

      <div className="form-row">
        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="phone">Broj telefona</label>
          <input 
            type="tel" id="phone" required 
            value={formData.phone}
            onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </motion.div>
        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="service">Usluga</label>
          <select 
            id="service" 
            value={formData.service}
            onChange={e => setFormData({...formData, service: e.target.value})}
          >
            <option>Šišanje & Styling</option>
            <option>Bojenje</option>
            <option>Pramenovi</option>
            <option>Balayage</option>
            <option>Keratin tretman</option>
            <option>Maske & Nega</option>
          </select>
        </motion.div>
      </div>

      <div className="form-row">
        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="date">Datum</label>
          <input 
            type="date" id="date" required 
            value={formData.date}
            onChange={e => setFormData({...formData, date: e.target.value})}
          />
        </motion.div>
        <motion.div className="form-group" variants={itemVariants}>
          <label htmlFor="time">Vreme</label>
          <select 
            id="time"
            value={formData.time}
            onChange={e => setFormData({...formData, time: e.target.value})}
          >
            {times.map(t => <option key={t}>{t}</option>)}
          </select>
        </motion.div>
      </div>

      <motion.div className="form-group" variants={itemVariants}>
        <label htmlFor="message">Napomena (opciono)</label>
        <textarea 
          id="message" rows={3}
          value={formData.message}
          onChange={e => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </motion.div>

      <motion.button 
        type="submit" 
        className="btn-submit"
        variants={itemVariants}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        ZAKAŽI TERMIN
      </motion.button>
    </motion.form>
  );
};

export default BookingForm;
