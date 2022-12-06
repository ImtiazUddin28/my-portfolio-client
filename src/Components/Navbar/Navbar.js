import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // const [] = useState()

    return (
        <div className=" btn-group-vertical ml-5">
            <button className="btn m-1 w-36"><Link to='/about'>About</Link></button>
            <button className="btn m-1 w-36"><Link to='/Skills'>Skills</Link></button>
            <button className="btn m-1 w-36"><Link to='/resume'>Resume</Link></button>
            <button className="btn m-1 w-36"><Link to='/projects'>Projects</Link></button>
            <button className="btn m-1 w-36"><Link to='/blog'>Blog</Link></button>
            <button className="btn m-1 w-36"><Link to='/testimonial'>Testimonial</Link></button>
            <button className="btn m-1 w-36"><Link to='/contact'>Contact</Link></button>
            <button className="btn m-1 w-36"><Link to='/login'>Log In</Link></button>
            <button className="btn m-1 w-36"><Link to='/signup'>Sign Up</Link></button>
            
        </div>
    );
};

export default Navbar;