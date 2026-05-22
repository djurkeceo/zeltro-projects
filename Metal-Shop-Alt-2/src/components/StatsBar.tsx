import { motion, useReducedMotion } from 'framer-motion';
import { stats } from '../data/company';
import { staggerContainer, staggerItem } from '../utils/motion';
import './StatsBar.css';

export default function StatsBar() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="stats-bar section--dark metal-texture" aria-label="Ključne brojke">
      <div className="container">
        <motion.div
          className="stats-bar__grid"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={prefersReducedMotion ? undefined : staggerContainer}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="stats-bar__item"
              variants={prefersReducedMotion ? undefined : staggerItem}
            >
              <span className="stats-bar__value">{stat.value}</span>
              <span className="stats-bar__label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
