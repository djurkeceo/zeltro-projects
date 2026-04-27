import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { setPageMeta } from '../utils/seo';
import LazyImage from '../components/LazyImage';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Lena Marković | Fotografkinja Beograd',
      description: 'Hvatam trenutke koji traju. Profesionalna portretna i wedding fotografija u Beogradu.'
    });
  }, []);

  const heroImage = "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=1400&q=85";
  
  const selectedWorks = [
    { id: 1, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80", category: "Portret", alt: "Portret 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80", category: "Wedding", alt: "Wedding 1" },
    { id: 3, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", category: "Editorijal", alt: "Editorijal 1" },
    { id: 4, src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80", category: "Porodica", alt: "Porodica 1" },
    { id: 5, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", category: "Portret", alt: "Portret 2" },
    { id: 6, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", category: "Wedding", alt: "Wedding 2" },
  ];

  const services = [
    { title: "Portretna Fotografija", desc: "Individualni portreti, poslovni profili", price: "Od 17.500 RSD", icon: "📷" },
    { title: "Wedding Fotografija", desc: "Vašeg posebnog dana", price: "Od 65.000 RSD", icon: "💍" },
    { title: "Porodična Fotografija", desc: "Trenuci koji se ne ponavljaju", price: "Od 17.500 RSD", icon: "👨‍👩‍👧" },
    { title: "Editorijal & Brand", desc: "Za modne i komercijalne brendove", price: "Od 34.000 RSD", icon: "🎨" }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <LazyImage src={heroImage} alt="Lena Marković Photography" className="hero-img" />
          <div className="hero-underline"></div>
          <div className="hero-meta">
            Canon EOS R5 · 85mm · f/1.4
          </div>
        </div>
        <div className="hero-right">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.span 
              className="hero-label"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >
              BEOGRAD · SRBIJA
            </motion.span>
            <motion.h1 
              className="hero-title"
              variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >
              <span className="italic-light">Hvatam</span><br />
              <span className="bold-display">trenutke</span><br />
              <span className="italic-accent">koji traju.</span>
            </motion.h1>
            <motion.div 
              className="hero-divider"
              variants={{ hidden: { width: 0 }, visible: { width: 48, transition: { duration: 0.8 } } }}
            ></motion.div>
            <motion.p 
              className="hero-subtext"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >
              Portretna i wedding fotografija.
            </motion.p>
            <motion.div 
              className="hero-actions"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            >
              <Link to="/portfolio" className="btn btn-primary">Pogledaj Galeriju</Link>
              <Link to="/about" className="text-link">Saznaj Više <span>→</span></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section className="selected-works section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Odabrani Radovi <span className="accent-dash">—</span></h2>
          </div>
          <div className="works-grid">
            <div className="works-col">
              <div className="work-item tall">
                <LazyImage src={selectedWorks[0].src} alt={selectedWorks[0].alt} aspectRatio="3/4" />
                <div className="work-overlay">{selectedWorks[0].category}</div>
              </div>
              <div className="work-item square">
                <LazyImage src={selectedWorks[4].src} alt={selectedWorks[4].alt} aspectRatio="1/1" />
                <div className="work-overlay">{selectedWorks[4].category}</div>
              </div>
            </div>
            <div className="works-col">
              <div className="work-item square">
                <LazyImage src={selectedWorks[1].src} alt={selectedWorks[1].alt} aspectRatio="1/1" />
                <div className="work-overlay">{selectedWorks[1].category}</div>
              </div>
              <div className="work-item tall">
                <LazyImage src={selectedWorks[5].src} alt={selectedWorks[5].alt} aspectRatio="3/4" />
                <div className="work-overlay">{selectedWorks[5].category}</div>
              </div>
            </div>
            <div className="works-col">
              <div className="work-item tall">
                <LazyImage src={selectedWorks[3].src} alt={selectedWorks[3].alt} aspectRatio="3/4" />
                <div className="work-overlay">{selectedWorks[3].category}</div>
              </div>
              <div className="work-item square">
                <LazyImage src={selectedWorks[2].src} alt={selectedWorks[2].alt} aspectRatio="1/1" />
                <div className="work-overlay">{selectedWorks[2].category}</div>
              </div>
            </div>
          </div>
          <div className="view-all-container">
            <Link to="/portfolio" className="view-all-link">Pogledaj sve <span>→</span></Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="about-teaser">
        <div className="container teaser-container">
          <motion.div 
            className="teaser-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80" alt="Lena Marković" />
          </motion.div>
          <motion.div 
            className="teaser-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="teaser-quote">
              „Svaki portret je priča."
            </blockquote>
            <cite className="teaser-author">— Lena Marković</cite>
            <p className="teaser-text">
              Verujem u moć prirodne svetlosti i iskrenih emocija. Moj cilj je da kroz objektiv uhvatim vašu suštinu, bilo da je u pitanju intimni portret ili vaš najvažniji dan.
            </p>
            <Link to="/about" className="btn btn-outline-white">O Meni</Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section-padding">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div 
                key={i} 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <span className="service-price">{service.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section-padding">
        <div className="container">
          <h2 className="section-title centered italic-title">Klijenti o meni</h2>
          <div className="testimonials-grid">
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i} 
                className="testimonial-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="stars">★★★★★</div>
                <p className="testimonial-quote">
                  „Lena je neverovatan profesionalac. Osećali smo se potpuno opušteno tokom čitavog fotografisanja, a rezultati su prevazišli sva naša očekivanja."
                </p>
                <div className="testimonial-client">
                  <div className="client-avatar">M</div>
                  <div className="client-info">
                    <span className="client-name">Milica J.</span>
                    <span className="client-role">Wedding Session</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
