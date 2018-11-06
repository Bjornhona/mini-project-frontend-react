import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render () {
    return (
      <div className="nav-bar">
        <h3>Åsa's Really Cool Page</h3>
        <Link to='/' className="nav-button">Home</Link>
        <Link to='/login' className="nav-button">Login</Link>
        <Link to='/signup' className="nav-button">Signup</Link>
        <Link to='/github' className="nav-button">Github</Link>
        <Link to='/webdevinfo' className="nav-button">Web Devs</Link>
      </div>
      )
    }
  }
  
  export default NavBar;