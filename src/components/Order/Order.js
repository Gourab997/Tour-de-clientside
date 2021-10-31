import React from "react";
import { Button } from "react-bootstrap";

const Order = (props) => {
  const { _id, status, packagename, image, person, email, date } = props.order;

  return (
    <div>
      <div class='card my-5' style={{ maxWidth: "540px" }}>
        <div class='row g-0'>
          <div class='col-md-4'>
            <img src={image} class='img-fluid m-5 rounded-start' alt='...' />
          </div>
          <div class='col-md-8'>
            <div class='card-body'>
              <h5 class='card-title'>
                {packagename}{" "}
                {status === "pending" ? (
                  <p className='badge bg-danger'> Pending </p>
                ) : (
                  <p className='badge bg-success'> Approve</p>
                )}
              </h5>

              <p class='card-text'>{email}</p>
              <p class='card-text'>
                <small class='text-muted'>{date}</small>
              </p>
              <p class='card-text'>
                <small class='text-muted'>Person: {person}</small>
              </p>

              <Button
                onClick={() => props.handleDelete(_id)}
                className='btn btn-danger'
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
