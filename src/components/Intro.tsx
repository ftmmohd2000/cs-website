import React from "react";
import profilePic from "../images/profile.jpeg";

const Intro = () => {
  return (
    <div className="d-flex intro-block">
      <img src={profilePic} alt="profile-pic" className="profile-pic" />
      <div className="intro">
        <h4>My name is Mohammed Motorwala</h4>
        <h4>And this is a very blurry picture of me</h4>
        <h4>{"<="}</h4>
      </div>
    </div>
  );
};

export default Intro;
