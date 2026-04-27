import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyImage from './LazyImage';
import { Photo } from '../utils/photos';
import './MasonryGrid.css';

interface MasonryGridProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ photos, onPhotoClick }) => {
  return (
    <div className="masonry-grid">
      <AnimatePresence>
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="masonry-item"
            onClick={() => onPhotoClick(index)}
          >
            <div className="masonry-image-wrapper">
              <LazyImage 
                src={photo.src} 
                alt={photo.alt} 
                aspectRatio={photo.aspectRatio}
              />
              <div className="masonry-overlay">
                <div className="overlay-content">
                  <span className="overlay-info">{photo.location} · {photo.year}</span>
                  <span className="overlay-icon">↗</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(MasonryGrid);
