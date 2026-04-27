import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { setPageMeta } from '../utils/seo';
import PricingCard from '../components/PricingCard';
import ContactForm from '../components/ContactForm';
import LazyImage from '../components/LazyImage';
import './About.css';

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setPageMeta({
      title: 'About & Booking | Lena Markovic',
      description: 'Meet Lena, explore photography packages, and send your booking request.'
    });
  }, []);

  const faqs = [
    { q: 'Where do sessions happen?', a: 'Most shoots are on location in Belgrade or nearby destinations. Studio sessions are available on request.' },
    { q: 'When is the gallery delivered?', a: 'Standard delivery is 5-7 business days. Priority delivery is available for urgent campaigns and events.' },
    { q: 'Do you travel for projects?', a: 'Yes. I regularly shoot across Serbia and Europe for weddings, editorial assignments, and brand work.' },
    { q: 'What is included in editing?', a: 'Every delivered image includes color grading, skin refinement, and natural retouching while preserving authenticity.' }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="hero-label">ABOUT</span>
            <h1 className="hero-title">Hi, I am Lena.</h1>
          </motion.div>
        </div>
      </section>

      <section className="bio-section section-padding">
        <div className="container bio-container">
          <motion.div
            className="bio-image"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <LazyImage src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80" alt="Lena Markovic portrait" />
          </motion.div>
          <motion.div
            className="bio-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="bio-label">PHOTOGRAPHER · CREATIVE DIRECTOR</span>
            <h2 className="bio-name">I create images that feel editorial, but human.</h2>
            <p className="bio-text main-p">
              For more than a decade, I have documented people and stories with an eye for natural movement, refined light, and intentional composition.
            </p>
            <p className="bio-text">
              My work blends documentary sensitivity with fashion-forward polish, so every gallery feels both emotional and elevated.
            </p>
            <div className="bio-stats">
              <div className="stat-item"><span className="stat-number">300+</span><span className="stat-label">Clients</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><span className="stat-number">10+</span><span className="stat-label">Years</span></div>
              <div className="stat-divider"></div>
              <div className="stat-item"><span className="stat-number">15</span><span className="stat-label">Awards</span></div>
            </div>
            <Link to="/portfolio" className="btn btn-outline bio-cta">View Portfolio</Link>
          </motion.div>
        </div>
      </section>

      <section className="pricing-section section-padding">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">Packages</h2>
            <p className="section-subtitle">Flexible options for portraits, events, and campaigns.</p>
          </div>
          <div className="pricing-grid">
            <PricingCard
              title="Portrait"
              price="250"
              features={['1 location', '90-minute session', '25 edited photos', 'Online gallery']}
              delay={0.1}
            />
            <PricingCard
              title="Wedding"
              price="1400"
              featured={true}
              features={['Full day coverage', 'Timeline planning', '350+ edited photos', 'Preview in 48h']}
              delay={0.2}
            />
            <PricingCard
              title="Brand"
              price="600"
              features={['Creative concept support', 'Half-day production', '60 edited photos', 'Commercial usage']}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <section className="faq-section section-padding">
        <div className="container faq-container">
          <h2 className="section-title centered">FAQ</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section-padding">
        <div className="container contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Let us create something strong together.</h2>
            <p className="contact-subtitle">Share your idea and I will reply within 24 hours.</p>
            <div className="info-list">
              <div className="info-item"><span className="info-icon">📍</span><span>Belgrade, Serbia</span></div>
              <div className="info-item"><span className="info-icon">📧</span><span>hello@lenamarkovic.rs</span></div>
              <div className="info-item"><span className="info-icon">📱</span><span>+381 60 123 4567</span></div>
              <div className="info-item"><span className="info-icon">📸</span><span>@lena.markovic.photo</span></div>
            </div>
            <div className="social-row">
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">LinkedIn</a>
            </div>
            <div className="availability-note">Now booking summer and autumn sessions.</div>
          </div>
          <div className="contact-form-side">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
