import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import images from "../../utils";

import "../Ecommerce/Detail.css";

export default function BuenasNuevas() {
  return (
    <div className="detail">
      <div className="detail-container">
        <Link className="home" to="/">
          <img src={images.leftArrow} alt="left arrow" className="left-arrow" />
          Back to Home
        </Link>
        <div className="video-wrapper">
          <ReactPlayer
            url="https://youtu.be/KRU8zIxEUjg"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="detail-info">
          <h2 className="detail-heading heading">BNTV</h2>
          <p className="detail-text">
            Buenas Nuevas TV is a streaming platform that belongs to a church
            called Iglesia Ministerio Levantando a Cristo here in Chile. In this
            project, I worked building the user interface using Vue, Css and
            Bootsrap. Unafortunately, I can't share the project because it is
            private, but you can see an explanatory video in the detail page.
          </p>
        </div>
      </div>
    </div>
  );
}
