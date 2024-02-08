import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/aman.jpg";
import {  FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Aman Verma</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>

      <div className="profile-links">
        <a href="https://github.com/aman9483" >
          <FaGithub />
        </a>
       
        <a href="https://www.linkedin.com/in/aman-verma-3014a9226/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
