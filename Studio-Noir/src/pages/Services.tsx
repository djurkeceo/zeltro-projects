import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { setPageMeta } from '../utils/seo';
import { getUnsplashUrl } from '../utils/imageLoader';
import LazyImage from '../components/LazyImage';
import BookingForm from '../components/BookingForm';
import './Services.css';

const Services: React.FC = () => {
  useEffect(() => {
    setPageMeta({
      title: "Usluge & Rezervacija | Studio Noir",
      description: "Pogledajte naš cenovnik i zakažite svoj termin. Nudimo šišanje, bojenje kose, balayage i luksuzne tretmane nege."
    });
  }, []);

  const priceListLeft = [
    { name: 'Žensko šišanje', price: '3.500 RSD' },
    { name: 'Muško šišanje', price: '2.000 RSD' },
    { name: 'Dečje šišanje', price: '1.500 RSD' },
    { name: 'Blow-dry styling', price: '2.500 RSD' },
    { name: 'Updos & Evening', price: '5.000 RSD' },
  ];

  const priceListRight = [
    { name: 'Jednobojno bojenje', price: 'od 6.000 RSD' },
    { name: 'Pramenovi (folija)', price: 'od 8.000 RSD' },
    { name: 'Balayage', price: 'od 12.000 RSD' },
    { name: 'Keratin tretman', price: 'od 9.000 RSD' },
    { name: 'Maska & Nega', price: 'od 2.000 RSD' },
  ];

  return (
    <div className="services-page">
      {/* SECTION 1: HERO */}
      <section className="page-hero">
        <div className="hero-bg">
          <LazyImage 
            src={getUnsplashUrl('https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1', 1600)} 
            alt="Services Hero" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <motion.span 
            className="eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            USLUGE & REZERVACIJA
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Naše Usluge
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: PRICE LIST */}
      <section className="price-list-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">CENOVNIK</span>
            <div className="title-underline"></div>
          </div>
          
          <div className="price-grid">
            <motion.div 
              className="price-col"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>ŠIŠANJE & STYLING</h3>
              <div className="price-items">
                {priceListLeft.map((item, i) => (
                  <div key={i} className="price-item">
                    <span className="name">{item.name}</span>
                    <span className="dots"></span>
                    <span className="price">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="price-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>BOJA & TRETMANI</h3>
              <div className="price-items">
                {priceListRight.map((item, i) => (
                  <div key={i} className="price-item">
                    <span className="name">{item.name}</span>
                    <span className="dots"></span>
                    <span className="price">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LOCATION */}
      <section className="location-section">
        <div className="container">
          <div className="location-grid">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.2123!2d20.4572!3d44.8175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab453f090d1%3A0x6a0c0b3684803d52!2sKnez%20Mihailova%2042%2C%20Beograd!5e0!3m2!1sen!2srs!4v1713987713000!5m2!1sen!2srs" 
                width="100%" height="450" style={{border:0}} allowFullScreen loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
            <div className="contact-info">
              <h3>GDE SE NALAZIMO</h3>
              <div className="info-item">
                <span className="icon">📍</span>
                <p>Knez Mihailova 42, Beograd</p>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <p>+381 11 234 5678</p>
              </div>
              <div className="info-item">
                <span className="icon">📧</span>
                <p>info@studionoir.rs</p>
              </div>
              <div className="info-item">
                <span className="icon">🕐</span>
                <div>
                  <p>Pon–Pet: 09:00–20:00</p>
                  <p>Sub: 09:00–17:00</p>
                  <p>Ned: Zatvoreno</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BOOKING FORM */}
      <section className="booking-section" id="booking">
        <div className="container">
          <div className="section-header">
            <h2>ZAKAŽITE TERMIN</h2>
            <p>Odaberite uslugu i vreme koje vam odgovara</p>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default Services;
