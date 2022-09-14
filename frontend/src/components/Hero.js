import React from "react";
import './Hero.css'
const Hero = () => {
    return (
        <div className = 'hero'>
            <div className = 'content'>
                <p>Call Us</p>
                <p>1-800-123-1234</p>
                <p>MOTO GOES HERE</p>
                <p>Sub Moto Goes Here</p>
                <button href = '/' className = 'button'>
                    Free Consultation
                </button>
            </div>
        </div>
    )
}

export default Hero