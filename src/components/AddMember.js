import React from 'react';

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
    if (this.isEmail(this.state.email)) {
      this.props.addMember(this.state.name, this.state.email);
      this.setState({name: '', email: ''});
      this.setState({ inputStyle: "field"});
    } else {
      this.setState({ inputStyle: "field error"});
    }
  }
  
  isEmail = (email) => {
    return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test( email );	
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