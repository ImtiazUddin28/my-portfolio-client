import React from 'react';
import ProfileOne from '../../assets/personal/imtiaz3.jpg';
import { BsFacebook,BsLinkedin,BsGithub,BsYoutube } from 'react-icons/bs';


const Description = () => {
    return (
        <div className='m-3 w-80'>
            
            <img className='w-60 h-70 rounded-lg' src={ProfileOne} alt='my pic'></img>
            <h3 className='font-bold text-3xl text-gray-500'>Imtiaz Uddin</h3>
            <h4 className='font-bold text-lg'>Front-End Developer</h4>
            <div className='flex flex-shrink'>
                
                <a href='https://web.facebook.com/mdimtiazuddin.imtiaz.5' target="_blank" rel="noreferrer"><BsFacebook className='text-gray-500 w-6 h-6 mx-1'></BsFacebook></a>
                <a href='https://www.linkedin.com/in/imtiaz-uddin-2533211aa/' target="_blank" rel="noreferrer"><BsLinkedin className='text-gray-500 w-6 h-6 mx-1'></BsLinkedin></a>
                <a href='https://github.com/ImtiazUddin28' target="_blank" rel="noreferrer"><BsGithub className='text-gray-500 w-6 h-6 mx-1'></BsGithub></a>
                <a href='https://www.youtube.com/@imtiazuddin3228' target="_blank" rel="noreferrer"><BsYoutube className='text-gray-500 w-8 h-8 mx-1'></BsYoutube></a>
                

            </div>
        </div>
    );
};

export default Description;