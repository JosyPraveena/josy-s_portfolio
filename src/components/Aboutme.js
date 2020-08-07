import React from "react";
import profilephoto from "../images/linkedin.jpg";
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-scroll'
import FadeIn from "react-fade-in";

const Aboutme = () => {
  return (
    <>

    <div style={{backgroundColor:'#b0ede5'}}>
    <FadeIn>
    <div className='aboutme-heading' ><h1>About me</h1></div>
    
      <div id="aboutme-section">
          <div></div>
        <Paper id='aboutme-section-content'>
            <div className='aboutme-image'>
            <img src={profilephoto} alt="Profile pic" />
            </div>
            <div className='aboutme-description'>
            <br/>
                <h2 style={{fontWeight:'bold'}}>Hi! I'm Josy Praveena </h2>
                <h3>I'm up-and-coming Full Stack Web Developer. I have prior working experience in IT as 
                    a D&L Consultant.   I chose to expand my horizons and branch out to Web Development with a 
                    goal to keep on learning and growing. 
                </h3> <br/>
                <div>
            <Link
              className="linktoproject"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              View my projects
            </Link>
          </div>
                <br/><br/>
                <div id='skills'>
                <h2>Skills</h2>
                <div id='chips'>
                <Chip  size="medium" label="React js" />
                <Chip  size="medium" label="Javascript" />
                <Chip  size="medium" label="HTML" />
                <Chip  size="medium" label="CSS" />
                <Chip  size="medium" label="Node js" />
                <Chip  size="medium" label="MongoDB" />
                <Chip  size="medium" label="PostgreSQL" />
                <Chip  size="medium" label="REST API" />
                <Chip  size="medium" label="GitHub" />
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
