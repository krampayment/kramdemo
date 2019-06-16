import React from "react";
import { withRouter } from 'react-router-dom';

class DemoEntry extends React.Component {
  render() {
    return (
      <div id="kram-payment" class="ui middle aligned center aligned grid">
        <div id="demo-segment" class="authentication column">
          <h1 class="ui header">
            <div class="content demo-header">
              Welcome to KRAM demo
            </div>
            <a class="sub header description" href="signup">Before we begin, please fill in your details for market validation purposes. </a>
          </h1>
          <div class="ui large form">
            <div class="field">
              <label>Name</label>
              <input type="text" placeholder="e.g. John Wick" />
            </div>
            <div class="field">
              <label>Email</label>
              <input type="text" placeholder="e.g. john@kram.com" />
            </div>
            
            <a id="demo-button" class="fluid ui large button" href="product">Continue to Demo</a>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(DemoEntry);