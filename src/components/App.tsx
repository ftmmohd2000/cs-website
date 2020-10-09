import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";
import Assignments from "./Assignments";

const Homepage = () => {
  return (
    <div>
      <Header title="Hello World" />
      <Layout>
        <Profile />
        <Assignments />
      </Layout>
    </div>
  );
};

export default Homepage;
