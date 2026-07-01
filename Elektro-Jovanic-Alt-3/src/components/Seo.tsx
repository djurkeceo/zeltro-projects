import { useEffect } from 'react';

const PAGE_TITLE = 'Jovanić Elektro | Elektroinstalacije u Subotici';
const PAGE_DESCRIPTION =
  'Jovanić Elektro iz Subotice pruža profesionalne elektroinstalacije, video nadzor, interfone, rasvetu i smart home sisteme.';

const setMetaTag = (selector: string, key: 'name' | 'property', value: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(key, value);
    document.head.append(tag);
  }
  tag.setAttribute('content', content);
};

const Seo = () => {
  useEffect(() => {
    document.title = PAGE_TITLE;
    document.documentElement.lang = 'sr';

    const pageUrl = new URL(window.location.pathname, window.location.origin).toString();

    setMetaTag('meta[name="description"]', 'name', 'description', PAGE_DESCRIPTION);
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow');
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', PAGE_TITLE);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', PAGE_DESCRIPTION);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', pageUrl);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'sr_RS');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', PAGE_TITLE);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', PAGE_DESCRIPTION);
    setMetaTag('meta[name="theme-color"]', 'name', 'theme-color', '#0a0a0a');

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.append(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    const schemaId = 'jovanic-elektro-ld-json';
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: 'Jovanić Elektro',
      telephone: '+381658275055',
      email: 'positivevoltage24@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Majšanski put 134A',
        postalCode: '24000',
        addressLocality: 'Subotica',
        addressCountry: 'RS',
      },
      areaServed: 'Subotica i okolina',
      foundingDate: '2021-04-08',
      url: pageUrl,
    };

    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.append(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData);
  }, []);

  return null;
};

export default Seo;
