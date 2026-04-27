import React from 'react';
import { motion } from 'framer-motion';
import './PricingCard.css';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  featured?: boolean;
  delay?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, featured = false, delay = 0 }) => {
  return (
    <motion.div 
      className={`pricing-card ${featured ? 'featured' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: 'spring', 
        stiffness: 80, 
        damping: 15,
        delay 
      }}
    >
      {featured && <span className="featured-badge">MOST BOOKED</span>}
      <h3 className="card-title">{title}</h3>
      <div className="card-price">
        <span className="currency">€</span>
        <span className="amount">{price}</span>
      </div>
      <ul className="card-features">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button className={`btn ${featured ? 'btn-primary' : 'btn-outline'} card-btn`}>
        Inquire Now
      </button>
    </motion.div>
  );
};

export default React.memo(PricingCard);
