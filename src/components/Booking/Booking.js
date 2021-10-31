import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Booking = () => {
  const { user } = useAuth();
  const { bookingId } = useParams();
  const [packageDetails, setPackageDetails] = useState([]);
  const [singlePackage, setSinglePackage] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const notify = () => toast("Booking Placed Successful!");

  const history = useHistory();
  const redirect = "/order";

  useEffect(() => {
    fetch("https://evening-depths-30944.herokuapp.com/package")
      .then((res) => res.json())
      .then((data) => setPackageDetails(data));
  }, []);

  useEffect(() => {
    const found = packageDetails.find((detail) => detail._id === bookingId);
    setSinglePackage(found);
  }, [packageDetails]);

  const onSubmit = (data) => {
    data.image = singlePackage?.image;
    data.packagename = singlePackage?.packageName;
    console.log(data);
    fetch("https://evening-depths-30944.herokuapp.com/createBooking", {
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
          history.push(redirect);
        }
      });
  };

  return (
    <div>
      <h1 className='heading'>
        <span className='mx-2 text-white'>B</span>
        <span className='mx-2 text-white'>O</span>
        <span className='mx-2 text-white'>O</span>
        <span className='mx-2 text-white'>K</span>
        <span className='mx-2 text-white'>I</span>
        <span className='mx-2 text-white'>N</span>
        <span className='mx-2 text-white'>G</span>
        <span className='space'></span>
        <span className='mx-2 text-white'>N</span>
        <span className='mx-2 text-white'>O</span>
        <span className='mx-2 text-white'>W</span>
      </h1>
      <div className='card mb-3'>
        <div className='row g-0'>
          <div className='col-md-4'>
            <img
              src={singlePackage?.image}
              className='img-fluid rounded-start'
              alt='...'
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h2 className='card-title'>{singlePackage?.packageName}</h2>
              <p className='card-text'>{singlePackage?.description}</p>
              <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formPlaintextName'
                  >
                    <Form.Label column sm='2'>
                      Name :
                    </Form.Label>
                    <Col sm='10'>
                      <Form.Control
                        {...register("name")}
                        plaintext
                        readOnly
                        defaultValue={user?.displayName}
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formPlaintextEmail'
                  >
                    <Form.Label column sm='2'>
                      Email :
                    </Form.Label>
                    <Col sm='10'>
                      <Form.Control
                        {...register("email")}
                        plaintext
                        readOnly
                        defaultValue={user?.email}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formPlaintextAddress'
                  >
                    <Form.Label column sm='2'>
                      Address :
                    </Form.Label>
                    <Col sm='10'>
                      <Form.Control
                        {...register("address")}
                        type='text'
                        placeholder='Address'
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formPlaintextAddress'
                  >
                    <Form.Label column sm='2'>
                      Booking Date :
                    </Form.Label>
                    <Col sm='10'>
                      <Form.Control
                        {...register("date")}
                        type='date'
                        placeholder='Date'
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className='mb-3'
                    controlId='formPlaintextAddress'
                  >
                    <Form.Label column sm='2'>
                      Person :
                    </Form.Label>
                    <Col sm='10'>
                      <Form.Control
                        {...register("person")}
                        type='number'
                        placeholder='number'
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicEnd'>
                    <Form.Control
                      {...register("status")}
                      type='hidden'
                      defaultValue='pending'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicEnd'>
                    <Form.Control
                      {...register("image")}
                      type='hidden'
                      defaultValue={singlePackage?.image}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicEnd'>
                    <Form.Control
                      {...register("packagename")}
                      type='hidden'
                      defaultValue={singlePackage?.packageName}
                    />
                  </Form.Group>
                  <Button variant='primary' type='submit'>
                    Submit
                  </Button>
                  <ToastContainer />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
