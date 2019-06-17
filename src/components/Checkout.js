import React from "react";
import { withRouter } from 'react-router-dom';
import PayGroupPage from './PayGroup'
import PayConfirmPage from './PayConfirm'
import PayCompletePage from './PayComplete'

const members = [
  {
    name: "John Wick (You)",
    email: "john@kram.com"
  }
]

class AddMembersPage extends React.Component {
  state = {
    step: 1,
    name: '',
    email: '',
    members: members
  }

  nextStep = () => {
    this.setState({
        step : this.state.step + 1
    })
  }

  prevStep = () => {
    this.setState({
        step : this.state.step - 1
    })
  }

  handleChange = input => event => {
    this.setState({ [input] : event.target.value });
  }

  onAddMember = () => {
    var added = this.state.members.concat([{name: this.state.name, email: this.state.email}]);
    this.setState({name: '', email: '', members: added});
  }

  onRemoveMember = (index) => {
    this.state.members.splice(index, 1);
    this.setState({ members: this.state.members });
  }

  render() {
    const { name, email } = this.state;
    const invite = { name, email };
    switch(this.state.step) {
      case 1:
        return <PayGroupPage nextStep={this.nextStep} 
                  onAddMember={this.onAddMember} onRemoveMember={this.onRemoveMember} handleChange={this.handleChange} 
                  invite={invite} members={this.state.members} />
      
      case 2:
        return <PayConfirmPage members={this.state.members} prevStep={this.prevStep} nextStep={this.nextStep} />

      case 3:
        return <PayCompletePage prevStep={this.prevStep} nextStep={this.nextStep}/>
    }
    
  };
};

export default withRouter(AddMembersPage);
