import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faInstagram,
  faSnapchat,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import me from "../assets/me.png"; // Ensure this file exists in src/assets/
import star from "../assets/star.png"; // Ensure this file exists in src/assets/
import "../styles/home.css";

const Home = () => {
  const roles = [
    <span>
      IT Assistant{" "}
      <a
        href="https://shoofco.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="shoof-link"
      >
        @ShoofCompany
      </a>
    </span>,
    "Official Snap Lens Network Developer⠀", // 3 spaces for alignment
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.classList.add("fadeIn");
    }

    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseScrollClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-text">
        <h3 className="home-greeting">
          Hello I’m Hama Gardy
          <span style={{ display: "none" }}>👋</span>
          <img src={star} alt="star" className="home-star" />
        </h3>
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
          <div className="mouse-scroll" onClick={handleMouseScrollClick}>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={me} alt="Profile" className="profile-picture" />
      </div>
      <div className="home-social-links">
        <a
          href="https://www.linkedin.com/in/hama-gardy"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://x.com/Hamagardy_"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </a>
        <a
          href="https://www.instagram.com/_hama_gardy/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://snapchat.com/add/itzgardy"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faSnapchat} />
        </a>
        <a
          href="https://youtube.com/@hamagardy"
          target="_blank"
          rel="noopener noreferrer"
          className="home-social-link"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </section>
  );
};

export default Home;
