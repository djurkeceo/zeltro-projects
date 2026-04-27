export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
  location: string;
  year: number;
  aspectRatio?: string;
}

export const photos: Photo[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04", category: "Portret", alt: "Portret žene u prirodi", location: "Fruška Gora", year: 2024, aspectRatio: "3/4" },
  { id: 2, src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e", category: "Wedding", alt: "Venčanje u vinogradu", location: "Sremski Karlovci", year: 2024, aspectRatio: "4/5" },
  { id: 3, src: "https://images.unsplash.com/photo-1554080353-a576cf803bda", category: "Editorijal", alt: "Editorijal moda jesen", location: "Beograd", year: 2024, aspectRatio: "2/3" },
  { id: 4, src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91", category: "Portret", alt: "Portret u studiju", location: "Studio Beograd", year: 2023, aspectRatio: "1/1" },
  { id: 5, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", category: "Brand", alt: "Brand fotografija lifestyle", location: "Novi Sad", year: 2024, aspectRatio: "4/3" },
  { id: 6, src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df", category: "Porodica", alt: "Porodična fotografija u parku", location: "Kalemegdan", year: 2023, aspectRatio: "3/4" },
  { id: 7, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1", category: "Wedding", alt: "Mladenci na venčanju", location: "Zlatibor", year: 2024, aspectRatio: "2/3" },
  { id: 8, src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2", category: "Editorijal", alt: "Modna fotografija studijsko", location: "Beograd", year: 2023, aspectRatio: "3/4" },
  { id: 9, src: "https://images.unsplash.com/photo-1519699047748-de8e44451c5f", category: "Portret", alt: "Zlatni čas portret", location: "Ada Ciganlija", year: 2024, aspectRatio: "4/5" },
  { id: 10, src: "https://images.unsplash.com/photo-1562322140-8baeececf3df", category: "Porodica", alt: "Deca na plaži", location: "Crna Gora", year: 2024, aspectRatio: "1/1" },
  { id: 11, src: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11", category: "Brand", alt: "Korporativni portret", location: "Beograd", year: 2023, aspectRatio: "3/4" },
  { id: 12, src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f", category: "Wedding", alt: "Detalji venčanja cveće", location: "Beograd", year: 2024, aspectRatio: "4/3" },
  { id: 13, src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486", category: "Portret", alt: "Portret u kafeu", location: "Beograd", year: 2024, aspectRatio: "2/3" },
  { id: 14, src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250", category: "Editorijal", alt: "Editorijal jesen park", location: "Novi Sad", year: 2023, aspectRatio: "3/4" },
  { id: 15, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb", category: "Porodica", alt: "Porodica u polju", location: "Vojvodina", year: 2024, aspectRatio: "4/5" },
  { id: 16, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", category: "Brand", alt: "Brand lifestyle žena", location: "Beograd", year: 2024, aspectRatio: "1/1" },
  { id: 17, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9", category: "Portret", alt: "Ulični portret", location: "Zemun", year: 2024, aspectRatio: "3/4" },
  { id: 18, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc", category: "Wedding", alt: "Prvi ples", location: "Beograd", year: 2024, aspectRatio: "2/3" },
  { id: 19, src: "https://images.unsplash.com/photo-1551232864-3f0890e580d9", category: "Editorijal", alt: "Modni editorijal", location: "Beograd", year: 2023, aspectRatio: "4/5" },
  { id: 20, src: "https://images.unsplash.com/photo-1536640712247-3a97c7d49415", category: "Porodica", alt: "Majka i dete", location: "Novi Sad", year: 2024, aspectRatio: "1/1" },
  { id: 21, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", category: "Portret", alt: "Profilni portret", location: "Beograd", year: 2023, aspectRatio: "3/4" },
  { id: 22, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed", category: "Wedding", alt: "Mlada u krupnom planu", location: "Beograd", year: 2024, aspectRatio: "4/5" },
  { id: 23, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", category: "Brand", alt: "Proizvodna fotografija", location: "Beograd", year: 2024, aspectRatio: "4/3" },
  { id: 24, src: "https://images.unsplash.com/photo-1559181567-c3190ca9959b", category: "Editorijal", alt: "Umetnička fotografija", location: "Beograd", year: 2023, aspectRatio: "2/3" }
];

export const categories = ["Sve", "Portret", "Wedding", "Editorijal", "Porodica", "Brand"];
