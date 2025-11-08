import React from 'react';
import '../styles/xallaknm.css';

export default function XallaknmPage() {
  return (
    <div className="xallaknm-container">
      <header className="app-header">
        <h1>Xallaknm</h1>
        <p>Your smart score calculator for Domino and Okey games</p>
      </header>
      
      <section className="app-showcase">
        <div className="app-screenshot">
          {/* Placeholder for app screenshot */}
        </div>
        
        <div className="app-details">
          <h2>Features</h2>
          <ul className="feature-list">
            <li>Quick score entry</li>
            <li>Automatic totals calculation</li>
            <li>Save & resume games</li>
            <li>Dark mode support</li>
            <li>Game history tracking</li>
            <li>Custom notes for players</li>
            <li>Fully offline capable</li>
          </ul>
          
          <div className="download-buttons">
            <a href="#" className="app-store-btn">App Store</a>
            <a href="#" className="play-store-btn">Google Play</a>
          </div>
        </div>
      </section>
    </div>
  );
}
