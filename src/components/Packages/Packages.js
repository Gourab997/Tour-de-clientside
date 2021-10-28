import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Package from "../Package/Package";
import "./Packages.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/package";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className='container pack'>
     
      {packages.map((item) => (
        <Package key={item._id} packageService={item}></Package>
      ))}
    </div>
  );
};

export default Packages;
