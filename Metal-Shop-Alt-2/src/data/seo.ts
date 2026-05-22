import { company } from './company';

export const SITE_URL = `https://${company.website}`;
export const SITE_NAME = company.name;
export const SITE_LOCALE = 'sr_RS';

export const DEFAULT_META_DESCRIPTION =
  'METAL SHOP Subotica - Prodaja CEVI: šavne, bešavne i pocinkovane cevi, LIMOVA: hladno i topolo valjani limovi, pocinkovanih, prohromskih i profilisanih krovnih limova, ČELIKA: flah, firkant, svetlo vučeni čelik, valjani čelik, ČELIČNIH PROFILA I NOSAČA';

export const DEFAULT_KEYWORDS =
  'metal shop subotica, metalurgija subotica, građevinska limarija, pocinkovani lim, trapezni limovi, sendvič paneli, čelični profili, savne cevi, bešavne cevi, veleprodaja metala, maloprodaja metala, limovi subotica, cevi subotica';

export const DEFAULT_TITLE = `${SITE_NAME} | Metalna proizvodnja i veleprodaja Subotica`;

export interface PageSEO {
  title: string;
  description: string;
  path: string;
  keywords?: string;
}

export const PAGE_SEO: Record<string, PageSEO> = {
  '/': {
    title: '',
    description: DEFAULT_META_DESCRIPTION,
    path: '/',
    keywords: DEFAULT_KEYWORDS,
  },
  '/o-nama': {
    title: 'O nama',
    description:
      'METAL SHOP d.o.o. Subotica — porodična firma od 2006. Proizvodnja i prodaja metalne robe, limarija i metalurgija. 3000m² prostora, 23+ zaposlenih.',
    path: '/o-nama',
    keywords: 'metal shop o nama, metal shop subotica istorija, proizvodnja metala subotica',
  },
  '/proizvodi/gradjevinska-limarija': {
    title: 'Građevinska limarija',
    description:
      'Pocinkovani i plastificirani limovi (17 boja), trapezni limovi, olučni sistemi i limarska galanterija. METAL SHOP Subotica.',
    path: '/proizvodi/gradjevinska-limarija',
    keywords: 'građevinska limarija subotica, pocinkovani lim, plastificirani lim, olučni sistemi, trapezni lim',
  },
  '/proizvodi/profilisani-limovi': {
    title: 'Profilisani limovi',
    description:
      'Profilisani i trapezni limovi po meri za krovove i fasade. Proizvodnja i prodaja — METAL SHOP Subotica.',
    path: '/proizvodi/profilisani-limovi',
    keywords: 'profilisani limovi, trapezni limovi subotica, krovni lim, fasadni lim',
  },
  '/metalurgija': {
    title: 'Metalurgija',
    description:
      'Crna metalurgija Subotica: limovi, L i U profili, pletiva, armatura, savne i bešavne cevi, pocinkovane cevi. METAL SHOP.',
    path: '/metalurgija',
    keywords: 'metalurgija subotica, čelični profili, limovi, konstrukcione cevi, armatura mreža, pocinkovane cevi',
  },
  '/sendvic-paneli': {
    title: 'Sendvič paneli',
    description:
      'Zidni i krovni sendvič paneli sa termoizolacijom za hale, magacine i industrijske objekte. METAL SHOP Subotica.',
    path: '/sendvic-paneli',
    keywords: 'sendvič paneli subotica, krovni paneli, zidni paneli, termoizolacioni paneli',
  },
  '/usluge': {
    title: 'Usluge',
    description:
      'Sečenje po meri, proizvodnja trapeznih limova i olučnih sistema, savijanje lima. Usluge METAL SHOP Subotica.',
    path: '/usluge',
    keywords: 'sečenje lima po meri, proizvodnja limova subotica, olučni sistemi proizvodnja, obrada metala',
  },
  '/vesti': {
    title: 'Vesti',
    description: 'Novosti, obaveštenja i aktuelnosti kompanije METAL SHOP d.o.o. iz Subotice.',
    path: '/vesti',
    keywords: 'metal shop vesti, obaveštenja metal shop subotica',
  },
  '/kontakt': {
    title: 'Kontakt',
    description:
      'Kontakt METAL SHOP Subotica: Majšanski put 202. Maloprodaja 024 550 436, proizvodnja 060 550 7950. Radno vreme Pon–Sub.',
    path: '/kontakt',
    keywords: 'metal shop kontakt, metal shop subotica adresa, maloprodaja metala subotica',
  },
};

export function getPageTitle(pageTitle: string): string {
  return pageTitle ? `${pageTitle} | ${SITE_NAME}` : DEFAULT_TITLE;
}

export function getCanonicalUrl(path: string): string {
  const normalized = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
  return `${SITE_URL}${normalized === '/' ? '' : normalized}`;
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: company.name,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.svg`,
        email: company.email,
        telephone: `+381${company.phones.retailMobile.replace(/\s/g, '').replace(/^0/, '')}`,
        foundingDate: String(company.founded),
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Majšanski put 202',
          addressLocality: 'Subotica',
          postalCode: '24000',
          addressCountry: 'RS',
        },
        sameAs: [],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: company.name,
        image: `${SITE_URL}/favicon.svg`,
        url: SITE_URL,
        telephone: `+381${company.phones.retailMobile.replace(/\s/g, '').replace(/^0/, '')}`,
        email: company.email,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Majšanski put 202',
          addressLocality: 'Subotica',
          postalCode: '24000',
          addressCountry: 'RS',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 46.1003,
          longitude: 19.6656,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '16:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '13:00',
          },
        ],
        parentOrganization: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: company.name,
        description: DEFAULT_META_DESCRIPTION,
        inLanguage: 'sr-Latn',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function getBreadcrumbSchema(path: string, pageTitle: string) {
  if (path === '/') return null;

  const items = [
    { name: 'Početna', path: '/' },
    ...(pageTitle ? [{ name: pageTitle, path }] : []),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}
