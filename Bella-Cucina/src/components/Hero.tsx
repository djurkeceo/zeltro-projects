import { motion } from 'framer-motion';
import bellaCucinaLogo from '../assets/bella-cucina-logo-transparent-1200.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img
          src={bellaCucinaLogo}
          alt="Bella Cucina logo"
          className="hero-logo-art"
          width={1200}
          height={422}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-btns">
          <motion.a
            href="#menu"
            className="btn btn-primary"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          >
            Visit Our Menu
          </motion.a>
          <motion.a
            href="#reservation"
            className="btn btn-outline"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          >
            Book a Table
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
