import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Spinner } from "react-bootstrap";
import Layout from "../Layout/Layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Doctor.css";
import { useSelector, useDispatch } from "react-redux";
import { AddDoctor, GetDoctor } from "../../Redux/AsyncAction/DoctorAction";
import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";
const Doctor = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);
  console.log(doctor);

  useEffect(() => {
    dispatch(GetDoctor());
  }, [dispatch]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setstate] = useState({
    name: "",
    email: "",
    contactNumber: "",
    description: "",
    position: "",
    degree1: "",
    degree2: "",
    degree3: "",
    degree4: "",
    experience1: "",
    experience2: "",
    experience3: "",
    img:''
  });
  const handleInputs = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const Submit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch(AddDoctor(state));
    setShow(false);
    setTimeout(function(){
        navigate('/doctor');
      }, 3000);
  };
  return (
    <Layout sidebar>
      <ToastContainer />
      <Button
        style={{ margin: "1rem 1rem 2rem 0em" }}
        variant="primary"
        onClick={handleShow}
      >
        Add Doctor
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input
              id="input"
              type="text"
              value={state.name}
              onChange={handleInputs}
              name="name"
              placeholder="Name"
            />

            <input
              id="input"
              type="email"
              value={state.email}
              onChange={handleInputs}
              name="email"
              placeholder="Teacher Email"
            />

            <input
              id="input"
              type="text"
              value={state.contactNumber}
              onChange={handleInputs}
              name="contactNumber"
              placeholder="Enter Contact Number"
            />

            <select
              value={state.position}
              name="position"
              onChange={handleInputs}
              id="_id"
            >
              <option value="">Please choose Position</option>
              <option value="Professor">Professor</option>
              <option value="Associate professor">Associate professor</option>
              <option value="Assistant Professor">Assistant Professor</option>
              <option value="Senior Lecturer">Senior Lecturer </option>
              <option value="Lecturer ">Lecturer </option>
            </select>

            <input
              id="input"
              type="text"
              value={state.degree1}
              onChange={handleInputs}
              name="degree1"
              placeholder="Degree 1"
            />

            <input
              id="input"
              type="text"
              value={state.degree2}
              onChange={handleInputs}
              name="degree2"
              placeholder="Degree 2"
            />

            <input
              id="input"
              type="text"
              value={state.degree3}
              onChange={handleInputs}
              name="degree3"
              placeholder="Degree 3"
            />
            <input
              id="input"
              type="text"
              value={state.degree4}
              onChange={handleInputs}
              name="degree4"
              placeholder="Degree 4"
            />

            <input
              id="input"
              type="text"
              value={state.description}
              onChange={handleInputs}
              name="description"
              placeholder="Description"
            />

            <input
              id="input"
              type="text"
              value={state.experience1}
              onChange={handleInputs}
              name="experience1"
              placeholder="Experience 1"
            />

            <input
              id="input"
              type="text"
              value={state.experience2}
              onChange={handleInputs}
              name="experience2"
              placeholder="Experience 2"
            />

            <input
              id="input"
              type="text"
              value={state.experience3}
              onChange={handleInputs}
              name="experience3"
              placeholder="Experience 3"
            />
            <input
              id="input"
              type="text"
              value={state.img}
              onChange={handleInputs}
              name="img"
              placeholder="Image Link"
            />
            {/* <input type="submit">Register</input> */}
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Submit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Doctor Tabile */}
      <div class="container">
        <h1>All Doctor Table</h1>
        <table class="rwd-table">
          <tbody>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact Number</th>
              <th>Degree</th>
              <th>Joining Date</th>
            </tr>
            {doctor.doctor.length>0?(
            doctor.doctor.map((item,index)=>(
                  <tr key={item._id}>
                  <td data-th="Supplier Code">1</td>
                  <td data-th="Supplier Name">{item.name}</td>
                  <td data-th="Invoice Number">{item.email}</td>
                  <td data-th="Invoice Date">{item.contactNumber}</td>
                  <td data-th="Due Date">{item.degree1}</td>
                  <td data-th="Net Amount"><Moment format="DD/MM/YYYY">{item.createdAt}</Moment></td>
                </tr>
            ))
        ):<Spinner animation="grow" />
    }
          
         
          </tbody>
        </table>
        {/* <h3>Resize Me</h3> */}
      </div>
    </Layout>
  );
};

export default Doctor;
