import { useEffect } from 'react';
import { DEFAULT_META_DESCRIPTION } from '../data/seo';

const BASE = 'METAL SHOP d.o.o.';
const DEFAULT_TITLE = `${BASE} | Metalna proizvodnja i veleprodaja`;

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : DEFAULT_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', description ?? DEFAULT_META_DESCRIPTION);
    }

    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) {
        meta.setAttribute('content', DEFAULT_META_DESCRIPTION);
      }
    };
  }, [title, description]);
}
