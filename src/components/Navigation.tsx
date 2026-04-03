import React, { useEffect, useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../assets/styles/Navigation.scss";

const NAV_ITEMS = [
  { label: "Expertise", id: "expertise" },
  { label: "History",   id: "history"   },
  { label: "Projects",  id: "projects"  },
  { label: "Contact",   id: "contact"   },
];

function Navigation({ parentToChild, modeChange }: any) {
  const { mode } = parentToChild;
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActive]    = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 64);

      // Detect which section is in view
      let current = "";
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navigation">
        <div className="nav-container">
          {/* Logo */}
          <button
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <span className="logo-mark">EM</span>
          </button>

          {/* Desktop links */}
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id}>
                <button
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                  onClick={() => scrollTo(id)}
                >
                  {label}
                  <span className="link-indicator" />
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <button className="icon-btn" onClick={modeChange} aria-label="Toggle theme">
              {mode === "dark" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </button>
            <button
              className="icon-btn mobile-trigger"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <div className="drawer-inner">
          {NAV_ITEMS.map(({ label, id }, i) => (
            <button
              key={id}
              className={`drawer-link ${activeSection === id ? "active" : ""}`}
              style={{ transitionDelay: mobileOpen ? `${i * 55}ms` : "0ms" }}
              onClick={() => scrollTo(id)}
            >
              <span className="drawer-num">0{i + 1}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navigation;
