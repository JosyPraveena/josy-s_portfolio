import React from "react";
import profilephoto from "../images/linkedin.jpg";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-scroll'
import FadeIn from "react-fade-in";

const Aboutme = () => {
 
  return (
    <>

    <div id="aboutme-section-scroll">
    <FadeIn>
    <div className='aboutme-heading' ><h1>About me</h1></div>
    
      <div id="aboutme-section">
          <div ></div>
        <Paper id='aboutme-section-content' elevation={3}>
            <div className='aboutme-image'>
            <img src={profilephoto} alt="Profile pic" />
            </div>
            <div className='aboutme-description'>
            <br/>
                <h1 style={{fontWeight:'bold'}}>Hi! I'm Josy Praveena </h1>
                <h3>I'm up-and-coming Full Stack Web Developer. I have prior working experience in IT as 
                    a D&L Consultant.   I chose to expand my horizons and branch out to Web Development with a 
                    goal to keep on learning and growing. 
                </h3> <br/>
                <div>
            <Link
              className="linktoproject"
              activeClass="active"
              to="project-section-scroll"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              View my projects
            </Link>
          </div>
                <br/>
                <div id='skills'>
                <h2>Skills</h2>
                <div id='chips'>
                <Chip variant='outlined' size="medium" label="React js" className='chip' />
                <Chip  variant='outlined' size="medium" label="Javascript" className='chip' />
                <Chip variant='outlined' size="medium" label="HTML" className='chip' />
                <Chip variant='outlined'  size="medium" label="CSS" className='chip'/>
                <Chip variant='outlined' size="medium" label="Node js" className='chip'/>
                <Chip variant='outlined' size="medium" label="MongoDB" className='chip'/>
                <Chip variant='outlined' size="medium" label="PostgreSQL" className='chip'/>
                <Chip variant='outlined' size="medium" label="REST API" className='chip' />
                <Chip variant='outlined' size="medium" label="GitHub" className='chip' />
                </div>
                
                </div>
            </div>
        </Paper>
      </div>
      </FadeIn>
      </div>
    </>
  );
};

export default Aboutme;
