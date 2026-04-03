import React from "react";
import GitHubIcon   from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

const NAV_ITEMS = [
  { label: "Expertise", id: "expertise" },
  { label: "History",   id: "history"   },
  { label: "Projects",  id: "projects"  },
  { label: "Contact",   id: "contact"   },
];

function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-logo">EM</span>
            <p className="footer-tagline">Building the web, one line at a time.</p>
          </div>

          {/* Nav */}
          <nav className="footer-nav" aria-label="Footer navigation">
            {NAV_ITEMS.map(({ label, id }) => (
              <button key={id} className="footer-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="footer-social">
            <a href="https://github.com/riley071" target="_blank" rel="noreferrer" className="footer-icon-btn" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-matewere-b5a39218b/" target="_blank" rel="noreferrer" className="footer-icon-btn" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <p className="footer-copy">
          Designed &amp; built by{" "}
          <span className="footer-author">Emmanuel Matewere</span> © 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;
