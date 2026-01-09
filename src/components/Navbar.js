import React, { useState, useEffect } from "react";
import logo from "../assets/hg2.png"; // Light mode logo
import logo2 from "../assets/hg.png"; // Dark mode logo
import { FiMenu, FiX } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Default to dark mode
  const navigate = useNavigate();

  // Apply dark mode class to body on initial render and when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const scrollToTop = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <img
        src={darkMode ? logo2 : logo} // logo2 for dark mode, logo for light mode
        alt="Logo"
        className="logo"
        onClick={scrollToTop}
      />
      <div className="menu-toggle-container">
        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
        {/* Menu Button */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a href={`/portfolio`} onClick={(e) => {
            e.preventDefault();
            navigate(`/portfolio`);
            scrollToSection("home");
            setMenuOpen(false);
          }}>
            Home
          </a>
        </li>
        <li>
          <a href={`/portfolio`} onClick={(e) => {
            e.preventDefault();
            navigate(`/portfolio`);
            scrollToSection("about");
            setMenuOpen(false);
          }}>
            About
          </a>
        </li>
        <li>
          <a href={`/portfolio`} onClick={(e) => {
            e.preventDefault();
            navigate(`/portfolio`);
            scrollToSection("resume");
            setMenuOpen(false);
          }}>
            Resume
          </a>
        </li>
        <li>
          <a href={`/portfolio`} onClick={(e) => {
            e.preventDefault();
            navigate(`/portfolio`);
            scrollToSection("projects");
            setMenuOpen(false);
          }}>
            Projects
          </a>
        </li>
        <li>
          <a href={`/portfolio`} onClick={(e) => {
            e.preventDefault();
            navigate(`/portfolio`);
            scrollToSection("snapchat");
            setMenuOpen(false);
          }}>
            Snapchat
          </a>
        </li>
        <li>
          <a href={`/portfolio`} onClick={(e) => {
            e.preventDefault();
            navigate(`/portfolio`);
            scrollToSection("contact");
            setMenuOpen(false);
          }}>
            Contact
          </a>
        </li>
        <li>
          <a href={`/portfolio`} onClick={(e) => {
            e.preventDefault();
            navigate(`/portfolio`);
            scrollToSection("shop");
            setMenuOpen(false);
          }}>
            Shop
          </a>
        </li>
        <li>
          <a href="/xallaknm" onClick={() => setMenuOpen(false)}>
            Xallaknm App
          </a>
        </li>
        <li>
          <a href="/smokefree.html" onClick={() => setMenuOpen(false)}>
            SmokeFree App
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
