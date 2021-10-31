import React, { useEffect, useState } from "react";

import ShowReview from "../ShowReview/ShowReview";
import "./ShowReviews.css";
const ShowReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = "https://evening-depths-30944.herokuapp.com/review";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className='container reviews '>
      {reviews.map((review) => (
        <ShowReview key={review._id} review={review}></ShowReview>
      ))}
    </div>
  );
};

export default ShowReviews;
