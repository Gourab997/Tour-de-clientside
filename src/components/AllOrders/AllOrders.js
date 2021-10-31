import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AllOrder from "../AllOrder/AllOrder";
import "react-toastify/dist/ReactToastify.css";
const AllOrders = () => {
  const [allOrders, setAllOrder] = useState([]);
  const notify = () => toast("Booking Deleted!");
  const notified = () => toast("Booking Confirm!");
  useEffect(() => {
    fetch("https://evening-depths-30944.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);

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
            const remaining = allOrders.filter((order) => order._id !== id);
            notify();
            setAllOrder(remaining);
          }
        });
    }
  };

  const handleUpdatedStatus = (id, e) => {
    const url = `https://evening-depths-30944.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated successfully");
          notified();
          window.location.reload();
        }
      });
  };

  return (
    <div className='container'>
      <Link to='/createPackage'>
        <Button className='mt-5'>
          <i className='fas fa-plus text-white'></i> Add a new package
        </Button>
      </Link>

      {allOrders.map((order) => (
        <AllOrder
          key={order._id}
          handleUpdatedStatus={handleUpdatedStatus}
          handleDelete={handleDelete}
          order={order}
        ></AllOrder>
      ))}
    </div>
  );
};

export default AllOrders;
