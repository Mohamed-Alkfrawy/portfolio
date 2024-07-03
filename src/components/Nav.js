import React from 'react';
import {NavLink } from 'react-router-dom';

function Nav (){
    return(
        <nav className='flex'>
            <ul className='flex'>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
        </nav>
    )
}
export default Nav