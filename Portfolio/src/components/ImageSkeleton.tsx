import React from 'react';
import './ImageSkeleton.css';

interface ImageSkeletonProps {
  aspectRatio?: string;
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = () => {
  return (
    <div className="image-skeleton" />
  );
};

export default React.memo(ImageSkeleton);
