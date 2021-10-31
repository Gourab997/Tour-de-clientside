import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hook/useAuth";
import Order from "../Order/Order";
import "./Oders.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  const [singlePackage, setSinglePackage] = useState([]);
  const notify = () => toast("Booking Deleted!");
  useEffect(() => {
    const url = "https://evening-depths-30944.herokuapp.com/booking";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDelete = (id) => {
    const yes = window.confirm("Are You Sure.?");
    if (yes === true) {
      const url = `https://evening-depths-30944.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            notify();
            setOrders(remaining);
          }
        });
    }
  };
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
          <Order
            key={order._id}
            order={order}
            handleDelete={handleDelete}
          ></Order>
        ))}
      </div>
    </div>
  );
};

export default Orders;
