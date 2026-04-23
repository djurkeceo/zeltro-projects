import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '15+', label: 'Expert Trainers' },
  { value: '24/7', label: 'Access Time' },
  { value: '100+', label: 'Daily Classes' }
];

const Stats: React.FC = () => {
  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="stat-item"
        >
          <h2 className="stat-value">{stat.value}</h2>
          <p className="stat-label">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
