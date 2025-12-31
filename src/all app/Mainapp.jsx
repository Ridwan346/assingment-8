import React from 'react';
import { Link } from 'react-router';

const Mainapp = ({ele}) => {
    let {downloads,ratingAvg,image,title,id}=ele
    return (
        <div>
       <Link to={`/sholo/${id}`}>
             
        <div className="card shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
    </h2>
    
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{downloads}</div>
      <div className="badge badge-outline">{ratingAvg}</div>
    </div>
  </div>
 </div>
       </Link>
       
        </div>
    );
};

export default Mainapp;