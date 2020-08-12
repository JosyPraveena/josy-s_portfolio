import React from 'react';
import {FaLinkedin} from 'react-icons/fa'
import {GrGithub,GrMail} from 'react-icons/gr'
import {RiDownload2Line} from 'react-icons/ri'
import Cv from '../Josy_Praveena_Prabhagaran_CV.pdf'
const Contact = () =>{
    return(
        <>
        <div  id='contact-section-scroll'>
        <div></div>
        <div>
        <div className="aboutme-heading">
        <h1 >Let's Connect</h1>
        </div>
        <div className='socialmedia-icons'>
      <a href='mailto:josypraveena@gmail.com'><GrMail  className='email' size='50px' /></a>  
       <a href='http://github.com/JosyPraveena'> <GrGithub className='github'  size='50px'/> </a> 
     <a href='http://www.linkedin.com/in/josy-praveena'><FaLinkedin className='linkedin'  size='50px'/></a>
            
        </div>
        <div className='button-container'>
        
        <a  href={Cv} className='download-button' download><RiDownload2Line className='downloadicon' size='25px'/> Download CV</a>
        </div>
        
        </div>
        </div>
        </>
    )
}

export default Contact;