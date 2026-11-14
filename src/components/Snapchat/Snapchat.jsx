import React, { useState } from "react";
import SnapchatAbout from "./SnapchatAbout";
import SnapchatSnapAR from "./SnapchatSnapAR";
import SnapchatProjects from "./SnapchatProjects";
import SnapchatSnapMap from "./SnapchatSnapMap";
import "../../styles/snapchat.css"; // Adjust path based on your structure

const Snapchat = () => {
  const [activePage, setActivePage] = useState("about"); // Default to "About" page

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <section id="snapchat" className="snapchat-section px-4 py-16 md:px-16">
      <div className="snapchat-content">
        <h2 className="snapchat-title">Snapchat</h2>
        <div className="snapchat-nav">
          <button
            className={`snapchat-nav-button ${
              activePage === "about" ? "active" : ""
            }`}
            onClick={() => handlePageChange("about")}
          >
            About
          </button>
          <button
            className={`snapchat-nav-button ${
              activePage === "snapar" ? "active" : ""
            }`}
            onClick={() => handlePageChange("snapar")}
          >
            SnapAR
          </button>
          <button
            className={`snapchat-nav-button ${
              activePage === "projects" ? "active" : ""
            }`}
            onClick={() => handlePageChange("projects")}
          >
            Projects
          </button>
          <button
            className={`snapchat-nav-button ${
              activePage === "snapmap" ? "active" : ""
            }`}
            onClick={() => handlePageChange("snapmap")}
          >
            SnapMap
          </button>
        </div>
        <div className="snapchat-page-content">
          {activePage === "about" && <SnapchatAbout />}
          {activePage === "snapar" && <SnapchatSnapAR />}
          {activePage === "projects" && <SnapchatProjects />}
          {activePage === "snapmap" && <SnapchatSnapMap />}
        </div>
      </div>
    </section>
  );
};

export default Snapchat;
