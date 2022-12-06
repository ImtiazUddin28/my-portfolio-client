import React from 'react';
import { Outlet } from 'react-router-dom';
import Description from '../Components/Description/Description';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Header className="m-3"></Header>
            <div className='grid grid-cols-12'>
                <div  className='m-1 col-span-2'><Navbar></Navbar></div>
                <div className='col-span-3'><Description></Description></div>
                <div className='col-span-7'><Outlet></Outlet></div>
            </div>
        </div>
    );
};

export default Main;