import React from "react";

import Header from "../Components/Header";
import TextMessage from "../Components/TextMessage";
import "../Styles/home.less";

const Home = () => {
  return (
    <div>

      <Header title="Home" />

      <TextMessage classname="home-text">
        Welcome to my homepage.
      </TextMessage>

    </div>
  );
};

export default Home;
