import React from "react";
import images from "../../utils";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <img src={images.logo} alt="logo" className="logo" />
      <div className="links">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
