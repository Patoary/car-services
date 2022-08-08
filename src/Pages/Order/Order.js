import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{

        const getOrders = async() =>{
            const email = user.email;
            const url = `https://fathomless-tundra-66190.herokuapp.com/order?email=${email}`;
            try{
                const {data} = await axios.get(url,{
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data);
            }
            catch(error){
                console.log(error);
                if(error.response.status === 401 || 403){
                    signOut(auth);
                    navigate('/login')
                }
            }

        }
        getOrders();
    },[user]);
    return (
        
        <div className='w-50 mx-auto'>
           <h1>Orders:{orders.length}</h1> 
           {
               orders.map(order => <div key={order._id}>
                   <p>{order.email} : {order.service}</p>
               </div>)
           }
        </div>
    );
};

export default Order;