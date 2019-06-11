import React from "react";
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component {
  render() {
    return (
      <div id="kram-payment" class="ui middle aligned center aligned grid">
        <div id="login-segment" class="authentication column">
          <h1 class="ui header">
            <div class="content">
              Log in to KRAM
            </div>
            <a class="sub header link" href="signup">or create an account</a>
          </h1>
          <div class="ui large form">
            <div class="field">
              <label>Email</label>
              <input type="text" placeholder="e.g. john@kram.com" />
            </div>
            <div class="field">
              <label>Password</label>
              <input type="text" placeholder="e.g. ••••••••••" />
            </div>
            
            <a id="login-button" class="fluid ui large button" href="checkout">Log In</a>
          </div>
          <div id="forgot-password">
            <a class="link" href="#">Forgot your password?</a>  
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(LoginPage);
