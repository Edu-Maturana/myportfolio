import React from "react";
import "./Skills.css";
import images from "../../utils";

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
            <img src={images.nodejs} alt="nodejs" className="skills-icon" />
            <p className="skill-name">NodeJS</p>
          </div>
          <div className="skills-item">
            <img src={images.express} alt="express" className="skills-icon" />
            <p className="skill-name">Express</p>
          </div>
          <div className="skills-item">
            <img src={images.nest} alt="nest" className="skills-icon" />
            <p className="skill-name">NestJS</p>
          </div>
          <div className="skills-item">
            <img src={images.go} alt="go" className="skills-icon" />
            <p className="skill-name">Go</p>
          </div>
          <div className="skills-item">
            <img src={images.react} alt="react" className="skills-icon" />
            <p className="skill-name">React</p>
          </div>
          <div className="skills-item">
            <img src={images.vue} alt="vue" className="skills-icon" />
            <p className="skill-name">Vue</p>
          </div>
          <div className="skills-item">
            <img src={images.mysql} alt="mysql" className="skills-icon" />
            <p className="skill-name">MySQL</p>
          </div>
          <div className="skills-item">
            <img
              src={images.postgres}
              alt="postgresql"
              className="skills-icon"
            />
            <p className="skill-name">PostgreSQL</p>
          </div>
          <div className="skills-item">
            <img src={images.mongo} alt="mongo" className="skills-icon" />
            <p className="skill-name">MongoDB</p>
          </div>
          <div className="skills-item">
            <img src={images.docker} alt="docker" className="skills-icon" />
            <p className="skill-name">Docker</p>
          </div>
          <div className="skills-item">
            <img src={images.linux} alt="linux" className="skills-icon" />
            <p className="skill-name">Linux based OS</p>
          </div>
          <div className="skills-item">
            <img src={images.git} alt="git" className="skills-icon" />
            <p className="skill-name">{`Git (and GitHub)`}</p>
          </div>
          <div className="skills-item">
            <img src={images.aws} alt="git" className="skills-icon" />
            <p className="skill-name">Amazon Web Services</p>
          </div>
          <div className="skills-item">
            <img src={images.jest} alt="git" className="skills-icon" />
            <p className="skill-name">Unit Testing with</p>
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
            <img src={images.englishdev} alt="dev" className="english-icon" />
            <a
              href="https://platzi.com/p/edumaturanac/curso/1999-ingles-developers/diploma/detalle/"
              className="english-name"
            >
              See credential
            </a>
          </div>
          <div className="english-item">
            <img src={images.englishbuss} alt="dev" className="english-icon" />
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
