import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

// Lazy load heavy components
const About = lazy(() => import('./components/About'));
const Resume = lazy(() => import('./components/Resume'));
const Projects = lazy(() => import('./components/Projects'));
const Snapchat = lazy(() => import('./components/Snapchat/Snapchat'));
const Shop = lazy(() => import('./components/Shop'));
const Contact = lazy(() => import('./components/Contact'));
const XallaknmPage = lazy(() => import('./xallaknm/XallaknmPage'));
const BannersPreview = lazy(() => import('./xallaknm/BannersPreview'));
const SmokeFreePage = lazy(() => import('./smokefree/SmokeFreePage'));
const PrayerTimesPage = lazy(() => import('./prayer-times-plus/PrayerTimesPage'));

import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/sections.css";
import "./styles/animations.css";
import "./styles/resume.css";
import "./styles/project.css";
import "./styles/shop.css";
import "./styles/footer.css";
import "./styles/xallaknm-landing.css";

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh',
    fontSize: '1.5rem',
    color: '#666'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/portfolio" element={
          <div className="min-h-screen">
            <Navbar />
            <Home />
            <Suspense fallback={<LoadingFallback />}>
              <About />
              <Resume />
              <Projects />
              <Snapchat />
              <Shop />
              <Contact />
            </Suspense>
            <Footer />
          </div>
        } />
        <Route path="/xallaknm" element={
          <Suspense fallback={<LoadingFallback />}>
            <XallaknmPage />
          </Suspense>
        } />
        <Route path="/xallaknm/banners" element={
          <Suspense fallback={<LoadingFallback />}>
            <BannersPreview />
          </Suspense>
        } />
        <Route path="/xallaknm/banners-preview" element={
          <Suspense fallback={<LoadingFallback />}>
            <BannersPreview />
          </Suspense>
        } />
        <Route path="/smokefree" element={
          <Suspense fallback={<LoadingFallback />}>
            <SmokeFreePage />
          </Suspense>
        } />
        <Route path="/prayer-times-plus" element={
          <Suspense fallback={<LoadingFallback />}>
            <PrayerTimesPage />
          </Suspense>
        } />
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
