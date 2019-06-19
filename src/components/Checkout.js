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
    members: []
  }

  componentDidMount() {
    const members = [
      { 
        name: this.props.name + " (You)",
        email: this.props.email
      }
    ]
    this.setState({
      members
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      members= [
        {
          name: nextProps.name,
          email: nextProps.email
        }
      ]
      this.setState({ members });
    }
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
        return <PayGroupPage history={this.props.history} nextStep={this.nextStep} 
                  onAddMember={this.onAddMember} onRemoveMember={this.onRemoveMember}
                  members={this.state.members} />
      
      case 2:
        return <PayConfirmPage name={this.props.name} history={this.props.history} members={this.state.members} prevStep={this.prevStep} nextStep={this.nextStep} />

      case 3:
        return <PayCompletePage history={this.props.history} prevStep={this.prevStep} nextStep={this.nextStep} name={this.props.name} email={this.props.email} />
    }
    
  };
};

export default withRouter(AddMembersPage);
