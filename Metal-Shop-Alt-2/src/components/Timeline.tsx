import { motion, useReducedMotion } from 'framer-motion';
import { timeline } from '../data/company';
import { staggerContainer, staggerItem } from '../utils/motion';
import './Timeline.css';

export default function Timeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="timeline"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={prefersReducedMotion ? undefined : staggerContainer}
    >
      {timeline.map((item, index) => (
        <motion.div
          key={item.year}
          className="timeline__item"
          variants={prefersReducedMotion ? undefined : staggerItem}
        >
          <div className="timeline__marker">
            <span className="timeline__year">{item.year}</span>
            {index < timeline.length - 1 && <span className="timeline__line" />}
          </div>
          <div className="timeline__content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
