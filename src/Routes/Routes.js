import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Components/Pages/About/About";
import Blog from "../Components/Pages/Blog/Blog";
import Contact from "../Components/Pages/Contact/Contact";
import Login from "../Components/Pages/Login/Login";
import Projects from "../Components/Pages/Projects/Projects";
import Resume from "../Components/Pages/Resume/Resume";
import Skills from "../Components/Pages/Skills/Skills";
import SignUp from "../Components/Pages/SignUp/SignUp";
import Testimonial from "../Components/Pages/Testimonial/Testimonial";

export const routes = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children:[
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/Skills',
            element: <Skills></Skills>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/projects',
            element: <Projects></Projects>
        },
        {
            path: '/resume',
            element: <Resume></Resume>
        },
        {
            path: '/Skills',
            element: <Skills></Skills>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/testimonial',
            element: <Testimonial></Testimonial>
        }
       ]
    }
])