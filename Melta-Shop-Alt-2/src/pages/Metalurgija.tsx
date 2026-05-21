import { motion, useReducedMotion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/PageHeader';
import MetallurgyGrid from '../components/MetallurgyGrid';
import CtaSection from '../components/CtaSection';
import MotionSection from '../components/MotionSection';
import { fadeUp } from '../utils/motion';

export default function Metalurgija() {
  useDocumentTitle(
    'Metalurgija',
    'Limovi, profili, pletiva i konstrukcione cevi — širok asortiman crne metalurgije u METAL SHOP.'
  );
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        title="Metalurgija"
        subtitle="Širok asortiman limova, profila, pletiva i konstrukcionih cevi za sve vrste građevinskih projekata."
      />

      <MotionSection className="section section--light">
        <div className="container">
          <motion.div
            className="section-header section-header--center"
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="divider divider--center" />
            <h2 className="section-title">Kategorije proizvoda</h2>
            <p className="section-subtitle">
              Snabdevamo građevinske firme, zanatlije i investitore kompletnim programom crne metalurgije.
            </p>
          </motion.div>
          <MetallurgyGrid />
        </div>
      </MotionSection>

      <CtaSection />
    </>
  );
}
