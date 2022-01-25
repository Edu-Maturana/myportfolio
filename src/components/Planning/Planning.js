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
            url="https://youtu.be/685j5cpfcyQ"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="detail-info">
          <h2 className="detail-heading heading">Planning Projects API</h2>
          <p className="detail-text">
            This app is similar to Jira. The purpose is to manage software
            projects as a team, assign tasks and track progress. I used NodeJS
            with Express.js. Project media is stored in Cloudinary. The database
            is MySQL and it is also hosted on Clevercloud. The application is
            deployed and you can make requests whenever you want.
          </p>
          <div className="project-buttons">
            <a href="https://github.com/Edu-Maturana/planning-project-app" className="project-button">
              <img src={images.github} alt="github" className="project-resource" />
              Code
            </a>
            <a href="https://documenter.getpostman.com/view/13824230/UVXgLGsV" className="project-button">
              <img
                src={images.postman}
                alt="postman"
                className="project-resource"
              />
              Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
