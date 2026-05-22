# METAL SHOP d.o.o. — Web sajt

Profesionalni, responzivni web sajt za METAL SHOP d.o.o. iz Subotice — proizvodnja, maloprodaja i veleprodaja metalne robe.

## Tehnologije

- React 19 + TypeScript
- Vite
- React Router

## Pokretanje

```bash
npm install
npm run dev
```

Sajt je dostupan na `http://localhost:5173`.

## Produkcijski build

```bash
npm run build
npm run preview
```

## Struktura stranica

| Ruta | Stranica |
|------|----------|
| `/` | Početna |
| `/o-nama` | O nama |
| `/proizvodi/gradjevinska-limarija` | Građevinska limarija |
| `/proizvodi/profilisani-limovi` | Profilisani limovi |
| `/metalurgija` | Metalurgija |
| `/sendvic-paneli` | Sendvič paneli |
| `/usluge` | Usluge |
| `/vesti` | Vesti |
| `/kontakt` | Kontakt |

## SEO

- Meta tagovi, Open Graph i Twitter kartice po stranici
- JSON-LD: Organization, LocalBusiness, WebSite, BreadcrumbList
- `public/robots.txt` i `public/sitemap.xml` (domen: https://metalshopsu.rs)

### Google indeksiranje

1. Objavite sajt na `https://metalshopsu.rs`
2. U [Google Search Console](https://search.google.com/search-console) dodajte property i verifikujte vlasništvo
3. Pošaljite sitemap: `https://metalshopsu.rs/sitemap.xml`
4. Zatražite indeksiranje početne stranice (URL Inspection → Request indexing)

Za bolje rezultate dodajte sliku `public/og-image.jpg` (1200×630 px) i ažurirajte `src/data/seo.ts`.
