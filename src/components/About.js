import React from "react";
import resume from "../assets/cv.pdf"; // Adjust the path if your PDF is elsewhere

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Hama_Gardy_CV.pdf"; // Change file name if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p>
          Hello, I'm Hama Gardy, an experienced IT professional and website developer with a passion for creating impactful digital solutions. My expertise lies in managing IT systems, building responsive websites, and crafting engaging content as a tech content creator. With over 12 years of experience in tools like Microsoft Office, Adobe Photoshop, and web development technologies, plus 2 years in office data management, I deliver innovative and efficient results. I’m also an official Snapchat Lens Network developer, dabbling in AR/VR and game development as creative side pursuits.
        </p>
        <button onClick={handleDownload} className="resume-button">
          Download My Resume
        </button>
      </div>
    </section>
  );
};

export default About;
