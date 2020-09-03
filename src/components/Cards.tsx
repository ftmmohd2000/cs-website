import React from "react";
import gitSvg from "../images/git.svg";
import twitterSvg from "../images/twitter.svg";
import youtubeSvg from "../images/youtube.svg";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <Card
        title="My GitHub"
        src={gitSvg}
        altText="git-svg"
        linkTo="https://github.com/ftmmohd2000"
        classToBePassed="card__mod__git"
        description="My creative / professional side"
      />
      <Card
        title="My Twitter"
        src={twitterSvg}
        altText="twitter-svg"
        linkTo="https://twitter.com/ftmmohd2000"
        classToBePassed="card__mod__twitter"
        description="My opinionated side"
      />
      <Card
        title="My Youtube"
        src={youtubeSvg}
        altText="youtube-svg"
        linkTo="https://www.instagram.com/mohd_f_m/"
        classToBePassed="card__mod__youtube"
        description="I have nothing on this, lol."
      />
    </div>
  );
};

export default Cards;
