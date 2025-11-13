import React from "react";
import dabanImg from "../assets/db.jpg";

const Project5 = ({ isPreviewOpen, closePreview, openPreview }) => {
  const project = {
    id: "Project5",
    title: "Daban Group",
    description:
      "A professional corporate website for Daban Group, featuring custom design, full development, and reliable hosting services to establish their strong online presence.",
    fullInfo:
      "For Daban Group, I delivered a complete web solution from concept to deployment. Website Design & Development – Designed and built a modern, professional website that reflects their corporate identity and showcases their business services effectively. The site features a clean, intuitive interface with smooth navigation and engaging layouts. Hosting & Deployment – Set up reliable hosting infrastructure to ensure optimal performance, security, and uptime for their online presence. The website is fully responsive across all devices and optimized for search engines, helping Daban Group connect with clients and grow their business online.",
    image: dabanImg,
    previewUrl: "https://daban-group.com/",
  };

  return (
    <>
      <div className="project-card">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
        )}
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
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="preview-image project-image"
              />
            )}
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

export default Project5;
