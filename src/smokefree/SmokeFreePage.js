import React, { useEffect, useRef, useState } from 'react';
import './styles/smokefree-page.css';

import appScreenshot from './assets/appscreen.PNG';
import appIcon from './assets/icon.png';
import logo from '../assets/hg.png';

const appStoreImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png';

export default function SmokeFreePage() {
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
    <div className="smokefree-page min-h-screen">
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
              <img src={appIcon} alt="SmokeFree" />
              <span>SmokeFree</span>
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
                <span>Your Quit Smoking Companion</span>
              </div>

              <h1 className="hero-title">
                Quit Smoking.
                <span className="hero-title-gradient">Start Living.</span>
              </h1>

              <p className="hero-description">
                Track your progress, save money, and improve your health with SmokeFree - your personal quit smoking companion.
              </p>

              <div className="hero-badges">
                <a
                  href="https://apps.apple.com/app/id6756564515"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appStoreImg} alt="Download on App Store" />
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <h2 className="section-title">Everything You Need to Quit</h2>
            <p className="section-subtitle">Powerful features to help you on your journey to a smoke-free life</p>
          </div>

          <div className="features-grid">
            {[
              { icon: '📊', title: 'Track Your Progress', desc: 'Log every cigarette and see your daily, weekly, and monthly trends' },
              { icon: '💰', title: 'Save Money', desc: 'See exactly how much money you\'re saving by cutting down' },
              { icon: '🎯', title: 'Set Goals', desc: 'Set daily limits and track your progress towards quitting' },
              { icon: '🔔', title: 'Smart Reminders', desc: 'Get motivational notifications to keep you on track' },
              { icon: '❤️', title: 'Health Tracking', desc: 'Monitor your health improvements with Apple Health integration' },
              { icon: '🌍', title: 'Multi-Language', desc: 'Available in English, Arabic, Kurdish, and Turkish' }
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

      {/* How It Works */}
      <section id="how-it-works" className="steps-section" data-animate="true">
        <div className="steps-container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle">Start your journey in three simple steps</p>
          </div>

          <div className="steps-grid">
            {[
              { num: '01', title: 'Download & Setup', desc: 'Download the app and complete a quick onboarding to set your goals' },
              { num: '02', title: 'Track Daily', desc: 'Log each cigarette and monitor your progress with real-time statistics' },
              { num: '03', title: 'Achieve Goals', desc: 'Watch your health improve and money saved as you reduce smoking' }
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
            <h2 className="cta-title">Ready to Quit Smoking?</h2>
            <p className="cta-desc">Join thousands of users on their journey to a healthier life</p>
            <div className="cta-badges">
              <a
                href="https://apps.apple.com/app/id6756564515"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appStoreImg} alt="Download on App Store" />
              </a>
            </div>
            <p className="cta-note">Free to download • Premium features available</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <a 
              href="https://hamagardy.com" 
              className="footer-logo"
            >
              <img src={logo} alt="Hama Gardy" />
            </a>
            <div className="footer-links">
              <span>© 2025 Hama Gardy</span>
              <a href="mailto:admin@hamagardy.com">Contact</a>
              <a href="/smokefree-privacy-policy.html" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
