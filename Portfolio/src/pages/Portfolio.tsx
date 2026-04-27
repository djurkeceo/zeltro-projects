import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photos, categories } from '../utils/photos';
import { setPageMeta } from '../utils/seo';
import MasonryGrid from '../components/MasonryGrid';
import Lightbox from '../components/Lightbox';
import { useLightbox } from '../hooks/useLightbox';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Sve');
  const { isOpen, currentIndex, open, close, next, prev } = useLightbox(photos.length);

  useEffect(() => {
    setPageMeta({
      title: 'Galerija | Lena Marković',
      description: 'Galerija radova — portret, wedding, editorijal i brand fotografija.'
    });
  }, []);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'Sve') return photos;
    return photos.filter(photo => photo.category === activeCategory);
  }, [activeCategory]);

  const getCategoryCount = (cat: string) => {
    if (cat === 'Sve') return photos.length;
    return photos.filter(p => p.category === cat).length;
  };

  const handlePhotoClick = React.useCallback((index: number) => {
    const photoId = filteredPhotos[index].id;
    const globalIndex = photos.findIndex(p => p.id === photoId);
    open(globalIndex);
  }, [filteredPhotos, photos, open]);

  return (
    <div className="portfolio-page">
      {/* Portfolio Hero */}
      <section className="portfolio-hero">
        <motion.div 
          className="container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-label">GALERIJA</span>
          <h1 className="hero-title">Moji Radovi</h1>
          <p className="hero-subtext">Portret · Wedding · Editorijal · Porodica</p>
        </motion.div>
      </section>

      {/* Filters */}
      <div className="portfolio-filters">
        <div className="container filters-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat} <span className="count">({getCategoryCount(cat)})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="portfolio-grid-section section-padding">
        <div className="container">
          <MasonryGrid 
            photos={filteredPhotos} 
            onPhotoClick={handlePhotoClick} 
          />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={isOpen}
        photos={photos}
        currentIndex={currentIndex}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </div>
  );
};

export default Portfolio;
