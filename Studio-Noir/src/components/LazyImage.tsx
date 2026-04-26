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
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '', aspectRatio }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);
  const { loaded, error } = useImageLoad(isInView ? src : '');

  return (
    <div 
      ref={containerRef} 
      className={`lazy-image-container ${className}`}
      style={aspectRatio ? { aspectRatio } : {}}
    >
      {!loaded && !error && <ImageSkeleton />}
      {error && <div className="image-error"><span>Image unavailable</span></div>}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`lazy-image ${loaded ? 'loaded' : ''}`}
        />
      )}
    </div>
  );
};

export default React.memo(LazyImage);
