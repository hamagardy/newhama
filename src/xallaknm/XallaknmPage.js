import React from 'react';
import './styles/xallaknm-page.css';

// Corrected imports
import appScreenshot from './assets/X1.png';
import appIcon from './assets/xallakanm.png.png';
import logo from './assets/hg.png';
import dominoImage from './assets/Dominos.jpg';
import okeyImage from './assets/Okey.jpg';

const appStoreImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png';
const playStoreImg = 'https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png';

const Footer = () => (
  <footer className="xallaknm-footer">
    <div className="footer-content">
      <a href="https://hamagardy.com" className="footer-logo">
        <img src={logo} alt="Hama Gardy" width="120"/>
      </a>
      <div className="footer-links">
        <span> {new Date().getFullYear()} Hama Gardy</span>
        <a href="mailto:admin@hamagardy.com">Contact</a>
        <a href="/xallaknm-privacy-policy.html" className="policy-link" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
      </div>
    </div>
  </footer>
);

export default function XallaknmPage() {
  return (
    <div className="xallaknm-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <img src={appIcon} alt="Xallaknm" className="app-logo"/>
            <h1>Xallaknm</h1>
            <p className="subtitle">Professional Score Tracking for Domino & Okey</p>
            <div className="badges">
              <img 
                src={appStoreImg} 
                alt="App Store" 
                className="store-badge"
                onClick={() => alert('Xallaknm will be available on the App Store soon!')}
              />
              <img 
                src={playStoreImg} 
                alt="Google Play" 
                className="store-badge"
                onClick={() => alert('Xallaknm will be available on Google Play soon!')}
              />
            </div>
          </div>
          <div className="hero-image">
            <img src={appScreenshot} alt="App Preview" className="app-preview"/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Real-time Scoring</h3>
              <p>Automatic calculations after each round</p>
            </div>
            <div className="feature-card">
              <h3>Dark Mode</h3>
              <p>Play comfortably at night</p>
            </div>
            <div className="feature-card">
              <h3>Game History</h3>
              <p>Track all your matches</p>
            </div>
            <div className="feature-card">
              <h3>Smart Calculator</h3>
              <p>Automatic score tracking</p>
            </div>
            <div className="feature-card">
              <h3>Auto-Save</h3>
              <p>Never lose your progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section className="game-types">
        <h2>Game Modes</h2>
        <div className="game-grid">
          <div className="game-card">
            <img src={dominoImage} alt="Domino"/>
            <h3>Domino</h3>
            <p>All standard game variations</p>
          </div>
          <div className="game-card">
            <img src={okeyImage} alt="Okey"/>
            <h3>Okey</h3>
            <p>Classic rules and scoring</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="tutorial-section">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <p>Enter group name</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <p>Enter scores</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <p>App handles all the math</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
