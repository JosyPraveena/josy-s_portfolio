import React from 'react';
import { Link } from "react-scroll";
import logo from '../images/Capture.PNG'
const Navbar = () =>{
    return(
        <>
        <div className="homepage-section" id='home'>
        <div></div>
      <div className="navbar">
        <div>
        <Link
            id="link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
           <img src={logo} alt='logo' id='logo' />
          </Link>
        </div>
        <div className="navbar-contents">
        <Link
            id="link"
            activeClass="active"
            to="aboutme-section-scroll"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
          <h2>About me</h2>
          </Link>
          <Link
            id="link"
            activeClass="active"
            to="project-section-scroll"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
          <h2>Projects</h2>
          </Link>
          <Link
            id="link"
            activeClass="active"
            to="contact-section-scroll"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
          <h2>Contact</h2>
          </Link>
        </div>
      </div>
        </div>
        </>
    )
}

export default Navbar;