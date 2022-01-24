import React from "react";
import "../Ecommerce/Detail.css";
import images from "../../utils";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export default function Shop() {
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
          <h2 className="detail-heading heading">Laptop Shop</h2>
          <p className="detail-text">
            In this project I consume the Ecommerce API that you saw a little
            above. I used React, CSS, the Stripe client for payments, and also
            the React Context API. The site is hosted on Netlify. You can
            register and make a test purchase if you wish. You will find a test
            card that Stripe provides for developers.
          </p>
          <div className="project-buttons">
            <a href="https://github.com/Edu-Maturana/ecommerce-react" className="project-button">
              <img src={images.github} alt="github" className="project-resource" />
              Code
            </a>
            <a href="https://shop-project-edu.netlify.app/" className="project-button">
              <img
                src={images.web}
                alt="postman"
                className="project-resource"
              />
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
