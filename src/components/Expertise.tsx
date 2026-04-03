import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faFirefoxBrowser, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faComputer, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";

const SKILLS = [
  {
    icon: faReact,
    color: "#61dafb",
    title: "Full Stack Development",
    desc: "Experienced in developing and deploying web applications using PHP, React, and MySQL. Strong background in designing, coding, and optimizing websites while ensuring seamless integration with databases and APIs.",
    tags: ["React", "JavaScript", "PHP", "HTML5", "CSS3", "Tailwind CSS", "MySQL", "API Integration", "Git"],
  },
  {
    icon: faComputer,
    color: "#00d4aa",
    title: "IT Support & Systems",
    desc: "Hands-on experience troubleshooting software and hardware issues, maintaining systems, and ensuring security updates. Proficient in cloud deployment, DevOps processes, and task automation.",
    tags: ["System Maintenance", "Troubleshooting", "Microsoft Office Suite"],
  },
  {
    icon: faPaintBrush,
    color: "#ff6b35",
    title: "UI / UX Design",
    desc: "Skilled in designing user-friendly interfaces and enhancing user experiences using modern design tools and research-driven methodologies.",
    tags: ["Wireframing", "Prototyping", "Figma", "Adobe XD", "User Research", "Design Systems"],
  },
  {
    icon: faFileAlt,
    color: "#7c3aed",
    title: "Database Management",
    desc: "Expertise in managing, optimizing, and securing relational and non-relational databases for efficient data storage and retrieval.",
    tags: ["SQL", "NoSQL", "PostgreSQL", "MongoDB", "Database Optimization", "Data Modeling"],
  },
  {
    icon: faFacebook,
    color: "#1877f2",
    title: "Social Media Management",
    desc: "Professional management of social media platforms including content creation, audience engagement, analytics tracking, and strategy optimization to enhance brand visibility.",
    tags: ["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"],
  },
  {
    icon: faFirefoxBrowser,
    color: "#ff9400",
    title: "Digital Marketing",
    desc: "Experienced in leveraging digital channels to enhance brand visibility, increase audience engagement, and drive measurable business growth.",
    tags: ["SEO", "Content Marketing", "Google Ads", "Email Marketing", "Analytics"],
  },
];

function Expertise() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-wrap">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-label">What I Do</span>
          <h1 className="section-title">
            Areas of <span className="highlight">Expertise</span>
          </h1>
          <p className="section-subtitle">
            A versatile skill set spanning development, design, and digital strategy.
          </p>
        </div>

        <div className="expertise-grid">
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className="exp-card"
              style={{ "--c": skill.color } as React.CSSProperties}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top accent line animates in on hover */}
              <span className="card-accent-line" />

              <span className="card-icon" style={{ color: skill.color }}>
                <FontAwesomeIcon icon={skill.icon} />
              </span>

              <h3 className="card-title">{skill.title}</h3>
              <p className="card-desc">{skill.desc}</p>

              <div className="card-tags">
                {skill.tags.map((tag, ti) => (
                  <span key={ti} className="exp-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
