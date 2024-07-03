import React from 'react';
import {NavLink } from 'react-router-dom';

function Nav (){
    return(
        <nav className='flex'>
            <ul className='flex'>
                <li><NavLink to="portfolio/">Home</NavLink></li>
                <li><NavLink to="portfolio/about">About</NavLink></li>
                <li><NavLink to="portfolio/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav