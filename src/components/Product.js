import React from "react";
import { withRouter } from 'react-router-dom';

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi there! I am the Product Page.</h1>
      </div>
    );
  };
};

export default withRouter(ProductPage);
