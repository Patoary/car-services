import React from 'react';
import google from '../../../images/googleIcon.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (error || error1) {   
          errorElement= <p className='text-danger'>Error: {error?.message} {error?.message}</p>
      }
    
      if(token){
        navigate(from, { replace: true });
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button  onClick={()=>signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '20px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'>
                    <img style={{ width: '20px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook Sign In</span>
                </button>
                <button onClick={()=> signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto'>
                    <img style={{ width: '20px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;