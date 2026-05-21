import { motion, useReducedMotion } from 'framer-motion';
import './PageHeader.css';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHeader({ title, subtitle, dark = true }: PageHeaderProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className={`page-header ${dark ? 'page-header--dark' : ''} metal-texture`}>
      <div className="container page-header__inner">
        <motion.div
          className="divider"
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />
        <motion.h1
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
