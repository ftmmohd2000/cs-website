import React from "react";

interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps) => {
  return (
    <div className="jumbotron jumbotron-fluid bg-success">
      <h1 className="container">{title}</h1>
    </div>
  );
};

export default Header;
