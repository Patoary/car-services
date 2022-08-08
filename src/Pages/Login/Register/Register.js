import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import useToken from '../../../hooks/useToken';



const Register = () => {

    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken()
    const navigate = useNavigate(user);

    if (token) {
        navigate('/home');
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event?.targer?.name?.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // console.log('Updated profile');
        
    }
    return (
        <div className='register-form'>
            <h3 style={{ textAlign: 'center' }}>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Our Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Our Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 d-block mx-auto bg-primary border-0 text-white mt-2'
                    type="submit"
                    value="Register"
                />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' >Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;  