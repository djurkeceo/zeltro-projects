import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/motion';
import './ProductList.css';

interface ProductListProps {
  items: readonly string[];
}

export default function ProductList({ items }: ProductListProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <ul className="product-list">
        {items.map((item) => (
          <li key={item} className="product-list__item">
            <span className="product-list__check" aria-hidden="true">✓</span>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      className="product-list"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      {items.map((item) => (
        <motion.li
          key={item}
          className="product-list__item"
          variants={staggerItem}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <span className="product-list__check" aria-hidden="true">✓</span>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
