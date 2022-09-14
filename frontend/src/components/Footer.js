import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Reviews</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Schedule</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>Helping Hands Child Care, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer