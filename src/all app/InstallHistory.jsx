import React from 'react';

const InstallHistory = ({app ,onUninstall}) => {
    let {image,title,ratingAvg,reviews,downloads,id} =app
    return (
        <div className='border m-3'>
            <div className="card  w-auto  flex">
    <div className="card-body">
       <div className='flex gap-2 '> <img className='h-16 w-16'  src={image} alt="" />
    <div><h2 className="card-title">{title}</h2>
    <div className='flex gap-2'><p className='text-green-500'>{ratingAvg}</p><p>{reviews}</p> <p className='text-yellow-500'>{downloads}</p></div></div></div>
    <div className="card-actions justify-end">
      <button onClick={() => onUninstall(id)} className="btn btn-primary bg-green-400">Uninstall</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default InstallHistory;