import React from 'react';
import { PiHandWavingBold } from "react-icons/pi"


const Greet = () => {
    return(
        <div className='greeting'>
             <h2 className="greet"><PiHandWavingBold /> &nbsp;I am Vasavi Reddy Pailla</h2>
             <p className='self'>Seeking Data Analyst position. I have 
             <span className='my-self'>Computer Science Bachelors degree</span> from India. 
             Recently<span className='my-self'>completed IT programming</span>course in
             <span className='my-self'>Data Analysis</span>at
             <span className='my-self'>Lerum University.</span></p>
        </div>
    )
}

export default Greet;