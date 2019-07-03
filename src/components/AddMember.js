import React from 'react';
import {hasName, isEmail} from "../utils/helpers"

class AddMember extends React.Component {
  state = {
    nameInputStyle: "field",
    emailInputStyle: "field",
    name: '',
    email: '',
  }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value });
  }

  addMember = (e) => {
    e.preventDefault();
    if (hasName(this.state.name) && isEmail(this.state.email)) {
      this.props.addMember(this.state.name, this.state.email);
      this.setState({name: '', email: ''});
      this.setState({ nameInputStyle: "field", emailInputStyle: "field"});
    } else {
      if (!hasName(this.state.name)) {
        this.setState({ nameInputStyle: "field error"});
      }
      if (!isEmail(this.state.email)) {
        this.setState({ emailInputStyle: "field error"});
      }
    }
  }


  render() {
    return (
      <div class="ui form">
        <div class="fields">
          <div class={this.state.nameInputStyle}>
            <input type="text" placeholder="Member's Name" value={this.state.name} onChange={this.handleChange('name')} />
          </div>
          <div class={this.state.emailInputStyle}>
            <input type="text" placeholder="Member's Email" value={this.state.email} onChange={this.handleChange('email')} />
          </div>
          <a class="ui button kram-button" onClick={this.addMember}>Add Member</a>
        </div>
      </div>
    );
  }
  

}

export default AddMember;