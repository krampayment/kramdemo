import React from "react";
import { withRouter } from 'react-router-dom';

class LoginPage extends React.Component {
  render() {
    return (
      <div id="kram-payment" class="ui middle aligned center aligned grid kram-payment">
        <div id="login-segment" class="column">
          <h1 class="ui header">
            <div class="content">
              Log in to KRAM
            </div>
            <a class="sub header link" href="signup">or create an account</a>
          </h1>
          <form class="ui large form">
            <div class="field">
              <label>Email</label>
              <input type="text" placeholder="e.g. john@kram.com" />
            </div>
            <div class="field">
              <label>Password</label>
              <input type="text" placeholder="e.g. ••••••••••" />
            </div>
            
            <button id="login-button" class="fluid ui large button">Log In</button>
          </form>
          <div id="forgot-password">
            <a class="link" href="#">Forgot your password?</a>  
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(LoginPage);
