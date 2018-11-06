import React, { Component } from 'react';

class Login extends Component {

  render () {
    return (
      <div className="form">
        <div className="tab-content">
          <div id="login">
            <h1>Login</h1> 
            <form className="form-field container" action="/" method="post">
              <input className="input-field" type="email" name="email" placeholder="Email Address*" required />
              <input className="input-field" type="password" size="20" name="password" placeholder="Password*" required />
              <p className="forgot">Forgot Password?</p>
              <input type="submit" className="button button-block" value="Log In" />
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Login;