import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Packages from "../Packages/Packages";

import ShowReviews from "../ShowReviews/ShowReviews";

const Home = () => {
  return (
    <div className>
      <Banner></Banner>
      <h1 className='heading'>
        <span className='mx-2 text-white'>P</span>
        <span className='mx-2 text-white'>a</span>
        <span className='mx-2 text-white'>c</span>
        <span className='mx-2 text-white'>k</span>
        <span className='mx-2 text-white'>a</span>
        <span className='mx-2 text-white'>g</span>
        <span className='mx-2 text-white'>e</span>
        <span className='mx-2 text-white'>s</span>
      </h1>
      <Packages></Packages>
      <Gallery></Gallery>
      <h1 className='heading'>
        <span className='mx-2 text-white'>R</span>
        <span className='mx-2 text-white'>E</span>
        <span className='mx-2 text-white'>V</span>
        <span className='mx-2 text-white'>I</span>
        <span className='mx-2 text-white'>E</span>
        <span className='mx-2 text-white'>W</span>
      </h1>
      <ShowReviews></ShowReviews>
    </div>
  );
};

export default Home;
