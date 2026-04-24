import React from 'react';
import './Gallery.css';

const gymPhotos = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80'
];

const Gallery: React.FC = () => {
  return (
    <section className="gallery-page section-padding">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            GYM <span className="highlight">GALLERY</span>
          </h2>
          <div className="section-line"></div>
          <p className="gallery-subtitle">Take a look at our training space, equipment, and high-energy atmosphere.</p>
        </div>

        <div className="gallery-grid">
          {gymPhotos.map((photo, index) => (
            <div key={photo} className="gallery-photo-card">
              <img src={photo} alt={`Iron Lab gym photo ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <div className="gallery-home-link">
          <a href="/#programs" className="btn-primary">Back to Programs</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
