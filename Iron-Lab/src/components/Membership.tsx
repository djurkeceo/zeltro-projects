import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Membership.css';

const plans = [
  {
    name: 'Basic',
    price: '29',
    features: ['Access to Gym Floor', 'Locker Room Access', '1 Free Trainer Session', 'Water & Towel Service'],
    highlight: false
  },
  {
    name: 'Pro',
    price: '59',
    features: ['All Basic Features', 'Unlimited Group Classes', 'Nutrition Plan', '24/7 Access', 'Sauna & Pool'],
    highlight: true
  },
  {
    name: 'Elite',
    price: '99',
    features: ['All Pro Features', 'Personal Trainer (4/mo)', 'Massage Therapy', 'Guest Passes', 'Exclusive Events'],
    highlight: false
  }
];

const Membership: React.FC = () => {
  return (
    <div className="section-padding container">
      <div className="section-header text-center">
        <h2 className="section-title">READY TO JOIN THE <span className="highlight">LAB?</span></h2>
        <p className="section-subtitle">Choose the plan that fits your goals.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            className={`pricing-card ${plan.highlight ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {plan.highlight && <div className="badge">Most Popular</div>}
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-price">
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/mo</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}><Check size={18} color="var(--primary-red)" /> {feature}</li>
              ))}
            </ul>
            <button className={`btn-join ${plan.highlight ? 'btn-primary' : 'btn-outline-small'}`}>
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
