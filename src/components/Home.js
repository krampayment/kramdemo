import React from "react";
import { withRouter } from 'react-router-dom';
import NavBar from './Nav';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="ui inverted vertical masthead center aligned segment">
          <div className="ui text container">
            <h1 className="ui inverted header">
              TRADE
            </h1>
            <h2>The best quality products, available to everyone.</h2>
            <div className="ui fluid icon input">
              <input type="text" placeholder="Find your items" />
              <i className="search icon"></i>
            </div>
          </div>

        </div>

        <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <h1 className="ui header column">Featured Categories</h1>
            </div>
            <div className="row featured-categories">
              <div className="four wide column">
                <img src="/images/fashion.jpg" className="ui large bordered image" />
              </div>
              <div className="four wide column">
                <img src="/images/electronics.jpg" className="ui large bordered image" />
              </div>
              <div className="four wide column">
                <img src="/images/essentials.jpg" className="ui large bordered image" />
              </div>
              <div className="four wide center aligned column">
                <h1 className="ui header" >Shop Now</h1>
              </div>
            </div>

          </div>
                   

        </div>
       
        
      </div>
    );
  };
};

export default withRouter(HomePage);
