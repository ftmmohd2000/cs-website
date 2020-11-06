import React from "react";
import Divider from "./Divider";
import img13x from "../images/img1_3_x.jpg";
import img13y from "../images/img1_3_y.jpg";
import img15x from "../images/img1_5_x.jpg";
import img15y from "../images/img1_5_y.jpg";
import img23x from "../images/img2_3_x.jpg";
import img23y from "../images/img2_3_y.jpg";
import img25x from "../images/img2_5_x.jpg";
import img25y from "../images/img2_5_y.jpg";
import in1 from "../images/in1.jpg";
import in2 from "../images/in2.jpg";

const Assignments = () => {
  return (
    <>
      <Divider text="Difference Operators Assignment" />
      <div className="gamma-container">
        <h2>This is the first image that I filtered:</h2>
        <img src={in1} alt="in1" className="gamma" />
        <p>
          This is the result of filtering in the x direction with a 3x3
          operator:
        </p>
        <img src={img13x} alt="in1" className="gamma" />
        <p>
          This is the result of filtering in the y direction with a 3x3
          operator:
        </p>
        <img src={img13y} alt="in1" className="gamma" />
        <p>
          This is the result of filtering in the x direction with a 5x5
          operator:
        </p>
        <img src={img15x} alt="in1" className="gamma" />
        <p>
          This is the result of filtering in the y direction with a 5x5
          operator:
        </p>
        <img src={img15y} alt="in1" className="gamma" />
        <h2>This is the second image that I filtered:</h2>
        <img src={in2} alt="in1" className="gamma" />
        <p>
          This is the result of filtering in the x direction with a 3x3
          operator:
        </p>
        <img src={img23x} alt="in1" className="gamma" />
        <p>
          This is the result of filtering in the y direction with a 3x3
          operator:
        </p>
        <img src={img23y} alt="in1" className="gamma" />
        <p>
          This is the result of filtering in the x direction with a 5x5
          operator:
        </p>
        <img src={img25x} alt="in1" className="gamma" />
        <p>
          This is the result of filtering in the y direction with a 5x5
          operator:
        </p>
        <img src={img25y} alt="in1" className="gamma" />
      </div>
      <Divider text="fin." />
    </>
  );
};

export default Assignments;
