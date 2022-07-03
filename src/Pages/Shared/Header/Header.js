import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <div>
                <img src={logo} alt="" />
                </div>
                
                <div>
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/experts">Experts</Link>
                </div>
            </nav>

        </div>
    );
};

export default Header;