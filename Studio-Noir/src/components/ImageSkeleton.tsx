import React from 'react';
import './ImageSkeleton.css';

const ImageSkeleton: React.FC = () => {
  return <div className="image-skeleton" aria-hidden="true" />;
};

export default React.memo(ImageSkeleton);
