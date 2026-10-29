import React, { lazy, Suspense, useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PhoneIcon from "@mui/icons-material/Phone";
import DownloadIcon from "@mui/icons-material/Download";
import "../assets/styles/Main.scss";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "./CountUp";
import SkillOrbit from "./SkillOrbit";
const HeroScene = lazy(() => import("./HeroScene"));

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "PHP & MySQL Developer",
  "Digital Systems Expert",
];

function Main() {
  const reduced = useReducedMotion();
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  /* Typewriter effect */
  useEffect(() => {
    if (reduced) { setDisplayed(ROLES[0]); return; }
    const current = ROLES[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timer = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          75,
        );
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
  }, [displayed, typing, roleIdx, reduced]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });

  return (
    <section className="hero" id="main">
      <Suspense fallback={null}><HeroScene /></Suspense>
      {/* Ambient blobs */}
      <div className="blob blob-orange" />
      <div className="blob blob-purple" />
      <div className="blob blob-teal" />

      <div className="hero-inner">
        {/* ── Text column ──────────────────────── */}
        <motion.div className="hero-text" initial={reduced ? false : "hidden"} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}>
          <motion.span variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="availability">
            <i /> Available for freelance work
          </motion.span>
          <motion.span variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="hero-greeting">Hello, I'm</motion.span>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="hero-name">
            Emmanuel
            <br />
            <span className="highlight">Matewere</span>
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="hero-role">
            <span className="role-typed">{displayed}</span>
            <span className="role-cursor">|</span>
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="hero-bio">
            Computing Information Systems graduate with expertise in building
            robust web applications, managing digital banking systems, and
            designing intuitive user experiences. Based in Blantyre, Malawi 🇲🇼 —
            working with clients worldwide.
          </motion.p>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="hero-cta">
            <button
              className="btn-primary"
              onClick={() => scrollTo("projects")}
            >
              View My Work <span className="btn-arrow">→</span>
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("contact")}>
              Get In Touch
            </button>
            <a
              className="btn-cv"
              href={`${process.env.PUBLIC_URL}/CV Emmanuel matewere CURRICULUM VITAE 2026.pdf`}
              download
            >
              <DownloadIcon sx={{ fontSize: 17 }} /> Download CV
            </a>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className="hero-socials">
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
            <a href="tel:+265882944267" className="social-pill">
              <PhoneIcon sx={{ fontSize: 16 }} /> Call Me
            </a>
          </motion.div>
        </motion.div>

        {/* ── Visual column ────────────────────── */}
        <div className="hero-visual hero-visual-hybrid">
          <SkillOrbit />
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────── */}
      <div className="hero-stats">
        {[
          { num: "5+", label: "Years Experience" },
          { num: "10+", label: "Projects Built" },
          { num: "8+", label: "Tech Skills" },
          { num: "100%", label: "Dedicated to Excellence" },
        ].map(({ num, label }, i) => (
          <React.Fragment key={label}>
            {i > 0 && <div className="stat-sep" />}
            <div className="stat">
              <span className="stat-num"><CountUp value={num} /></span>
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
