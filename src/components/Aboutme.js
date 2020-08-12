import React from "react";
import profilephoto from "../images/linkedin.jpg";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-scroll'

const Aboutme = () => {
 
  const chipsstyle = {
   
    padding: "20px"
  }
  return (
    <>

    <div id="aboutme-section-scroll">

    <div className='aboutme-heading' ><h1>About me</h1></div>
    
      <div id="aboutme-section">
          <div ></div>
        <Paper id='aboutme-section-content' elevation={3}>
            <div className='aboutme-image'>
            <img src={profilephoto} alt="Profile pic" />
            </div>
            <div className='aboutme-description'>
         
                <h1>Hi! I'm Josy Praveena </h1>
                <p>I'm up-and-coming <b>Full Stack Web Developer</b> currently living in <b>Berlin, Germany</b>. I have prior working experience in <strong>IT as 
                    a D&L Consultant</strong>.   I chose to expand my horizons and branch out to Web Development with a 
                    goal to keep on learning and growing. 
                </p> 
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
                <div id='skills'>
                <h2>Skills</h2>
                <div id='chips'>
                <Chip variant='outlined' size="medium" label="React js" className='chip'  />
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
      </div>
    </>
  );
};

export default Aboutme;
