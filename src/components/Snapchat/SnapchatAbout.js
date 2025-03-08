import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import devBadge from "../../assets/dev.png"; // Adjust path based on your structure

const SnapchatAbout = () => {
  return (
    <div className="snapchat-page">
      <h3>About Snapchat Creations</h3>
      <p>
        I’ve been developing lenses for Snapchat since 2019. In March 2023, the
        Snap AR team announced me as the first official developer in Iraq. I’ve
        designed geofilters for cities and areas in Kurdistan, created Lens
        Studio tutorials, and developed over 5 Lens Studio assets to support the
        community.
      </p>
      <img
        src={devBadge}
        alt="Official Developer Badge"
        className="snapchat-dev-badge"
      />
      <div className="snapchat-official">
        <FontAwesomeIcon icon={faSnapchat} className="snapchat-icon" />
        <div className="snapchat-text">
          <span className="snapchat-title-text">
            Official Snap Lens Network Developer
          </span>
          <span className="snapchat-company-text">Snap Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default SnapchatAbout;
