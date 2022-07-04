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
                        <Navbar.Brand as={Link} to="/"  ><img style={{ height: '45px' }} src={logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"

                        >
                            <Offcanvas.Header href='/' closeButton className='bg-primary' >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Nav.Link href='/'>
                                        <img style={{ height: '45px' }} src={logo} alt=""/>
                                    </Nav.Link>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                                <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
                                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                    <Nav.Link href='home#experts'>Experts</Nav.Link>
                                    <Nav.Link href='home#services'>Services</Nav.Link>
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