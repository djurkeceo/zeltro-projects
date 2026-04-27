import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { useImageLoad } from '../hooks/useImageLoad';
import ImageSkeleton from './ImageSkeleton';
import './LazyImage.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', aspectRatio, onClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const { loaded, error } = useImageLoad(isInView ? src : '');

  // Format aspect ratio for CSS
  const cssAspectRatio = aspectRatio ? aspectRatio.replace('/', ' / ') : 'auto';

  return (
    <div 
      ref={containerRef} 
      className={`lazy-image-container ${className} ${loaded ? 'is-loaded' : ''}`}
      onClick={onClick}
      style={{ aspectRatio: cssAspectRatio }}
    >
      {!loaded && !error && <ImageSkeleton aspectRatio={aspectRatio} />}
      
      {error && (
        <div className="image-error">
          <span role="img" aria-label="camera">📷</span>
        </div>
      )}

      {isInView && !error && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${loaded ? 'visible' : 'hidden'}`}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default React.memo(LazyImage);
