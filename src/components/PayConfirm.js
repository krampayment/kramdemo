import React from "react";
import { withRouter } from 'react-router-dom';
import Faker from "faker";

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
          <h1 class="ui header">
            <div class="content">
              Confirm Details
            </div>
            <div class="sub header">Invitations will be sent to members after completing this step.</div>
          </h1>
          <div class="ui grid grid-margin">
            <div class="ten wide column">
              <div class="ui cards">
                <div class="card fill">
                  <div class="content bill">
                  <div class="header payment">Payment Details</div>
                    <div class="ui cards">
                      <div class="card fill">
                        <div class="content credit-details">
                          <i class="large credit card outline icon icon-margin"></i>
                          <div class="description">
                            Mastercard •••• •••• •••• 1234<br />{this.props.name}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="header billing">Billing Details</div>
                    <div class="ui cards">
                      <div class="card fill">
                        <div class="content billing-details">
                          <div class="description">
                            Dunder Mifflin<br />Paper Avenue 00<br /> SC1234 Scranton<br /> Pennsylvanie USA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="six wide column">
              <div class="ui cards right">
                <div class="card fill right-top">
                  <div class="content members">
                  <div class="header payment">Members</div>
                  { this.props.members.map((member, index) => {
                      return (
                        <div class="ui vertical segment members">
                          <h4 class="ui header center">
                            <img class="ui avatar image" src={Faker.image.avatar()} />
                            <div class="content name">
                              {member.name}
                              <div class="sub header email">{member.email}</div>
                            </div>
                          </h4>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div class="card fill right-btm">
                  <div class="content">
                  <div class="header payment">Order Summary</div>
                  <div className="ui grid grid-padding">
                    <div className="eight wide column">
                      <p>Total:</p>
                      <p>Your Share:</p>
                    </div>
                    <div className="eight wide column pay-amount">
                      <p>$99.00</p>
                      <p>$33.00</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="four column row row-margin">
              <div class="left floated column">
                <button class="ui button secondary" onClick={this.back}>Previous Step</button>
              </div>
              <div class="right floated column">
                <button class="ui button kram-button right floated" onClick={this.continue}>Next Step</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PayConfirmPage);