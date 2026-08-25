import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import {
  faComputer,
  faBriefcase,
  faCode,
  faDatabase,
  faBullhorn,
  faShareNodes,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Expertise.scss";

const SKILLS = [
  {
    icon: faReact,
    color: "#61dafb",
    title: "Full Stack Development",
    desc: "Experienced in developing and deploying web applications using React.js, PHP, JavaScript, and MySQL. Strong expertise in designing responsive interfaces, building server-side logic, and optimizing performance across all platforms.",
    tags: [
      "React",
      "JavaScript",
      "PHP",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MySQL",
      "API Integration",
      "Git",
    ],
  },
  {
    icon: faDatabase,
    color: "#00d4aa",
    title: "Digital Banking & Systems",
    desc: "Hands-on experience with digital banking platforms, customer onboarding, payment processing, and service support. Proficient in troubleshooting banking applications and managing customer technical issues.",
    tags: [
      "Digital Banking",
      "Troubleshooting",
      "Customer Support",
      "System Maintenance",
      "ATM/Card Systems",
    ],
  },
  {
    icon: faComputer,
    color: "#ff6b35",
    title: "IT Support & Systems Administration",
    desc: "Skilled in end-user technical support, system troubleshooting, ticket management, and maintaining system reliability across multiple devices and platforms.",
    tags: [
      "System Maintenance",
      "Troubleshooting",
      "Ticket Management",
      "Remote Support",
      "Microsoft Office",
    ],
  },
  {
    icon: faCode,
    color: "#7c3aed",
    title: "Database Design & Optimization",
    desc: "Expertise in designing, managing, and optimizing MySQL databases. Strong background in data modeling, query optimization, and ensuring data integrity for production systems.",
    tags: [
      "MySQL",
      "SQL",
      "Database Optimization",
      "Data Modeling",
      "Query Design",
    ],
  },
  {
    icon: faPython,
    color: "#3776ab",
    title: "Automation & Reporting",
    desc: "Experienced in building automated reporting tools and data processing systems using Python and SQL to streamline business operations and improve efficiency.",
    tags: [
      "Python",
      "SQL",
      "Automation",
      "Data Processing",
      "Report Generation",
    ],
  },
  {
    icon: faBriefcase,
    color: "#1877f2",
    title: "Project & Business Analysis",
    desc: "Professional experience in analyzing business requirements, translating them into technical solutions, and delivering systems that meet organizational needs.",
    tags: [
      "Requirements Analysis",
      "Project Planning",
      "Business Logic",
      "Documentation",
      "Stakeholder Communication",
    ],
  },
  {
    icon: faBullhorn,
    color: "#f5b942",
    title: "Digital Marketing",
    desc: "I help businesses build a stronger digital presence through thoughtful campaign planning, engaging content, and clear marketing strategies that connect with the right audience.",
    tags: [
      "Campaign Strategy",
      "Content Planning",
      "Brand Awareness",
      "SEO Basics",
      "Audience Research",
    ],
  },
  {
    icon: faShareNodes,
    color: "#e85d9e",
    title: "Social Media Management",
    desc: "Experienced in planning, creating, and managing social media content that keeps brands consistent, visible, and connected with their communities across digital platforms.",
    tags: [
      "Content Calendars",
      "Community Engagement",
      "Social Campaigns",
      "Analytics",
      "Copywriting",
    ],
  },
  {
    icon: faPalette,
    color: "#a78bfa",
    title: "Graphic Design",
    desc: "I design clean, purposeful visual assets for digital brands, including social media graphics, promotional materials, presentations, and supporting web visuals.",
    tags: [
      "Visual Identity",
      "Social Graphics",
      "Marketing Materials",
      "Layout Design",
      "Brand Consistency",
    ],
  },
];

function Expertise() {
  return (
    <section className="expertise-section" id="expertise">
      <div className="expertise-wrap">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-label">What I Do</span>
          <h2 className="section-title">
            Areas of <span className="highlight">Expertise</span>
          </h2>
          <p className="section-subtitle">
            Combining technology, digital growth, and visual communication to
            build useful products and stronger brands.
          </p>
        </div>

        <div className="expertise-grid">
          {SKILLS.map((skill, i) => (
            <div
              key={i}
              className="exp-card"
              style={{ "--c": skill.color } as React.CSSProperties}
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
