import React from 'react'
import game from '../images/game.png'
import travel from '../images/travel.png'
import { Link } from "react-router-dom";
import { BiWifi0 } from "react-icons/bi";
const Projects = () => {

  return (
    <div className='main'>
          {/* <div class="row project">
              <div class="col-sm-6 column">
                  <div className="card h-100 text-center" >
                      <Link to="https://github.com/vasavipailla/typing-game"><img className="card-img-top" src={game} alt="typing game"/></Link>
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
              </div>
              <div class="col-sm-6 column">
                  <div className="card h-100 text-center">
                      <Link to="https://michelleandersson.github.io/portfolio.5.0/#contact"><img className="card-img-top" src={game} alt="typing game"/></Link>
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                     </div>
                  </div>
              </div> 
              </div>
                <div class="row project two">
                <div class="col-sm-6 column">
                    <div className="card h-100 text-center" >
                        <Link to="https://michelleandersson.github.io/portfolio.5.0/#contact"><img className="card-img-top" src={game} alt="typing game"/></Link>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
              </div> */}
              <div className='project'>
                <h4>1<BiWifi0/>Typing game</h4>
                <Link to="https://github.com/vasavipailla/typing-game"><img className="card-img-top border border-secondary" src={game} alt="typing game"/></Link>
                <p>Built on : HTML, CSS, React, React Hooks</p>
              </div>
              <div className='project'>
                <h4>2<BiWifi0/>Bhromaon Travel</h4>
                <Link to="https://github.com/vasavipailla/test"><img className="card-img-top border border-secondary" src={travel} alt="typing game"/></Link>
                <p>Built on : HTML, CSS, Sass, Figma</p>
              </div>
            
          </div>
     )
}

export default Projects