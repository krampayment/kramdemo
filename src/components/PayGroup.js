import React from "react";
import { withRouter } from 'react-router-dom';

class PayGroupPage extends React.Component {

  state = {
    inputStyle: "field"
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep()
  }

  addMember = (e) => {
    e.preventDefault();
    if (this.isEmail(this.props.invite.email)) {
      this.props.onAddMember();
      this.setState({ inputStyle: "field"});
    } else {
      this.setState({ inputStyle: "field error"});
    }
  }

  isEmail = (email) => {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );	
  }
  
  render() {
    const { invite } = this.props;
    return (
      <div id="kram-payment" class="ui">
        <div class="ui container">
          <div class="ui ordered three steps checkout-steps">
            <div class="active step">
              <div class="content">
                <div class="title">Group Members</div>
                <div class="description">Choose members to share with</div>
              </div>
            </div>
            <div class="disabled step">
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
          <h1 class="ui header">
            <div class="content">
              Group Members
            </div>
          </h1>
          <div class="ui form">
            <div class="fields">
              <div class="field">
                <input type="text" placeholder="Member's Name" value={this.props.invite.name} onChange={this.props.handleChange('name')} />
              </div>
              <div class={this.state.inputStyle}>
                <input type="text" placeholder="Member's Email" value={this.props.invite.email} onChange={this.props.handleChange('email')} />
              </div>
              <a class="ui button kram-button" onClick={this.addMember}>Add Member</a>
            </div>
          </div>
          <div class="ui divider"></div>
          <div class="ui four doubling cards">
            { this.props.members.map((member, index) => {
              return (
                <div class="card">
                  <div class="content">
                    <div class="header">{member.name}</div>
                    <div class="meta">{member.email}</div>
                  </div>
                </div>
              )
            })}
          </div>
          <div class="four column row">
            <div class="left floated column"></div>
            <div class="right floated column">
              <button class="ui button kram-button right floated" onClick={this.continue}>Next Step</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PayGroupPage);