import React from "react";
import { withRouter } from 'react-router-dom';
import Faker from "faker";
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
          <AddMember addMember={this.addMember} name={this.props.name} email={this.props.email}/>
          <div class="ui divider"></div>
          <div class="ui four doubling cards">
            { this.props.members.map((member, index) => {
              return (
                <div class="card group-member-card">
                  <div class="ui items">
                    <div class="item">
                      <div class="ui mini circular image">
                        <img src={Faker.image.avatar()} />
                      </div>
                      <div class="middle aligned content group-member">
                        <a class="header">{member.name}</a>
                        <div class="meta">
                          <span>{member.email}</span>
                        </div>
                      </div>
                    </div>
                    {index > 0 &&
                    <div>
                      <div class="ui mini vertical animated basic button">
                        <div class="visible content">Edit</div>
                        <div class="hidden content">
                          <i class="right pencil icon"></i>
                        </div>
                      </div>
                      <div class="ui mini vertical animated red basic button" onClick={() => this.removeMember(index)}>
                        <div class="visible content">Remove</div>
                        <div class="hidden content">
                          <i class="right trash icon"></i>
                        </div>
                      </div>
                    </div>
                    }
                  </div>
                </div>
              )
            })}
          </div>
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