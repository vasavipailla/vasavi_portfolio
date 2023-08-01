import React from "react";
import { BiCaretRight, BiWifi0 } from "react-icons/bi";

const About= () => {
       return(
        <div className="about" >
          {/* <div className="education w-50">
            <h3 className="heading">Education</h3>
             <div className="education1 m-1">
              <div className="para">
                <p className="sign"><BiCaretRight/>Jawaharlal Nehru <span>Technological University – </span><span>From Oct 2008 till </span><span>April2012</span></p>
                 <p className="sign"><BiWifi0/>Degree subject – Computer Science Engineering</p>
              </div>
              <div className="para">
                <p className="sign"><BiCaretRight/>Narayana Junior College <span>(Post-Secondary </span><span>Education – 2 years)– <span>From May 2006 till March </span><span>2008</span></span></p>
                <p className="sign"><BiWifi0/>Subjects – Maths, Physics and Chemistry</p>
              </div>
              <div className="para">
                <p className="sign"><BiCaretRight/>Revathi High School – till <span>2006</span></p>
                <p className="sign"><BiWifi0/>Qualification – Secondary Education</p>
              </div>
              </div>
          </div> */}
            
         
            <div className="skills">
              <h3 className="heading">Skills</h3>
              <div className="para1">
                <p><BiWifi0/>HTML5</p>
                <p><BiWifi0/>CSS3</p>
                <p><BiWifi0/>React</p>
                <p><BiWifi0/>JavaScript</p>
                <p><BiWifi0/>Figma</p>
                <p><BiWifi0/>Git/GitHub</p>
                <p><BiWifi0/>Visual studio code</p>
                <p><BiWifi0/>Programming techniques</p>
                <p><BiWifi0/>Agile work</p>
              </div>
            </div> 
        </div>
       )
}

export default About

