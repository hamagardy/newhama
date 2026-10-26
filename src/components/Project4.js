import React, { useState } from "react";
// The card shows a still poster; the 200-frame animation is only fetched
// once the preview modal is actually opened.
import menuPoster from "../assets/menu-poster.webp";
import menuAnim from "../assets/menu-anim.webp";

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
        <img
          src={menuPoster}
          alt="Menu Preview"
          className="project-image"
          width="800"
          height="451"
          loading="lazy"
          decoding="async"
        />
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
            <img
              src={menuAnim}
              alt="Menu Preview"
              className="preview-image project-image-center"
              width="560"
              height="316"
              decoding="async"
            />
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
    </>
  );
};

export default HGMenu;
