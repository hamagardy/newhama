import React, { useEffect } from "react";
import "../../styles/snapchat.css"; // Updated path

const SnapchatSnapMap = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Ensure Snapchat embed script is loaded and initialized
    if (!window.SnapchatEmbed) {
      const script = document.createElement("script");
      script.src = "https://www.snapchat.com/embed.js";
      script.async = true;
      script.onload = () => {
        // Reinitialize embeds if needed after script loads
        if (window.SnapchatEmbed) {
          window.SnapchatEmbed.init();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already loaded, reinitialize embeds
      window.SnapchatEmbed.init();
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="SnapchatSnapMap">
      <h3>SnapMap Integration</h3>
      <div className="SnapchatSnapMap-content">
        <div className="SnapchatSnapMap-section">
          <h4>Community Geofilters</h4>
          <p>
            Snapchat Community Geofilters were location-based overlays that
            users could apply to their Snaps when in a specific area, helping
            represent local communities. I personally designed around 33
            Community Geofilters across Kurdistan, including Erbil, Duhok,
            Sulaymaniyah, and many smaller areas. Unfortunately, Snapchat
            discontinued this feature at the end of 2024, removing all
            previously submitted geofilters.
          </p>
          <div className="SnapchatSnapMap-embed-container">
            <blockquote
              className="snapchat-embed"
              data-snapchat-embed-width="216"
              data-snapchat-embed-height="492"
              data-snapchat-embed-url="https://www.snapchat.com/add/itzgardy/highlight/a4350e19-bb91-44e1-8758-49e4021db3c5/embed"
              data-snapchat-embed-style="border-radius: 40px;"
              data-snapchat-embed-title="itzgardy"
            >
              <div className="snapchat-embed-inner">
                <a
                  title="itzgardy"
                  href="https://www.snapchat.com/add/itzgardy/highlight/a4350e19-bb91-44e1-8758-49e4021db3c5"
                  className="snapchat-profile-icon"
                ></a>
                <div className="snapchat-embed-spacer"></div>
                <a
                  title="itzgardy"
                  href="https://www.snapchat.com/add/itzgardy/highlight/a4350e19-bb91-44e1-8758-49e4021db3c5"
                  className=" PYsnapchat-view-more"
                >
                  View more on Snapchat
                </a>
              </div>
            </blockquote>
          </div>
        </div>

        <div className="SnapchatSnapMap-section">
          <h4>Business Locations</h4>
          <p>
            As for Snapchat Business Locations, I have added more than 50+
            business locations to Snap Map, helping businesses become more
            discoverable to users in their area. These locations allow customers
            to find details like the business name, address, and contact
            information directly within Snapchat.
          </p>
          <div className="SnapchatSnapMap-embed-container">
            <blockquote
              className="snapchat-embed"
              data-snapchat-embed-width="216"
              data-snapchat-embed-height="492"
              data-snapchat-embed-url="https://www.snapchat.com/add/itzgardy/highlight/a400c306-826c-4741-bc4f-58c7324703a9/embed"
              data-snapchat-embed-style="border-radius: 40px;"
              data-snapchat-embed-title="itzgardy"
            >
              <div className="snapchat-embed-inner">
                <a
                  title="itzgardy"
                  href="https://www.snapchat.com/add/itzgardy/highlight/a400c306-826c-4741-bc4f-58c7324703a9"
                  className="snapchat-profile-icon"
                ></a>
                <div className="snapchat-embed-spacer"></div>
                <a
                  title="itzgardy"
                  href="https://www.snapchat.com/add/itzgardy/highlight/a400c306-826c-4741-bc4f-58c7324703a9"
                  className="snapchat-view-more"
                >
                  View more on Snapchat
                </a>
              </div>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="SnapchatSnapMap-add-business-button">
        <button className="snapmap-contact-btn" onClick={handleContactClick}>
          Add Your Business Now to Snapchat Map
        </button>
      </div>
    </div>
  );
};

export default SnapchatSnapMap;
