import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/navigation.css';
import logo from '../../src/logo.svg';
class Navigation extends Component {
    render() { 
        return <>
            {/* create navigation menu */}
            <nav>
              <img src={logo} width="50px" alt="" />
                <ul>
                    <li><Link to="/" >HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </>;
    }
}
 
export default Navigation;