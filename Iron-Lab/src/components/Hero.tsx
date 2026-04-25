import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-dumbbells-4852-large.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.h4 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-subtitle"
        >
          No Excuses. Only Results.
        </motion.h4>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-title"
        >
          IRON <span className="text-accent">LAB</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-description"
        >
          THE ELITE PERFORMANCE FACILITY BUILT FOR THE GRIND. 
          JOIN THE SQUAD AND PUSH YOUR LIMITS TO THE EDGE.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="hero-btns"
        >
          <button className="btn-primary btn-large">Start Training</button>
          <button className="btn-outline">Learn More</button>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
