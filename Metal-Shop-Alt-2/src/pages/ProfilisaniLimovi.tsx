import { motion, useReducedMotion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import ProductList from '../components/ProductList';
import CtaSection from '../components/CtaSection';
import MotionSection from '../components/MotionSection';
import { profilisaniLimovi } from '../data/products';
import { fadeUp } from '../utils/motion';

export default function ProfilisaniLimovi() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        title="Profilisani limovi"
        subtitle="Različiti profili limova za industrijske, stambene i komercijalne objekte."
      />

      <MotionSection className="section section--white">
        <div className="container">
          <motion.div
            className="section-header"
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="divider" />
            <h2 className="section-title">Asortiman</h2>
            <p className="section-subtitle">
              Proizvodnja profilisanih limova po specifikaciji — prilagođavamo profile vašim
              projektnim zahtevima.
            </p>
          </motion.div>
          <ProductList items={profilisaniLimovi} />
        </div>
      </MotionSection>

      <CtaSection />
    </>
  );
}
