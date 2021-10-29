import React from "react";
import { Button } from "react-bootstrap";

const Order = ({ order }) => {
  const { status, packagename, image, person, email, date } = order;
  return (
    <div>
      <div class='' style={{ maxWidth: "540px" }}>
        <div class='row g-0'>
          <div class='col-md-4'>
            <img src={image} class='img-fluid rounded-start' alt='...' />
          </div>
          <div class='col-md-8'>
            <div class='card-body'>
              <h5 class='card-title'>{packagename}</h5>
              <p class='card-text'>{status}</p>
              <p class='card-text'>{email}</p>
              <p class='card-text'>
                <small class='text-muted'>{date}</small>
              </p>
              <p class='card-text'>
                <small class='text-muted'>Person: {person}</small>
              </p>
              <Button className='btn btn-danger'>Remove</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
