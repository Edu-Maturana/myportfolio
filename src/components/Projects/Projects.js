import React from "react";
import "./Projects.css";
import images from "../../utils";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="projects-heading heading" data-aos="fade-up" data-aos-delay="300">Projects</h2>
      <div className="projects-container" data-aos="fade-up" data-aos-delay="500">
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
            <a href="/ecommerce" className="project-detail">
              See detail
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
            <a href="/planning" className="project-detail">
              See detail{" "}
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
            <a href="/social" className="project-detail">
              See detail{" "}
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
                  <a href="github" className="code">
                    <img src={images.github} alt="github" className="repo" />
                    Code
                  </a>
                  <a href="web" className="website">
                    <img src={images.web} alt="web" className="web-icon" />
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
              <a href="/shop" className="project-detail">
                See detail{" "}
                <img src={images.arrow} alt="right arrow" className="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
