import React from "react";

interface IDividerProps {
  text: string;
}

const Divider = ({ text }: IDividerProps) => {
  return (
    <div className="jumbotron banner">
      <p className="text-center display-4 text-success">{text}</p>
    </div>
  );
};

export default Divider;
