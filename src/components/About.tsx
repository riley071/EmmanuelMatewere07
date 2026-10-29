import { motion, useReducedMotion } from "framer-motion";
import AnimatedCard from "./AnimatedCard";
import React from "react";
import "../assets/styles/About.scss";

function About() {
  const reduced = useReducedMotion();
  return (
    <section className="about-section" id="about">
      <AnimatedCard tilt={false} className="about-wrap">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Technology with <span className="highlight">purpose.</span>
          </h2>
          <motion.span className="about-accent" initial={reduced ? false : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: .8 }} />
        </div>
        <div className="about-grid">
          <AnimatedCard className="about-profile">
            <img
              src={`${process.env.PUBLIC_URL}/emmanuel profile img.png`}
              alt="Emmanuel Matewere, full-stack developer from Malawi"
              width="420"
              height="420"
              loading="lazy"
              decoding="async"
            />
            <span>Developer · Designer · Systems thinker</span>
          </AnimatedCard>
          <p>
            I’m Emmanuel Matewere, a Malawian full-stack developer and
            technology professional with a background in Computing Information
            Systems. I build digital products that connect technology, business,
            and people, with experience in web development, digital banking, and
            entrepreneurship.
          </p>
          {/* <p>
            I use AI-assisted development tools such as Claude and OpenAI Codex
            for research, debugging, documentation, and improving development
            workflows, while reviewing and testing every output before using it.
          </p> */}
          <div className="about-goal">
            <span className="about-kicker">My goal</span>
            <p>
              I create digital solutions that make businesses more efficient,
              improve access to services, expand economic opportunities, and
              make technology more useful to everyday people.
            </p>
            <p>
              My career is growing beyond software development into digital
              transformation: helping organisations adopt technology, redesign
              processes, and create lasting value for Malawi’s digital and
              economic development.
            </p>
          </div>
        </div>
      </AnimatedCard>
    </section>
  );
}

export default About;
