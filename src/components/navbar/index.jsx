import React,{useState} from "react";
import './style.css'
import Project from "../projects"
import  About from "../about"

const Navbar =()=>{
    const[menuOpen, setMenuOpen]=useState(false);
    const toggleMenu =() =>{
        setMenuOpen(!menuOpen)
    }
    return (
        <main>
        <div className="navbar-container">
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
            <li><a href="">Home</a></li>
                <li><a href="../about">About Me</a></li>
                <li><a href="">Resume</a></li>
                <li><a href="">Contact me</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </div>
        <div>
        </div>
        </main>
        

    );

}
export default Navbar