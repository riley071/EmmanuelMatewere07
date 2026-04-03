import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Timeline.scss";

const CAREER = [
  {
    role: "Full Stack Developer",
    company: "ModriTech Solutions",
    date: "Sep 2023 – Jun 2024",
    desc: "Developed and deployed websites and systems, managed both design and coding processes, and built automated reporting tools using Python and SQL.",
    tags: ["React", "Python", "SQL", "DevOps"],
  },
  {
    role: "Junior Web Developer",
    company: "Grafix Resolution Limited",
    date: "Sep 2022 – Apr 2023",
    desc: "Assisted in website development, conducted quality assessments of graphic materials, and supported database processing activities.",
    tags: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
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
        </div>
      </div>
    </section>
  );
}

export default Timeline;
