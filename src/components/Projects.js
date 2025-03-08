import React, { useState } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import "../styles/project.css";

function Projects() {
  const [previewProject, setPreviewProject] = useState(null);

  const openPreview = (project) => {
    setPreviewProject(project);
  };

  const closePreview = () => {
    setPreviewProject(null);
  };

  return (
    <section id="projects" className="projects-section px-4 py-16 md:px-16">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <Project1
          isPreviewOpen={previewProject && previewProject.id === "Project1"}
          closePreview={closePreview}
          openPreview={openPreview}
        />
        <Project2
          isPreviewOpen={previewProject && previewProject.id === "Project2"}
          closePreview={closePreview}
          openPreview={openPreview}
        />
        <Project3
          isPreviewOpen={previewProject && previewProject.id === "Project3"}
          closePreview={closePreview}
          openPreview={openPreview}
        />
        <Project4
          isPreviewOpen={previewProject && previewProject.id === "Project4"}
          closePreview={closePreview}
          openPreview={openPreview}
        />
      </div>
    </section>
  );
}

export default Projects;
