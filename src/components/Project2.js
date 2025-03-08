import React from "react";
import project2Img from "../assets/sh.png";

const Project2 = ({ isPreviewOpen, closePreview, openPreview }) => {
  const project = {
    id: "Project2",
    title: "Sharez Company",
    description:
      "I provided Sharez Company with website development, design, hosting, and data analysis to optimize their digital strategy and performance.",
    fullInfo:
      "For Sharez Company, I developed and designed their website, ensuring a responsive and user-friendly experience. Additionally, I handled their hosting setup and managed their data analysis to improve business insights and performance. This project helped Sharez Company enhance its digital presence and make data-driven decisions for growth.",
    image: project2Img,
    previewUrl: "https://sharezmedicine.com/w_pp/",
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
              className="preview-image project-image"
            />
            <h3 className="preview-title">{project.title}</h3>
            <p className="preview-full-info">{project.fullInfo}</p>
            <div className="preview-buttons">
              <a
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="preview-open-button"
              >
                Open Website
              </a>
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

export default Project2;
