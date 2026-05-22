import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_KEYWORDS,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_TITLE,
  PAGE_SEO,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  getCanonicalUrl,
  getPageTitle,
  type PageSEO,
} from '../data/seo';

function upsertMeta(
  key: string,
  content: string,
  type: 'name' | 'property' = 'name'
) {
  let el = document.querySelector(`meta[${type}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(type, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

function applySEO(seo: PageSEO) {
  const title = getPageTitle(seo.title);
  const description = seo.description || DEFAULT_META_DESCRIPTION;
  const keywords = seo.keywords || DEFAULT_KEYWORDS;
  const canonical = getCanonicalUrl(seo.path);
  const ogTitle = seo.title || SITE_NAME;

  document.title = title;
  upsertCanonical(canonical);

  upsertMeta('description', description);
  upsertMeta('keywords', keywords);
  upsertMeta('robots', 'index, follow, max-image-preview:large');
  upsertMeta('googlebot', 'index, follow');

  upsertMeta('og:type', 'website', 'property');
  upsertMeta('og:site_name', SITE_NAME, 'property');
  upsertMeta('og:locale', SITE_LOCALE, 'property');
  upsertMeta('og:title', ogTitle, 'property');
  upsertMeta('og:description', description, 'property');
  upsertMeta('og:url', canonical, 'property');

  upsertMeta('twitter:card', 'summary');
  upsertMeta('twitter:title', title);
  upsertMeta('twitter:description', description);
}

function applyDefaults() {
  document.title = DEFAULT_TITLE;
  upsertCanonical(SITE_URL);
  upsertMeta('description', DEFAULT_META_DESCRIPTION);
  upsertMeta('keywords', DEFAULT_KEYWORDS);
}

export function usePageSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = PAGE_SEO[pathname] ?? PAGE_SEO['/'];
    applySEO(seo);

    return applyDefaults;
  }, [pathname]);
}

/** @deprecated Use usePageSEO instead */
export function useDocumentTitle(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo: PageSEO = {
      title,
      description: description ?? DEFAULT_META_DESCRIPTION,
      path: pathname,
    };
    applySEO(seo);
    return applyDefaults;
  }, [title, description, pathname]);
}
