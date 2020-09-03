import React from "react";

interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps) => {
  return (
    <div className="jumbotron jumbotron-fluid banner">
      <h1 className="text-center">{title}</h1>
    </div>
  );
};

export default Header;
