import React, {useState} from 'react'
import logo from '../images/company_logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {
const [click, setClick] = useState (false)

const handleClick = () => setClick(!click)

    return(
        <div className='header'>
            <nav className = 'navbar'>
                < a href='/' className='logo'>
                    <img src = {logo} alt = 'logo' />
                </a>
                <div className='children' onClick = {handleClick}>
                    {click ? (<FaTimes size = {30} style = {{color : '#ffffff'}}/>):  (<FaBars size  = {30} style = {{color: '#ffffff'}}/ >)}
                  
                </div>
                <ul className ={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href = '/' >Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href = 'information.html'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href = '#demo' >Tours</a>
                    </li>
                    <li className='nav-item'>
                        <a href = 'form.html' >Locations</a>
                    </li>
                    <li className='nav-item'>
                        <a href = 'form.html' >Schedule a Date</a>
                    </li>
                </ul>
            </nav>

        </div>
    ) 
}

export default Navbar