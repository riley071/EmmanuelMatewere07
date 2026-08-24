import React, { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import "../assets/styles/Project.scss";

const PROJECTS = [
  {
    image: null,
    category: "Business / Reporting System",
    title: "NBS Sales Reporting System",
    desc: "An automated sales reporting platform designed to track and monitor digital banking sales performance. The system generates daily and weekly performance reports, reducing manual processes and improving accuracy.",
    highlights: [
      "Automated daily and weekly sales reporting",
      "Real-time performance tracking",
      "Reduced manual reporting by 80%",
    ],
    live: "",
    repo: "",
    tags: ["React", "PHP", "MySQL"],
  },
  {
    image: null,
    category: "E-commerce Platform",
    title: "ThreadMW",
    desc: "A modern fashion e-commerce platform delivering a seamless online shopping experience. Built with responsive design and performance optimization to engage customers and drive conversions.",
    highlights: [
      "Responsive product browsing and filtering",
      "Mobile-first user experience",
      "SEO and performance optimized",
    ],
    live: "https://threadmw.com",
    repo: "https://threadmw.com",
    tags: ["React", "Tailwind CSS", "Supabase", "PayChangu"],
  },
  {
    image: null,
    category: "Digital Marketplace",
    title: "NsimaBeats",
    desc: "A digital music marketplace connecting artists with customers through secure online music sales and instant delivery. Streamlines the process of discovering, purchasing, and downloading music.",
    highlights: [
      "Secure user authentication and authorization",
      "Digital file storage and delivery system",
      "Artist and customer management dashboards",
    ],
    live: "https://nsimabeats.com",
    repo: "https://nsimabeats.com",
    tags: ["React", "Supabase", "File Management"],
  },
  {
    image: null,
    category: "E-commerce / Business Website",
    title: "Sekulu265",
    desc: "A modern online footwear and fashion storefront showcasing and selling products. Designed with user-centric approach to maximize conversions and deliver exceptional shopping experience.",
    highlights: [
      "Responsive e-commerce storefront",
      "Product browsing and category navigation",
      "Mobile-optimized checkout experience",
    ],
    live: "https://sekulu265.com",
    repo: "https://sekulu265.com",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
];

function Project() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="proj-section" id="projects">
      <div className="proj-wrap">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-label">Selected Projects</span>
          <h1 className="section-title">
            Featured <span className="highlight">Work</span>
          </h1>
          <p className="section-subtitle">
            A selection of web applications, business systems and digital
            platforms I have designed and developed. My work ranges from
            internal business solutions and reporting systems to e-commerce
            platforms and digital marketplaces.
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className={`proj-card ${hovered === i ? "is-hovered" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Thumbnail / Visual */}
              <div className="proj-thumb">
                <div className="proj-visual-placeholder">
                  <span className="proj-category">{p.category}</span>
                </div>
                <div className="proj-overlay">
                  <div className="proj-links">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-link-btn"
                      >
                        <LaunchIcon sx={{ fontSize: 16 }} /> Visit Website
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="proj-info">
                <h2 className="proj-title">{p.title}</h2>
                <p className="proj-desc">{p.desc}</p>

                {/* Highlights */}
                <div className="proj-highlights">
                  <span className="highlights-label">Key Features:</span>
                  <ul className="highlights-list">
                    {p.highlights.map((h, hi) => (
                      <li key={hi}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="proj-tags">
                  {p.tags.map((t, ti) => (
                    <span key={ti} className="proj-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
