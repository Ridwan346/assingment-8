import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Mainapp from './Mainapp';
import img from './error-404.png'

const Allapps = () => {
    let Data =useLoaderData()
        
     const [searchTerm, setSearchTerm] = useState('');

    // Filter apps based on search term
    const filteredApps = Data.filter(app =>
        app?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(Data)
    return (
        <div >
            <div className='mt-3 mb-3'>
                <h1 className='text-center font-bold text-2xl'>Our All Applications</h1>
            <p className='text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

             <div className='flex flex-row-reverse justify-between items-center'>
                 <div className='flex justify-center mb-4'>
                <input
                    type="text"
                    placeholder="Search apps..."
                    className='input input-bordered w-1/2'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div>
                <h1 className='font-bold text-xl'>{filteredApps.length} Apps Found</h1>
            </div>
             </div>
             {
              filteredApps.length > 0 ? ( <div className='grid grid-cols-4'>
                {
                filteredApps.map(ele =><Mainapp ele={ele}></Mainapp>)
               }
            </div> ):(
                <div className='flex flex-col items-center mt-10'>
                    <img src={img} alt="" />
                    <h1 className='text-center font-bold text-3xl'>Oops, page not found!</h1>
                    <p className='text-center'>The page you are looking for is not available.</p>
                    <div>
                        <Link to='/'><button className="btn bg-blue-400">Go Back!</button></Link>  
                    </div>
                </div>
            )
             }

           
        </div>
    );
};

export default Allapps;