interface SeoMeta {
  title: string;
  description: string;
  canonical?: string;
}

export function setPageMeta(meta: SeoMeta): void {
  document.title = meta.title;
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute('content', meta.description);
  }

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (meta.canonical) {
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', meta.canonical);
  }
}
