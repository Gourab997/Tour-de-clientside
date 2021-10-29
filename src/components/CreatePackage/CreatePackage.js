import axios from "axios";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePackage = () => {
  const notify = () => toast("Package Created!");
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/createPackage", data).then((res) => {
      if (res.data.insertedId) {
        alert("Package Created");
        notify();
        reset();
      }
    });
  };
  return (
    <div className='container mt-5'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label>Package Name</Form.Label>
          <Form.Control
            {...register("packageName")}
            type='text'
            placeholder='Enter Package Name'
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Group className='mb-3' controlId='formBasicStart'>
              <Form.Label>Start place</Form.Label>
              <Form.Control
                {...register("startingPlace")}
                type='text'
                placeholder='Start place'
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3' controlId='formBasicEnd'>
              <Form.Label>End place</Form.Label>
              <Form.Control
                {...register("endingPlace")}
                type='text'
                placeholder='End place'
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className='mb-3' controlId='formBasicEnd'>
          <Form.Label>Date</Form.Label>
          <Form.Control {...register("Date")} type='date' placeholder='Date' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEnd'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={3} {...register("description")} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEnd'>
          <Form.Label>Image</Form.Label>
          <Form.Control
            {...register("image")}
            type='url'
            placeholder='image url'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEnd'>
          <Form.Control
            {...register("status")}
            type='hidden'
            defaultValue='pending'
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <ToastContainer />
      </Form>
    </div>
  );
};

export default CreatePackage;
