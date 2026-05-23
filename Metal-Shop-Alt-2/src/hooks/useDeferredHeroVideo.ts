import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface NetworkInformation {
  saveData?: boolean;
  effectiveType?: string;
}

function prefersLightMedia(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(max-width: 768px)').matches) return true;
  const conn = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  if (!conn) return false;
  if (conn.saveData) return true;
  const slow = ['slow-2g', '2g', '3g'];
  return slow.includes(conn.effectiveType ?? '');
}

export function useDeferredHeroVideo() {
  const prefersReducedMotion = useReducedMotion();
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion || prefersLightMedia()) return;

    const enable = () => setShouldLoad(true);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(enable, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = globalThis.setTimeout(enable, 2000);
    return () => globalThis.clearTimeout(timer);
  }, [prefersReducedMotion]);

  return shouldLoad;
}
