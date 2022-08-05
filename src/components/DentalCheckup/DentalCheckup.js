import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Button, Modal, Table, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddDentalCheckup, DeleteDentalCheckup, GetDentalCheckup } from "../../Redux/AsyncAction/DentalCheckupAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DentalCheckup.css';
import { FcEmptyTrash } from "react-icons/fc";
import moment from 'moment';
const DentalCheckup = () => {
  const checkup=useSelector((state)=>state.checkup);
  // console.log(checkup)
    const dispatch=useDispatch();
    const [state, setstate] = useState({
    name:'',
    price:'',
    img:''
    })
    const handleInputs = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value });
      };
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const Submit=(e)=>{
      console.log(state)
      dispatch(AddDentalCheckup(state))
      setShow(false)
      }

      useEffect(() => {
       dispatch(GetDentalCheckup())
      }, [dispatch])
      // DeleteDentalCheckup
  return (
    <Layout sidebar>
       <ToastContainer />
      <Button
        style={{ margin: "1rem 1rem 2rem 0em" }}
        variant="primary"
        onClick={handleShow}
      >
       Add DentalCheckup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Dental Checkup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>

            <input
              id="input"
              type="text"
              value={state.name}
              onChange={handleInputs}
              name="name"
              placeholder="Enter Name"
            />

            <input
              id="input"
              type="text"
              value={state.price}
              onChange={handleInputs}
              name="price"
              placeholder="Enter Price"
            />

            <input
              id="input"
              type="text"
              value={state.img}
              onChange={handleInputs}
              name="img"
              placeholder="Image Url"
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


    {checkup.dentalcheckup.length>0?(
    <table style={{width:'1230px'}}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Published</th>
        <th>Status</th>
      
      </tr>
    </thead>
    <tbody>
    {checkup.dentalcheckup.map((item,index)=>(
      <tr>
      <td>1</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{moment(item.updatedAt).fromNow()}</td>
      {/* <td>
        <p class="status status-unpaid">Unpaid</p>
      </td> */}
     <td><FcEmptyTrash onClick={()=>{dispatch(DeleteDentalCheckup(item._id)); window.location.reload()}} FcEmptyTrash/></td>
    </tr>
    ))}

    </tbody>
  </table>):(<h3 style={{color:'white',fontWeight:'900'}}>Please Add Checkup </h3>)}
    </Layout>
  );
};

export default DentalCheckup;
