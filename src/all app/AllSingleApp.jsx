import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import {addstoreapp} from './AddtoLocal'

const AllSingleApp = () => {
    let {id} =useParams()
    let appId = parseInt(id)
    let appData = useLoaderData()
     const app = appData?.find(item => item.id === appId);
     let {image,title,companyName,reviews,ratingAvg,size,downloads,description}=app

     let handleApp =()=>{
      addstoreapp(id)
     }
    return (
        <div>
             <div className="card card-side bg-base-100 shadow-sm">
              <figure>
                <img
                  src={image}
                  alt="App" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Developed by <span className='text-blue-400'>{companyName}</span></p>
                
               <div className='flex justify-around'>
                 <div><p>Downloads</p>
                 <h1 className='font-bold text-3xl'>{downloads}</h1></div>
                <div><p>Average Ratings</p>
                <h1 className='font-bold text-3xl'>{ratingAvg}</h1></div>
                <div><p>Total Reviews</p>
                <h1 className='font-bold text-3xl'>{reviews}</h1></div>
               </div>
            
                <div className="card-actions justify-end">
                  <button onClick={handleApp} className="btn btn-primary">Install {size}Mb</button>
                </div>
              </div>
              </div>
            
                 <div className='flex justify-center items-center'>
                      <BarChart width={600} height={300} data={app.ratings} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <XAxis dataKey="name" stroke="red" />
              <YAxis stroke="red" />
              <Tooltip />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Bar dataKey="count" fill="green" barSize={30} />
              </BarChart>
                 </div>
                  
                  <p><span className='text-xl font-bold'>Description</span> <br />{description}</p>
        </div>
    );
};

export default AllSingleApp;