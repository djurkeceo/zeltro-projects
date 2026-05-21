import { motion, useReducedMotion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import { services } from '../data/products';
import { staggerContainer, staggerItem } from '../utils/motion';
import './Usluge.css';

export default function Usluge() {
  useDocumentTitle(
    'Usluge',
    'Sečenje po meri, proizvodnja trapeznih limova, olučnih sistema i obrada metala — METAL SHOP.'
  );
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        title="Usluge"
        subtitle="Proizvodnja, obrada i snabdevanje po meri — prilagođavamo se zahtevima vašeg projekta."
      />

      <section className="section section--light">
        <div className="container">
          <motion.div
            className="services-grid"
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={prefersReducedMotion ? undefined : staggerContainer}
          >
            {services.map((service) => (
              <motion.article
                key={service.title}
                className="service-card"
                variants={prefersReducedMotion ? undefined : staggerItem}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="service-card__icon" aria-hidden="true">⚙</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
