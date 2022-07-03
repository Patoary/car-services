import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,price,description,img} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h5>{name}</h5>
            <p> price:{price}</p>
            <p>{description}</p>
             </div>
    );
};

export default Service;