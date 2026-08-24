import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Timeline.scss";

const CAREER = [
  {
    role: "National Sales Intern",
    company: "NBS Bank",
    date: "Nov 2025 – Mar 2026",
    desc: "Promoted and sold NBS digital banking products, assisted with customer account creation and digital product registration, and resolved banking service issues efficiently.",
    tags: ["Digital Banking", "Sales", "Customer Service"],
  },
  {
    role: "Digital Banking Intern",
    company: "NBS Bank",
    date: "Mar 2025 – Nov 2025",
    desc: "Managed customer registrations for digital banking platforms, provided end-user support, logged and tracked service tickets, and supported digital product adoption at branch level.",
    tags: ["Banking Systems", "Support", "Troubleshooting", "Ticket Management"],
  },
  {
    role: "Full Stack Developer",
    company: "ModriTech Solutions",
    date: "Sep 2023 – Jun 2024",
    desc: "Developed and deployed full-stack web applications handling both front-end and back-end development, implemented system features, and built automated reporting tools using Python and SQL.",
    tags: ["React", "PHP", "MySQL", "Python", "SQL", "DevOps"],
  },
];

const EDUCATION = [
  {
    degree: "BSc (Hons) in Computing Information Systems",
    institution: "National College of Information Technology (NACIT)",
    date: "2023",
  },
  {
    degree: "Advanced Diploma in Business Information Technology",
    institution: "National College of Information Technology (NACIT)",
    date: "2021 – 2022",
  },
  {
    degree: "Diploma in Business Information Technology",
    institution: "National College of Information Technology (NACIT)",
    date: "2020 – 2021",
  },
  {
    degree: "Malawi School Certificate of Education (MSCE)",
    institution: "Michiri View Boys Secondary School",
    date: "2017",
  },
];

const CERTIFICATIONS = [
  {
    title: "Huawei Seeds for the Future Program",
    issuer: "Huawei Technologies",
    year: "2021",
  },
  {
    title: "Google Digital Marketing Certification",
    issuer: "Google",
    year: "2021",
  },
];

function Timeline() {
  return (
    <section className="tl-section" id="history">
      <div className="tl-wrap">
        {/* Career */}
        <div className="tl-block">
          <div className="section-header">
            <span className="section-label">Work History</span>
            <h1 className="section-title">
              Career <span className="highlight">Journey</span>
            </h1>
          </div>
          <div className="tl-list">
            {CAREER.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-icon work">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <div className="tl-body">
                  <span className="tl-date">{item.date}</span>
                  <h3 className="tl-role">{item.role}</h3>
                  <h4 className="tl-company">{item.company}</h4>
                  <p className="tl-desc">{item.desc}</p>
                  <div className="tl-tags">
                    {item.tags.map((t, ti) => (
                      <span key={ti} className="tl-tag work-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="tl-block">
          <div className="section-header">
            <span className="section-label">Academic Background</span>
            <h1 className="section-title">
              Education <span className="highlight">Path</span>
            </h1>
          </div>
          <div className="tl-list">
            {EDUCATION.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-icon edu">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className="tl-body">
                  <span className="tl-date">{item.date}</span>
                  <h3 className="tl-role">{item.degree}</h3>
                  <h4 className="tl-company">{item.institution}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="section-header" style={{ marginTop: "3rem" }}>
            <span className="section-label">Certifications</span>
          </div>
          <div className="tl-list">
            {CERTIFICATIONS.map((item, i) => (
              <div className="tl-item" key={i}>
                <div className="tl-icon edu">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className="tl-body">
                  <span className="tl-date">{item.year}</span>
                  <h3 className="tl-role">{item.title}</h3>
                  <h4 className="tl-company">{item.issuer}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
