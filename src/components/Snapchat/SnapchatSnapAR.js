import React, { useEffect } from "react";
import "../../styles/snapchat.css"; // Adjust path as needed

const SnapchatSnapAR = () => {
  const lenses = [
    {
      embedUrl:
        "https://www.snapchat.com/lens/c983a4b2f7014e109be66400f9ace140/embed",
      linkUrl: "https://www.snapchat.com/lens/c983a4b2f7014e109be66400f9ace140",
      title: "Bottles Smash Lens",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/e6040482c81f4fb4973eacf152a12d9d/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e6040482c81f4fb4973eacf152a12d9d&metadata=01",
      title: "Lens 2",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/f945f7b1b0d74e06bdfd1addc6615adc/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=f945f7b1b0d74e06bdfd1addc6615adc&metadata=01",
      title: "Lens 3",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/d216c548c5e64d6998bed6336c9d08b4/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=d216c548c5e64d6998bed6336c9d08b4&metadata=01",
      title: "Lens 4",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/ca37ec99e93d4b548f7e8bce6388b0f1/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=ca37ec99e93d4b548f7e8bce6388b0f1&metadata=01",
      title: "Lens 5",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/19286b35542548919611fe63be3018f9/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=19286b35542548919611fe63be3018f9&metadata=01",
      title: "Lens 6",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/0a696cefe9224486b8f44b13e1084137/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=0a696cefe9224486b8f44b13e1084137&metadata=01",
      title: "Lens 7",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/724ffae441fa499b9a1841fc52d1329d/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=724ffae441fa499b9a1841fc52d1329d&metadata=01",
      title: "Lens 8",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/94eb78e5f4e746b5b5685b4f9f46bb3d/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=94eb78e5f4e746b5b5685b4f9f46bb3d&metadata=01",
      title: "Lens 9",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/1a4f55df1f304cdf941ad9f9a16fd9c0/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=1a4f55df1f304cdf941ad9f9a16fd9c0&metadata=01",
      title: "Lens 10",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/6c5edc036aad4e918217b0515d126ee3/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=6c5edc036aad4e918217b0515d126ee3&metadata=01",
      title: "Lens 11",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/839279a211b94132814d845926ca3906/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=839279a211b94132814d845926ca3906&metadata=01",
      title: "Lens 12",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/efd5488defe9466e83f2ee6c1eb61196/embed", // Replace with actual embed URL
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=efd5488defe9466e83f2ee6c1eb61196&metadata=01",
      title: "Lens 13",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/b27b206e6ace49b5a7880216f158e06e/embed", // Placeholder
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=b27b206e6ace49b5a7880216f158e06e&metadata=01",
      title: "Lens 14",
    },
    {
      embedUrl:
        "https://www.snapchat.com/lens/10ac0723d8e84bc89678647952abf537/embed",
      linkUrl:
        "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=10ac0723d8e84bc89678647952abf537&metadata=01",
      title: "Lens 15",
    },
  ];

  useEffect(() => {
    if (window.SnapchatEmbed) {
      window.SnapchatEmbed.init();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.snapchat.com/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.SnapchatEmbed) {
          window.SnapchatEmbed.init();
        }
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div className="snapchat-grid">
      <h3>SnapAR Lenses</h3>
      <div className="lens-grid">
        {lenses.map((lens, index) => (
          <div key={index} className="lens-item">
            {lens.embedUrl ? (
              <blockquote
                className="snapchat-embed"
                data-snapchat-embed-width="100%"
                data-snapchat-embed-height="80%" // Increased from 50% to 60%
                data-snapchat-embed-url={lens.embedUrl}
                data-snapchat-embed-style="border-radius: 10px;"
              >
                <div className="snapchat-embed-header">
                  <a
                    title={lens.title}
                    href={lens.linkUrl}
                    className="snapchat-icon-link"
                  ></a>
                </div>
                <div className="snapchat-embed-spacer"></div>
                <div className="snapchat-embed-footer">
                  <a
                    title={lens.title}
                    href={lens.linkUrl}
                    className="snapchat-view-button"
                  >
                    View more on Snapchat
                  </a>
                </div>
              </blockquote>
            ) : (
              <div className="lens-placeholder">{lens.title}</div>
            )}
          </div>
        ))}
      </div>
      <a
        href="https://lensstudio.snapchat.com/creator/v-7cCBUQmclUlAM9svYapg"
        target="_blank"
        rel="noopener noreferrer"
        className="view-all-lenses-button"
      >
        View All Lenses
      </a>
    </div>
  );
};

export default SnapchatSnapAR;
