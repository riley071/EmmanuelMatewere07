import React, { useState, useEffect } from "react";
import {
  Main,
  About,
  Timeline,
  Expertise,
  DesignShowcase,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import { MotionConfig } from "framer-motion";
import "./assets/styles/Motion.scss";
import ScrollToTop from "./components/ScrollToTop";
import "./index.scss";

function App() {
  const [mode, setMode] = useState<string>("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    return () => { delete document.documentElement.dataset.theme; };
  }, [mode]);

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <MotionConfig reducedMotion="user">
        <main>
          <Main />
          <About />
          <Expertise />
          <DesignShowcase />
          <Timeline />
          <Project />
          <Contact />
        </main>
      </MotionConfig>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
