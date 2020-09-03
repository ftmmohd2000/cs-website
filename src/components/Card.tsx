import React from "react";

interface ICardProps {
  title: string;
  classToBePassed: string;
  altText: string;
  src: string;
  linkTo: string;
  description: string;
}

const Card = ({
  title,
  classToBePassed,
  altText,
  src,
  linkTo,
  description
}: ICardProps) => {
  return (
    <a href={linkTo}>
      <div className={`card card__mod ${classToBePassed}`}>
        <img className="card-image-top" src={src} alt={altText} />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-body text-center">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
