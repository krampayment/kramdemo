import React from "react";
import { withRouter } from 'react-router-dom';

class PayGroupPage extends React.Component {
  render() {
    return (
      <div id="kram-payment" class="ui">
        <div class="ui container">
          <div class="ui ordered three steps checkout-steps">
          <div class="active step">
            <div class="content">
              <div class="title">Shipping</div>
              <div class="description">Choose your shipping options</div>
            </div>
          </div>
          <div class="completed step">
            <div class="content">
              <div class="title">Billing</div>
              <div class="description">Enter billing information</div>
            </div>
          </div>
          <div class="active step">
            <div class="content">
              <div class="title">Confirm Order</div>
              <div class="description">Verify order details</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PayGroupPage);