import React from "react";
import project3Img from "../assets/kurdbox.png";

const Project3 = ({ isPreviewOpen, closePreview, openPreview }) => {
  const project = {
    id: "Project3",
    title: "Kurdbox - Cydia Alternative",
    description:
      "The most powerful Kurdish app store, offering a wide range of free and premium apps, jailbreak tools, and more.",
    fullInfo:
      "Kurdbox was the best app for downloading:\n      - Tutu Helper\n      - Jailbreak tools\n      - The best App Store apps\n      - Paid apps for free\n      - A collection of hacked games\n      - Streaming apps for movies and TV shows\n      - BeinSports channels and more\n      - Over 45+ premium apps available\n      - Direct chat support for troubleshooting",
    image: project3Img,
  };

  return (
    <>
      <div className="project-card">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <div className="project-content">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <button
            className="project-button"
            onClick={() => openPreview(project)}
          >
            More Info
          </button>
        </div>
      </div>

      {isPreviewOpen && (
        <div className="project-preview">
          <div className="preview-content">
            <img
              src={project.image}
              alt={project.title}
              className="preview-image"
            />
            <h3 className="preview-title">{project.title}</h3>
            <p className="preview-full-info">{project.fullInfo}</p>
            <div className="preview-buttons">
              <button className="preview-close-button" onClick={closePreview}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project3;
