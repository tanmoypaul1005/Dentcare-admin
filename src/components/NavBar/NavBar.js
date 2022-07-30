import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const superadmin = localStorage.getItem('SuperAdmin');
    const superadminname = JSON.parse(superadmin);

    const teacher = localStorage.getItem('teacher');
    const teachername=JSON.parse(teacher);
    const navigate = useNavigate();

    const logoutsuperadmin = () => {
        localStorage.removeItem('SuperAdmin');
        localStorage.removeItem('teacher');
        navigate('/login');
    }
    // const Superadminlinks = superadmin ?
    //     <Navbar className="navbar1" variant="dark">
    //         <Container >
    //             <Navbar.Brand href="/"><img style={{ height: '4rem' }} src={logo} /></Navbar.Brand>
    //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //             <Navbar.Collapse id="responsive-navbar-nav">
    //                 <Nav className="me-auto">
    //                     <Nav.Link className="navbar" style={{ color: 'black' }} href="/superadmin/login">Super Admin</Nav.Link>
    //                 </Nav>
    //                 <Nav>
    //                     <Nav.Link className="navbar" style={{ color: 'black' }} href="#">{superadminname.name}</Nav.Link>
    //                     <Nav.Link onClick={logoutsuperadmin} className="navbar" style={{ color: 'black' }} href="#deets">Logout</Nav.Link>
    //                 </Nav>
    //             </Navbar.Collapse>
    //         </Container>
    //     </Navbar> : '';


    return (
        <div>
         <Navbar style={{backgroundColor:"#f6d014", height:"4rem"}} className="navbar1" variant="dark">
             <Container >
                 <Navbar.Brand href="/"><img style={{ height: '4rem' }} src="data:image/png;base64,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" /></Navbar.Brand>
                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                 <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="me-auto">
                        <Nav.Link  className="navbar" style={{ color: 'black', fontSize: "16px",fontWeight:"900" }} href="/superadmin/login">DentCare</Nav.Link>
                     </Nav>
                  <Nav>
                         <Nav.Link className="navbar" style={{ color: 'black', fontSize: "16px",fontWeight:"900" }} href="#">Tanmoy paul</Nav.Link>
                         <Nav.Link onClick={logoutsuperadmin} className="navbar" style={{ color: 'black', fontSize: "16px",fontWeight:"900" }} href="#deets">Logout</Nav.Link>
                    </Nav>
                 </Navbar.Collapse>
             </Container>
         </Navbar>
        </div>
    );
};

export default NavBar;