import { useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { pageTransition, pageVariants } from '../utils/motion';

export default function AnimatedOutlet() {
  const location = useLocation();
  const outlet = useOutlet();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div key={location.pathname}>{outlet}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
}
