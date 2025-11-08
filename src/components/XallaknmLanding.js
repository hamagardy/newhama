import React from 'react';
import '../styles/xallaknm-landing.css';

export default function XallaknmLanding() {
  return (
    <div className="xallaknm-container">
      <h1>Xallaknm</h1>
      <p>Smart score calculator for Domino and Okey games</p>
      
      <div className="download-buttons">
        <a href="#" className="app-store-btn">App Store</a>
        <a href="#" className="play-store-btn">Google Play</a>
      </div>
    </div>
  );
}
