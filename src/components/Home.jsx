import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faInstagram,
  faSnapchat,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import me from "../assets/me.webp";
import star from "../assets/star.webp";
import xallakanmIcon from "../xallaknm/assets/app-icon.webp";
import prayerIcon from "../prayer-times-plus/assets/images/adaptive-icon.webp";
import smokefreeIcon from "../smokefree/assets/icon.webp";
import "../styles/home.css";

const apps = [
  { name: "Xallakanm", icon: xallakanmIcon, href: "/xallaknm" },
  { name: "Prayer Times +", icon: prayerIcon, href: "/prayer-times-plus" },
  { name: "SmokeFree", icon: smokefreeIcon, href: "/smokefree" },
];

const Home = () => {
  const roles = [
    <span>
      IT Officer{" "}
      <a
        href="https://shoofco.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="shoof-link"
      >
        @ShoofCompany
      </a>
    </span>,
    "Official Snap Lens Network Developer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  };

  const handleMouseScrollClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="hero-atmosphere" aria-hidden="true"><span className="hero-blob blob-one" /><span className="hero-blob blob-two" /></div>
      <div className="home-text">
        <h1 className="home-greeting" aria-label="Hello I’m Hama Gardy">
          {['Hello', 'I’m', 'Hama', 'Gardy'].map(word => <span className="hero-word" aria-hidden="true" key={word}>{word}</span>)}
          <img src={star} alt="" aria-hidden="true" className="home-star" width="32" height="32" />
        </h1>
        <p className="home-role">
          <span className="role-text" key={currentRoleIndex}>
            {roles[currentRoleIndex]}
          </span>
        </p>
        <p className="home-about">
          I'm a Technologist based in Iraqi Kurdistan, passionate about creating
          innovative solutions.
        </p>
        <div className="home-btn">
          <button className="home-contact-btn" onClick={handleContactClick}>
            Contact Me
          </button>
        </div>
      </div>
      <div className="home-image">
        <div className="portrait-float"><img 
          src={me}
          alt="Profile"
          className="profile-picture"
          width="560"
          height="591"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        </div>
        <button className="mouse-scroll" aria-label="Scroll to About Me" onClick={handleMouseScrollClick}>
          <span className="mouse">
            <span className="wheel"></span>
          </span>
        </button>
      </div>
      <div className="home-social-links">
        <a
          href="https://www.linkedin.com/in/hama-gardy"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
        </a>
        <a
          href="https://x.com/Hamagardy_"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faSquareXTwitter} title="X" />
        </a>
        <a
          href="https://www.instagram.com/_hama_gardy/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faInstagram} title="Instagram" />
        </a>
        <a
          href="https://snapchat.com/add/itzgardy"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faSnapchat} title="Snapchat" />
        </a>
        <a
          href="https://youtube.com/@hamagardy"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faYoutube} title="YouTube" />
        </a>

        <span className="home-rail-divider" aria-hidden="true" />

        {apps.map((app, index) => (
          <a
            key={app.name}
            href={app.href}
            className="home-app-link"
            style={{ "--app-index": index }}
            aria-label={app.name}
          >
            <img
              src={app.icon}
              alt={app.name}
              className="home-app-icon"
              width="36"
              height="36"
              decoding="async"
            />
            <span className="home-app-name">{app.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Home;
