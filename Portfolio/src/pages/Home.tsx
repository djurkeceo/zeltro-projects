import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { setPageMeta } from '../utils/seo';
import { getOptimizedUrl } from '../utils/imageLoader';
import LazyImage from '../components/LazyImage';
import './Home.css';

const Home: React.FC = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Lena Markovic | Photographer Portfolio',
      description: 'Modern photographer portfolio with cinematic portrait, wedding, and brand storytelling.'
    });
  }, []);

  const heroImage = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=85';
  const teaserImage = getOptimizedUrl('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2', 900, 75);
  const selectedWorks = [
    { id: 1, src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=80', category: 'Portrait', alt: 'Portrait session' },
    { id: 2, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=80', category: 'Wedding', alt: 'Wedding day' },
    { id: 3, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80', category: 'Editorial', alt: 'Editorial campaign' },
    { id: 4, src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=900&q=80', category: 'Brand', alt: 'Brand portrait' }
  ];

  const services = [
    { title: 'Portrait Sessions', desc: 'Personal branding, editorial, and lifestyle portraits with direction.', price: 'from €250' },
    { title: 'Wedding Stories', desc: 'Emotion-first full-day coverage with cinematic color grading.', price: 'from €1,400' },
    { title: 'Brand Campaigns', desc: 'Visuals for launch campaigns, social content, and websites.', price: 'from €600' }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-left">
          <LazyImage src={heroImage} alt="Lena Markovic photographer" className="hero-img" />
        </div>
        <div className="hero-right">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span className="hero-label" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              BELGRADE · EUROPE
            </motion.span>
            <motion.h1 className="hero-title" variants={{ hidden: { y: 25, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              Modern photography
              <br />
              <span>for timeless stories.</span>
            </motion.h1>
            <motion.p className="hero-subtext" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              I craft elegant visuals for people and brands that want imagery with mood, movement, and depth.
            </motion.p>
            <motion.div className="hero-actions" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <Link to="/portfolio" className="btn btn-primary">View Portfolio</Link>
              <Link to="/about#contact" className="btn btn-outline">Book a Session</Link>
            </motion.div>
            <motion.div className="hero-stats" variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <div><strong>300+</strong><span>Sessions</span></div>
              <div><strong>10</strong><span>Years</span></div>
              <div><strong>15</strong><span>Awards</span></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="selected-works section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Work</h2>
            <Link to="/portfolio" className="text-link">See all projects</Link>
          </div>
          <div className="works-grid">
            {selectedWorks.map((work) => (
              <article key={work.id} className="work-item">
                <LazyImage src={work.src} alt={work.alt} aspectRatio="4/5" />
                <div className="work-overlay">
                  <span>{work.category}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-teaser">
        <div className="container teaser-container">
          <div className="teaser-content">
            <span className="hero-label">APPROACH</span>
            <h2 className="teaser-title">Natural direction. Cinematic finish.</h2>
            <p className="teaser-text">
              Each project starts with intention: what should your audience feel when they see your photos? From planning to delivery, every frame is designed to support that story.
            </p>
            <Link to="/about" className="btn btn-outline">More about me</Link>
          </div>
          <div className="teaser-image">
            <img src={teaserImage} alt="Lena portrait" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      <section className="services-overview section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Services</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <span className="service-price">{service.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
