// src/pages/About.js
import React from 'react';
import headShot from '../images/IMG_0167.jpeg';

function About() {
  return (
    <div className="about-page">
    <h1> About me</h1> 
   
    
    
    <img src={headShot} alt="Headshot" style={{ width: '20%' }} /> 
    <p> Hi  my name is Caalvin Sahayathasan, I am a student at Centennial College.
        I am currently in a software engineering technician program. </p>
    <button className="pdf-button">
        <a 
  href="./files/Caalvin_Sahayathasan_Resume.pdf" 
  target="_blank"
  rel="noopener noreferrer nofollow"
  className="pdf-link"
>
  Open Resume in New Tab
</a>
      </button>

   
    </div>
  );
}

export default About;