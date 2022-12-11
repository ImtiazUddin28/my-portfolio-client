import React from 'react';
import logoOne from '../../assets/logo/logo512.png'
import myPDF from './../../assets/files/Imtiaz_Uddin_Resume.pdf'
const Header = () => {
    return (
        <div className='flex justify-between '>
            <div className='logo w-16'><img src={logoOne} alt="" /></div>
            <div className='btn'><a href={myPDF} download="Imtiaz_Uddin_Resume.pdf"> Download Resume </a></div>
        </div>
    );
};

export default Header;