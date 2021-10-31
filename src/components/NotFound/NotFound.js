import React from "react";
import notfound from "../../images/notfound.svg";
const NotFound = () => {
  return (
    <div className='container  mt-5'>
      <img className='w-50' src={notfound} alt='' />
      <h1 className='text-danger'>404 Not Found</h1>
    </div>
  );
};

export default NotFound;
