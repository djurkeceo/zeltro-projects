import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import HeroVideo from '../components/HeroVideo';
import TrustBadges from '../components/TrustBadges';
import StatsBar from '../components/StatsBar';
import CategoryGrid from '../components/CategoryGrid';
import CtaSection from '../components/CtaSection';
import MotionSection from '../components/MotionSection';
import { fadeUp } from '../utils/motion';
import './Home.css';

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section className="hero metal-texture" aria-label="Početna sekcija">
        <HeroVideo />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <p className="hero__eyebrow">Subotica · Od 2006.</p>
          <h1>Vaš pouzdani partner u metalu od 2006.</h1>
          <p className="hero__subtitle">
            Proizvodnja, maloprodaja i veleprodaja metalne robe u Srbiji
          </p>
          <div className="hero__actions">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/proizvodi/gradjevinska-limarija" className="btn btn--primary">
                Pogledajte naš asortiman
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link to="/kontakt" className="btn btn--secondary">
                Kontaktirajte nas
              </Link>
            </motion.div>
          </div>
          <TrustBadges />
        </div>
      </section>

      <MotionSection className="section section--white">
        <div className="container">
          <div className="intro-grid">
            <motion.div
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="divider" />
              <h2 className="section-title">O kompaniji</h2>
              <p className="intro-text">
                Nakon višegodišnjeg iskustva u metalnoj i limarskoj industriji, vlasnik Robert Panković
                osniva 2006. godine METAL SHOP d.o.o. — porodičnu firmu zasnovanu na vrednostima kvaliteta,
                poverenja, pouzdanosti i odgovornosti.
              </p>
              <p className="intro-text">
                Kontinuiranim ulaganjima u kvalitet proizvoda, raznovrsnost asortimana i brzinu usluge,
                postali smo lider u građevinskom sektoru u Srbiji. Proizvodimo pocinkovane i plastificirane
                limove, olučne sisteme i nudimo širok asortiman crne metalurgije.
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block' }}>
                <Link to="/o-nama" className="btn btn--outline">Saznajte više o nama</Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="intro-image"
              role="img"
              aria-label="Industrijska proizvodnja metala — ilustracija"
              initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="intro-image__placeholder">
                <span>Proizvodni i skladišni prostor · 3000m²</span>
              </div>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section section--light" delay={0.05}>
        <div className="container">
          <motion.div
            className="section-header section-header--center"
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="divider divider--center" />
            <h2 className="section-title">Naš asortiman</h2>
            <p className="section-subtitle">
              Kompletna ponuda za građevinsku limariju, metalurgiju i moderne građevinske sisteme.
            </p>
          </motion.div>
          <CategoryGrid />
        </div>
      </MotionSection>

      <StatsBar />
      <CtaSection />
    </>
  );
}
