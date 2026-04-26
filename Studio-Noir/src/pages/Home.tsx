import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../utils/seo';
import { getUnsplashUrl } from '../utils/imageLoader';
import LazyImage from '../components/LazyImage';
import InstagramFeed from '../components/InstagramFeed';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    setPageMeta({
      title: "Studio Noir | Premium Frizerski Salon Beograd",
      description: "Otkrijte umetnost lepote u Studio Noir. Premium frizerski salon u Beogradu specijalizovan za balayage i moderne tehnike šišanja."
    });
  }, []);

  const services = [
    { name: 'Šišanje & Styling', desc: 'Precizni rezovi prilagođeni vašem obliku lica.', price: 'Od 2.500 RSD' },
    { name: 'Boja & Pramenovi', desc: 'Vrhunski koloristi i najsavremenije tehnike.', price: 'Od 6.000 RSD' },
    { name: 'Tretmani & Nega', desc: 'Dubinska hidratacija i regeneracija vaše kose.', price: 'Od 2.000 RSD' },
  ];

  const testimonials = [
    { name: 'Jelena M.', text: 'Najbolji balayage u gradu! Atmosfera je neverovatna, a tim profesionalan.' },
    { name: 'Milica S.', text: 'Obožavam ritual pranja kose ovde. Pravi trenutak opuštanja u toku dana.' },
    { name: 'Ana P.', text: 'Studio Noir je jedino mesto gde verujem da će mi kosa izgledati savršeno.' },
  ];

  return (
    <div className="home-page">
      {/* SECTION 1: HERO */}
      <section className="hero">
        <div className="hero-bg">
          <LazyImage 
            src={getUnsplashUrl('https://images.unsplash.com/photo-1560066984-138dadb4c035', 1600)} 
            alt="Studio Noir Hero" 
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.span 
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            PREMIUM HAIR STUDIO
          </motion.span>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="italic">Where Beauty</motion.span>
            <br />
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>Meets Art.</motion.span>
          </motion.h1>

          <motion.div 
            className="hero-divider"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          ></motion.div>

          <motion.p 
            className="hero-subtext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Beograd · Od 2018
          </motion.p>

          <motion.div 
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <Link to="/services" className="btn btn-gold">BOOK APPOINTMENT</Link>
            <Link to="/gallery" className="btn btn-outline">VIEW OUR WORK</Link>
          </motion.div>
        </div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="chevron"></div>
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <LazyImage 
                src={getUnsplashUrl('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e', 800)} 
                alt="Frizerski salon Beograd" 
              />
            </motion.div>

            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">O NAMA</span>
              <h2>Više od frizure — to je ritual.</h2>
              <p>Studio Noir je premium frizerski salon u srcu Beograda, osnovan sa jednom misijom — da svaka klijentka izađe osećajući se kao najlepša verzija sebe.</p>
              <p>Naš tim iskusnih stilista kombinuje savremene tehnike i vrhunske proizvode kako bi stvorio izgled koji traje.</p>
              <blockquote className="gold-quote">
                „Lepota nije privilegija — to je umetnost."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES PREVIEW */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">NAŠE USLUGE</span>
            <h2>Ekspertiza u svakom pokretu.</h2>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div 
                key={i}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="service-icon">✦</div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <span className="price">{s.price}</span>
                <Link to="/services" className="details-link">Detalji →</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INSTAGRAM */}
      <InstagramFeed />

      {/* SECTION 5: TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                className="testimonial-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="quote-mark">“</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="stars">★★★★★</div>
                <p className="client-name">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
