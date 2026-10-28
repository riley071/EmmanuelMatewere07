import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../assets/styles/ScrollToTop.scss";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 400);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;
    if (reduced) root.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    if (reduced) root.style.scrollBehavior = previousBehavior;
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      disabled={!visible}
    >
      <KeyboardArrowUpIcon aria-hidden="true" />
    </button>
  );
}

export default ScrollToTop;
