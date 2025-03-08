import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
          <a href="#snapchat">Snapchat</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a
            href="https://x.com/Hamagardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSquareXTwitter} className="footer-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/hama-gardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
          </a>

          <a
            href="https://www.instagram.com/_hama_gardy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          </a>

          <a
            href="https://snapchat.com/add/itzgardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSnapchat} className="footer-icon" />
          </a>

          <a
            href="https://youtube.com/@hamagardy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
          </a>
        </div>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Hama Gardy
        </p>
      </div>
    </footer>
  );
}

export default Footer;
