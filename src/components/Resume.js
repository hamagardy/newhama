import React, { useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaTools,
  FaNewspaper,
  FaBullhorn,
  FaDesktop,
  FaCircle,
} from "react-icons/fa";
import starIcon from "../assets/star.png";
import "../styles/resume.css";

function Resume() {
  const navRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll(".resume-category");
    const nav = navRef.current;

    const updateNavPosition = () => {
      let activeSectionId = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;

        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5
        ) {
          activeSectionId = section.id;
        }

        if (rect.top >= 0 && rect.top < window.innerHeight) {
          const resumeTop =
            document.getElementById("resume").getBoundingClientRect().top +
            window.scrollY;
          nav.style.top = `${sectionTop - resumeTop}px`;
        }
      });

      const buttons = nav.querySelectorAll(".resume-nav-button");
      buttons.forEach((button) => {
        const sectionId = button.dataset.section;
        if (sectionId === activeSectionId) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", updateNavPosition);
    updateNavPosition();

    return () => window.removeEventListener("scroll", updateNavPosition);
  }, []);

  const handleSectionClick = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="resume" className="resume-section px-4 py-16 md:px-16">
      <div className="resume-container">
        <div className="resume-nav" ref={navRef}>
          <button
            className="resume-nav-button"
            data-section="education"
            onClick={() => handleSectionClick("education")}
          >
            Education
          </button>
          <button
            className="resume-nav-button experience-button"
            data-section="experience"
            onClick={() => handleSectionClick("experience")}
          >
            Experience
          </button>
          <button
            className="resume-nav-button"
            data-section="skills"
            onClick={() => handleSectionClick("skills")}
          >
            Skills
          </button>
        </div>

        <div className="resume-content">
          {/* Education Section */}
          <div id="education" className="resume-category">
            <h2 className="resume-title">
              <FaGraduationCap className="resume-icon" />
              Education
            </h2>
            <div className="modern-edu-content">
              <p className="resume-about">
                Bachelor of Medical Laboratory Science
              </p>
              <div className="university-info">
                <FaCircle className="university-dot" />
                <span>Knowledge University, Erbil</span>
              </div>
              <div className="edu-duration">
                <span>Jan 2022 - Feb 2023</span>
              </div>
            </div>
          </div>
          {/* Experience Section */}
          <div id="experience" className="resume-category">
            <h2 className="resume-title">
              <FaBriefcase className="resume-icon" />
              Experience
            </h2>

            <div className="timeline-container">
              {/* Experience 1 */}
              <div className="experience-item">
                <div className="timeline-marker">
                  <div className="timeline-line"></div>
                  <FaCircle className="timeline-dot" />
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">
                    <FaNewspaper className="experience-icon" />
                    Article Writer, TechnologyPage
                    <span className="experience-duration">2016 - 2020</span>
                  </h3>
                  <p className="resume-about">
                    Wrote articles on Apple products, tech news, and trends for
                    independent publication.
                  </p>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="experience-item">
                <div className="timeline-marker">
                  <div className="timeline-line"></div>
                  <FaCircle className="timeline-dot" />
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">
                    <FaBullhorn className="experience-icon" />
                    Freelance Marketing Specialist, Sadaf Cleaning Co.
                    <span className="experience-duration">Duration TBD</span>
                  </h3>
                  <p className="resume-about">
                    Designed posts, managed Meta ad campaigns, and created
                    logos.
                  </p>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="experience-item">
                <div className="timeline-marker">
                  <div className="timeline-line"></div>
                  <FaCircle className="timeline-dot" />
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">
                    <FaBullhorn className="experience-icon" />
                    Freelance Marketing Specialist, Ako Company
                    <span className="experience-duration">8 Months</span>
                  </h3>
                  <p className="resume-about">
                    Created post designs and managed Meta campaigns for Ako.
                  </p>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="experience-item">
                <div className="timeline-marker">
                  <div className="timeline-line"></div>
                  <FaCircle className="timeline-dot" />
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">
                    <img
                      src={starIcon}
                      alt="Star"
                      className="experience-icon star-icon"
                    />
                    Official Snapchat Lens Network Developer
                    <span className="experience-duration">5 Years</span>
                  </h3>
                  <p className="resume-about">
                    Developed innovative AR lenses for Snapchat’s Lens Studio.
                  </p>
                </div>
              </div>

              {/* Experience 5 */}
              <div className="experience-item">
                <div className="timeline-marker">
                  <div className="timeline-line"></div>
                  <FaCircle className="timeline-dot" />
                </div>
                <div className="experience-content">
                  <h3 className="experience-title">
                    <FaDesktop className="experience-icon" />
                    IT and Office Operator, Sharez Company
                    <span className="experience-duration">2023-Present</span>
                  </h3>
                  <p className="resume-about">
                    Managed IT systems, designed materials, and supervised
                    staff.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Skills Section */}
          <div id="skills" className="resume-category">
            <h2 className="resume-title">Skills</h2>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">Photoshop</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Lens Studio</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <span className="skill-percentage">100%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Full-Stack Web Development</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">AR/VR Development</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Content Writing</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Blender</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="skill-percentage">70%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">Canva</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <span className="skill-percentage">100%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Social Media Management</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  );
}

export default Resume;
