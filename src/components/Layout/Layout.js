import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';

const Layout = (props) => {
    return (
        <div>
             <div>
            <NavBar />
            {
                props.sidebar ?
                    <Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                                <SideBar />
                            </Col>
                            <Col md={10} style={{ marginLeft: 'auto' }} >{props.children}</Col>
                        </Row>
                    </Container> : props.children
            }
        </div>
        </div>
    );
};

export default Layout;