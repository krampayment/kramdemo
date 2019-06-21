import React from "react";
import { withRouter } from 'react-router-dom';

class DemoExitPage extends React.Component {

  state = {
    inputStyle: "field"
  }

  componentDidMount() {
    if (this.props.name === "" || this.props.email === "" ) {
      this.props.history.push("/");
    }
  }

  continue = (e) => {
    e.preventDefault();
    window.location.href = "https://krampayment.com";
  }

  render() {
    return (
      <div id="kram-payment" class="ui">
        <div class="ui container steps-content">
          {/* <h1 class="ui header">
            <div class="content">
            Thanks for your time
            </div>
            <div class="sub header">Thanks for your time, any feedback is appreciated at nockram@gmail.com</div>
          </h1> */}
          <div id="completed-segment" class="ui very padded text container segment">
            <div class="ui centered row" style={{ textAlign: 'center' }}>
              <svg id="completed-smile" width="64" height="64" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 34.5C8.8873 34.5 1.5 27.1127 1.5 18C1.5 8.8873 8.8873 1.5 18 1.5C27.1127 1.5 34.5 8.8873 34.5 18C34.5 27.1127 27.1127 34.5 18 34.5ZM18 31.5C25.4558 31.5 31.5 25.4558 31.5 18C31.5 10.5442 25.4558 4.5 18 4.5C10.5442 4.5 4.5 10.5442 4.5 18C4.5 25.4558 10.5442 31.5 18 31.5ZM25.3658 23.1726L22.912 21.4467C21.7939 23.0364 19.9793 24 18 24C16.0208 24 14.2061 23.0364 13.088 21.4467L10.6342 23.1726C12.3082 25.5528 15.0337 27 18 27C20.9663 27 23.6918 25.5528 25.3658 23.1726ZM21 16.5V13.5H24V16.5H21ZM12 13.5V16.5H15V13.5H12Z" fill="#38A169"/>
              </svg>
            </div>
            <div class="ui row">
              <h2 class="ui header">
                <div class="content">
                That's the end of our demo, thank you for your time.
                  <div class="sub header contact">An email will be sent to you shortly. Any feedback is appreciated at contact@krampayment.com</div>
                </div>
              </h2>
            </div>
            <div class="ui row actions">
              <div id="no" class="ui black deny button" onClick={this.continue}>
                Continue
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DemoExitPage);