import React from 'react';
import AppHomeCard from './AppHomeCard';
import { Link } from 'react-router';

const AppHome = ({appData}) => {
     
    return (
        <div >
            <h1 className='text-center text-2xl font-bold my-4'>Trending Apps</h1>
            <p className='text-center mb-4'>Explore All Trending Apps on the Market developed by us</p>

            

            <div className='grid grid-cols-4 gap-2'>
                {
                appData.map(elm =><AppHomeCard elm={elm}></AppHomeCard>)
            
            }
            </div>
            <div className='flex justify-center items-center mt-4'><Link to={'/allApp'}><button className="btn bg-blue-500">Show all apps</button></Link></div>
        </div>
    );
};

export default AppHome;