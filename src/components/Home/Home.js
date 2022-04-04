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
            <button className="btn btn-lg btn-secondary">Live Demo</button>
          </div>
          <div className="image-section">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="customer-reviews mt-5">
          <h2 className="mb-5 display-5 fw-bold text-center">
            Customer Reviews
          </h2>
          <div className="review-items">
            <div className="review text-left">
              <h5>User: Abdul Basit</h5>
              <p>This is an awesome laptop ever I have used.</p>
              <h6>Ratings: 5</h6>
            </div>
            <div className="review text-left">
              <h5>User: Mr.Henkin</h5>
              <p>This laptop is really remarkable.</p>
              <h6>Ratings: 5</h6>
            </div>
            <div className="review text-left">
              <h5>User: Arnold Memphil</h5>
              <p>Super fast but understanding not easy.</p>
              <h6>Ratings: 4.5</h6>
            </div>
            <div className="review text-left">
              <h5>User: Kawshik Armania</h5>
              <p>I like it for my personal use.</p>
              <h6>Ratings: 4.9</h6>
            </div>
            <div className="review text-left">
              <h5>User: Robinson Gull</h5>
              <p>I am searching for this type of product from a long time</p>
              <h6>Ratings: 5</h6>
            </div>
            <div className="review text-left">
              <h5>User: Mr Monowar</h5>
              <p>Amezing Product ever I used.</p>
              <h6>Ratings: 5</h6>
            </div>
          </div>
          <h3 className="text-center">
            <button className="btn btn-info btn-lg fw-bold mt-5">
              See All Reviews
            </button>
          </h3>
        </div>
      </div>
      <div className="items-container"></div>
    </div>
  );
};

export default Home;
