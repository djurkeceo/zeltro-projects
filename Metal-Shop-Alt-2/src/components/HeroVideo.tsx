import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useDeferredHeroVideo } from '../hooks/useDeferredHeroVideo';
import './HeroVideo.css';

const VIDEO_SRC = '/metalshop.mp4';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const shouldLoad = useDeferredHeroVideo();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.muted = true;

    const markReady = () => setIsReady(true);
    const play = () => video.play().catch(() => {});

    video.addEventListener('canplay', markReady, { once: true });
    video.addEventListener('canplay', play, { once: true });

    if (video.readyState >= 2) {
      markReady();
      play();
    }

    return () => {
      video.removeEventListener('canplay', markReady);
      video.removeEventListener('canplay', play);
    };
  }, [shouldLoad]);

  return (
    <div className="hero__media" aria-hidden="true">
      <div className="hero__backdrop" />
      {shouldLoad && !prefersReducedMotion && (
        <video
          ref={videoRef}
          className={`hero__video${isReady ? ' hero__video--ready' : ''}`}
          muted
          loop
          playsInline
          preload="none"
          src={VIDEO_SRC}
        />
      )}
    </div>
  );
}
