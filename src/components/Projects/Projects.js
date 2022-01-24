import React from "react";
import "./Projects.css";
import images from "../../utils";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2
        className="projects-heading heading"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Projects
      </h2>
      <p
        className="section-description"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Here you will find three backend applications and one frontend
        application. The backend ones are quite complete in terms of code and
        SOLID principles, they have a good security layer using Json web tokens
        for authentication, password encryption and restriction middleware for
        requests depending on the need. All projects are deployed for you to
        see, with their respective GitHub repository and documentation. Also the
        backend ones have their own Dockerfile to be able to run the
        applications inside a Docker container. And in two of the three backend
        applications I use a cloud service to store media. In the "detail"
        button you will find a video where I explain how the applications work.
      </p>
      <div
        className="projects-container"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="project-card">
          <div className="head">
            <img
              src={images.nodejsShop}
              alt="nodejs shop"
              className="project-icon"
            />
            <div className="project-data">
              <h4>Ecommerce API</h4>
              <div className="project-links">
                <a href="https://github.com/Edu-Maturana/ecommerce-nodejs" className="code">
                  <img src={images.github} alt="github" className="repo" />
                  Code
                </a>
                <a href="https://documenter.getpostman.com/view/13824230/UVXqDsPF" className="docs">
                  <img
                    src={images.postman}
                    alt="postman"
                    className="docs-icon"
                  />
                  Docs
                </a>
              </div>
            </div>
          </div>
          <div className="project-description">
            <p>
              This project is an API of an Ecommerce. It is built with
              TypeScript, NodeJS and Express.js. For the database I used MySQL,
              and it is hosted on Clevercloud. For the payment system I used
              Stripe. I did the deployment in Heroku and further down you can
              see a Frontend project with React where I use this API.
            </p>
            <a href="/ecommerce" className="project-detail">
              Detail
              <img src={images.arrow} alt="right arrow" className="arrow" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="head">
            <img
              src={images.planning}
              alt="planning"
              className="project-icon"
            />
            <div className="project-data">
              <h4>Planning projects API</h4>
              <div className="project-links">
                <a href="https://github.com/Edu-Maturana/planning-project-app" className="code">
                  <img src={images.github} alt="github" className="repo" />
                  Code
                </a>
                <a href="https://documenter.getpostman.com/view/13824230/UVXgLGsV" className="docs">
                  <img
                    src={images.postman}
                    alt="postman"
                    className="docs-icon"
                  />
                  Docs
                </a>
              </div>
            </div>
          </div>
          <div className="project-description">
            <p>
              This app is similar to Jira. The purpose is to manage software
              projects as a team, assign tasks and track progress. I used NodeJS
              with Express.js. Project media is stored in Cloudinary. The
              database is MySQL and it is also hosted on Clevercloud. The
              application is deployed and you can make requests whenever you
              want.
            </p>
            <a href="/planning" className="project-detail">
              Detail
              <img src={images.arrow} alt="right arrow" className="arrow" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="head">
            <img src={images.network} alt="network" className="project-icon" />
            <div className="project-data">
              <h4>Social Network API</h4>
              <div className="project-links">
                <a href="https://github.com/Edu-Maturana/nodejs-social-api" className="code">
                  <img src={images.github} alt="github" className="repo" />
                  Code
                </a>
                <a href="https://documenter.getpostman.com/view/13824230/UVJkBt3s" className="docs">
                  <img
                    src={images.postman}
                    alt="postman"
                    className="docs-icon"
                  />
                  Docs
                </a>
              </div>
            </div>
          </div>
          <div className="project-description">
            <p>
              This backend application is an API of a social network. It is
              built on NodeJS with Express.js and is quite complete in terms of
              features and security. The application is deployed on Heroku, the
              database is MongoDB, it is hosted on MongoDB Atlas and the user
              images are stored on Cloudinary.
            </p>
            <a href="/social" className="project-detail">
              Detail
              <img src={images.arrow} alt="right arrow" className="arrow" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="project-card-image">
            <div className="head">
              <img
                src={images.shop}
                alt="shop"
                className="project-icon circle"
              />
              <div className="project-data">
                <h4>Laptop Shop</h4>
                <div className="project-links">
                  <a href="https://github.com/Edu-Maturana/ecommerce-react" className="code">
                    <img src={images.github} alt="github" className="repo" />
                    Code
                  </a>
                  <a href="https://shop-project-edu.netlify.app/" className="website">
                    <img src={images.web} alt="web" className="web-icon" />
                    Website
                  </a>
                </div>
              </div>
            </div>
            <div className="project-description">
              <p>
                In this project I consume the Ecommerce API that you saw a
                little above. I used React, CSS, the Stripe client for payments,
                and also the React Context API. The site is hosted on Netlify.
                You can register and make a test purchase if you wish. You will
                find a test card that Stripe provides for developers.
              </p>
              <a href="/shop" className="project-detail">
                Detail
                <img src={images.arrow} alt="right arrow" className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
