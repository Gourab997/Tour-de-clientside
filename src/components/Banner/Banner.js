import React from "react";
import { Carousel } from "react-bootstrap";
import firstImage from "../../images/vid-1.mp4";
import secoundImage from "../../images/vid-2.mp4";
import thirdImage from "../../images/vid-5.mp4";
import Header from "../Shared/Header/Header";
const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item style={{ height: "850px" }}>
          <video
            className=''
            style={{ width: "100%" }}
            type='video/mp4'
            autoPlay
          >
            <source src={secoundImage} type='video/mp4'></source>
          </video>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "850px" }}>
          <video
            className=''
            style={{ width: "100%" }}
            type='video/mp4'
            autoPlay
          >
            <source src={firstImage} type='video/mp4'></source>
          </video>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "850px" }}>
          <video
            className=' '
            style={{ width: "100%" }}
            type='video/mp4'
            autoPlay
          >
            <source src={thirdImage} type='video/mp4'></source>
          </video>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
