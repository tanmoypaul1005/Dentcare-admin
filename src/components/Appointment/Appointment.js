import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDoctor } from "../../Redux/AsyncAction/DoctorAction";
import { Button, Spinner } from "react-bootstrap";
import Layout from "../Layout/Layout";
import "./Appointment.css";
import Loader from "../Loader/Loader";
import { AllAppointmentGet, DeleteAppointment } from "../../Redux/AsyncAction/AppointmentAction";
import { useNavigate } from "react-router-dom";
const Appointment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doctor = useSelector((state) => state.doctor);
  // console.log(doctor.doctor);

  const appointment=useSelector((state)=>state.appointment);
  console.log("Appointment",appointment);

  useEffect(() => {
    dispatch(GetDoctor());
  }, [dispatch]);
  const [state, setstate] = useState({
    doctor: "",
  });

  const handleInputs = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const getDoctorAppointment=(e)=>{
  e.preventDefault();
  dispatch(AllAppointmentGet(state))
  }

  const compliteAppointment=(id)=>{
  dispatch(DeleteAppointment(id))
  window.location.reload();
  }
  return (
    <div className="Appointmentbody">
      <Layout sidebar>
        <form onSubmit={getDoctorAppointment}>
          <select
            value={state.doctor}
            name="doctor"
            onChange={handleInputs}
            id="_id"
          >
            <option value="">Please choose Doctor</option>
            {doctor.doctor.length > 0
              ? doctor.doctor.map((item, index) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : ""}
          </select>
          <input id="_id" style={{ backgroundColor: '#2DE305' }} type="submit" value="Submit" />
        </form>
       

        {appointment.appointment.length>0?(
        <div class="container">
        <h1>All Doctor Table</h1>
        <table class="rwd-table">
          <tbody>
            <tr>
              <th>Appointment Date</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Service</th>
              <th>Appointment Status</th>
            </tr>
       {
            appointment.appointment.map((item,index)=>(
              <tr key={item._id}>
                    <td data-th="Due Date">{item?.date}</td>
                  <td data-th="Supplier Name">{item?.user.name}</td>
                  <td data-th="Invoice Number">{item?.user.contactNumber}</td>
                  <td data-th="Invoice Number">{item?.user.email}</td>
                  <td data-th="Invoice Date">{item?.service}</td>
                  <Button onClick={()=>{compliteAppointment(item._id)}} style={{margin:'0.5rem'}}>Complite</Button>
                </tr>
            ))
          
       }
        </tbody>
        </table>
        </div>):(<h3 style={{color:'white',fontWeight:'900'}}>Please Choice Your Doctor</h3>)
       }
      </Layout>
    </div>
  );
};

export default Appointment;
