import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <div className='button-container'>
          <Link to='/login' className='button'>Login</Link>
        </div>
        <div className='button-container'>
          <Link to='/signup' className='button'>Signup</Link>
        </div>
        <div className='button-container'>
          <Link to='/github' className='button'>Github members</Link>
        </div>
        <div className='button-container'>
          <Link to='/webdevinfo' className='button'>Facts about Web Developers</Link>
        </div>
      </div>
    )
  }

}

export default HomePage;