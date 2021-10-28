import React from "react";
import { Link } from "react-router-dom";

const Package = ({ packageService }) => {
  const { packageName, startingPlace, endingPlace, Date, description, image } =
    packageService;
  return (
    <div>
      <div>
        <div className='card'>
          <img src={image} alt='' className='card-img-top' />
          <div className='card-body'>
            <h5 className='card-title'>{packageName}</h5>
            <h6 className='card-title'>
              <i class='fas fa-map-marker-alt'></i> {startingPlace} to{" "}
              {endingPlace}
            </h6>
            <p className='card-text'>
              <i class='fas fa-info-circle'></i> {description}
            </p>
            <p>
              <i class='fas fa-calendar-alt'></i> {Date}
            </p>
            <Link to='' className='btn btn-outline-success btn-sm'>
              Read More
            </Link>
            <Link to='' className='btn btn-outline-danger btn-sm'>
              <i className='far fa-heart'></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
