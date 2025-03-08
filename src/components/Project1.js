import React from "react";
import project1Img from "../assets/akocompany.png";
import logoPreview from "../assets/ac.png";
import socialMediaPreview from "../assets/akogrid.png";

const Project1 = ({ isPreviewOpen, closePreview, openPreview }) => {
  const project = {
    id: "Project1",
    title: "Ako Company",
    description:
      "I provided Ako Company with website development, hosting, logo design, social media visuals, and ad management, helping enhance its digital presence and attract more customers.",
    fullInfo:
      "For Ako Company, I provided a complete digital branding solution, including Website Development & Hosting – Designed and hosted a responsive, user-friendly website. Logo Design – Created a unique and professional logo to represent the brand. Social Media Design & Ads Management – Developed engaging social media visuals and managed ad campaigns to boost online presence. This project helped Ako Company establish a strong digital identity and attract more customers.",
    image: project1Img,
    logo: logoPreview,
    socialMedia: socialMediaPreview,
    previewUrl: "https://www.akocompany.co/",
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
            <div className="preview-additional-images">
              <img
                src={project.logo}
                alt="Logo Design Preview"
                className="preview-logo project-image"
              />
              <img
                src={project.socialMedia}
                alt="Social Media Design Preview"
                className="preview-social-media project-image"
              />
            </div>
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

export default Project1;
