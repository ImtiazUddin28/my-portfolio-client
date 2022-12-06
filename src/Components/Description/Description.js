import React from 'react';
import ProfileOne from '../../assets/personal/imtiaz3.jpg';
import { BsFacebook,BsLinkedin,BsGithub,BsYoutube } from 'react-icons/bs';


const Description = () => {
    return (
        <div>
            
            <img className='w-60 h-70 rounded-lg' src={ProfileOne} alt='my pic'></img>
            <h3 className='font-bold'>Imtiaz Uddin</h3>
            <h4 className='font-bold'>Front-End Developer</h4>
            <div className='flex flex-shrink'>
                
                <a href='https://iknow.ibthemespro.com/home-two-light' target="_blank" rel="noreferrer"><BsFacebook className='text-blue-500 w-8 h-8'></BsFacebook></a>
                <a href='https://iknow.ibthemespro.com/home-two-light' target="_blank" rel="noreferrer"><BsLinkedin className='text-blue-500 w-8 h-8'></BsLinkedin></a>
                <a href='https://iknow.ibthemespro.com/home-two-light' target="_blank" rel="noreferrer"><BsGithub className='text-blue-500 w-8 h-8'></BsGithub></a>
                <a href='https://iknow.ibthemespro.com/home-two-light' target="_blank" rel="noreferrer"><BsYoutube className='text-blue-500 w-8 h-8'></BsYoutube></a>
                

            </div>
        </div>
    );
};

export default Description;