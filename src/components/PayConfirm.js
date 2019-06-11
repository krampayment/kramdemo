import React from "react";
import { withRouter } from 'react-router-dom';

class PayConfirmPage extends React.Component {
  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    return (
      <div id="kram-payment" class="ui">
        <div class="ui container">
          <div class="ui ordered three steps checkout-steps">
          <div class="completed step">
            <div class="content">
              <div class="title">Group Members</div>
              <div class="description">Choose members to share with</div>
            </div>
          </div>
          <div class="active step">
            <div class="content">
              <div class="title">Confirm Order</div>
              <div class="description">Verify order details</div>
            </div>
          </div>
          <div class="disabled step">
            <div class="content">
              <div class="title">Complete Order</div>
              <div class="description">Wait for everyone to approve their share</div>
            </div>
          </div>
          </div>
        </div>
        <div class="ui container steps-content">
          <div class="ui grid">
            <div class="four column row">
              <div class="left floated column">
                <button class="ui button secondary" onClick={this.back}>Previous Step</button>
              </div>
              <div class="right floated column">
                <button class="ui button kram-button right floated" onClick={this.saveAndContinue}>Next Step</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PayConfirmPage);