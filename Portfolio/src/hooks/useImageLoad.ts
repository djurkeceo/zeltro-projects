import { useState, useEffect } from 'react';

export function useImageLoad(src: string) {
  const [status, setStatus] = useState({ loaded: false, error: false });

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;

    const handleLoad = () => setStatus({ loaded: true, error: false });
    const handleError = () => setStatus({ loaded: false, error: true });

    img.addEventListener('load', handleLoad);
    img.addEventListener('error', handleError);

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  return status;
}
