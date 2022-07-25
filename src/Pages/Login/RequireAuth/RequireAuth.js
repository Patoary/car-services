import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const [user, loading] = useAuthState(auth);
    // console.log('inside requre auth', user);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center p-5 m-5'>
            <h3 className='text-danger'>Your email is not verified!!</h3>
            <h4 className='text-success'>Please verify your email address</h4>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Verification email sent');
                }}  
            >
                Verify email again
            </button>
            <ToastContainer />
        </div>
    }
    
    
    return children;

};

export default RequireAuth;