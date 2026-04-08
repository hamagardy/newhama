import React from 'react';
import './styles/banners-preview.css';

import R1 from '../assets/R1.png';
import R2 from '../assets/R2.png';
import R5 from '../assets/R5.png';
import R6 from '../assets/R6.png';
import XGP from '../assets/XGP.png';

export default function BannersPreview() {
  const banners = [
    { id: 1, src: R1, name: 'Banner R1' },
    { id: 2, src: R2, name: 'Banner R2' },
    { id: 3, src: R5, name: 'Banner R5' },
    { id: 4, src: R6, name: 'Banner R6' },
    { id: 5, src: XGP, name: 'XGP Banner' }
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
