import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-primary p-5'>
            <p><small>Copy right &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;