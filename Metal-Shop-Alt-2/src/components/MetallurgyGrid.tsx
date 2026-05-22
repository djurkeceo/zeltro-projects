import { motion, useReducedMotion } from 'framer-motion';
import { metallurgy } from '../data/products';
import { staggerContainer, staggerItem } from '../utils/motion';
import './MetallurgyGrid.css';

const columns = [
  { key: 'limovi' as const, title: 'Limovi' },
  { key: 'profili' as const, title: 'Profili' },
  { key: 'pletiva' as const, title: 'Pletiva' },
  { key: 'cevi' as const, title: 'Konstrukcione cevi' },
];

export default function MetallurgyGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="metallurgy-grid"
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={prefersReducedMotion ? undefined : staggerContainer}
    >
      {columns.map((col) => (
        <motion.div
          key={col.key}
          className="metallurgy-column"
          variants={prefersReducedMotion ? undefined : staggerItem}
          whileHover={prefersReducedMotion ? undefined : { y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <h3>{col.title}</h3>
          <ul>
            {metallurgy[col.key].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
