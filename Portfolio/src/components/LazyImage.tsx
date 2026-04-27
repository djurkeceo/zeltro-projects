import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { useImageLoad } from '../hooks/useImageLoad';
import { getOptimizedUrl } from '../utils/imageLoader';
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
  const optimizedSrc = getOptimizedUrl(src, 1200, 75);
  const optimizedSrcSet = src.includes('unsplash.com')
    ? [480, 768, 1200, 1600]
        .map((width) => `${getOptimizedUrl(src, width, width <= 768 ? 70 : 75)} ${width}w`)
        .join(', ')
    : undefined;
  const { loaded, error } = useImageLoad(isInView ? optimizedSrc : '');

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
          src={optimizedSrc}
          srcSet={optimizedSrcSet}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={alt}
          className={`lazy-image ${loaded ? 'visible' : 'hidden'}`}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

export default React.memo(LazyImage);
