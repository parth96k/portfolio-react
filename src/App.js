import Home from "./Home";
import "./App.css"
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";
import { useState } from 'react';

function App() {
  
  const logoImage ="images/logo/portfolio-logo.png";


  
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  return (
  <>
        <div className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logo-div"><Link to={"/"} className="navbar-brand"><img src={logoImage} alt="portfolioLogo"></img></Link></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myMenu" onClick={toggleMenu}>
           <span><i className="fa-solid fa-bars" id="menu-toggle"></i></span>
          </button>
          <div className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`} id="myMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to={"/"} onClick={closeMenu}>Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/About"}  onClick={closeMenu}>About</Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/Education"} onClick={closeMenu}>Education</Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/Skills"} onClick={closeMenu}>Skills</Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/Project"} onClick={closeMenu}>Projects</Link></li>
              <li className="nav-item"><Link className="nav-link" to={"/Contact"} onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
  </>
  );
}

export default App;
