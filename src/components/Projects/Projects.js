import React from "react";
import "./Projects.css";
import images from "../../utils";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="projects-heading heading">Projects</h2>
      <div className="projects-container">
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
                <a href="github" className="code">
                  <img src={images.github} alt="github" className="repo" />
                  Code
                </a>
                <a href="postman" className="docs">
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
              This is a NodeJS based ecommerce API that allows users to create,
              update, and delete products.
            </p>
            <a href="/" className="project-detail">
              See detail
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
                <a href="github" className="code">
                  <img src={images.github} alt="github" className="repo" />
                  Code
                </a>
                <a href="postman" className="docs">
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
              This is a NodeJS based ecommerce API that allows users to create,
              update, and delete products.
            </p>
            <a href="/" className="project-detail">
              See detail
            </a>
          </div>
        </div>
        <div className="project-card">
          <div className="head">
            <img src={images.network} alt="network" className="project-icon" />
            <div className="project-data">
              <h4>Social Network API</h4>
              <div className="project-links">
                <a href="github" className="code">
                  <img src={images.github} alt="github" className="repo" />
                  Code
                </a>
                <a href="postman" className="docs">
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
              This is a NodeJS based ecommerce API that allows users to create,
              update, and delete products.
            </p>
            <a href="/" className="project-detail">
              See detail
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
                  <a href="github" className="code">
                    <img src={images.github} alt="github" className="repo" />
                    Code
                  </a>
                  <a href="web" className="website">
                    <img
                      src={images.web}
                      alt="web"
                      className="web-icon"
                    />
                    Website
                  </a>
                </div>
              </div>
            </div>
            <div className="project-description">
              <p>
                This is a NodeJS based ecommerce API that allows users to
                create, update, and delete products.
              </p>
              <a href="/" className="project-detail">
                See detail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
