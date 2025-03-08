import React, { useState } from "react";
import menuGif from "../assets/menu.gif";

const HGMenu = ({ isPreviewOpen, closePreview, openPreview }) => {
  const [view, setView] = useState("grid");
  const [previewProject, setPreviewProject] = useState(null);

  const project = {
    id: "HGMenu",
    title: "HG Menu",
    description:
      "A digital menu builder for restaurants, supporting three languages and customizable colors.",
    fullInfo:
      "HG Menu is a powerful digital menu solution for restaurants. It supports three languages, allows businesses to choose their own colors, and provides an intuitive interface to switch between grid and list views. Enhance customer experience with a modern, flexible menu display.",
    previewUrl: "https://example.com/hg-menu-preview",
  };

  const handleOpenPreview = () => {
    setPreviewProject(project);
  };

  return (
    <>
      <div className={`project-card ${view}`}>
        <img src={menuGif} alt="Menu Preview" className="project-image" />
        <div className="project-content">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <button className="project-button" onClick={handleOpenPreview}>
            More Info
          </button>
        </div>
      </div>

      {previewProject && (
        <div className="project-preview">
          <div className="preview-content">
            <img src={menuGif} alt="Menu Preview" className="preview-image" />
            <h3 className="preview-title">{previewProject.title}</h3>
            <p className="preview-full-info">{previewProject.fullInfo}</p>
            <div className="preview-buttons">
              <button
                className="preview-close-button"
                onClick={() => setPreviewProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="about-section">
        <h3>About HG Menu</h3>
        <p>
          HG Menu is designed to help restaurants easily create and customize
          their digital menus. Choose from three languages, personalize the
          colors, and switch between grid and list views to best suit your
          business needs.
        </p>
      </div>
    </>
  );
};

export default HGMenu;
