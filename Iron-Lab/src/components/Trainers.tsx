import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import './Trainers.css';

const trainers = [
  {
    name: 'Marcus Thorne',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Sarah Drasky',
    role: 'HIIT Specialist',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Jaxson Pierce',
    role: 'Powerlifting Expert',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  }
];

const Trainers: React.FC = () => {
  return (
    <div className="section-padding container">
      <div className="section-header">
        <h2 className="section-title">ELITE <span className="highlight">COACHES</span></h2>
        <div className="section-line"></div>
      </div>

      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <motion.div 
            key={index}
            className="trainer-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
              <div className="trainer-socials">
                <Instagram size={24} />
                <Twitter size={24} />
                <Facebook size={24} />
              </div>
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
