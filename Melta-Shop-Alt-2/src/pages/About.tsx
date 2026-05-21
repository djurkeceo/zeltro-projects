import { motion, useReducedMotion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import PageHeader from '../components/PageHeader';
import ValuesSection from '../components/ValuesSection';
import Timeline from '../components/Timeline';
import CtaSection from '../components/CtaSection';
import MotionSection from '../components/MotionSection';
import { company } from '../data/company';
import { fadeUp } from '../utils/motion';
import './About.css';

export default function About() {
  useDocumentTitle('O nama', 'Saznajte više o METAL SHOP d.o.o. — porodičnoj firmi iz Subotice osnovanoj 2006. godine.');
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <PageHeader
        title="O nama"
        subtitle="Porodična kompanija zasnovana na kvalitetu, poverenju, pouzdanosti i odgovornosti."
      />

      <MotionSection className="section section--white">
        <div className="container about-story">
          <motion.div
            className="about-story__text"
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="divider" />
            <h2 className="section-title">Naša priča</h2>
            <p>
              Nakon višegodišnjeg iskustva u metalnoj i limarskoj industriji, vlasnik{' '}
              <strong>{company.owner}</strong> odlučuje početkom 2006. godine da osnuje{' '}
              <strong>{company.name}</strong> — porodičnu firmu zasnovanu na vrednostima{' '}
              <strong>KVALITET, POVERENJE, POUZDANOST i ODGOVORNOST</strong>.
            </p>
            <p>
              Kroz kontinuirana ulaganja u kvalitet proizvoda, raznovrsnost asortimana i brzinu usluge,
              postali smo lider u građevinskom sektoru u Srbiji. Naša osnovna delatnost obuhvata
              proizvodnju pocinkovanih i plastificiranih limova, olučnih sistema i sve prateće
              galanterije za građevinsku limariju, uz širok asortiman proizvoda crne metalurgije.
            </p>
            <p>
              Sa oko <strong>{company.space}</strong> proizvodnog i skladišnog prostora i timom od{' '}
              <strong>{company.employees} zaposlenih</strong>, snabdevamo građevinske firme, zanatlije
              i investitore širom Srbije i regiona.
            </p>
          </motion.div>
          <motion.div
            className="about-story__image"
            role="img"
            aria-label="Fabrika i skladište — placeholder slika"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="about-story__placeholder">
              <span>Fabrika · Skladište · {company.space}</span>
            </div>
          </motion.div>
        </div>
      </MotionSection>

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
            <h2 className="section-title">Naše vrednosti</h2>
            <p className="section-subtitle">
              Četiri stuba na kojima gradimo dugoročne odnose sa klijentima.
            </p>
          </motion.div>
          <ValuesSection />
        </div>
      </MotionSection>

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
            <h2 className="section-title">Hronologija</h2>
            <p className="section-subtitle">Od osnivanja 2006. do danas — rast i razvoj kompanije.</p>
          </motion.div>
          <Timeline />
        </div>
      </MotionSection>

      <CtaSection />
    </>
  );
}
