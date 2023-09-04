import React from 'react';
import {Link } from 'react-router-dom';

function Nav (){
    return(
        <nav className='flex'>
            <ul className='flex'>
                <li><Link to={"portfolio/"}>Home</Link></li>
                <li><Link to={"portfolio/about"}>About</Link></li>
                <li><Link to={"portfolio/contact"}>Contact</Link></li>
            </ul>
        </nav>
    )
}
export default Nav