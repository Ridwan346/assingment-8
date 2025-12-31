import React from 'react';
import img from './hero.png'
import { useLoaderData } from 'react-router';
import AppHome from './AppHome';

const Baneer = () => {
    let appData =useLoaderData()
    //console.log(appData)
    return (
        <div>
            <h1 className='font-bold text-4xl text-center mt-6'>We Build <br />
             <span className='text-blue-400'>Productive</span> Apps</h1>
             <p className='text-center mt-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
             <div className='flex items-center justify-center mt-5'>
                <a href="https://play.google.com/store/games?hl=en">
                <button className="btn">Google Play</button></a>
                <a href="https://www.apple.com/app-store/"><button className="btn">App Store</button></a>        
             </div>

             <div className='flex items-center justify-center mt-5'>
                <img className='h-[300px]' src={img} alt="" />
             </div>

             <div className='bg-indigo-500  p-5'>
                <h1 className='text-2xl text-white text-center'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around items-center mt-6'>
                    <div><p className=' text-white text-center'>Total Downloads</p>
                <h1 className='text-2xl text-white text-center'>29.6M</h1>
                <p className=' text-white text-center'>21% more than last month</p></div>

                <div><p className=' text-white text-center'> Total Reviews</p>
                <h1 className='text-2xl text-white text-center'>906K</h1><p className=' text-white text-center'>46% more than last month</p></div>

                <div><p className=' text-white text-center'>Active Apps</p><h1 className='text-2xl text-white text-center'>132+</h1><p className=' text-white text-center'>31 more will Launch</p></div>
                </div>
             </div>
             <AppHome appData={appData}></AppHome>
        </div>
    );
};

export default Baneer;