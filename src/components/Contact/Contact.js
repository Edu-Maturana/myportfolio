import React from "react";
import images from "../../utils";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2
        className="contact-heading heading"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Contact
      </h2>
      <div
        className="contact-container"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="contact-card">
          <img
            src={images.linkedin}
            alt="linkedin"
            className="contact-icon github"
          />
          <div className="contact-data">
            <h4 className="platform linkedin">LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/eduardo-maturana-c%C3%A1ceres-27561b1b5/"
              className="nickname"
            >
              Eduardo Maturana Cáceres
            </a>
          </div>
        </div>
        <div className="contact-card">
          <img
            src={images.github}
            alt="github"
            className="contact-icon github"
          />
          <div className="contact-data">
            <h4 className="platform">Github</h4>
            <a href="https://github.com/Edu-Maturana" className="nickname">
              EduMaturana
            </a>
          </div>
        </div>
        <div className="contact-card">
          <img src={images.discord} alt="discord" className="contact-icon" />
          <div className="contact-data">
            <h4 className="platform discord">Discord</h4>
            <p className="nickname">
              EduMaturana #2126
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
