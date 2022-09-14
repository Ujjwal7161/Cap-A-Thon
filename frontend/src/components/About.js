import React from 'react';
import './About.css'
import facility from '../images/facility.jpeg'

const About = () => 
{
    return (
        <div className = 'about'>
            <div className = 'container'>
                <img src= {facility} alt = 'faculty' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                        <p>here we need data from the finance team, the mission statements, the values of the company why peole could partner with us, this has to be atleast 4-5 lines, so the customers who like to go detail can find some </p>

                        <button className='button'>
                            Explore Our Facilities
                        </button>
                    
                </div>

            </div>

        </div>
    )
}


export default About