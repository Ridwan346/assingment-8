import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import {getstoreapp ,removestoreapp} from './AddtoLocal'
import InstallHistory from './InstallHistory';

const InstallApp = () => {
    let InsData = useLoaderData()
    let [InstalledApps, setInstalledApps] =useState([]);
    let [soert ,setsort] =useState('');
                   
    useEffect( () => {
         let sotrApp = getstoreapp()
         let convert = sotrApp.map(app => parseInt(app))
         let myApp = InsData.filter(app => convert.includes(app.id));
         setInstalledApps(myApp)
    },[])
    console.log(InsData)

    const handleUninstall = (id) => {
    removestoreapp(id);

    const updatedApps = InstalledApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps);
  };

  let handleSort = (type) => {
    setsort(type)
    if(type === 'Size'){
     let cng = InstalledApps.sort((a,b)=>a.downloads -b.downloads)
     setInstalledApps(cng)

    }
    if(type === 'ratingAvg'){
     let cng = InstalledApps.sort((a,b)=>b.downloads -a.downloads)
     setInstalledApps(cng)

    }
  }
    return (
        <div className='min-h-[550px]'>
            <div>
                <h1 className='text-center text-3xl font-bold'>Your Installed Apps</h1>
                <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between items-center'> 
                    <div><h1 className='font-bold text-xl'>{InstalledApps.length} App foun</h1></div>
                    <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Size ⬇️</div>
                   <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                   <li onClick={()=>{handleSort("Size")}}><a>downloads +</a></li>
                   <li onClick={()=>{handleSort("ratingAvg")}}><a> download -</a></li>
               </ul>
              </div>
                </div>
            </div>
            {
                InstalledApps.map(app => <InstallHistory app={app} onUninstall={handleUninstall}></InstallHistory>)
            }
        </div>
    );
};

export default InstallApp;