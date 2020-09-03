import React from "react";
import Intro from "./Intro";
import Cards from "./Cards";
import Divider from "./Divider";

const Profile = () => {
  return (
    <>
      <Intro />
      <Divider text={"But wait...There's more."} />
      <Cards />
    </>
  );
};

export default Profile;
