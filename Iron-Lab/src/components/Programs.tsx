import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Zap, Heart, Timer, Activity, Users } from 'lucide-react';
import './Programs.css';

const programs = [
  {
    icon: <Dumbbell size={40} />,
    title: 'Strength Training',
    desc: 'Build raw power and muscle mass with our world-class equipment and elite coaching.'
  },
  {
    icon: <Zap size={40} />,
    title: 'HIIT Intensive',
    desc: 'Maximum effort, maximum results. Burn fat and boost metabolism with high-intensity intervals.'
  },
  {
    icon: <Heart size={40} />,
    title: 'Cardio Blast',
    desc: 'Improve heart health and endurance with varied, high-energy cardio sessions.'
  },
  {
    icon: <Timer size={40} />,
    title: 'Functional Fitness',
    desc: 'Training for real-life movements. Enhance mobility, stability, and everyday strength.'
  },
  {
    icon: <Activity size={40} />,
    title: 'Recovery & Yoga',
    desc: 'Balance your intensity with guided recovery sessions and yoga for better flexibility.'
  },
  {
    icon: <Users size={40} />,
    title: 'Group Training',
    desc: 'Join our community sessions for high-energy workouts that push everyone to their peak.'
  }
];

const Programs: React.FC = () => {
  return (
    <div className="section-padding container">
      <div className="section-header">
        <h2 className="section-title">CHOOSE YOUR <span className="highlight">PROGRAM</span></h2>
        <div className="section-line"></div>
      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <motion.div 
            key={index}
            className="program-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="program-icon">{program.icon}</div>
            <h3 className="program-title">{program.title}</h3>
            <p className="program-desc">{program.desc}</p>
            <a href="/gallery" className="program-link">Learn More &rarr;</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
