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

  onAddMember = (name, email) => {
    var added = this.state.members.concat([{name: name, email: email}]);
    this.setState({members: added});
  }

  onRemoveMember = (index) => {
    this.state.members.splice(index, 1);
    this.setState({ members: this.state.members });
  }

  render() {
    switch(this.state.step) {
      case 1:
        return <PayGroupPage nextStep={this.nextStep} 
                  onAddMember={this.onAddMember} onRemoveMember={this.onRemoveMember}
                  members={this.state.members} />
      
      case 2:
        return <PayConfirmPage members={this.state.members} prevStep={this.prevStep} nextStep={this.nextStep} />

      case 3:
        return <PayCompletePage prevStep={this.prevStep} nextStep={this.nextStep}/>
    }
    
  };
};

export default withRouter(AddMembersPage);
