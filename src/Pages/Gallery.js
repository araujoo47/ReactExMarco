import React from "react";

import Header from "../Components/Header";
import Image from "../Components/Image";
import image1 from "../Images/lisbon.jpg";
import image2 from "../Images/porto.jpg";
import image3 from "../Images/ny.jpg";
import image4 from "../Images/tokyo.jpg";
import "../Styles/gallery.less";

const Gallery = () => {
  return (
    <div>

      <Header title="Gallery" />

      <div className="image-gallery">
        <Image imageSrc={image1} alt="Random image number 1" />
        <Image imageSrc={image2} alt="Random image number 2" />
        <Image imageSrc={image3} alt="Random image number 3" />
        <Image imageSrc={image4} alt="Random image number 4" />
      </div>

    </div>
  );
};

export default Gallery;
