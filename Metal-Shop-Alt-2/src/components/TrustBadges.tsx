import { motion, useReducedMotion } from 'framer-motion';
import { values } from '../data/company';
import { staggerContainer, staggerItem } from '../utils/motion';
import './TrustBadges.css';

const icons: Record<string, string> = {
  kvalitet: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  poverenje: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
  pouzdanost: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
  odgovornost: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l4.59-4.59L18 11l-6 6z',
};

export default function TrustBadges() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="trust-badges">
        {values.map((v) => (
          <div key={v.key} className="trust-badge">
            <BadgeIcon iconKey={v.key} />
            <span>{v.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      className="trust-badges"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      transition={{ delayChildren: 0.4 }}
    >
      {values.map((v) => (
        <motion.div key={v.key} className="trust-badge" variants={staggerItem}>
          <BadgeIcon iconKey={v.key} />
          <span>{v.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

function BadgeIcon({ iconKey }: { iconKey: string }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
      <path fill="currentColor" d={icons[iconKey]} />
    </svg>
  );
}
