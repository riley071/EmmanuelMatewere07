import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import "../assets/styles/Project.scss";

const PROJECTS = [
  {
    category: "Business / Reporting System",
    title: "NBS Sales Reporting System",
    shortTitle: "Sales intelligence",
    mark: "NBS",
    accent: "orange",
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
    category: "E-commerce Platform",
    title: "ThreadMW",
    shortTitle: "Fashion storefront",
    mark: "T",
    accent: "coral",
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
    category: "Digital Marketplace",
    title: "NsimaBeats",
    shortTitle: "Music marketplace",
    mark: "N",
    accent: "teal",
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
    category: "E-commerce / Business Website",
    title: "Sekulu265",
    shortTitle: "Footwear commerce",
    mark: "S",
    accent: "lime",
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
  return (
    <section className="proj-section" id="projects">
      <div className="proj-wrap">
        <div className="section-header proj-header">
          <span className="section-label">Selected Projects</span>
          <h2 className="section-title">
            Featured <span className="highlight">Work</span>
          </h2>
          <p className="section-subtitle">
            Digital products designed to make complex work feel simple, useful,
            and distinctly human.
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <article key={p.title} className={`proj-card accent-${p.accent}`}>
              <div className="proj-thumb">
                <div className="browser-bar">
                  <span />
                  <span />
                  <span />
                  <small>emmanuelmatewere.dev / {p.title}</small>
                </div>
                <div className="proj-preview">
                  <div className="preview-brand">
                    <strong>{p.mark}</strong>
                    <span>{p.shortTitle}</span>
                  </div>
                  <div className="preview-layout">
                    <div className="preview-sidebar">
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="preview-content">
                      <span className="preview-kicker">Overview</span>
                      <div className="preview-heading" />
                      <div className="preview-metrics">
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="preview-chart">
                        <b />
                        <b />
                        <b />
                        <b />
                        <b />
                        <b />
                        <b />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="preview-caption">
                  <span>{p.category}</span>
                  <span className="preview-status">Live project</span>
                </div>
              </div>

              <div className="proj-info">
                <div className="proj-topline">
                  <span className="proj-index">0{PROJECTS.indexOf(p) + 1}</span>
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="proj-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="proj-title">{p.title}</h2>
                <p className="proj-desc">{p.desc}</p>

                <div className="proj-highlights">
                  <span className="highlights-label">Key Features:</span>
                  <ul className="highlights-list">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>

                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-action"
                  >
                    Open live preview <LaunchIcon sx={{ fontSize: 17 }} />
                  </a>
                ) : (
                  <span className="proj-action is-private">
                    Private internal system
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
