import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import About from "./About";
import Contact from "./Contact";
// import Sticky from 'react-stickynode';
// import { Link } from "react-router-dom";
import { useState } from 'react';
import Navi from './Navi';
import About from './About';
import Projects from './Projects';

const Home = () => {
    const[fix,setFix]= useState(false)
    
    const setFixedSidebar = () => {
        if(window.scrollY){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    window.addEventListener("scroll",setFixedSidebar)

    return (
        <div className="container-fluid">
            <div className="row">
               <div className="col-lg-6 vh-400 bg-secondary text-white container1" style={{width:'25%'}} >
                    <div className={fix ? 'container fixed vh-400' : 'container vh-400'}>
                            <Navi/>
                    </div>
                </div>
                <div className="col-lg-6 vh-400  container2" style={{width:'75'}}>
                   <div className='vh-100' id="about">
                      <About/>
                   </div>
                   <hr/>
                   <div className='vh-100' id="contact">
                        <Contact/>
                   </div>
                   <hr></hr>
                   <div className='vh-150' id="projects">
                        <Projects/>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Home;