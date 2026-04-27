import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeyboard } from '../hooks/useKeyboard';
import { Photo } from '../utils/photos';
import './Lightbox.css';

interface LightboxProps {
  isOpen: boolean;
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ isOpen, photos, currentIndex, onClose, onNext, onPrev }) => {
  useKeyboard({ onLeft: onPrev, onRight: onNext, onEscape: onClose }, isOpen);

  const currentPhoto = photos[currentIndex];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="lightbox-close" onClick={onClose}>×</button>
          
          <button className="lightbox-nav prev" onClick={onPrev}>←</button>
          <button className="lightbox-nav next" onClick={onNext}>→</button>

          <div className="lightbox-content">
            <motion.img
              key={currentPhoto.id}
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="lightbox-image"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            <div className="lightbox-metadata">
              <div className="metadata-left">
                <p className="photo-alt">{currentPhoto.alt}</p>
              </div>
              <div className="metadata-center">
                <p className="photo-count">{currentIndex + 1} / {photos.length}</p>
              </div>
              <div className="metadata-right">
                <p className="photo-location">{currentPhoto.location} · {currentPhoto.year}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
