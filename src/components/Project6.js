import React from "react";
import xallakanmImg from "../xallaknm/assets/X1.png";
import xallakanmIcon from "../xallaknm/assets/xallakanm.png.png";

const Project6 = ({ isPreviewOpen, closePreview, openPreview }) => {
  const project = {
    id: "Project6",
    title: "Xallakanm - Score Tracking App",
    description:
      "A professional mobile app for tracking scores in Domino and Okey games, featuring real-time calculations, dark mode, and game history with automatic save functionality.",
    fullInfo:
      "Xallakanm is a comprehensive score tracking utility app I developed for iOS and Android platforms. The app provides: Mobile App Development – Built a native mobile application with smooth performance and intuitive user interface for tracking game scores. Key Features – Real-time score calculations, dark mode support, automatic save functionality, game history tracking, and smart calculator for multiple game types including Domino and Okey. User Experience – Designed with a mobile-first approach, featuring animated backgrounds, smooth transitions, and an easy-to-use interface that makes score tracking effortless during gameplay. Landing Page & Marketing – Created a modern landing page with animated elements, feature showcases, and download links. The app is currently available on the App Store and helps thousands of players track their game scores professionally.",
    image: xallakanmImg,
    icon: xallakanmIcon,
    previewUrl: "https://apps.apple.com/us/app/xallakanm/id6755054379",
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
            {project.icon && (
              <div className="preview-additional-images">
                <img
                  src={project.icon}
                  alt="App Icon"
                  className="preview-logo project-image"
                />
              </div>
            )}
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

export default Project6;
