import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";

const Navi = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('about');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll1 = () => {
        const element = document.getElementById('contact');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleClickScroll2 = () => {
        const element = document.getElementById('projects');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return  (
      <div>
          <div>
              <h2 className="greet">Hi! I am Vasavi Reddy Pailla</h2>
          </div>
          <div className="listed">
              <ul>
                <li><HiOutlineUser size={30}/><Link  className="list text-dark" href="#components/about" onClick={handleClickScroll}>About</Link></li>
                <li><FaRegEnvelope size={25}/><Link className="list text-dark" href="#components/contact" onClick={handleClickScroll1}>Contact</Link></li>
                <li><GoProjectSymlink size={25}/><Link className="list text-dark" href="#components/projexts" onClick={handleClickScroll2}>Projects</Link></li>
              </ul>
          </div>
      </div>
    )
}

export default Navi;