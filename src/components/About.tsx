import React from "react";
import "../assets/styles/About.scss";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-wrap">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Technology with <span className="highlight">purpose.</span>
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-profile">
            <img
              src={`${process.env.PUBLIC_URL}/emmanuel profile img.png`}
              alt="Emmanuel Matewere, full-stack developer from Malawi"
              width="420"
              height="420"
              loading="lazy"
              decoding="async"
            />
            <span>Developer · Designer · Systems thinker</span>
          </div>
          <p>
            I’m Emmanuel Matewere, a Malawian full-stack developer and
            technology professional with a background in Computing Information
            Systems. I build digital products that connect technology, business,
            and people, with experience in web development, digital banking, and
            entrepreneurship.
          </p>
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
      </div>
    </section>
  );
}

export default About;
