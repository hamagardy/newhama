import React from "react";
import smokeFreeImg from "../assets/smokefree-app.png";

const Project7 = ({ isPreviewOpen, closePreview, openPreview }) => {
  const project = {
    id: "Project7",
    title: "SmokeFree",
    description:
      "A comprehensive quit smoking app that helps users track their progress, save money, and improve their health with smart features and motivational tools.",
    fullInfo:
      "SmokeFree is a powerful mobile application designed to help people quit smoking and track their journey to a healthier life. Track Your Progress – Log every cigarette and see your daily, weekly, and monthly trends with beautiful charts and statistics. Save Money – Calculate exactly how much money you're saving by cutting down on cigarettes. Set Goals – Set daily limits and track your progress towards your quit smoking goals with smart reminders. Health Tracking – Monitor your health improvements with Apple Health integration. The app features multi-language support (English, Arabic, Kurdish, and Turkish), motivational notifications, and a clean, intuitive interface. Available on iOS with premium features for advanced tracking and insights.",
    image: smokeFreeImg,
    previewUrl: "https://apps.apple.com/app/id6756564515",
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
                View on App Store
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

export default Project7;
