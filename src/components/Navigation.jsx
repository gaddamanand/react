import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';



class Navigation extends Component {
  
  render() { 
    return <>
    <nav>
    <h1>Brand</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </>  
  }
}
 
export default Navigation;
