import React from 'react';
import {isEmail} from "../utils/helpers"

class AddMember extends React.Component {
  state = {
    inputStyle: "field",
    name: '',
    email: '',
  }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value });
  }

  addMember = (e) => {
    e.preventDefault();
    if (isEmail(this.state.email)) {
      this.props.addMember(this.state.name, this.state.email);
      this.setState({name: '', email: ''});
      this.setState({ inputStyle: "field"});
    } else {
      this.setState({ inputStyle: "field error"});
    }
  }


  render() {
    return (
      <div class="ui form">
        <div class="fields">
          <div class="field">
            <input type="text" placeholder="Member's Name" value={this.state.name} onChange={this.handleChange('name')} />
          </div>
          <div class={this.state.inputStyle}>
            <input type="text" placeholder="Member's Email" value={this.state.email} onChange={this.handleChange('email')} />
          </div>
          <a class="ui button kram-button" onClick={this.addMember}>Add Member</a>
        </div>
      </div>
    );
  }
  

}

export default AddMember;