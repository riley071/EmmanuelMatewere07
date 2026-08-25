import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "../assets/styles/DesignShowcase.scss";

import poster1 from "../assets/images/poster1.png";
import poster2 from "../assets/images/poster2.jpg";
import poster3 from "../assets/images/poster3.png";
import poster4 from "../assets/images/poster4.png";
import poster5 from "../assets/images/poster5.png";

type DesignItem = {
  image: string;
  title: string;
  category: string;
  description: string;
};

const DESIGNS: DesignItem[] = [
  {
    image: poster1,
    title: "Digital product campaigns",
    category: "Web & campaign design",
    description: "Promotional visuals that bring digital products to life.",
  },
  {
    image: poster2,
    title: "Farewell Our Dancing CEO",
    category: "Corporate campaign",
    description: "A bold, story-led campaign design for NBS Bank.",
  },
  {
    image: poster3,
    title: "Morditech Solutions MW",
    category: "Brand launch",
    description: "A launch graphic designed to make a new website memorable.",
  },
  {
    image: poster4,
    title: "Social Media Services",
    category: "Social media design",
    description: "Clear pricing communication for a social media offering.",
  },
  {
    image: poster5,
    title: "ThreadMW",
    category: "Fashion campaign",
    description: "Editorial campaign art for a Malawi streetwear brand.",
  },
];

function DesignShowcase() {
  const [selected, setSelected] = useState<DesignItem | null>(null);

  return (
    <section className="design-section" id="design-work">
      <div className="design-wrap">
        <div className="design-heading">
          <div>
            <span className="section-label">Creative Practice</span>
            <h2 className="section-title">
              Design that <span className="highlight">gets noticed.</span>
            </h2>
          </div>
          <p className="section-subtitle">
            Selected graphics, campaign visuals, and brand communication created
            alongside my digital products and marketing work.
          </p>
        </div>

        <div className="design-grid">
          {DESIGNS.map((design, index) => (
            <button
              className={`design-piece ${index === 0 ? "design-piece-featured" : ""}`}
              key={design.title}
              type="button"
              onClick={() => setSelected(design)}
              aria-label={`View ${design.title}`}
            >
              <img src={design.image} alt={design.title} />
              <span className="design-piece-shade" />
              <span className="design-piece-info">
                <small>{design.category}</small>
                <strong>{design.title}</strong>
                <span className="design-view">
                  <ZoomInIcon sx={{ fontSize: 17 }} /> View design
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="design-modal"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            className="design-modal-close"
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close design preview"
          >
            <CloseIcon />
          </button>
          <img src={selected.image} alt={selected.title} />
          <div className="design-modal-caption">
            <span>{selected.category}</span>
            <strong>{selected.title}</strong>
            <p>{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default DesignShowcase;
