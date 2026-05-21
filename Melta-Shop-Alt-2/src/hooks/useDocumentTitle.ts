import { useEffect } from 'react';

const BASE = 'METAL SHOP d.o.o.';

export function useDocumentTitle(title: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE}` : `${BASE} | Metalna proizvodnja i veleprodaja`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
    return () => {
      document.title = `${BASE} | Metalna proizvodnja i veleprodaja`;
    };
  }, [title, description]);
}
