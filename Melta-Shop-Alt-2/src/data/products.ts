export const gradjevinskaLimarija = [
  'Pocinkovani i plastificirani limovi (17 boja)',
  'Trapezni limovi',
  'Limovi u obliku crepa',
  'Olučni sistemi (plastificirani i pocinkovani)',
  'Sva limarska galanterija',
  'Zidni i krovni paneli',
] as const;

export const profilisaniLimovi = [
  'Različiti profili trapeznih limova',
  'Profilisani limovi po specifikaciji klijenta',
  'Limovi za industrijske i stambene objekte',
  'Prilagođeni profili za krovne i fasadne sisteme',
] as const;

export const metallurgy = {
  limovi: [
    'Toplo valjani lim',
    'Hladno valjani lim',
    'Pocinkovani lim',
    'Inox lim',
    'Aluminijumski lim',
    'Bakarni lim',
    'Rolovani pocinkovani lim',
  ],
  profili: [
    'L profili',
    'U profili',
    'Svetlovučeni čelik',
    'UMP IMP nosači',
    'Pljosnato železo (Flah)',
    'Firiket',
    'Betonsko gvožđe',
  ],
  pletiva: [
    'Armatura mreža',
    'Panelne ograde',
    'Grifovano platno',
    'Istegnuti metal',
    'Paljena i pocinkovana žica',
    'Bodljikava žica',
    'Šulc mreže',
    'Pletena žica',
  ],
  cevi: [
    'Savne cevi',
    'Besavne cevi',
    'Pravougaone cevi',
    'Kvadratne cevi',
    'Pocinkovane cevi',
    'Hidro ispitane cevi',
  ],
} as const;

export const services = [
  {
    title: 'Sečenje po meri',
    description: 'Precizno sečenje limova, profila i cevi prema vašim dimenzijama i tehničkim zahtevima.',
  },
  {
    title: 'Proizvodnja trapeznih limova',
    description: 'Izrada trapeznih limova različitih profila za krovne i fasadne sisteme.',
  },
  {
    title: 'Proizvodnja limova u obliku crepa',
    description: 'Profilisani limovi u obliku crepa za estetski i funkcionalan krovni pokrivač.',
  },
  {
    title: 'Proizvodnja olučnih sistema',
    description: 'Kompletni olučni sistemi — pocinkovani i plastificirani, sa svom pratećom galanterijom.',
  },
  {
    title: 'Savijanje i obrada lima',
    description: 'Obrada limova i profila prema specifikacijama projekta i gradilišta.',
  },
  {
    title: 'Veleprodaja i maloprodaja',
    description: 'Snabdevanje građevinskih firmi, zanatlija i privatnih investitora širom Srbije i regiona.',
  },
] as const;

export const sandwichPanels = {
  highlights: [
    'Odlična termoizolacija za smanjenje energetskih troškova',
    'Brza montaža na industrijskim i stambenim objektima',
    'Zidni i krovni paneli za hale, magacine i poslovne prostore',
    'Visok kvalitet ispune i obloge za dug vek trajanja',
  ],
  types: [
    { title: 'Zidni sendvič paneli', description: 'Paneli za vertikalne zidove sa termoizolacionim jezgrom — idealni za hale i industrijske objekte.' },
    { title: 'Krovni sendvič paneli', description: 'Krovni paneli sa pojačanom nosivošću i otpornošću na vremenske uslove.' },
    { title: 'Fasadni paneli', description: 'Estetski i funkcionalni fasadni sistemi za moderne poslovne i stambene zgrade.' },
  ],
} as const;
