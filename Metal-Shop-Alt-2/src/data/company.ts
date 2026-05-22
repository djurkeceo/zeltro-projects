export const company = {
  name: 'METAL SHOP d.o.o.',
  shortName: 'Metal Shop',
  founded: 2006,
  owner: 'Robert Panković',
  address: 'Majšanski put 202, 24000 Subotica, Srbija',
  email: 'metalshopsubotica@gmail.com',
  website: 'metalshopsu.rs',
  pib: '104866081',
  space: '3000m²',
  employees: '23+',
  phones: {
    retail: '024 550 436',
    retailMobile: '060 550 4360',
    production: '060 550 7950',
  },
  hours: 'Pon–Pet 08:00–16:00 | Sub 08:00–13:00',
} as const;

export const values = [
  { key: 'kvalitet', label: 'Kvalitet', description: 'Kontinuirana ulaganja u kvalitet proizvoda i usluga.' },
  { key: 'poverenje', label: 'Poverenje', description: 'Dugogodišnji odnosi sa klijentima zasnovani na iskrenosti.' },
  { key: 'pouzdanost', label: 'Pouzdanost', description: 'Isporuka na vreme i pouzdana snabdevanja gradilišta.' },
  { key: 'odgovornost', label: 'Odgovornost', description: 'Odgovornost prema klijentima, zaposlenima i zajednici.' },
] as const;

export const timeline = [
  { year: '2006', title: 'Osnivanje kompanije', description: 'Robert Panković osniva METAL SHOP d.o.o. u Subotici — porodična firma zasnovana na kvalitetu i poverenju.' },
  { year: '2010', title: 'Proširenje asortimana', description: 'Uvođenje širokog spektra crne metalurgije i proizvodnje profilisanih limova.' },
  { year: '2015', title: 'Rast proizvodnog kapaciteta', description: 'Investicije u proizvodni program — trapezni limovi, olučni sistemi i limarska galanterija.' },
  { year: '2020', title: 'Lider u regionu', description: 'Prepoznatljiv lider u građevinskom sektoru Srbije sa 3000m² proizvodnog i skladišnog prostora.' },
] as const;

export const departments = [
  {
    id: 'maloprodaja',
    title: 'Maloprodaja',
    contact: 'Goran',
    email: 'metalshopsubotica@gmail.com',
    phone: '060 550 4360',
    hours: 'Pon–Pet 08:00–16:00 | Sub 08:00–13:00',
  },
  {
    id: 'proizvodnja',
    title: 'Proizvodni program',
    contact: 'Edvard',
    email: 'metalshopsubotica@gmail.com',
    phone: '060 550 7950',
    hours: 'Pon–Pet 08:00–16:00 | Sub 08:00–13:00',
  },
  {
    id: 'menadzer',
    title: 'General menadžer',
    contact: 'Edvin',
    email: 'edvin.pankovic@gmail.com',
    phone: '060 616 09 92',
    hours: 'Pon–Pet 08:00–16:00 | Sub 08:00–13:00',
  },
] as const;

export const featuredCategories = [
  {
    title: 'Proizvodi',
    description: 'Građevinska limarija i profilisani limovi za krovove i fasade.',
    path: '/proizvodi/gradjevinska-limarija',
    icon: 'products',
    tag: 'Limarija',
  },
  {
    title: 'Metalurgija',
    description: 'Limovi, profili, pletiva i konstrukcione cevi — širok asortiman.',
    path: '/metalurgija',
    icon: 'metal',
    tag: 'Crna metalurgija',
  },
  {
    title: 'Sendvič paneli',
    description: 'Zidni i krovni paneli sa termoizolacijom za moderne objekte.',
    path: '/sendvic-paneli',
    icon: 'panels',
    tag: 'Izolacija',
  },
  {
    title: 'Usluge',
    description: 'Proizvodnja i obrada po meri — od sečenja do kompletnih olučnih sistema.',
    path: '/usluge',
    icon: 'services',
    tag: 'Po meri',
    highlights: ['Sečenje po meri', 'Trapezni limovi', 'Olučni sistemi', 'Veleprodaja'],
  },
] as const;

export const stats = [
  { value: 'Od 2006.', label: 'Godina osnivanja' },
  { value: '3000m²', label: 'Proizvodni i skladišni prostor' },
  { value: '23+', label: 'Zaposlenih' },
  { value: 'Srbija i region', label: 'Tržište' },
] as const;
