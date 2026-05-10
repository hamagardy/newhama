import React, { useEffect, useRef, useState } from 'react';
import './prayer-times-page.css';
import appScreenshot from './assets/images/appscreen.jpg';
import appIcon from './assets/images/adaptive-icon.png';

const appStoreImg = 'https://www.codepas.com.br/site/wp-content/uploads/2021/01/app-store-badge.png';
const playStoreImg = 'https://www.gov.br/pt-br/imagens-de-servicos/googleplay.png';

export default function PrayerTimesPage() {
  const [isVisible, setIsVisible] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
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

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="prayer-times-page min-h-screen">
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
              <img src={appIcon} alt="کاتەکانی بانگ Prayer Time +" />
              <span>کاتەکانی بانگ Prayer Time +</span>
            </div>
            <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#download">Download</a>
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
                <span>Complete Islamic Companion</span>
              </div>

              <h1 className="hero-title">
                Never Miss a Prayer
                <span className="hero-title-gradient">Live with Purpose</span>
              </h1>

              <p className="hero-description">
                Accurate prayer times, complete Quran, Qibla compass, and more - your all-in-one Islamic app for Kurdistan.
              </p>

              <div className="hero-badges">
                <a
                  href="https://apps.apple.com/app/idYOUR_APP_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appStoreImg} alt="Download on App Store" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hamagardy.prayertimesplus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={playStoreImg} alt="Get it on Google Play" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <div className="floating-element floating-element-2">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <h2 className="section-title">Everything You Need for Your Faith</h2>
            <p className="section-subtitle">
              Powerful features to enhance your spiritual journey
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: '🕌',
                title: 'Accurate Prayer Times',
                desc: 'Precise prayer times for all Kurdistan cities with notifications'
              },
              {
                icon: '📖',
                title: 'Complete Quran',
                desc: 'Full Quran with Kurdish translation and audio recitation'
              },
              {
                icon: '🧭',
                title: 'Qibla Compass',
                desc: 'Find accurate Qibla direction from anywhere using GPS'
              },
              {
                icon: '📿',
                title: 'Digital Tasbih',
                desc: 'Electronic counter and prayer beads for daily dhikr'
              },
              {
                icon: '🤲',
                title: 'Daily Adhkar',
                desc: 'Morning, evening, and post-prayer supplications'
              },
              {
                icon: '💰',
                title: 'Zakat Calculator',
                desc: 'Calculate Zakat on gold and money with live rates'
              },
              {
                icon: '🌙',
                title: 'Ramadan Tracker',
                desc: 'Track fasting, prayers, and worship during Ramadan'
              },
              {
                icon: '📍',
                title: 'Mosque Finder',
                desc: 'Find nearest mosques to your current location'
              },
              {
                icon: '✨',
                title: '99 Names of Allah',
                desc: 'Beautiful names with meanings and transliterations'
              },
              {
                icon: '🤖',
                title: 'AI Islamic Q&A',
                desc: 'Ask Islamic questions and get instant answers'
              },
              {
                icon: '📱',
                title: 'Home Widgets',
                desc: 'Prayer times widgets for iOS and Android'
              },
              {
                icon: '✅',
                title: 'Prayer Tracking',
                desc: 'Track daily prayers and build prayer streaks'
              }
            ].map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
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
            <p className="section-subtitle">Start your spiritual journey in three simple steps</p>
          </div>

          <div className="steps-grid">
            {[
              {
                num: '01',
                title: 'Download & Setup',
                desc: 'Download the app and select your city for accurate prayer times'
              },
              {
                num: '02',
                title: 'Enable Notifications',
                desc: 'Get reminded before each prayer time and never miss a prayer'
              },
              {
                num: '03',
                title: 'Track & Grow',
                desc: 'Track your prayers, read Quran, and strengthen your faith daily'
              }
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
      <section id="download" className="cta-section">
        <div className="cta-container">
          <div className="cta-box">
            <h2 className="cta-title">Ready to Strengthen Your Faith?</h2>
            <p className="cta-desc">
              Join thousands of Muslims using کاتەکانی بانگ Prayer Time + for their daily worship
            </p>

            <div className="cta-badges">
              <a
                href="https://apps.apple.com/app/idYOUR_APP_ID"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appStoreImg} alt="Download on App Store" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.hamagardy.prayertimesplus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playStoreImg} alt="Get it on Google Play" />
              </a>
            </div>

            <p className="cta-note">Free to download • No ads • Privacy focused</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={appIcon} alt="کاتەکانی بانگ Prayer Time +" />
              <span>کاتەکانی بانگ Prayer Time +</span>
            </div>
            <div className="footer-links">
              <span>© 2026 Hamagardy</span>
              <a href="mailto:admin@hamagardy.com">Contact</a>
              <a href="/prayer-times-plus-privacy-policy.html" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
