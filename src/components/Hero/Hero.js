import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Hero.css";

const Hero = () => {
  //   const [heroImage, setHeroImage] = useState("");
  //   const [loading, setLoading] = useState(false);
  //   useEffect(() => {
  //     const fetchImage = async () => {
  //       setLoading(true);

  //       try {
  //         const result = axios.get("");
  //         console.log(result);
  //       } catch (e) {
  //         console.log(e);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     fetchImage();
  //   }, []);
  //   return <div>{!loading && <img src={heroImage} alt="hero" />}</div>;
  return (
    <div className="hero">
      <img
        className="hero__img"
        src="https://source.unsplash.com/random/800x600/?mars"
        alt="hero"
      />
    </div>
  );
};

export default Hero;
