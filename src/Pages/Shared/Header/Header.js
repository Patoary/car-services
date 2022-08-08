import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user]= useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <>
        
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="primary" className='top-fixed' expand={expand}>
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
                            <Offcanvas.Body className='bg-primary'>
                                <Nav className="justify-content-end flex-grow-1 pe-3 me-auto">
                                    <Nav.Link as={Link} to='/' className='text-white bg-primary'>Home</Nav.Link>
                                    <Nav.Link href='home#experts' className='text-white'>Experts</Nav.Link>
                                    <Nav.Link href='home#services' className='text-white'>Services</Nav.Link>
                                </Nav>
                                {
                                    user && <>
                                    <Nav.Link className='text-white' as={Link} to='addservice'>Add</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to='manage'>Manage</Nav.Link>
                                    <Nav.Link className='text-white' as={Link} to='orders'>Orders</Nav.Link>

                                    </>
                                }
                                {
                                    user?
                                    <button onClick={handleSignOut} className='bg-primary text-white border-0'>Sign out</button>
                                    :
                                    <Nav>
                                    <Nav.Link as={Link} to='login' className='text-white'>Login</Nav.Link>
                                </Nav>}
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default Header;