import React from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ReactGA from 'react-ga';

import * as routes from '../constants/routes';
import {isEmail} from "../utils/helpers";

class DemoEntry extends React.Component {

  state = {
    name: "",
    email: "",
    inputStyle: "field",
    status: "unsubscribed"
  }

  sendEmail = () => {
    ReactGA.event({
      category: 'User',
      action: 'Started Demo'
    });
    if (isEmail(this.state.email)) {
      axios.post("https://demo.krampayment.com:8443/", {
        members: [{
          "email_address": this.state.email,
          "status": this.state.status,
          "merge_fields": {
            "FNAME": this.state.name,
            "LNAME": ""
          }
        }]
      })
      this.props.update(this.state.name, this.state.email);
      this.props.history.push("/product");
    } else {
      this.setState({ inputStyle: "field error"});
    }
  }

  handleChange = (e) => {
    if (e.target.name === "subscribe") {
      switch(e.target.checked) {
        case true:
          this.setState({ status: "subscribed"});
          break;
        default:
          this.setState({ status: "unsubscribed"});
      }
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  }

  render() {
    return (
      <div id="kram-payment" class="ui middle aligned center aligned grid">
        <div id="demo-segment" class="authentication column">
        <img src="/images/kram-logo.png" className="ui large bordered centered image" />
          <h1 class="ui header">
            <div class="content demo-header">
              Welcome to Kram Payment
            </div>
            <a class="sub header description" href="signup">Before we begin, please fill in your details to find out more. </a>
          </h1>
          <div class="ui large form">
            <div class="field">
              <input name="name" onChange={this.handleChange} type="text" placeholder="Name" />
            </div>
            <div class={this.state.inputStyle}>
              <input name="email" onChange={this.handleChange} type="text" placeholder="Email Address" />
            </div>
            <div class="ui checkbox">
              <input type="checkbox" name="subscribe" onChange={this.handleChange} />
              <label>I would like to receive newsletters from Kram and subscribe to the mailing list</label>
            </div>
            <a id="demo-button" class="fluid ui large button" onClick={this.sendEmail}>Sign up to Continue</a>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(DemoEntry);