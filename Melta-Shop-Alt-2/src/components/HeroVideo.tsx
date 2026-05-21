import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import heroVideo from '../assets/metalshop.mp4';
import heroPoster from '../assets/hero.png';
import './HeroVideo.css';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    video.muted = true;
    const play = () => video.play().catch(() => {});
    play();
    video.addEventListener('loadeddata', play);
    return () => video.removeEventListener('loadeddata', play);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div
        className="hero__video hero__video--poster"
        style={{ backgroundImage: `url(${heroPoster})` }}
        aria-hidden="true"
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="hero__video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={heroPoster}
      aria-hidden="true"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>
  );
}
