import { motion, useReducedMotion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/PageHeader';
import CtaSection from '../components/CtaSection';
import MotionSection from '../components/MotionSection';
import { sandwichPanels } from '../data/products';
import { fadeUp, staggerContainer, staggerItem } from '../utils/motion';
import './SendvicPaneli.css';

export default function SendvicPaneli() {
  useDocumentTitle(
    'Sendvič paneli',
    'Zidni i krovni sendvič paneli sa termoizolacijom za industrijske i stambene objekte — METAL SHOP.'
  );
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        title="Sendvič paneli"
        subtitle="Zidni i krovni paneli sa termoizolacionim jezgrom za moderne građevinske objekte."
      />

      <MotionSection className="section section--white">
        <div className="container">
          <div className="panels-intro">
            <motion.div
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="divider" />
              <h2 className="section-title">Termoizolacija i brza montaža</h2>
              <p>
                Sendvič paneli predstavljaju savremeno rešenje za brzu izgradnju industrijskih hala,
                magacina, hladnjača i poslovnih prostora. Kombinuju visok stepen termoizolacije sa
                brzom i jednostavnom montažom.
              </p>
            </motion.div>
            <motion.ul
              className="panels-highlights"
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true }}
              variants={prefersReducedMotion ? undefined : staggerContainer}
            >
              {sandwichPanels.highlights.map((h) => (
                <motion.li key={h} variants={prefersReducedMotion ? undefined : staggerItem}>
                  {h}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </MotionSection>

      <section className="section section--light">
        <div className="container">
          <motion.div
            className="panels-types"
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={prefersReducedMotion ? undefined : staggerContainer}
          >
            {sandwichPanels.types.map((type) => (
              <motion.article
                key={type.title}
                className="panel-type-card"
                variants={prefersReducedMotion ? undefined : staggerItem}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              >
                <h3>{type.title}</h3>
                <p>{type.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
