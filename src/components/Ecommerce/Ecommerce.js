import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import images from "../../utils";

import "./Detail.css";

export default function Ecommerce() {
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
          <h2 className="detail-heading heading">Ecommerce</h2>
          <p className="detail-text">
            This project is an API of an Ecommerce. It is built with TypeScript,
            NodeJS and Express.js. For the database I used MySQL, and it is
            hosted on Clevercloud. For the payment system I used Stripe. I did
            the deployment in Heroku and further down you can see a Frontend
            project with React where I use this API.
          </p>
          <div className="project-buttons">
            <a href="https://github.com/Edu-Maturana/ecommerce-nodejs" className="project-button">
              <img src={images.github} alt="github" className="project-resource" />
              Code
            </a>
            <a href="https://documenter.getpostman.com/view/13824230/UVXqDsPF" className="project-button">
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
