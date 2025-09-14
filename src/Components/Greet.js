import React from 'react';
import { PiHandWavingBold } from "react-icons/pi"


const Greet = () => {
    return(
        <div className='greeting'>
             <h2 className="greet"><PiHandWavingBold /> &nbsp;I am Vasavi Reddy Pailla</h2>
             <p className='self'>Seeking Data Analyst position. I have 
             <span className='my-self'>Computer Science Bachelors degree</span> from India. 
             Aspiring  with hands-on experience in Excel and SQL,<span className='my-self'>data analyst</span> with hands-on experience in 
             <span className='my-self'>Python,Pandas,SQL etc</span>at
             <span className='my-self'>Lerum University.</span></p>
        </div>
    )
}

export default Greet;