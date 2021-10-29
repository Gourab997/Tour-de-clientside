import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hook/useAuth";
import Order from "../Order/Order";
import "./Oders.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  const [singlePackage, setSinglePackage] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/booking";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  useEffect(() => {
    const found = orders.filter((order) => order.email === user.email);

    setSinglePackage(found);
  }, [orders]);

  return (
    <div>
      <h1 className='heading'>
        <span className='mx-2 text-white'>M</span>
        <span className='mx-2 text-white'>Y</span>

        <span className='space'></span>
        <span className='mx-2 text-white'>O</span>
        <span className='mx-2 text-white'>R</span>
        <span className='mx-2 text-white'>D</span>
        <span className='mx-2 text-white'>E</span>
        <span className='mx-2 text-white'>R</span>
        <span className='mx-2 text-white'>S</span>
      </h1>
      <div className='container order'>
        {singlePackage.map((order) => (
          <Order key={order._id} order={order}></Order>
        ))}
      </div>
    </div>
  );
};

export default Orders;
