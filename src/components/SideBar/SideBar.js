import React, { useState } from 'react'
import './SideBar.css';
//import react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent, SubMenu } from "react-pro-sidebar";
//import icons from react icons
import { FaRegHeart, FaWpforms } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BsPersonFill } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
function SideBar() {
    const path = window.location.pathname;

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const [toggle, setToggle] = useState(true);
    return (
        <div>
           <div id="header">
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className="logotext">
                            {/* small and big change using menucollapse state */}
                            {/* <p>{menuCollapse ? "Logo" : "Big Logo"}</p> */}
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? (
                                <FiArrowRightCircle />
                            ) : (
                                <FiArrowLeftCircle />
                            )}
                        </div>
                    </SidebarHeader>
                
                
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={path === '/home' ? true : false} icon={<FiHome />}>Home <Link to="/home" /></MenuItem>
                            <MenuItem active={path === '/doctor' ? true : false} icon={<FiPlus />}>Add Doctor <Link to="/doctor" /></MenuItem>
                      
                            {/* <div open={true} style={{ backgroundColor: 'white' }}>
                                <SubMenu style={{ backgroundColor: 'white' }} active={path === "/superadmin" ? true : false} title="Super Admin" icon={<FaRegHeart />}>
                                    <MenuItem active={path === "/superadmin/admin" ? true : false} icon={<FiPlus />}> Add Admin<Link to="/superadmin/admin" /> </MenuItem>
                                    <MenuItem active={path === "/superadmin/teacher" ? true : false} icon={<FiPlus />}>Add Teacher <Link to="/superadmin/teacher" /></MenuItem>
                                    <MenuItem active={path === "/superadmin/sendsms" ? true : false} icon={< IoSendSharp />}>Send Sms <Link to="/superadmin/sendsms" /></MenuItem>
                                    <MenuItem icon={<FaWpforms />}>Admission</MenuItem>
                                    <MenuItem icon={<BsPersonFill />}>Child</MenuItem>
                                    <MenuItem icon={<BsPersonFill />}>parents</MenuItem>
                                    <MenuItem icon={<BsPersonFill />}>Management</MenuItem>
                                    <MenuItem icon={<BsPersonFill />}>Librain</MenuItem>
                                </SubMenu>
                            </div>
                            <div style={{ backgroundColor: 'white' }}>
                                <SubMenu style={{ backgroundColor: 'white' }} active={path === "/academic" ? true : false} title="Academic" icon={<FaRegHeart />}>
                                    <MenuItem active={path === "/admin" ? true : false}>Attendance<Link to="/admin" /> </MenuItem>
                                    <MenuItem active={path === "/academic/subject" ? true : false} icon={<FiPlus />}>Subject<Link to="/academic/subject" /></MenuItem>
                                    <MenuItem>ClassRoom</MenuItem>
                                    <MenuItem>Department</MenuItem>
                                    <MenuItem>Class Routine</MenuItem>
                                    <MenuItem>Class Calendar</MenuItem>
                                </SubMenu>
                            </div>
                            <div style={{ backgroundColor: 'white' }}>
                                <SubMenu style={{ backgroundColor: 'white' }} active={path === "/teacher" ? true : false} title="Teacher" icon={<FaRegHeart />}>
                                    <MenuItem active={path === "/teacher/attendance" ? true : false} icon={<FiPlus />}>Add Attendance<Link to="/teacher/attendance" /> </MenuItem>
                                    <MenuItem active={path === "/teacher/classlacture" ? true : false} icon={<FiPlus />}>Add classlacture<Link to="/teacher/classlacture" /> </MenuItem>
                                </SubMenu>
                            </div> */}
                            <MenuItem active={path === '/appointment' ? true : false} icon={<BsPersonFill />}>Appointment<Link to="/appointment" /></MenuItem>
                            <MenuItem active={path === '/parents' ? true : false} icon={<BsPersonFill />}>All User<Link to="/parents" /></MenuItem>
                            <MenuItem active={path === '/dentalcheckup' ? true : false} icon={<BsPersonFill />}>DentalCheckup<Link to="/dentalcheckup" /></MenuItem>
                            <MenuItem active={path === '/checkup/appointment' ? true : false} icon={<BsPersonFill />}>CheckupAppointment<Link to="/checkup/appointment" /></MenuItem>
                            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
                            <MenuItem icon={<BiCog />}>Settings</MenuItem>
                        </Menu>
                    </SidebarContent>
                    
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>  
        </div>
    )
}

export default SideBar
