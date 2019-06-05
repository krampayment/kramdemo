import React from "react";
import { withRouter } from 'react-router-dom';

class CataloguePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi there! I am the Catalogue Page.</h1>
      </div>
    );
  };
};

export default withRouter(CataloguePage);
