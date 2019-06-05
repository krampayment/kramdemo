import React from "react";
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi there! I am the Home Page.</h1>
      </div>
    );
  };
};

export default withRouter(HomePage);
