import { Link } from "react-router-dom";
import { GiSkills } from "react-icons/gi";
import { FaRegEnvelope } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import {AiOutlineHome} from "react-icons/ai";
import { HiMenu} from "react-icons/hi";
import { useState } from "react";

const Navi = () => {
    const handleClickScroll = () => {
      const element = document.getElementById('greet');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
        setShowNavbar(false);
      }
    };
    const handleClickScroll1 = () => {
        const element = document.getElementById('about');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
          setShowNavbar(false);
        }
      };

      const handleClickScroll2 = () => {
        const element = document.getElementById('contact');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
          setShowNavbar(false);
        }
      };

      const handleClickScroll3 = () => {
        const element = document.getElementById('projects');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
          setShowNavbar(false);
        }
      };

      const [showNavbar, setShowNavbar] = useState(false)
      
        const handleShowNavbar = () => {
          setShowNavbar(!showNavbar)
        }

    return  (
      <div className="listed1">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <HiMenu />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul className="navUl">
                <li><AiOutlineHome size={30}/><Link  className="list text-dark" href="#components/greet" onClick={handleClickScroll}>Home</Link></li>
                <li><GiSkills size={30}/><Link  className="list text-dark" href="#components/about" onClick={handleClickScroll1}>Skills</Link></li>
                <li><FaRegEnvelope size={25}/><Link className="list text-dark" href="#components/contact" onClick={handleClickScroll2}>Contact</Link></li>
                <li><GoProjectSymlink size={25}/><Link className="list text-dark" href="#components/projexts" onClick={handleClickScroll3}>Projects</Link></li>
              </ul>
          </div>
      </div>
    )
}

export default Navi;