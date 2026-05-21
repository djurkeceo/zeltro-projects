import { motion, useReducedMotion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
import MotionSection from '../components/MotionSection';
import { company, departments } from '../data/company';
import { fadeUp, staggerContainer, staggerItem } from '../utils/motion';
import './Kontakt.css';

export default function Kontakt() {
  useDocumentTitle(
    'Kontakt',
    'Kontaktirajte METAL SHOP d.o.o. — Majšanski put 202, Subotica. Maloprodaja i proizvodnja.'
  );
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        title="Kontakt"
        subtitle="Javite nam se — naš tim je spreman da odgovori na sva vaša pitanja."
      />

      <MotionSection className="section section--white">
        <div className="container">
          <div className="contact-info-grid">
            <motion.div
              className="contact-info"
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2>Kontakt informacije</h2>
              <address>
                <p><strong>Adresa:</strong> {company.address}</p>
                <p><strong>Maloprodaja:</strong>{' '}
                  <a href={`tel:${company.phones.retail.replace(/\s/g, '')}`}>{company.phones.retail}</a>
                  {' / '}
                  <a href="tel:0605504360">{company.phones.retailMobile}</a>
                </p>
                <p><strong>Proizvodnja:</strong>{' '}
                  <a href="tel:0605507950">{company.phones.production}</a>
                </p>
                <p><strong>Email:</strong>{' '}
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </p>
                <p><strong>Radno vreme:</strong> {company.hours}</p>
              </address>
            </motion.div>

            <div className="contact-departments">
              <h2>Odeljenja</h2>
              <motion.div
                className="dept-cards"
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView="visible"
                viewport={{ once: true }}
                variants={prefersReducedMotion ? undefined : staggerContainer}
              >
                {departments.map((dept) => (
                  <motion.div
                    key={dept.id}
                    className="dept-card"
                    variants={prefersReducedMotion ? undefined : staggerItem}
                    whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                  >
                    <h3>{dept.title}</h3>
                    <p><strong>Kontakt:</strong> {dept.contact}</p>
                    <p>
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${dept.email}`}>{dept.email}</a>
                    </p>
                    <p>
                      <strong>Telefon:</strong>{' '}
                      <a href={`tel:${dept.phone.replace(/\s/g, '')}`}>{dept.phone}</a>
                    </p>
                    <p><strong>Radno vreme:</strong> {dept.hours}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </MotionSection>

      <section className="section section--light">
        <div className="container contact-form-section">
          <motion.div
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="divider" />
            <h2 className="section-title">Pošaljite poruku</h2>
            <p className="section-subtitle">
              Popunite formular i javićemo vam se u najkraćem roku.
            </p>
            <ContactForm />
          </motion.div>
          <motion.div
            className="contact-map"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h2 className="section-title">Lokacija</h2>
            <iframe
              title="METAL SHOP lokacija na mapi — Majšanski put 202, Subotica"
              src="https://maps.google.com/maps?q=Majšanski+put+202,+Subotica,+Serbia&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
