import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import Package from "../Package/Package";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const url = "http://localhost:5000/package";
    setLoading(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data));
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
    setShow(!show);
  }, []);

  return (
    <div className='container pack'>
      {loading ? (
        packages.map((item) => (
          <Package
            key={item._id}
            packageService={item}
            loading={loading}
          ></Package>
        ))
      ) : (
        <Spinner
          className='container spin'
          direction='horizontal'
          animation='border'
          variant='secondary'
        />
      )}
    </div>
  );
};

export default Packages;
