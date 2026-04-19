import { motion } from 'framer-motion';
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
        <h1>Benvenuti da Bella Cucina</h1>
        <p>Experience the heart of Italy in every bite.</p>
        <div className="hero-btns">
          <a href="#menu" className="btn btn-primary">View Menu</a>
          <a href="#reservation" className="btn btn-outline">Reserve a Table</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
