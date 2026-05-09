import React, { useEffect, useRef, useState } from 'react';
import './prayer-times-page.css';
import appScreenshot from './assets/images/appscreen.jpg';
import appIcon from './assets/images/adaptive-icon.png';
import prayIcon from './assets/images/pray.png';
import quranIcon from './assets/images/quran.png';
import kaaba from './assets/images/kaaba.png';
import tasbeh from './assets/images/tasbeh.png';
import adkhar from './assets/images/adkhar.png';
import mosque from './assets/images/mosque.png';

const appStoreImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png';
const playStoreImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png';

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
              <img src={appIcon} alt="کاتەکانی بانگ پڵەس" />
              <span>کاتەکانی بانگ پڵەس</span>
            </div>
            <div className="nav-links">
              <a href="#features">تایبەتمەندییەکان</a>
              <a href="#how-it-works">چۆنیەتی کارکردن</a>
              <a href="#download">داگرتن</a>
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
                <span>هاوڕێی ئیسلامیی تەواو</span>
              </div>

              <h1 className="hero-title">
                هیچ نوێژێک لەدەست مەدە
                <span className="hero-title-gradient">بە ئامانج بژی</span>
              </h1>

              <p className="hero-description">
                کاتەکانی نوێژی وردبین، قورئانی تەواو، قیبلەنما، و زیاتر - ئەپی ئیسلامیی یەکگرتووت بۆ کوردستان
              </p>

              <div className="hero-badges">
                <a
                  href="https://apps.apple.com/app/idYOUR_APP_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appStoreImg} alt="داگرتن لە ئەپ ستۆر" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.hamagardy.prayertimesplus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={playStoreImg} alt="داگرتن لە گووگڵ پلەی" />
                </a>
              </div>
            </div>

            <div className="hero-image" data-animate="true" id="hero-image">
              <div>
                <div className="phone-mockup">
                  <div className="phone-glow"></div>
                  <div className="phone-screen">
                    <img src={appScreenshot} alt="پێشبینینی ئەپ" />
                  </div>
                  <div className="phone-notch"></div>
                </div>
              </div>

              <div className="floating-element floating-element-1">
                <img src={prayIcon} alt="نوێژ" />
              </div>

              <div className="floating-element floating-element-2">
                <img src={quranIcon} alt="قورئان" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section" data-animate="true">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">هەموو ئەوەی پێویستە بۆ باوەڕەکەت</h2>
            <p className="section-subtitle">
              تایبەتمەندییە بەهێزەکان بۆ بەرزکردنەوەی گەشتی ڕۆحیت
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: prayIcon,
                title: 'کاتەکانی نوێژی وردبین',
                desc: 'کاتەکانی نوێژی وردبین بۆ هەموو شارەکانی کوردستان لەگەڵ ئاگادارکردنەوە'
              },
              {
                icon: quranIcon,
                title: 'قورئانی تەواو',
                desc: 'قورئانی تەواو لەگەڵ وەرگێڕانی کوردی و خوێندنەوەی دەنگی'
              },
              {
                icon: kaaba,
                title: 'قیبلەنما',
                desc: 'دۆزینەوەی ئاراستەی قیبلەی وردبین لە هەر شوێنێکەوە بە GPS'
              },
              {
                icon: tasbeh,
                title: 'تەسبێحی دیجیتاڵ',
                desc: 'ژمێرەری ئەلیکترۆنی و تەسبێح بۆ زیکری ڕۆژانە'
              },
              {
                icon: adkhar,
                title: 'ئەزکاری ڕۆژانە',
                desc: 'دوعاکانی بەیانی، ئێوارە و دوای نوێژ'
              },
              {
                icon: mosque,
                title: 'دۆزەرەوەی مزگەوت',
                desc: 'دۆزینەوەی نزیکترین مزگەوتەکان بۆ شوێنی ئێستات'
              }
            ].map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
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
            <h2 className="section-title">چۆنیەتی کارکردن</h2>
            <p className="section-subtitle">دەستپێکردنی گەشتی ڕۆحیت بە سێ هەنگاوی سادە</p>
          </div>

          <div className="steps-grid">
            {[
              {
                num: '٠١',
                title: 'داگرتن و ڕێکخستن',
                desc: 'ئەپەکە دابگرە و شارەکەت هەڵبژێرە بۆ کاتەکانی نوێژی وردبین'
              },
              {
                num: '٠٢',
                title: 'چالاککردنی ئاگادارکردنەوە',
                desc: 'بیرخستنەوە وەربگرە پێش هەر کاتێکی نوێژ و هیچ نوێژێک لەدەست مەدە'
              },
              {
                num: '٠٣',
                title: 'شوێنکەوتن و گەشەکردن',
                desc: 'شوێنی نوێژەکانت بکەوە، قورئان بخوێنەوە و باوەڕەکەت بەهێزتر بکە'
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
            <h2 className="cta-title">ئامادەیت بۆ بەهێزکردنی باوەڕەکەت؟</h2>
            <p className="cta-desc">
              بەشداری بە بە هەزاران موسڵمان بکە کە کاتەکانی بانگ پڵەس بەکاردەهێنن بۆ عیبادەتی ڕۆژانەیان
            </p>

            <div className="cta-badges">
              <a
                href="https://apps.apple.com/app/idYOUR_APP_ID"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appStoreImg} alt="داگرتن لە ئەپ ستۆر" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.hamagardy.prayertimesplus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playStoreImg} alt="داگرتن لە گووگڵ پلەی" />
              </a>
            </div>

            <p className="cta-note">بەخۆڕایی داگرتن • بێ ڕیکلام • گرنگیدان بە تایبەتێتی</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={appIcon} alt="کاتەکانی بانگ پڵەس" />
              <span>کاتەکانی بانگ پڵەس</span>
            </div>
            <div className="footer-links">
              <span>© ٢٠٢٦ هەماگەردی</span>
              <a href="mailto:admin@hamagardy.com">پەیوەندی</a>
              <a href="/prayer-times-plus-privacy-policy.html" target="_blank" rel="noopener noreferrer">
                سیاسەتی تایبەتێتی
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
