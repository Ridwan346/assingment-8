import React from 'react';
import Nav from './nav and banner/Nav';
import { Outlet, useNavigate } from 'react-router';
import Footer from './nav and banner/Footer';

const Home = () => {
    let navigate = useNavigate()
    return (
       <div className='max-w-7xl m-auto'>
        <Nav></Nav>
         {/* 🔄 Loading indicator */}
            {navigation.state === "loading" && (
                <div className="text-center py-6">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            )}
        <Outlet></Outlet>
        <Footer></Footer>
       </div>
    );
};

export default Home;