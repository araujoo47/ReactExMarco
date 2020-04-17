import React from "react";

import Header from "../Components/Header";
import Image from "../Components/Image";
import "../Styles/about.less";
import TextMessage from "../Components/TextMessage";
import image1 from "../Images/lisbon.jpg";

const About = () => {
  return (
    <div>

      <Header title="About" />

      <div className="aboutContainer">
        <TextMessage classname="about-text">
          This is a picture of Lisbon, Portugal's capital!
        </TextMessage>

        <Image imageSrc={image1} alt="Random image number 1" />
      </div>

    </div>
  );
};

export default About;
