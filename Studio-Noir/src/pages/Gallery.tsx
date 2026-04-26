import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../utils/seo';
import { getUnsplashUrl } from '../utils/imageLoader';
import LazyImage from '../components/LazyImage';
import './Gallery.css';

interface GalleryItem {
  id: number;
  url: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Sve');

  useEffect(() => {
    setPageMeta({
      title: "Galerija Radova | Studio Noir",
      description: "Pogledajte transformacije i stilove kreirane u našem salonu. Inspiracija za vaš sledeći izgled."
    });
  }, []);

  const galleryItems: GalleryItem[] = useMemo(() => [
    { id: 1, url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df', category: 'Bojenje' },
    { id: 2, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e', category: 'Šišanje' },
    { id: 3, url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035', category: 'Styling' },
    { id: 4, url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1', category: 'Pramenovi' },
    { id: 5, url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2', category: 'Tretmani' },
    { id: 6, url: 'https://images.unsplash.com/photo-1519699047748-de8e44451c5f', category: 'Bojenje' },
    { id: 7, url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250', category: 'Šišanje' },
    { id: 8, url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486', category: 'Styling' },
    { id: 9, url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11', category: 'Pramenovi' },
    { id: 10, url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f', category: 'Bojenje' },
    { id: 11, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e', category: 'Tretmani' },
    { id: 12, url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df', category: 'Šišanje' },
    { id: 13, url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1', category: 'Bojenje' },
    { id: 14, url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2', category: 'Styling' },
    { id: 15, url: 'https://images.unsplash.com/photo-1519699047748-de8e44451c5f', category: 'Pramenovi' },
    { id: 16, url: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250', category: 'Tretmani' },
    { id: 17, url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486', category: 'Šišanje' },
    { id: 18, url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11', category: 'Bojenje' },
  ], []);

  const categories = ['Sve', 'Šišanje', 'Bojenje', 'Pramenovi', 'Styling', 'Tretmani'];

  const filteredItems = useMemo(() => {
    return filter === 'Sve' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === filter);
  }, [filter, galleryItems]);

  const handleFilterChange = useCallback((cat: string) => {
    setFilter(cat);
  }, []);

  return (
    <div className="gallery-page">
      {/* SECTION 1: HERO */}
      <section className="page-hero small">
        <div className="hero-bg">
          <LazyImage 
            src={getUnsplashUrl('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2', 1600)} 
            alt="Gallery Hero" 
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="italic"
          >
            Galerija Radova
          </motion.h1>
        </div>
      </section>

      {/* SECTION 2: FILTER TABS */}
      <section className="gallery-filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => handleFilterChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MASONRY GRID */}
      <section className="gallery-grid-section">
        <div className="container">
          <motion.div 
            layout
            className="masonry-grid"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="gallery-item"
                >
                  <div className="gallery-card">
                    <LazyImage 
                      src={getUnsplashUrl(item.url, 600, 75)} 
                      alt={`Frizura ${item.category}`} 
                    />
                    <div className="gallery-card-overlay">
                      <span className="category-label">{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section className="gallery-cta">
        <div className="container">
          <h2>Spremni za novi izgled?</h2>
          <Link to="/services#booking" className="btn-gold">ZAKAŽI ODMAH</Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
