import React from "react";
import { withRouter } from 'react-router-dom';

class SignupPage extends React.Component {
  render() {
    return (
      <div id="kram-payment" class="ui middle aligned grid">
        <div id="signup-segment" class="authentication ui grid container column">
          <h1 class="ui header">
            <div class="content">
              Create a KRAM account
            </div>
            <a class="sub header link" href="login">or sign in to your account</a>
          </h1>
          <div class="ui stackable two column divided grid container">
            <div class="row">
              <div id="account-details" class="ui column large form">
                <div class="field">
                  <label>Name</label>
                  <input type="text" placeholder="e.g. John Wick" />
                </div>
                <div class="field">
                  <label>Email</label>
                  <input type="text" placeholder="e.g. john@kram.com" />
                </div>
                <div class="field">
                  <label>Password</label>
                  <input type="text" placeholder="e.g. ••••••••••" />
                </div>
              </div>
              <div id="card-details" class="ui column large form card-details">
                <div class="field">
                  <label>Name on card</label>
                  <input type="text" placeholder="e.g. John Wick" />
                </div>
                <div class="field">
                  <label>Card number</label>
                  <input type="text" placeholder="•••• •••• •••• ••••" />
                </div>
                <div class="two fields">
                  <div class="field">
                    <label>Expiry date</label>
                    <div class="ui icon input">
                      <input type="text" placeholder="MM/YY" />
                      <i class="circular calendar alternate outline link icon"></i>
                    </div>
                  </div>
                  <div class="field">
                    <label>CVV</label>
                    <input type="text" placeholder="•••" />
                  </div>
                </div>
              </div>
            </div>
            <div class="row center aligned">
              <div class="ui text container center aligned">
                <button id="signup-button" class="ui large button">Create New Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(SignupPage);
