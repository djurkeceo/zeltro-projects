import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import { getUnsplashUrl } from '../utils/imageLoader';
import './InstagramFeed.css';

const InstagramFeed: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1562322140-8baeececf3df',
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2',
    'https://images.unsplash.com/photo-1519699047748-de8e44451c5f',
  ];

  return (
    <section className="instagram-section">
      <div className="insta-header">
        <span className="eyebrow">PRATITE NAS</span>
        <h2 className="insta-handle">@studionoir.beograd</h2>
      </div>

      <div className="insta-grid">
        {images.map((img, i) => (
          <motion.div 
            key={i}
            className="insta-item"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
          >
            <LazyImage 
              src={getUnsplashUrl(img, 400, 75)} 
              alt="Studio Noir Instagram" 
              aspectRatio="1/1"
            />
            <div className="insta-overlay">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="insta-footer">
        <a href="#" className="insta-cta">PRATITE NA INSTAGRAMU</a>
      </div>
    </section>
  );
};

export default InstagramFeed;
