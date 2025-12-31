import React from 'react';
import Nav from './nav and banner/Nav';
import { Outlet } from 'react-router';
import Footer from './nav and banner/Footer';

const Home = () => {
    return (
       <div className='max-w-7xl m-auto'>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
       </div>
    );
};

export default Home;