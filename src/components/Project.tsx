import React, { useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../assets/styles/Project.scss";

type ProjectData = {
  category: string;
  title: string;
  shortTitle: string;
  mark: string;
  accent: string;
  desc: string;
  highlights: string[];
  live: string;
  repo: string;
  tags: string[];
  caseStudy: {
    challenge: string;
    approach: string;
    role: string;
    outcome: string;
  };
};

const PROJECTS: ProjectData[] = [
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
    caseStudy: {
      challenge:
        "Weekly sales reports depended on recording transactions in a hardcover book and transferring them into Excel later. The process was slow, repetitive, and made timely reporting difficult.",
      approach:
        "I designed a simple reporting workflow for capturing sales data in real time, structuring entries automatically, and producing clean summaries for review and export.",
      role: "I identified the workflow problem from inside a sales environment and built the system as an ICT-led improvement to the team’s day-to-day process.",
      outcome:
        "Data that previously took most of a week to compile could be organized and reported in minutes, reducing manual effort and improving visibility.",
    },
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
    caseStudy: {
      challenge:
        "ThreadMW started by selling through WhatsApp Business and Facebook Marketplace. Customers could miss products as new messages arrived, and browsing again later was difficult.",
      approach:
        "I created an e-commerce platform that complements those familiar channels with a structured digital storefront where customers can browse, compare, save favourites, and return when ready.",
      role: "I shaped and built the storefront around how the business already communicated with customers, rather than trying to replace the channels that were already working.",
      outcome:
        "The business gained a digital home that gives customers more control over the shopping journey and makes its catalogue easier to discover beyond a busy message thread.",
    },
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
    caseStudy: {
      challenge:
        "NsimaBeats needed a reliable marketplace experience for producers to sell and license beats to artists, brands, content creators, and media producers globally.",
      approach:
        "I followed the full user journey, tested key features, reviewed flows, and suggested practical improvements across interface behavior, responsiveness, and payment experiences.",
      role: "I contributed to UI/UX improvements and unit testing as a developer and product-minded collaborator. This was a real production learning experience, not a solo project.",
      outcome:
        "The work strengthened my React, testing, and product-thinking skills, while giving me hands-on exposure to local payment rails including Onkhosa and PayChangu.",
    },
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
    caseStudy: {
      challenge:
        "Sekulu265 sells a variety of products across different digital touchpoints, creating a need for a clear catalogue and a consistent way for customers to move from discovery to purchase.",
      approach:
        "I built a fully responsive e-commerce website with organized product browsing and a mobile-first experience for customers arriving from social platforms and other channels.",
      role: "I translated the business goal of stronger digital integration into a practical storefront focused on clarity, accessibility, and easier customer interaction.",
      outcome:
        "The business has a structured online catalogue that can support discovery across platforms and give customers a more direct, consistent path to engage with its products.",
    },
  },
];

function Project() {
  const [openCaseStudy, setOpenCaseStudy] = useState<string | null>(null);

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
          {PROJECTS.map((p) => {
            const isCaseStudyOpen = openCaseStudy === p.title;

            return (
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
                    <span className="proj-index">
                      0{PROJECTS.indexOf(p) + 1}
                    </span>
                    <div className="proj-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="proj-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="proj-title">{p.title}</h3>
                  <p className="proj-desc">{p.desc}</p>

                  <div className="proj-highlights">
                    <span className="highlights-label">Key Features:</span>
                    <ul className="highlights-list">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="case-study-toggle"
                    type="button"
                    aria-expanded={isCaseStudyOpen}
                    aria-controls={`case-study-${p.mark}`}
                    onClick={() =>
                      setOpenCaseStudy(isCaseStudyOpen ? null : p.title)
                    }
                  >
                    {isCaseStudyOpen ? "Hide case study" : "Read case study"}
                    <ExpandMoreIcon
                      className={isCaseStudyOpen ? "is-open" : ""}
                    />
                  </button>

                  {isCaseStudyOpen && (
                    <div className="case-study" id={`case-study-${p.mark}`}>
                      <div>
                        <span>Challenge</span>
                        <p>{p.caseStudy.challenge}</p>
                      </div>
                      <div>
                        <span>Approach</span>
                        <p>{p.caseStudy.approach}</p>
                      </div>
                      <div>
                        <span>My role</span>
                        <p>{p.caseStudy.role}</p>
                      </div>
                      <div>
                        <span>Outcome</span>
                        <p>{p.caseStudy.outcome}</p>
                      </div>
                    </div>
                  )}

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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
