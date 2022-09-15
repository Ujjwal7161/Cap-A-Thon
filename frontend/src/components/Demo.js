import React from 'react'
import './Demo.css'

const Demo = () => {
    return (
        <div className='demo' id='demo'>
            <div className='container'>
                <div className='col-1'>
                    <p>More Than 120 Child Care Centers,</p>
                    <p>HHCC Philosophy</p>
                    <p>This will act as a placeholder for HHCC to plug-in their philosophy, so that they can get their message accross to their clients.</p>
                    <button className='button'>Schedule an Appointment</button>
                </div>
                <div className='col-2'>
                    <iframe width='570' height='320' src='https://www.youtube.com/embed/FtGN2wK9g_s' title='Youtube video player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
            </div>
        </div>
    )
}

export default Demo