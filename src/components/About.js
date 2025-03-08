import React from "react";
import resume from "../assets/cv.pdf"; // Adjust the path if your PDF is elsewhere

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p>
        Hello, I'm Hama Gardy, an experienced IT professional and website developer with a passion for creating impactful digital solutions. My expertise lies in managing IT systems, building responsive websites, and crafting engaging content as a tech content creator. With over 12 years of experience in tools like Microsoft Office, Adobe Photoshop, and web development technologies, plus 2 years in office data management, I deliver innovative and efficient results. I’m also an official Snapchat Lens Network developer, dabbling in AR/VR and game development as creative side pursuits.
        </p>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View My Resume
        </a>
      </div>
    </section>
  );
};

export default About;
