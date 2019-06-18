import React from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class DemoEntry extends React.Component {

  state = {
    name: "",
    email: ""
  }

  sendEmail = () => {
    axios.post("demo.krampayment.com:9000", {
      members: [{
        "email_address": this.state.email,
        "status": "unsubscribed",
        "merge_fields": {
          "FNAME": this.state.name,
          "LNAME": ""
        }
      }]
    })
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

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
              <input name="name" onChange={this.handleChange} type="text" placeholder="e.g. John Wick" />
            </div>
            <div class="field">
              <label>Email</label>
              <input name="email" onChange={this.handleChange} type="text" placeholder="e.g. john@kram.com" />
            </div>
            
            <a id="demo-button" class="fluid ui large button" onClick={this.sendEmail}>Continue to Demo</a>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(DemoEntry);