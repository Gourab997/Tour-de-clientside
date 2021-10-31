import React from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../hook/useAuth";
import review from "../../images/review.svg";
import { useForm } from "react-hook-form";
import "./Review.css";
import { ToastContainer, toast } from "react-toastify";
const Review = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const notify = () => toast("Booking Placed Successful!");
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://evening-depths-30944.herokuapp.com/createReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("successfully added");
          notify();
          reset();
        }
      });
  };
  return (
    <div className='container'>
      <div>
        <h1 className='heading'>
          <span className='mx-2 text-white'>F</span>
          <span className='mx-2 text-white'>E</span>
          <span className='mx-2 text-white'>E</span>
          <span className='mx-2 text-white'>D</span>
          <span className='mx-2 text-white'>B</span>
          <span className='mx-2 text-white'>A</span>
          <span className='mx-2 text-white'>C</span>
          <span className='mx-2 text-white'>K</span>
          <span className='space'></span>
          <span className='mx-2 text-white'>U</span>
          <span className='mx-2 text-white'>S</span>
        </h1>

        <div className='contact'>
          <div>
            <img src={review} alt='' />
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col className=''>
                  <div class='form-group'>
                    <label for='exampleInputEmail1'> Name</label>
                    <input
                      {...register("name")}
                      class='form-control'
                      defaultValue={user?.displayName}
                      plaintext
                      readOnly
                      id='exampleInputEmail1'
                      placeholder='Enter email'
                    />
                  </div>
                </Col>
                <Col>
                  <div class='form-group'>
                    <label for='exampleInputEmail1'>Email </label>
                    <input
                      {...register("email")}
                      plaintext
                      readOnly
                      class='form-control'
                      defaultValue={user?.email}
                      id='exampleInputEmail1'
                      placeholder='Enter email'
                    />
                  </div>
                </Col>
              </Row>

              <div class='form-group'>
                <label for='phone'>Phone</label>
                <input
                  {...register("phone")}
                  type='phone'
                  class='form-control'
                  id='phone'
                  placeholder='phone'
                />
              </div>
              <div class='form-group'>
                <label for='exampleFormControlTextarea1'>Description</label>
                <textarea
                  {...register("description")}
                  class='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
              <div class='form-group'>
                <label for='formControlRange'>Rating</label>
                <input
                  {...register("reviewRating")}
                  type='range'
                  class='form-control-range'
                  id='formControlRange'
                  min='0'
                  max='5'
                />
              </div>
              <div class='form-group'>
                <label for='url'>Image Url</label>
                <input
                  {...register("image")}
                  type='url'
                  class='form-control'
                  id='url'
                />
              </div>
              <button type='submit' class='btn btn-primary'>
                Submit
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
