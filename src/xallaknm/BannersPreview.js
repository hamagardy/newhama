import React from 'react';
import './styles/banners-preview.css';

import X1 from './assets/X1.png';
import X3 from './assets/X3.png';
import X4 from './assets/X4.png';
import X5 from './assets/X5.jpeg';
import Dominos from './assets/Dominos.jpg';
import Okey from './assets/Okey.jpg';

export default function BannersPreview() {
  const banners = [
    { id: 1, src: X1, name: 'Home Screen' },
    { id: 2, src: X3, name: 'Banner 3' },
    { id: 3, src: X4, name: 'Banner 4' },
    { id: 4, src: X5, name: 'Banner 5' },
    { id: 5, src: Dominos, name: 'Dominos Game' },
    { id: 6, src: Okey, name: 'Okey Game' }
  ];

  return (
    <div className="banners-preview-page">
      <div className="preview-container">
        <h1 className="preview-title">Xallaknm App Banners</h1>
        <p className="preview-subtitle">Preview of all app screenshots and banners</p>
        
        <div className="banners-grid">
          {banners.map((banner) => (
            <div key={banner.id} className="banner-box">
              <div className="banner-image-wrapper">
                <img src={banner.src} alt={banner.name} />
              </div>
              <p className="banner-name">{banner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
