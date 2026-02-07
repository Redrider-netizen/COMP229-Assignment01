// src/pages/Services.js
import React from 'react';
import image1 from '../images/pexels-michael-morse-2606402.jpg';
import image2 from '../images/istockphoto-1169929038-612x612.jpg';
import image3 from '../images/copy.jpg';
function Services() {
  return (
    <div className="about-page">
      <h1> Service</h1> 
    
   

        <div><img src={image1} style={{width: '15%'}}/></div><p>Photobooth attendant </p>
        <div><img src={image2} style={{width: '15%'}}/></div><p>Java Developer</p>
        <div><img src={image3} style={{width: '15%'}}/></div><p>Copywriter</p>   
   </div>
  );
}

export default Services;
