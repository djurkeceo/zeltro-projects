import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { featuredCategories } from '../data/company';
import { staggerContainer, staggerItem } from '../utils/motion';
import './CategoryGrid.css';

type Category = (typeof featuredCategories)[number];

export default function CategoryGrid() {
  const prefersReducedMotion = useReducedMotion();

  const grid = (
    <div className="category-grid">
      {featuredCategories.map((cat) => (
        <CategoryCard key={cat.path} cat={cat} />
      ))}
    </div>
  );

  if (prefersReducedMotion) return grid;

  return (
    <motion.div
      className="category-grid"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={staggerContainer}
    >
      {featuredCategories.map((cat) => (
        <motion.div key={cat.path} variants={staggerItem} className="category-grid__cell">
          <CategoryCard cat={cat} animated />
        </motion.div>
      ))}
    </motion.div>
  );
}

function CategoryCard({ cat, animated = false }: { cat: Category; animated?: boolean }) {
  const isServices = cat.icon === 'services';
  const Wrapper = animated ? motion.div : 'div';
  const wrapperProps = animated
    ? { whileHover: { y: -6 }, transition: { duration: 0.25 } }
    : {};

  return (
    <Wrapper {...wrapperProps}>
      <Link
        to={cat.path}
        className={`category-card category-card--${cat.icon}${isServices ? ' category-card--featured' : ''}`}
      >
        <div className="category-card__header">
          <span className="category-card__tag">{cat.tag}</span>
          <div className="category-card__icon-wrap">
            <CategoryIcon type={cat.icon} />
          </div>
        </div>

        <div className="category-card__body">
          <h3>{cat.title}</h3>
          <p>{cat.description}</p>

          {'highlights' in cat && cat.highlights && (
            <ul className="category-card__highlights" aria-label="Ključne usluge">
              {cat.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="category-card__footer">
          <span className="category-card__link">
            {isServices ? 'Pogledajte usluge' : 'Saznajte više'}
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    </Wrapper>
  );
}

function CategoryIcon({ type }: { type: string }) {
  const icons: Record<string, ReactElement> = {
    products: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="16" rx="1" />
      </svg>
    ),
    metal: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 20V8l8-4 8 4v12" strokeLinejoin="round" />
        <path d="M8 20v-6h8v6M12 4v4" strokeLinecap="round" />
      </svg>
    ),
    panels: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="8" height="18" rx="1" />
        <rect x="13" y="3" width="8" height="8" rx="1" />
        <rect x="13" y="13" width="8" height="8" rx="1" />
      </svg>
    ),
    services: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          strokeLinecap="round"
        />
        <path d="M19 12a7 7 0 01-7 7" strokeLinecap="round" />
      </svg>
    ),
  };

  return <>{icons[type] ?? icons.products}</>;
}
