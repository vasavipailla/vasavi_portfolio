import React from 'react';
import {BiLogoLinkedinSquare} from "react-icons/bi"
import { Link } from 'react-router-dom';
const Footer = () => {
     return(
        <div className='footer'>
            <p>created@Vasavi</p>
            <p><Link to="https://www.linkedin.com/in/vasavi-reddy-pailla/"><BiLogoLinkedinSquare size={30}/></Link></p>
        </div>
     )
}

export default Footer;