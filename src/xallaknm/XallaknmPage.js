import React, { useEffect, useRef, useState } from 'react';
import { trackDownloadClick, trackPageView, trackTimeOnPage, trackExternalLink, trackVisitor } from './firebase';
import './styles/xallaknm-page.css';

import appScreenshot from './assets/X1.png';
import appIcon from './assets/xallakanm.png.png';
import logo from './assets/hg.png';
import dominoImage from './assets/Dominos.jpg';
import okeyImage from './assets/Okey.jpg';

const appStoreImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png';
const playStoreImg = 'https://www.jcml-tx.org/ebook/get-it-on-google-play-badge.png/@@images/image.png';

export default function XallaknmPage() {
  const [isVisible, setIsVisible] = useState({});
  const [showGetDropdown, setShowGetDropdown] = useState(false);
  const observerRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    trackPageView('Xallaknm Landing Page');
    trackVisitor(); // Track device and location
    startTimeRef.current = Date.now();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current.observe(el);
    });

    const handleBeforeUnload = () => {
      if (startTimeRef.current) {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        trackTimeOnPage(timeSpent);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (startTimeRef.current) {
        const timeSpent = Math.floor((Date.now() - startTimeRef.current) / 1000);
        trackTimeOnPage(timeSpent);
      }
    };
  }, []);

  const handleAppStoreClick = () => {
    trackDownloadClick('App Store');
  };

  const handlePlayStoreClick = () => {
    trackDownloadClick('Google Play');
  };

  const handleHamaGardyClick = () => {
    trackExternalLink('Hama Gardy Website', 'https://hamagardy.com');
  };

  return (
    <div className="xallaknm-page min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-blob-1"></div>
        <div className="absolute bg-blob-2"></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-logo">
              <img src={appIcon} alt="Xallaknm" />
              <span>Xallakanm</span>
            </div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#games">Games</a>
              <a href="#how-it-works">How It Works</a>
              <a 
                href="https://dl.dropboxusercontent.com/scl/fi/1wmn0rvxj669pf6krl5dp/xallakanm.apk?rlkey=mipk6iogf1tsebszyn2ik93lt&dl=1"
                className="nav-android-link"
                download="xallakanm.apk"
                onClick={handlePlayStoreClick}
              >
                <span className="android-icon">🤖</span>
                <span className="android-text">Android</span>
                <span className="new-badge">NEW</span>
              </a>
              <div className="nav-dropdown">
                <button 
                  className="nav-get-button"
                  onClick={() => setShowGetDropdown(!showGetDropdown)}
                >
                  Get
                </button>
                {showGetDropdown && (
                  <div className="nav-dropdown-menu">
                    <a
                      href="https://apps.apple.com/us/app/xallakanm/id6755054379"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleAppStoreClick}
                      className="ios-app-link"
                    >
                      <div className="ios-app-icon">
                        <img src={appIcon} alt="Xallakanm" />
                      </div>
                      <div className="ios-app-info">
                        <span className="ios-app-name">Xallakanm</span>
                        <span className="ios-app-subtitle">Score Tracker</span>
                      </div>
                      <span className="ios-get-btn">GET</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-content" data-animate="true" id="hero-text">
              <div className="hero-badge">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Professional Score Tracking</span>
              </div>

              <h1 className="hero-title">
                Track Scores
                <span className="hero-title-gradient">Like a Pro</span>
              </h1>

              <p className="hero-description">
                A powerful score tracking utility for Domino & Okey games. Never lose track of points again.
              </p>

              <div className="hero-badges">
                <a
                  href="https://apps.apple.com/us/app/xallakanm/id6755054379"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleAppStoreClick}
                >
                  <img src={appStoreImg} alt="Download on App Store" />
                </a>
                <a
                  href="https://dl.dropboxusercontent.com/scl/fi/1wmn0rvxj669pf6krl5dp/xallakanm.apk?rlkey=mipk6iogf1tsebszyn2ik93lt&dl=1"
                  className="apk-download-button badge-container"
                  download="xallakanm.apk"
                  onClick={handlePlayStoreClick}
                >
                  <img src={playStoreImg} alt="Get it on Google Play" />
                  <span className="new-badge-overlay">NEW</span>
                </a>
              </div>
            </div>

            <div className="hero-image" data-animate="true" id="hero-image">
              <div>
                <div className="phone-mockup">
                  <div className="phone-glow"></div>
                  <div className="phone-screen">
                    <img src={appScreenshot} alt="App Preview" />
                  </div>
                  <div className="phone-notch"></div>
                </div>
              </div>

              <div className="floating-element floating-element-1">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="floating-element floating-element-2">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section" data-animate="true">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Powerful Features</h2>
            <p className="section-subtitle">Everything you need for perfect score tracking</p>
          </div>

          <div className="features-grid">
            {[
              { icon: '⚡', title: 'Real-time Scoring', desc: 'Automatic calculations after each round' },
              { icon: '🌙', title: 'Dark Mode', desc: 'Play comfortably at night' },
              { icon: '📜', title: 'Game History', desc: 'Track all your matches' },
              { icon: '🧮', title: 'Smart Calculator', desc: 'Automatic score tracking' },
              { icon: '💾', title: 'Auto-Save', desc: 'Never lose your progress' },
              { icon: '📱', title: 'Mobile First', desc: 'Optimized for your device' }
            ].map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <div className="feature-arrow">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Types Section */}
      <section id="games" className="games-section" data-animate="true">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Score Tracking For</h2>
            <p className="section-subtitle">Keep track of your favorite games</p>
          </div>

          <div className="games-grid">
            {[
              { img: dominoImage, title: 'Domino', desc: 'Track scores for all Domino game variations with automatic calculations' },
              { img: okeyImage, title: 'Okey', desc: 'Keep score for Okey games with smart tracking and history' }
            ].map((game, idx) => (
              <div key={idx} className="game-phone-container">
                <div className="phone-mockup">
                  <div className="phone-glow"></div>
                  <div className="phone-screen">
                    <img src={game.img} alt={game.title} />
                  </div>
                  <div className="phone-notch"></div>
                </div>
                <div className="game-info">
                  <h3 className="game-title">{game.title}</h3>
                  <p className="game-desc">{game.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="steps-section" data-animate="true">
        <div className="steps-container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Get started in three simple steps</p>
          </div>

          <div className="steps-grid">
            {[
              { num: '01', title: 'Create Group', desc: 'Enter your group name and player details' },
              { num: '02', title: 'Enter Scores', desc: 'Input scores after each round easily' },
              { num: '03', title: 'Track Progress', desc: 'Watch real-time calculations and statistics' }
            ].map((step, idx) => (
              <div key={idx} className="step">
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
                {idx < 2 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-box">
            <h2 className="cta-title">Ready to Track Scores Effortlessly?</h2>
            <p className="cta-desc">Join thousands of players using our score tracking utility</p>
            <div className="cta-badges">
              <a
                href="https://apps.apple.com/us/app/xallakanm/id6755054379"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAppStoreClick}
              >
                <img src={appStoreImg} alt="Download on App Store" />
              </a>
              <a
                href="https://dl.dropboxusercontent.com/scl/fi/1wmn0rvxj669pf6krl5dp/xallakanm.apk?rlkey=mipk6iogf1tsebszyn2ik93lt&dl=1"
                className="apk-download-button badge-container"
                download="xallakanm.apk"
                onClick={handlePlayStoreClick}
              >
                <img src={playStoreImg} alt="Get it on Google Play" />
                <span className="new-badge-overlay">NEW</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <a 
              href="https://hamagardy.com" 
              onClick={handleHamaGardyClick}
              className="footer-logo"
            >
              <img src={logo} alt="Hama Gardy" />
            </a>
            <div className="footer-links">
              <span>© 2025 Hama Gardy</span>
              <a href="mailto:admin@hamagardy.com">Contact</a>
              <a href="/data">Analytics</a>
              <a href="/xallaknm-privacy-policy.html" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
