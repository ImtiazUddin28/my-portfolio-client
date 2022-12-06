import React from 'react';
import logoOne from '../../assets/logo/logo512.png'
const Header = () => {
    return (
        <div className='flex justify-between '>
            <div className='logo w-16'><img src={logoOne} alt="" /></div>
            <div className='btn'>Download Resume</div>
        </div>
    );
};

export default Header;