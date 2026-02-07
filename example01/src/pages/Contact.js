// src/pages/About.js
import React from 'react';

// Simple version without React state
function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact me</h1>
      <form className="contact-form">
        <label htmlFor="fname">First name: </label>
        <input type="text" id="fname" name="fname" /><br /><br />
        
        <label htmlFor="lname">Last name: </label>
        <input type="text" id="lname" name="lname" /><br /><br />
        
        <label htmlFor="Cnumber">Contact number: </label>
        <input type="text" id="Cnumber" name="Cnumber" /><br /><br />
        
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email" /><br /><br />
        
        <label htmlFor="message">Message:</label><br /><br />
        <textarea id="message" name="message" rows="4" cols="50"></textarea><br />
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}


export default Contact;