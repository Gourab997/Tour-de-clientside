import React from "react";
import Banner from "../Banner/Banner";
import Packages from "../Packages/Packages";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
