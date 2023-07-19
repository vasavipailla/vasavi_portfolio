
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Components/Home";
import About from "./Components/About";
 import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Greet from "./Components/Greet";
function App() {
  return (
    <BrowserRouter>
             <div>
               <Home/>
            </div>
            <div>
              <Routes>
              <Route path="/components/greet" Component={Greet}/>
              <Route path="/components/about" Component={About}/>
              <Route path="/components/contact" Component={Contact}/> 
              <Route path="/components/projects" Component={Projects}/> 
              </Routes>
            </div>
    </BrowserRouter>
  );
}

export default App;
