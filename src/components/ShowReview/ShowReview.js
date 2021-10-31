import React from "react";
import Rating from "react-rating";
import "./ShowReview.css";
const ShowReview = (props) => {
  const { name, image, description, reviewRating } = props.review;
  console.log(props.review);
  return (
    <div>
      <div className='container'></div>
      <div className='cards card'>
        <div className='cards-header card-header'>
          <img src={image} alt='rover' />
        </div>
        <div className='cards-body card-body p-3'>
          <h4 className='pt-3'>{name}</h4>
          <div className='user'>
            <div className='user-info'></div>
            <h6>
              <Rating
                fullSymbol='fas fa-star icon-color'
                emptySymbol='far fa-star icon-color'
                initialRating={reviewRating}
                fractions={2}
                readonly
              ></Rating>
            </h6>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowReview;
