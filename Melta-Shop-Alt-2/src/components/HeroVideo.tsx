import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import './HeroVideo.css';

const VIDEO_SRC = '/metalshop.mp4';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = VIDEO_SRC;
    link.type = 'video/mp4';
    document.head.appendChild(link);
    return () => link.remove();
  }, [prefersReducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    video.muted = true;

    const markReady = () => setIsReady(true);
    const play = () => video.play().catch(() => {});

    if (video.readyState >= 3) {
      markReady();
      play();
    }

    video.addEventListener('canplay', markReady);
    video.addEventListener('loadeddata', play);
    video.addEventListener('canplay', play);

    return () => {
      video.removeEventListener('canplay', markReady);
      video.removeEventListener('loadeddata', play);
      video.removeEventListener('canplay', play);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="hero__media" aria-hidden="true">
      <div className="hero__backdrop" />
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          className={`hero__video${isReady ? ' hero__video--ready' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={VIDEO_SRC}
        />
      )}
    </div>
  );
}
