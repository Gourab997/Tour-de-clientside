import React from "react";
import { Table } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const AllOrder = (props) => {
  const { name, email, address, date, person, status, packagename, _id } =
    props.order;

  return (
    <div className='container table'>
      <Table className='table-responsive container striped bordered hover m-lg-5 size="sm"'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Package Name</th>
            <th>Person</th>
            <th>Address</th>
            <th>Booking Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=''>{name}</td>
            <td className=''>{email}</td>
            <td className=''>{packagename}</td>
            <td className=''>{person}</td>
            <td className=''>{address}</td>
            <td className=''>{date}</td>
            <td className=''>
              {status}{" "}
              {status === "pending" && (
                <button
                  onClick={() => props.handleUpdatedStatus(_id)}
                  className='btn btn-success'
                >
                  Confirm
                </button>
              )}
            </td>
            <td>
              {" "}
              <button
                onClick={() => props.handleDelete(_id)}
                className=' btn btn-danger'
              >
                delete
              </button>
              <ToastContainer />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AllOrder;
