import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';



const Register = () => {
    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h3 style={{textAlign:'center'}}>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link  to='/login' className='text-danger text-decoration-none' >Please Register</Link></p>

        </div>
    );
};

export default Register;  