import React from "react";
import correctedImg from "../images/corrected.png";
import Divider from "./Divider";

const Assignments = () => {
  return (
    <>
      <Divider text="Assignments" />
      <div className="gamma-container">
        <h1>Gamma Corrected Image</h1>
        <img className="gamma" src={correctedImg} alt="corrected" />
        <p>
          This image contains a menu and a podium in the places where it was
          dark
        </p>
      </div>
      <Divider text="fin." />
    </>
  );
};

export default Assignments;
