import React from "react";
import images from "../../utils";

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h2 className="heading about-heading">About</h2>
      <div className="about-container">
        <img src={images.me} alt="me" className="about-image" />

        <div className="about-text">
          <div className="about-text-heading">
            <h3 className="heading">Eduardo Maturana Cáceres</h3>
            <img src={images.chile} alt="chile" className="about-chile" />
          </div>
          <div className="about-paragraph">
            <p className="text">
              I am a full stack developer with a passion for creating beautiful
              user experiences. I have a background in business and a love for
              technology. I am a full stack developer with a passion for
              creating beautiful user experiences. I have a background in
              business and a love for technology. have a background in business
              and a love for.
            </p>
            <a href="portfolio" className="resume">Download resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}
