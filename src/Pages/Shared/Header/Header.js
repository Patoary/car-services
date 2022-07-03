import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className='header'>
            {/* <nav>
                <div>
                    <img src={logo} alt="" />
                </div>

                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/experts">Experts</Link>
                </div>
             
            </nav> */}

            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </div>

    );
};

export default Header;