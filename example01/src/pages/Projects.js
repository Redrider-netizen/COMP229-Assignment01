// src/pages/About.js
import React from 'react';
import image1 from '../images/AI-OS.png';
import image2 from '../images/Yoga.png';
import image3 from '../images/Lotto.png';
function Projects() {
  return (
    <div className="about-page">
      <h1> Projects</h1> 
    
   

        <div><img src={image1} style={{width: '15%'}}/></div><p>Designed a conceptual OS prototype with machine learning-based workflow automation
    and predictive personalization.
    Explored real-time behavior modeling to enhance user efficiency and system
    responsiveness. </p>
        <div><img src={image2} style={{width: '15%'}}/></div><p>Modeled an AI algorithm based on Yogic psychology (Manas, Buddhi, Chitta, Ahamkara)
    for interpretable and mindful machine learning.
    Highlighted the value of cross-cultural ethics and mental models in AI development.</p>
        <div><img src={image3} style={{width: '15%'}}/></div><p>Developed a statistical model exploring AI’s capacity to identify patterns in random
        systems.</p>

   </div>
  );
}

export default Projects;
