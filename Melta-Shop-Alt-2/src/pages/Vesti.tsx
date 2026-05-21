import { motion, useReducedMotion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/PageHeader';
import { newsItems } from '../data/news';
import { staggerContainer, staggerItem } from '../utils/motion';
import './Vesti.css';

export default function Vesti() {
  useDocumentTitle('Vesti', 'Novosti i obaveštenja kompanije METAL SHOP d.o.o. iz Subotice.');
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        title="Vesti"
        subtitle="Pratite najnovije vesti, događaje i obaveštenja iz naše kompanije."
      />

      <section className="section section--light">
        <div className="container">
          <motion.div
            className="news-grid"
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={prefersReducedMotion ? undefined : staggerContainer}
          >
            {newsItems.map((item) => (
              <motion.article
                key={item.id}
                className="news-card"
                variants={prefersReducedMotion ? undefined : staggerItem}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <span className="news-card__category">{item.category}</span>
                <time className="news-card__date" dateTime={item.date}>{item.date}</time>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <span className="news-card__read">Pročitajte više →</span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
