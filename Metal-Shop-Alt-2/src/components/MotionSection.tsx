import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, defaultViewport } from '../utils/motion';

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function MotionSection({ children, className = '', delay = 0 }: MotionSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}
