import React from "react";

import { Link } from "react-router-dom";

const Package = ({ packageService }) => {
  const {
    _id,
    packageName,
    startingPlace,
    endingPlace,
    Date,
    description,
    image,
  } = packageService;
  const color2 = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
  };
  return (
    <div>
      <div>
        <div className='card' style={{ height: "650px" }}>
          <img
            style={{ height: "650px" }}
            src={image}
            alt=''
            className='card-img-top'
          />
          <div className='card-body'>
            <h5
              style={{
                color:
                  "rgb(" +
                  color2.red +
                  "," +
                  color2.green +
                  "," +
                  color2.blue +
                  ")",
              }}
              className='card-title'
            >
              {packageName}
            </h5>
            <h6
              style={{
                color:
                  "rgb(" +
                  color2.green +
                  "," +
                  color2.red +
                  "," +
                  color2.blue +
                  ")",
              }}
              className='card-title'
            >
              <i className='fas fa-map-marker-alt'></i> {startingPlace} to{" "}
              {endingPlace}
            </h6>
            <p className='card-text'>
              <i
                style={{
                  color:
                    "rgb(" +
                    color2.blue +
                    "," +
                    color2.green +
                    "," +
                    color2.red +
                    ")",
                }}
                className='fas fa-info-circle'
              ></i>{" "}
              {description}
            </p>
            <p
              style={{
                color:
                  "rgb(" +
                  color2.green +
                  "," +
                  color2.blue +
                  "," +
                  color2.red +
                  ")",
              }}
            >
              <i className='fas fa-calendar-alt'></i> {Date}
            </p>
            <Link
              to={`/booking/${_id}`}
              className='btn btn-outline-success text-center btn-sm'
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
