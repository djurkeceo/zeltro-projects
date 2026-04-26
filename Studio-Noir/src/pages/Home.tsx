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
      title: "Studio Noir | Premium Kozmetički Salon Beograd",
      description: "Otkrijte umetnost lepote u Studio Noir. Premium Kozmetički Salon u Beogradu specijalizovan za balayage i moderne tehnike šišanja."
    });
  }, []);

  const services = [
    { name: 'Laserska operacija', desc: '', price: 'Od 1.000 RSD' },
    { name: 'Tretmani tela i masaže', desc: '', price: 'Od 1.700 RSD' },
    { name: 'Manikir i predikir', desc: '', price: 'Od 2.000 RSD' },
    { name: 'Depilacija', desc: '', price: 'Od 400 RSD' },
  ];

  const testimonials = [
    {
      name: 'Ana Pavlović',
      text: 'Sve preporuke za salon, veoma prijatno iskustvo, higijena i usluga su na visokom nivou.',
      date: 'Pre 4 meseca'
    },
    {
      name: 'Jovana Mladenovic',
      text: 'Odlična usluga, veoma profesionalan rad i prijatna atmosfera!',
      date: 'Pre godinu dana'
    },
    {
      name: 'Todor Kljajic',
      text: 'Osoblje je ljubazno i profesionalno, salon je čist i uredan, a odnos cene i kvaliteta je odličan. Sve preporuke.',
      date: 'Pre 3 godine'
    },
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
            PREMIUM COSMETICS STUDIO
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
              <h2>Više od tretmana — to je ritual.</h2>
              <p>Studio Noir je premium kozmetički salon u srcu Beograda, osnovan sa jednom misijom — da svaka klijentkinja izađe osećajući se negovano, osveženo i kao najlepša verzija sebe.</p>
              <p>Naš tim iskusnih kozmetičara kombinuje savremene tretmane i vrhunske proizvode kako bi pružio rezultate koji traju.</p>
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
                {s.desc && <p>{s.desc}</p>}
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
                <p className="client-time">{t.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
