import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { setPageMeta } from '../utils/seo';
import { getUnsplashUrl } from '../utils/imageLoader';
import LazyImage from '../components/LazyImage';
import BookingForm from '../components/BookingForm';
import './Services.css';

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
}

interface ServiceSection {
  title: string;
  items: ServiceItem[];
}

const getServiceCountLabel = (count: number): string => {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} usluge`;
  }

  return `${count} usluga`;
};

const parseServicesText = (text: string): ServiceSection[] => {
  const sections: ServiceSection[] = [];
  let currentSection: ServiceSection | null = null;
  const itemRegex = /^(.*?)\s+(\d+\s*min)\s*([0-9.]+\s*RSD)$/i;

  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    const itemMatch = line.match(itemRegex);
    if (!itemMatch) {
      currentSection = { title: line, items: [] };
      sections.push(currentSection);
      continue;
    }

    if (!currentSection) {
      currentSection = { title: 'Usluge', items: [] };
      sections.push(currentSection);
    }

    currentSection.items.push({
      name: itemMatch[1].replace(/\s+/g, ' ').trim(),
      duration: itemMatch[2].replace(/\s+/g, ' ').trim(),
      price: itemMatch[3].replace(/\s+/g, ' ').trim(),
    });
  }

  return sections.filter((section) => section.items.length > 0);
};

const Services: React.FC = () => {
  const [serviceSections, setServiceSections] = useState<ServiceSection[]>([]);
  const [servicesError, setServicesError] = useState<string | null>(null);

  useEffect(() => {
    setPageMeta({
      title: "Usluge & Rezervacija | Studio Noir",
      description: "Pogledajte kompletan cenovnik usluga i rezervišite svoj termin u Studio Noir salonu."
    });
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadServices = async () => {
      try {
        const response = await fetch('/usluge.txt');
        if (!response.ok) {
          throw new Error(`Neuspešno učitavanje usluga: ${response.status}`);
        }

        const servicesText = await response.text();
        const parsedServices = parseServicesText(servicesText);

        if (isMounted) {
          setServiceSections(parsedServices);
          setServicesError(null);
        }
      } catch (error) {
        if (isMounted) {
          setServicesError(error instanceof Error ? error.message : 'Došlo je do greške pri učitavanju usluga.');
        }
      }
    };

    loadServices();

    return () => {
      isMounted = false;
    };
  }, []);

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
            <p className="section-subtitle">Kompletna lista usluga sa trajanjem i cenama.</p>
            <div className="title-underline"></div>
          </div>

          {servicesError && <p className="services-load-error">{servicesError}</p>}

          {!servicesError && serviceSections.length === 0 && (
            <p className="services-load-state">Učitavanje cenovnika...</p>
          )}

          <div className="price-grid">
            {serviceSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                className="price-col"
                initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3>
                  <span>{section.title}</span>
                  <span className="service-count">{getServiceCountLabel(section.items.length)}</span>
                </h3>
                <div className="price-items">
                  {section.items.map((item) => (
                    <div key={`${section.title}-${item.name}-${item.duration}-${item.price}`} className="price-item">
                      <div className="service-meta">
                        <span className="name">{item.name}</span>
                        <span className="duration">{item.duration}</span>
                      </div>
                      <span className="price">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: LOCATION */}
      <section className="location-section">
        <div className="container">
          <div className="location-grid">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps?q=Doktora%20Dragoslava%20Popovi%C4%87a%201%2C%20Beograd&output=embed"
                width="100%" height="450" style={{border:0}} allowFullScreen loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
            <div className="contact-info">
              <h3>GDE SE NALAZIMO</h3>
              <div className="info-item">
                <span className="icon">📍</span>
                <p>Doktora Dragoslava Popovića 1, Beograd</p>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <p>064 0118877</p>
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
