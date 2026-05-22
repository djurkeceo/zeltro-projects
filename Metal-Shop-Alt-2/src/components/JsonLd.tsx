import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  PAGE_SEO,
  getBreadcrumbSchema,
  getOrganizationSchema,
} from '../data/seo';

const ORG_SCRIPT_ID = 'jsonld-organization';
const BREADCRUMB_SCRIPT_ID = 'jsonld-breadcrumb';

function setJsonLd(id: string, data: object | null) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  if (!data) return;

  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export default function JsonLd() {
  const { pathname } = useLocation();

  useEffect(() => {
    setJsonLd(ORG_SCRIPT_ID, getOrganizationSchema());
  }, []);

  useEffect(() => {
    const page = PAGE_SEO[pathname] ?? PAGE_SEO['/'];
    const breadcrumb = getBreadcrumbSchema(pathname, page.title);
    setJsonLd(BREADCRUMB_SCRIPT_ID, breadcrumb);

    return () => setJsonLd(BREADCRUMB_SCRIPT_ID, null);
  }, [pathname]);

  return null;
}
