import React from 'react';
import { PiHandWavingBold } from "react-icons/pi"


const Greet = () => {
    return(
        <div className='greeting'>
             <h2 className="greet"><PiHandWavingBold /> &nbsp;I am Vasavi Reddy Pailla</h2>
             <p className='self'>Aspiring Data Analyst with recent training in data analysis, including skills in Python, SQL, 
                Excel, and data visualization tools. I bring a strong analytical mindset, attention to detail, 
and a passion for turning data into actionable insights. My background includes a year of 
experience (2015–2016) as a Quality Assurance Engineer, where I focused on manual 
testing, bug tracking, and ensuring software reliability. Since relocating to Sweden in 2018, 
I’ve taken time to focus on my family while actively enhancing my technical skills through 
Python programming and, most recently, a comprehensive Data Analyst course. 
             <span className='my-self'>Computer Science Bachelors degree</span> from India. 
             Recently<span className='my-self'>completed IT programming</span>course in
             <span className='my-self'>Front-end Development</span>at
             <span className='my-self'>Sundsgårdens Folkhögskola.</span></p>
        </div>
    )
}

export default Greet;