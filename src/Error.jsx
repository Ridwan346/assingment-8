import React from 'react';
import img from './App-Error.png'

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={img} alt="" />
            <h1 className='text-3xl font-bold'>OPPS! page not found</h1>
        </div>
    );
};

export default Error;