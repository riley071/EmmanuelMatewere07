import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../assets/styles/Main.scss";

const ROLES = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Database Engineer",
  "Digital Marketer",
];

function Main() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping]     = useState(true);

  /* Typewriter effect */
  useEffect(() => {
    const current = ROLES[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
      } else {
        timer = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, typing, roleIdx]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="main">
      {/* Ambient blobs */}
      <div className="blob blob-orange" />
      <div className="blob blob-purple" />
      <div className="blob blob-teal" />

      <div className="hero-inner">
        {/* ── Text column ──────────────────────── */}
        <div className="hero-text">
          <span className="hero-greeting">Hello, I'm</span>

          <h1 className="hero-name">
            Emmanuel
            <br />
            <span className="highlight">Matewere</span>
          </h1>

          <p className="hero-role">
            <span className="role-typed">{displayed}</span>
            <span className="role-cursor">|</span>
          </p>

          <p className="hero-bio">
            I build robust web applications and design intuitive digital
            experiences. Based in Malawi&nbsp;🇲🇼 — working with clients worldwide.
          </p>

          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View My Work <span className="btn-arrow">→</span>
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("contact")}>
              Get In Touch
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/riley071"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <GitHubIcon sx={{ fontSize: 16 }} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuel-matewere-b5a39218b/"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
            >
              <LinkedInIcon sx={{ fontSize: 16 }} /> LinkedIn
            </a>
          </div>
        </div>

        {/* ── Visual column ────────────────────── */}
        <div className="hero-visual" aria-hidden="true">
          <div className="avatar-ring">
            <div className="avatar-core">EM</div>
          </div>
          <div className="float-card fc-1">⚛️ React Developer</div>
          <div className="float-card fc-2">🎨 UI / UX Design</div>
          <div className="float-card fc-3">🗄️ Database Expert</div>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────── */}
      <div className="hero-stats">
        {[
          { num: "2+", label: "Years Experience" },
          { num: "6+", label: "Projects Built" },
          { num: "6",  label: "Skill Domains" },
          { num: "∞",  label: "Passion for Code" },
        ].map(({ num, label }, i) => (
          <React.Fragment key={label}>
            {i > 0 && <div className="stat-sep" />}
            <div className="stat">
              <span className="stat-num">{num}</span>
              <span className="stat-label">{label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Scroll hint */}
      <button
        className="scroll-hint"
        onClick={() => scrollTo("expertise")}
        aria-label="Scroll down"
      >
        <KeyboardArrowDownIcon />
      </button>
    </section>
  );
}

export default Main;
