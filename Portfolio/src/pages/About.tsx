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
      title: 'O Meni & Cene | Lena Marković',
      description: 'Upoznajte Lenu, pogledajte pakete fotografisanja i kontaktirajte me za vašu sesiju.'
    });
  }, []);

  const faqs = [
    { q: "Gde se odvijaju sesije?", a: "Sesije se odvijaju na lokaciji po vašem izboru — park, studio, vaš dom ili bilo gde u Beogradu i okolini." },
    { q: "Koliko dugo čekam na fotografije?", a: "Standardna isporuka je 5–7 radnih dana. Premium paket uključuje ekspresnu isporuku za 48h." },
    { q: "Da li organizujete destination fotografiju?", a: "Da! Radim u celoj Srbiji, regionu (Hrvatska, Crna Gora, Slovenija) i EU uz dodatak putnih troškova." },
    { q: "Šta uključuje retuš?", a: "Svaka fotografija prolazi kroz profesionalnu korekciju boja, uklanjanje nepoželjnih elemenata i light skin retušu." },
    { q: "Kako zakazati sesiju?", a: "Popunite kontakt formu ispod ili me kontaktirajte direktno na Instagram. Odgovaram u roku od 24h." }
  ];

  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="about-hero">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <nav className="breadcrumb">Početna / O Meni</nav>
            <h1 className="hero-title">O Meni</h1>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bio-section section-padding">
        <div className="container bio-container">
          <motion.div 
            className="bio-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LazyImage src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80" alt="Lena Marković Portrait" />
            <div className="image-accent-border"></div>
          </motion.div>
          <motion.div 
            className="bio-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bio-label">FOTOGRAFKINJA</span>
            <h2 className="bio-name">Lena Marković</h2>
            <p className="bio-text main-p">
              Fotografišem već 10 godina, specijalizovana za portretnu i wedding fotografiju. Verujem da je svaka fotografija priča koja čeka da bude ispričana.
            </p>
            <p className="bio-text">
              Radila sam sa više od 300 klijenata širom Srbije i regiona. Moja filozofija je jednostavna — prirodnost, toplina, i trenutak koji se nikad ne ponavlja.
            </p>
            <blockquote className="bio-quote">
              „Svetlost je moj kist, trenutak moje platno."
            </blockquote>
            
            <div className="bio-stats">
              <div className="stat-item">
                <span className="stat-number">300+</span>
                <span className="stat-label">Klijenata</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Godina</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Nagrada</span>
              </div>
            </div>

            <Link to="/portfolio" className="btn btn-outline bio-cta">Pogledaj Galeriju</Link>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section section-padding">
        <div className="container">
          <div className="section-header centered">
            <h2 className="section-title">Paketi i Cene</h2>
            <p className="section-subtitle">Sve sesije uključuju retušovane fotografije u visokoj rezoluciji</p>
          </div>
          <div className="pricing-grid">
            <PricingCard 
              title="Mini Sesija" 
              price="8.000" 
              features={["1 lokacija", "1 sat fotografisanja", "20 retušovanih fotografija", "Online galerija 30 dana", "Isporuka za 7 dana"]}
              delay={0.1}
            />
            <PricingCard 
              title="Portret Sesija" 
              price="15.000" 
              featured={true}
              features={["2 lokacije", "3 sata fotografisanja", "60 retušovanih fotografija", "Online galerija 90 dana", "Isporuka za 5 dana", "Print paket (5 fotografija)"]}
              delay={0.2}
            />
            <PricingCard 
              title="Full Day" 
              price="30.000" 
              features={["Neograničene lokacije", "Ceo dan (8h)", "150+ retušovanih fotografija", "Online galerija 1 godina", "USB sa originalima", "Ekspresna isporuka 48h"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container faq-container">
          <h2 className="section-title centered italic-title">Često postavljana pitanja</h2>
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
                      transition={{ duration: 0.3 }}
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

      {/* Contact Section */}
      <section id="contact" className="contact-section section-padding">
        <div className="container contact-container">
          <div className="contact-info">
            <h2 className="contact-title">Hajde da razgovaramo</h2>
            <p className="contact-subtitle">Imate pitanje ili želite da zakažete sesiju? Javljam se u roku od 24h.</p>
            
            <div className="info-list">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <span>Beograd, Srbija</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <span>lena@lenamarkovic.rs</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <span>+381 60 123 4567</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📸</span>
                <span>@lena.markovic.foto</span>
              </div>
            </div>

            <div className="social-row">
              {/* Reuse social icons from footer logic if needed, or simple text links */}
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">LinkedIn</a>
            </div>

            <div className="availability-note">
              Trenutno primam klijente za April – Juni 2025
            </div>
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
