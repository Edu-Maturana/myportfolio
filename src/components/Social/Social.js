import React from "react";
import "../Ecommerce/Detail.css";
import images from "../../utils";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Social() {
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
          <h2 className="detail-heading heading">Social Network API</h2>
          <p className="detail-text">
            This backend application is an API of a social network. It is built
            on NodeJS with Express.js and is quite complete in terms of features
            and security. The application is deployed on Heroku, the database is
            MongoDB, it is hosted on MongoDB Atlas and the user images are
            stored on Cloudinary.
          </p>
          <div className="project-buttons">
            <a href="https://github.com/Edu-Maturana/nodejs-social-api" className="project-button">
              <img src={images.github} alt="github" className="project-icon" />
              Code
            </a>
            <a href="https://documenter.getpostman.com/view/13824230/UVJkBt3s" className="project-button">
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
