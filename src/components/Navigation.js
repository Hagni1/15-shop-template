import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, } from "react-router-dom";
import logo from '../images/logo.png'
import '../styles/Navigation.css'

const Navigation = () => {
    return ( 
        <nav className='Navigation'>
            <Link to='/'> <img src={logo} alt='logo'/> </Link>
            <ul>
                <li>
                    <NavLink to='/'> Strona główna</NavLink>
                </li>
                <li>
                    <NavLink to='/tshirt'> T-shirty</NavLink>
                </li>
                <li>
                    <NavLink to='/shirts'> Koszule i Bluzki</NavLink>
                </li>
                <li>
                    <NavLink to='/pants'> Spodnie </NavLink>
                </li>
                <li>
                    <NavLink to='/hoodies'> Bluzy</NavLink>
                </li>
                <li>
                    <NavLink to='/skirts'> Sukienki i Spódnice</NavLink>
                </li>
                <li>
                    <NavLink to='/jackets'> Kurtki i Marynarki</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;