import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-section">
        <h2
          className="skills-heading heading"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Skills
        </h2>
        <div
          className="skills-container"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <p className="note">
            Note: In this list i am ommiting the basics: Html, Css, JavaScript
            and TypeScript.
          </p>
          <div className="skills-item">
            <p className="skill-name">- Go (Gin, Fiber & Echo)</p>
          </div>
          <div className="skills-item">
            <p className="skill-name">- NodeJS (Express & NestJS)</p>
          </div>
          <div className="skills-item">
            <p className="skill-name">- React, Vue & Angular</p>
          </div>
          <div className="skills-item">
            <p className="skill-name">- MySQL & PostgreSQL</p>
          </div>
          <div className="skills-item">
            <p className="skill-name">- MongoDB</p>
          </div>
          <div className="skills-item">
            <p className="skill-name">- Docker</p>
          </div>
          <div className="skills-item">
            <p className="skill-name">- Linux</p>
          </div>
          <div className="skills-item">
            <p className="skill-name">- {`Git (and GitHub)`}</p>
          </div>
          <div className="skills-item">
            <p className="skill-name">- Unit Testing</p>
          </div>
        </div>
      </div>
      <div className="english-section">
        <h2
          className="skills-heading heading"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          English certificates
        </h2>
        <div
          className="english-container"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="english-item">
            <img src="https://res.cloudinary.com/edu-devjs/image/upload/v1647956048/portafolio/b_v2kag8.png" alt="dev" className="english-icon" />
            <a
              href="https://platzi.com/p/edumaturanac/curso/1999-ingles-developers/diploma/detalle/"
              className="english-name"
            >
              See credential
            </a>
          </div>
          <div className="english-item">
            <img src="https://res.cloudinary.com/edu-devjs/image/upload/v1647956032/portafolio/a_vgo86v.png" alt="dev" className="english-icon" />
            <a
              href="https://platzi.com/p/edumaturanac/curso/2153-ingles-avanzado-trabajo/diploma/detalle/"
              className="english-name"
            >
              See credential
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
