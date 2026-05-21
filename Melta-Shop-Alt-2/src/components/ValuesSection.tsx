import { motion, useReducedMotion } from 'framer-motion';
import { values } from '../data/company';
import { staggerContainer, staggerItem } from '../utils/motion';
import './ValuesSection.css';

const icons: Record<string, string> = {
  kvalitet: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  poverenje: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
  pouzdanost: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  odgovornost: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
};

export default function ValuesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="values-grid"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={prefersReducedMotion ? undefined : staggerContainer}
    >
      {values.map((v) => (
        <motion.article
          key={v.key}
          className="value-card"
          variants={prefersReducedMotion ? undefined : staggerItem}
          whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="value-card__icon">
            <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true">
              <path fill="currentColor" d={icons[v.key]} />
            </svg>
          </div>
          <h3>{v.label}</h3>
          <p>{v.description}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
