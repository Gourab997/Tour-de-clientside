import React from "react";
import { Carousel } from "react-bootstrap";
import firstImage from "../../images/vid-1.mp4";
import secoundImage from "../../images/vid-4.mp4";
import thirdImage from "../../images/vid-5.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <div id='#home'>
      <Carousel fade>
        <Carousel.Item style={{ height: "820px" }}>
          <video
            className=''
            style={{ width: "100%" }}
            type='video/mp4'
            autoPlay
          >
            <source src={secoundImage} type='video/mp4'></source>
          </video>

          <Carousel.Caption>
            <h1 className='text-bold  bannerText' style={{ color: "#FFC1B2" }}>
              A journey of a thousand miles begins with a single step
            </h1>
            <p className='text-bold' style={{ color: "#D7673D" }}>
              Do not follow where the path may lead. Go instead where there is
              no path and leave a trail
            </p>
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
            <h1 className='text-bold  bannerText'>
              Traveling – it leaves you speechless, then turns you into a
              storyteller
            </h1>
            <p className='text-bold' style={{ color: "#F2A584" }}>
              Wherever you go becomes a part of you somehow
            </p>
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
            <h1 className='text-bold  bannerText' style={{ color: "#D7673D" }}>
              Oh the places you’ll{" "}
            </h1>
            <p className='text-bold' style={{ color: "#00C9B1" }}>
              Take only memories, leave only footprints
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
