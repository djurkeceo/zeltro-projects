import type { MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, defaultViewport } from '../utils/motion';
import './CtaSection.css';

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CtaSection({
  title = 'Otvoreni smo za saradnju — kontaktirajte nas danas',
  subtitle = 'Naš tim je spreman da odgovori na vaša pitanja i pripremi ponudu po meri.',
}: CtaSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();
  const isGradjevinskaPage =
    location.pathname.replace(/\/$/, '') === '/proizvodi/gradjevinska-limarija';

  const handleAsortimanClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isGradjevinskaPage) {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <motion.section
      className="cta-section section--dark metal-texture"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={{ duration: 0.5 }}
    >
      <div className="container cta-section__inner">
        <motion.h2
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {title}
        </motion.h2>
        <p>{subtitle}</p>
        <motion.div
          className="cta-section__actions"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link to="/kontakt" className="btn btn--primary">Kontaktirajte nas</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/proizvodi/gradjevinska-limarija"
              className="btn btn--secondary"
              onClick={handleAsortimanClick}
            >
              Pogledajte asortiman
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
