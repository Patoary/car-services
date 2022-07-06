import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';



const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();
    const handleRegister = event => {
        event.preventDefault();
        // const name = event.targer.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password);
    }

    if(user){
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h3 style={{textAlign:'center'}}>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                <input type="email" name="email" id="" placeholder='Your Email' required/>
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className='ms-1'>Accept Our Terms and Conditions</label>
                <input className='w-50 d-block mx-auto bg-primary border-0 text-white mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link  to='/login' className='text-primary text-decoration-none' >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;  