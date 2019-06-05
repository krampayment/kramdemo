import React from "react";
import { withRouter } from 'react-router-dom';

class CartPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi there! I am the Cart Page.</h1>
      </div>
    );
  };
};

export default withRouter(CartPage);