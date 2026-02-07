// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

import logo from '../logo.jpg';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><img src={logo} alt="Logo" width="5%" /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;