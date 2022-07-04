import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="primary" expand={expand}>
                    <Container fluid>
                        <Navbar.Brand href="#"  ><img style={{ height: '45px' }} src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"

                        >
                            <Offcanvas.Header closeButton className='bg-primary' >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img style={{ height: '45px' }} src={logo} alt="" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link as={Link} to='services'>Services</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to='login'>Login</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default Header;