import React, { Component } from 'react';

class Signup extends Component {

  render () {
    return (
      <div className="form">
        <div className="tab-content">
          <div id="signup">   
            <h1>Sign Up for Free</h1>
            <div class="form">
              <div class="tab-content container">
                <form className="form-field" action="/" method="post">
                  <div class="top-row">
                    <input className="input-field" type="text" placeholder="First Name*" required />
                    <input className="input-field" type="text" placeholder="Last Name*" required />
                  </div>
                  <div>
                    <input className="input-field" type="email" placeholder="Email Address" required />
                    <input className="input-field" type="password" placeholder="Set A Password" required />
                  </div>
                  <input type="submit" class="button button-block" value="Get Started" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Signup;