import React, { useEffect, useState } from "react";
import Home from "../Home/Home";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
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
  );
};

export default Reviews;
