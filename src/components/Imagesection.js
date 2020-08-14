import React from 'react';

const Imagesection = () =>{
    return(
        <>
        <div className='image-container'>
        <div className='homepage-image-section'>
        <img src='https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
        srcset ='https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1920w,
        https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1600w, 
        https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1440w,
        https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1366w,
        https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1024w,
        https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 768w,
        https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 640w,
        https://images.pexels.com/photos/434337/pexels-photo-434337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 320w'

        alt='landing page'/>
        <div id='text-on-image'>
        <h1>Josy's Portfolio</h1>
        </div>
        </div>
        </div>
        </>
    )
}

export default Imagesection;