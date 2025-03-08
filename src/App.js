import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Snapchat from "./components/Snapchat/Snapchat";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/sections.css";
import "./styles/animations.css";
import "./styles/resume.css";
import "./styles/project.css";
import "./styles/snapchat.css";
import "./styles/footer.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.classList.add("visible");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            if (entry.intersectionRatio >= 0.5) {
              const newActiveSection = entry.target.id;
              if (newActiveSection !== activeSection) {
                if (activeSection) {
                  const prevSection = document.getElementById(activeSection);
                  if (
                    prevSection &&
                    !prevSection.getBoundingClientRect().top >= 0
                  ) {
                    prevSection.classList.remove("visible");
                  }
                }
                setActiveSection(newActiveSection);

                // Track section view with Woopra
                if (window.woopra) {
                  window.woopra.track("section_view", {
                    section: newActiveSection,
                    url: window.location.pathname,
                  });
                }

                // Track section view with Google Analytics (GA4)
                if (window.gtag) {
                  window.gtag("event", "page_view", {
                    page_title:
                      newActiveSection.charAt(0).toUpperCase() +
                      newActiveSection.slice(1), // Capitalize for readability
                    page_location: `${window.location.pathname}#${newActiveSection}`,
                    page_path: `/${newActiveSection}`,
                  });
                }

                // Reinitialize Snapchat embeds when Snapchat section is active
                if (newActiveSection === "snapchat" && window.SnapchatEmbed) {
                  window.SnapchatEmbed.init();
                }
              }
            }
          }
        });
      },
      { threshold: [0, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));

    let lastScrollY = window.scrollY;
    const logo = document.querySelector(".logo");
    let rotationAngle = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (activeSection === "home" && currentScrollY < 50) {
        rotationAngle = 0;
      } else {
        rotationAngle += scrollDelta * 0.5;
      }

      if (logo) {
        logo.style.transform = `rotate(${rotationAngle}deg)`;
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Snapchat />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
