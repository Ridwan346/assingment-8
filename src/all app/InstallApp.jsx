import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import {getstoreapp} from './AddtoLocal'
import InstallHistory from './InstallHistory';

const InstallApp = () => {
    let InsData = useLoaderData()
    let [InstalledApps, setInstalledApps] =useState([]);
    useEffect( () => {
         let sotrApp = getstoreapp()
         let convert = sotrApp.map(app => parseInt(app))
         let myApp = InsData.filter(app => convert.includes(app.id));
         setInstalledApps(myApp)
    },[])
    console.log(InsData)
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold'>Your Installed Apps</h1>
                <p className='text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {
                InstalledApps.map(app => <InstallHistory app={app}></InstallHistory>)
            }
        </div>
    );
};

export default InstallApp;