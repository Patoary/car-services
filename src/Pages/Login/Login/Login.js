import { async } from '@firebase/util';
import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }
    const resetPassword = async () =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Send email');
    }
    return (

        <div className='w-50 m-auto'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>New to Car Service <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forgate Password ?<Link to='/register' className='text-primary text-decoration-none' onClick={resetPassword}> Reset Password</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;