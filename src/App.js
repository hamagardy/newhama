import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Snapchat from './components/Snapchat/Snapchat';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import XallaknmPage from './xallaknm/XallaknmPage';
import BannersPreview from './xallaknm/BannersPreview';
import SmokeFreePage from './smokefree/SmokeFreePage';
import PrayerTimesPage from './prayer-times-plus/PrayerTimesPage';
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

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/portfolio" element={
          <div className="min-h-screen">
            <Navbar />
            <Home />
            <About />
            <Resume />
            <Projects />
            <Snapchat />
            <Shop />
            <Contact />
            <Footer />
          </div>
        } />
        <Route path="/xallaknm" element={<XallaknmPage />} />
        <Route path="/xallaknm/banners" element={<BannersPreview />} />
        <Route path="/xallaknm/banners-preview" element={<BannersPreview />} />
        <Route path="/smokefree" element={<SmokeFreePage />} />
        <Route path="/prayer-times-plus" element={<PrayerTimesPage />} />
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
