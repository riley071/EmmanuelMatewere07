import React, { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import blog   from "../assets/images/blog.png";
import coun   from "../assets/images/coun.png";
import port   from "../assets/images/port.png";
import member from "../assets/images/member.png";
import desk   from "../assets/images/desk.jpg";
import wild   from "../assets/images/wild.png";
import "../assets/styles/Project.scss";

const PROJECTS = [
  {
    image: wild,
    title: "Wild Swimming & Camping Site",
    desc: "A multi-page website promoting camping and wild swimming facilities, with a focus on responsive design and visual appeal.",
    live: "https://riley071.github.io/Camping-Site-Multipage-Website-/",
    repo: "https://riley071.github.io/Camping-Site-Multipage-Website-/",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: desk,
    title: "Help Desk Management System",
    desc: "A software application allowing organizations to manage and track customer support requests efficiently.",
    live: "https://github.com/riley071/Help-Desk-Management-System-php-",
    repo: "https://github.com/riley071/Help-Desk-Management-System-php-",
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    image: member,
    title: "Membership Management System",
    desc: "A full membership system with an admin panel for managing members and club records, built with PHP and Bootstrap.",
    live: "https://github.com/riley071/Membership-Managment-system-php",
    repo: "https://github.com/riley071/Membership-Managment-system-php",
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    image: port,
    title: "Portfolio Website v1",
    desc: "A responsive, stylish portfolio website built with Bootstrap 5 — the predecessor to this site.",
    live: "https://riley071.github.io/my-protifilo-website/",
    repo: "https://riley071.github.io/my-protifilo-website/",
    tags: ["Bootstrap", "HTML", "CSS"],
  },
  {
    image: coun,
    title: "Counselling Services System",
    desc: "A counselling services system for Vintage Wellness Centre, replacing a manual system with a streamlined digital solution.",
    live: "",
    repo: "",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
  {
    image: blog,
    title: "Blog Application",
    desc: "A CRUD blog app leveraging LocalStorage — users can create, edit, delete, and browse posts with no backend required.",
    live: "https://riley071.github.io/Blog-application/",
    repo: "https://riley071.github.io/Blog-application/",
    tags: ["JavaScript", "LocalStorage", "CSS"],
  },
];

function Project() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="proj-section" id="projects">
      <div className="proj-wrap">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-label">Portfolio</span>
          <h1 className="section-title">
            Featured <span className="highlight">Projects</span>
          </h1>
          <p className="section-subtitle">
            A selection of things I've designed and built — from landing pages to full systems.
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
              {/* Thumbnail */}
              <div className="proj-thumb">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="proj-overlay">
                  <div className="proj-links">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-link-btn"
                      >
                        <LaunchIcon sx={{ fontSize: 16 }} /> Live Demo
                      </a>
                    )}
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="proj-link-btn ghost"
                      >
                        <GitHubIcon sx={{ fontSize: 16 }} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="proj-info">
                <div className="proj-tags">
                  {p.tags.map((t, ti) => (
                    <span key={ti} className="proj-tag">{t}</span>
                  ))}
                </div>
                <h2 className="proj-title">{p.title}</h2>
                <p className="proj-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
