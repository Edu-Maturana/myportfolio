import React from "react";
import images from "../../utils";

import "./About.css";

export default function About() {
  return (
    <div className="about" id="about">
      <h2
        className="heading about-heading"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        About
      </h2>
      <div className="about-container" data-aos="fade-up" data-aos-delay="500">
        <img src={images.me} alt="me" className="about-image" />

        <div className="about-text">
          <div className="about-text-heading">
            <h3 className="heading">Eduardo Maturana Cáceres</h3>
            <img src={images.chile} alt="chile" className="about-chile" />
          </div>
          <div className="about-paragraph">
            <p className="text">
              I am from Chile and I am 19 years old. Currently i work as a Full Stack Developer 
              at wherEX, a Fintech & B2B commerce startup. 
              Mainly I have had to build new features with Go and Angular for wherEX Pay, 
              a financial innovation by wherEX, also I have
              used Jira Software with Scrum methodology together with my
              colleagues. I like self-taught learning and I have no problem
              getting out of my comfort zone and using new technologies.
            </p>
            <a href="/files/em-resume.pdf" className="resume" download>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
