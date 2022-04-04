import React, { useEffect, useState } from "react";
import "./Home.css";
import image from "../../images/laptop.jpg";
const Home = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data.slice(0, 3)));
  }, []);
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
          <div>
            <h2 className="text-center mt-3 mb-5">Customers Review</h2>
            <div className="review-grid">
              {reviews.map((review) => (
                <div className="grid-style">
                  <h4>{review.name}</h4>
                  <h6>{review.body}</h6>
                  <p className="fw-bold">Ratings: {review.ratings}***</p>
                </div>
              ))}
            </div>
          </div>
          <div className="review-items"></div>
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
