import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Layout from "./Layout";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <Header title="Hello World" />
      <Layout>
        <Profile />
      </Layout>
    </div>
  );
};

export default App;
