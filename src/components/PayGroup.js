import React from "react";
import { withRouter } from 'react-router-dom';
import GroupMembers from './GroupMembers';
import AddMember from './AddMember';


class PayGroupPage extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep()
  }

  addMember = (name, email) => {
    this.props.onAddMember(name, email);
  }

  removeMember = (index) => {
    this.props.onRemoveMember(index);
  }
  
  render() {
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
          <AddMember addMember={this.addMember} />
          <div class="ui divider"></div>
          <GroupMembers members={this.props.members} />
          <div class="four column row row-margin">
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