import React, { useState } from "react";
import "../../styles/snapchat.css"; // Adjust path as needed
import hdrImage from "../../assets/hdr.png";
import st from "../../assets/st.png";
import tl from "../../assets/tools.png";
import rt from "../../assets/RotatonTracker.png";

const LensProjects = () => {
  const [showCode, setShowCode] = useState(false);

  const projects = [
    {
      title: "Dynamic Water Waves",
      description:
        "Dynamic Water Waves shader, a versatile material featuring customizable options: Wave Speed, Scale, Strength, Map Texture, Color Palette, and Gradient Color. Elevate your visuals with this dynamic shader for stunning water effects.",
      preview:
        "https://hamagardy.github.io/4lg4rdyoowo/assets/img/Dynamic%20Water%20Waves.mp4",
      isVideo: true,
    },
    {
      title: "Rotation Tracker",
      description:
        "This script efficiently tracks and displays rotation values, leveraging device tracking data. It provides monitoring of rotational movements across the X, Y, and Z axes, with an option to display values in degrees for enhanced accuracy.",
      preview: rt,
      isVideo: false,
      sourceCode: `// @ui { "label":"🔄X Rotation Display"}
// @input Component.Text X_Rotation
// @input string X_RotationText
// @input bool Display_X_Rotation
// @ui { "label":"🔄Y Rotation Display"}
// @input Component.Text Y_Rotation
// @input string Y_RotationText
// @input bool Display_Y_Rotation
// @ui { "label":"🔄Z Rotation Display"}
// @input Component.Text Z_Rotation
// @input string Z_RotationText
// @input bool Display_Z_Rotation

//@ui { "label":"⚪ Display In Degrees"}
// @input bool Display_In_Degrees

//@ui { "label":"📽 Don't Remove Me"}
// @input Component.DeviceTracking deviceTrackingComponent

//@ui {"widget":"group_start", "label":"📌 Info"}
//@ui {"widget":"label", "label":"This asset is usually needs Device Tracking"}
//@ui {"widget":"label", "label":" Camera, particularly in rotation tracking mode."}
//@ui {"widget":"group_end"}

function onUpdateEvent() {
    if (script.deviceTrackingComponent) {
        var rotation = script.deviceTrackingComponent.getSceneObject()
        .getTransform().getLocalRotation();
        var eulerRotation = rotation.toEulerAngles();
        if (script.Display_X_Rotation) {
            script.X_Rotation.enabled = true;
            script.X_Rotation.text = script.X_RotationText + ": " + formatRotation(eulerRotation.y, script.Display_In_Degrees);
        } else {
            script.X_Rotation.enabled = false;
        }
        if (script.Display_Y_Rotation) {
            script.Y_Rotation.enabled = true;
            script.Y_Rotation.text = script.Y_RotationText + " " + formatRotation(eulerRotation.x, script.Display_In_Degrees);
        } else {
            script.Y_Rotation.enabled = false;
        }
        if (script.Display_Z_Rotation) {
            script.Z_Rotation.enabled = true;
            script.Z_Rotation.text = script.Z_RotationText + " " + formatRotation(eulerRotation.z, script.Display_In_Degrees);
        } else {
            script.Z_Rotation.enabled = false;
        }
    }
}

function formatRotation(value, inDegrees) {
    if (inDegrees) {
        value = value * 180 / Math.PI; // Convert radians to degrees
        return Math.floor(value) + "°";
    } else {
        return Math.floor(value);
    }
}

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(onUpdateEvent);`,
    },
    {
      title: "HDR Effect",
      description:
        "High Dynamic Range (HDR) Effect enhances the broad spectrum of tones from the brightest highlights to the deepest shadows, ensuring intricate details and brilliance are faithfully reproduced for a visually striking image.",
      preview: hdrImage,
      isVideo: false,
    },
    {
      title: "Saint Patrick's Hat",
      description:
        "A 3D model of a 'Saint Patrick's Hat' with a three-leaf clover, an iconic symbol of Saint Patrick's Day.",
      preview: st,
      isVideo: false,
    },
    {
      title: "Tools Pack",
      description:
        "Includes 7 different 3D models with unique styles: turnscrew, turnscrew2, wrench, knife, roulette, insulating tape, pliers.",
      preview: tl,
      isVideo: false,
    },
  ];

  return (
    <div className="LensProjects">
      <h3>Asset Library Projects</h3>
      <div className="LensProjects-grid">
        {projects.map((project, index) => (
          <div key={index} className="LensProjects-card">
            <div className="LensProjects-preview">
              {project.isVideo ? (
                <video autoPlay loop playsInline muted>
                  <source src={project.preview} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={project.preview} alt={`${project.title} Preview`} />
              )}
            </div>
            <div className="LensProjects-content">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              {project.sourceCode && (
                <button
                  className="LensProjects-view-source-button"
                  onClick={() => setShowCode(true)}
                >
                  View Source Code
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {showCode && (
        <div className="LensProjects-code-modal">
          <div className="LensProjects-code-modal-content">
            <button
              className="LensProjects-close-button"
              onClick={() => setShowCode(false)}
            >
              ×
            </button>
            <pre className="LensProjects-code-block">
              {projects[1].sourceCode}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default LensProjects;
