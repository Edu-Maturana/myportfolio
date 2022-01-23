import React from "react";
import "./Hero.css";
import images from "../../utils";

export default function Hero() {
  return (
    <div className="Hero">
      <p className="hero-text" data-aos="fade-up" data-aos-delay="100">Hi! I'm</p>
      <h1 className="hero-heading heading" data-aos="fade-up" data-aos-delay="300">Eduardo Maturana</h1>
      <p className="hero-text" data-aos="fade-up" data-aos-delay="500"> Full Stack Developer</p>
      <div className="hero-buttons" data-aos="fade-up" data-aos-delay="700">
        <a href="#projects" className="hero-button primary">
          See projects
        </a>

        <a href="#contact" className="hero-button">
          Contact
        </a>
      </div>
      <div className="hero-icons" data-aos="fade-up" data-aos-delay="900">
        <a href="https://github.com/Edu-Maturana">
          <img className="hero-icon invert" src={images.github} alt="Github" />
        </a>
        <a
          className="hero-icon"
          href="https://www.linkedin.com/in/eduardo-maturana-c%C3%A1ceres-27561b1b5/"
        >
          <img className="hero-icon invert" src={images.linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
