import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../utils/seo';
import { getUnsplashUrl } from '../utils/imageLoader';
import LazyImage from '../components/LazyImage';
import './Gallery.css';

interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: 'Styling' | 'Bojenje' | 'Nega';
  aspectRatio: string;
}

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Sve');

  useEffect(() => {
    setPageMeta({
      title: "Galerija Radova | Studio Noir",
      description: "Profesionalna galerija radova Studio Noir. Pogledajte stilove i rezultate koji kombinuju eleganciju i negu."
    });
  }, []);

  const galleryItems: GalleryItem[] = useMemo(() => [
    { id: 1, url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035', title: 'Editorial glow', category: 'Styling', aspectRatio: '4 / 5' },
    { id: 2, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e', title: 'Salon ritual', category: 'Nega', aspectRatio: '4 / 5' },
    { id: 3, url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df', title: 'Natural tone', category: 'Bojenje', aspectRatio: '4 / 5' },
    { id: 4, url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1', title: 'Soft contour', category: 'Styling', aspectRatio: '3 / 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2', title: 'Classic elegance', category: 'Styling', aspectRatio: '3 / 4' },
    { id: 6, url: 'https://images.unsplash.com/photo-1519699047748-de8e44451c5f', title: 'Vivid refresh', category: 'Bojenje', aspectRatio: '4 / 5' },
    { id: 7, url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035', title: 'Evening finish', category: 'Styling', aspectRatio: '1 / 1' },
    { id: 8, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e', title: 'Deep care', category: 'Nega', aspectRatio: '1 / 1' },
    { id: 9, url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df', title: 'Signature look', category: 'Bojenje', aspectRatio: '4 / 5' },
  ], []);

  const categories = ['Sve', 'Styling', 'Bojenje', 'Nega'];

  const filteredItems = useMemo(() => {
    return filter === 'Sve'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);
  }, [filter, galleryItems]);

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-bg">
          <LazyImage 
            src={getUnsplashUrl('https://images.unsplash.com/photo-1560066984-138dadb4c035', 1800)}
            alt="Studio Noir galerija"
          />
          <div className="gallery-hero-overlay"></div>
        </div>

        <div className="gallery-hero-content container">
          <span className="eyebrow">PROFESIONALNI RADOVI</span>
          <h1>Galerija Studio Noir</h1>
        </div>
      </section>

      <section className="gallery-filter-section">
        <div className="container">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-grid" key={filter}>
            {filteredItems.map((item, index) => (
              <article
                className="gallery-item"
                style={{ animationDelay: `${index * 70}ms` }}
                key={item.id}
              >
                <div className="gallery-card">
                  <LazyImage
                    src={getUnsplashUrl(item.url, 900, 80)}
                    alt={`Studio Noir ${item.title}`}
                    aspectRatio={item.aspectRatio}
                  />
                  <div className="gallery-card-overlay">
                    <span className="gallery-chip">{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <div className="container gallery-cta-inner">
          <div>
            <span className="eyebrow">REZERVACIJA</span>
            <h2>Spremni za svoj sledeći izgled?</h2>
          </div>
          <Link to="/services#booking" className="btn-gold">ZAKAŽI TERMIN</Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
