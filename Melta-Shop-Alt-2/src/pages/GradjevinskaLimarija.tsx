import { motion, useReducedMotion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/PageHeader';
import ProductList from '../components/ProductList';
import CtaSection from '../components/CtaSection';
import MotionSection from '../components/MotionSection';
import { fadeUp } from '../utils/motion';
import { gradjevinskaLimarija } from '../data/products';

export default function GradjevinskaLimarija() {
  useDocumentTitle(
    'Građevinska limarija',
    'Pocinkovani i plastificirani limovi, trapezni limovi, olučni sistemi i limarska galanterija — METAL SHOP.'
  );
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        title="Građevinska limarija"
        subtitle="Kompletna ponuda limova, olučnih sistema i prateće galanterije za krovove i fasade."
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
            <h2 className="section-title">Proizvodi</h2>
            <p className="section-subtitle">
              Pocinkovani i plastificirani limovi dostupni u 17 boja, uz kompletan asortiman
              za građevinsku limariju — od trapeznih limova do olučnih sistema.
            </p>
          </motion.div>
          <ProductList items={gradjevinskaLimarija} />
        </div>
      </MotionSection>

      <section className="section section--light">
        <div className="container product-info">
          <p>
            Za detaljne specifikacije, tehničke listove i aktuelne cene, kontaktirajte naše odeljenje
            maloprodaje ili proizvodnog programa. Pripremamo ponude po meri za vaše gradilište.
          </p>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
