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
              I am a Full Stack Developer from Chile. I like teamwork, solving
              problems and carrying out software projects. I am currently a Web
              Developer at Buenas Nuevas, where I have gained both technical and
              human experience. Mainly I have had to work with Vue.js and I also
              use Jira Software with Scrum methodology together with my
              colleagues.
            </p>
            <a href="portfolio" className="resume">
              Download resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
