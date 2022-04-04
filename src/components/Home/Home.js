import React from "react";
import "./Home.css";
import image from "../../images/laptop.jpg";
const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div className="main-part mt-5 mb-3">
          <div className="banner-section mt-5">
            <h1 className="text-uppercase text-primary display-4 fw-bold">
              The BEST LAPTOP OF 2022
            </h1>
            <h2 className="text-info display-6 fw-bold">MACBOOK AIR</h2>
            <p>
              {" "}
              The MacBook Air, powered by Apple’s M1 processor, is the best
              laptop you can buy. The base model, which includes 8GB of RAM and
              256 GB of storage, starts at $999.
            </p>
            <p>
              {" "}
              Appearance-wise, this laptop has a lot in common with the
              Intel-powered MacBook Air that Apple released earlier this year,
              including the same 2560 x 1600 screen, Touch ID, 720p webcam,
              fingerprint sensor, and scissor-switch keyboard.
            </p>
          </div>
          <div className="image-section">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="items-container"></div>
    </div>
  );
};

export default Home;
