import React from "react";
import { withRouter } from 'react-router-dom';

class PayGroupPage extends React.Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep()
  }

  addMember = (e) => {
    e.preventDefault();
    this.props.onAddMember();
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
              <div class="field">
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