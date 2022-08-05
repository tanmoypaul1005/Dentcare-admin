import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { GetDentalCheckup } from "../../Redux/AsyncAction/DentalCheckupAction";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { AdminAllCheckupAppointmentGet, DeleteCheckupAppointment } from "../../Redux/AsyncAction/CheckupAppointmentAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "react-bootstrap";

const CheckupAppointment = () => {
    const dispatch=useDispatch();
    const checkup=useSelector((state)=>state.checkup);
    // console.log(checkup);

    const checkupappointment=useSelector((state)=>state.checkupappointment);
    console.log(checkupappointment)

    useEffect(() => {
    dispatch(GetDentalCheckup())
    }, [dispatch])

    const [state, setstate] = useState({
     service:''
    })

    const handleInputs = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
    };
    const [value, onChange] = useState(new Date());
    const date = value.toLocaleDateString();
    console.log("Date", date);

    const showCheckupAppointment=(e)=>{
    const data={service:state.service,date:date}
    console.log("Data",data)
    dispatch(AdminAllCheckupAppointmentGet(data))
    e.preventDefault()
    }
    const compliteAppointment=(user)=>{
      dispatch(DeleteCheckupAppointment(user))
      window.location.reload();
      }
  return (
    <Layout sidebar>
      <ToastContainer/>
      <form onSubmit={showCheckupAppointment}>
        {/* <input value={state.date} id="input" name="date" onChange={handleInputs} type="date"></input> */}
        <div style={{textAlign:'center'}}><Calendar style={{textAlign:'center',margin:'5rem'}} onChange={onChange} value={value} /></div>
        <select
            value={state.service}
            name="service"
            onChange={handleInputs}
            id="_id"
          >
            <option value="">Please choose Doctor</option>
            {checkup.dentalcheckup.length > 0
              ? checkup.dentalcheckup.map((item, index) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))
              : ""}
          </select>
          <input id="_id" style={{ backgroundColor: '#2DE305' }} type="submit" value="Submit" />
      </form>



      {checkupappointment.checkupappointment.length>0?(
        <div className="container">
        <h1>All Doctor Table</h1>
        <table className="rwd-table">
          <tbody>
            <tr>
              <th>Appointment Date</th>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Service</th>
            </tr>
       {
            checkupappointment.checkupappointment.map((item,index)=>(
              <tr key={item._id}>
                  <td data-th="Due Date">{item?.date}</td>
                  <td data-th="Supplier Name">{item?.user.name}</td>
                  <td data-th="Invoice Number">{item?.user.contactNumber}</td>
                  <td data-th="Invoice Number">{item?.user.email}</td>
                  <td data-th="Invoice Date"> <Button onClick={()=>{compliteAppointment(item._id)}} style={{margin:'0.5rem'}}>Complite</Button></td>
                </tr>
            ))
          
       }
        </tbody>
        </table>
        </div>):(<h3 style={{color:'white',fontWeight:'900'}}>Please Choice Your Doctor</h3>)
       }
    </Layout>
  );
};

export default CheckupAppointment;
