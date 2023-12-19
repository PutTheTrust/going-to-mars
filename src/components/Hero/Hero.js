import React, { useEffect, useState } from "react";

import "./Hero.css";

const Hero = () => {
  const [heroImage, setHeroImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(
          "https://source.unsplash.com/random/800x600/?mars"
        );
        const blob = await response.blob();

        const objectURL = URL.createObjectURL(blob);
        setHeroImage(objectURL);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, []);
  return (
    <div className="hero">
      <img className="hero__img" src={heroImage} alt="hero" />
    </div>
  );
};

export default Hero;
