import React from "react";
import "../Ecommerce/Detail.css";
import images from "../../utils";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Planning() {
  return (
    <div className="detail">
      <div className="detail-container">
        <Link className="home" to="/">
          <img src={images.leftArrow} alt="left arrow" className="left-arrow" />
          Back to Home
        </Link>
        <div className="video-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=7WTYyor6mok"
            width="100%"
            height="100%"
          />
        </div>
        <div className="detail-info">
          <h2 className="detail-heading heading">Planning Projects API</h2>
          <p className="detail-text">
            I have been working on ecommerce projects for the last 2 years. I
            have worked on a variety of projects, from a simple ecommerce
            website to a complex ecommerce platform.
          </p>
          <div className="project-buttons">
            <a href="github" className="project-button">
              <img src={images.github} alt="github" className="project-icon" />
              Code
            </a>
            <a href="postman" className="project-button">
              <img
                src={images.postman}
                alt="postman"
                className="project-icon"
              />
              Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
