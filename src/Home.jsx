import React from 'react';
import Nav from './nav and banner/Nav';
import { Outlet, useNavigation,  } from 'react-router';
import Footer from './nav and banner/Footer';
import { BounceLoader } from 'react-spinners';

const Home = () => {
     const navigation =useNavigation()
    return (
       <div className='max-w-7xl m-auto'>
        <Nav></Nav>
         {navigation.state === "loading" && (
                <div className="flex justify-center py-10">
                    <BounceLoader></BounceLoader>
                </div>
            )}
        <Outlet></Outlet>
        <Footer></Footer>
       </div>
    );
};

export default Home;