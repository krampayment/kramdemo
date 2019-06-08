import React from "react";
import { withRouter } from 'react-router-dom';
import NavBar from './Nav';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="ui vertical masthead background center aligned segment">
          <div className="ui text container">
            <h1 className="ui header">
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
          <div className="ui middle aligned grid container">
            <div className="row">
              <h1 className="ui header column">Featured Categories</h1>
            </div>
            
            {/* Need to credit photographers for photos from Unsplash  */}
            <div className="ui four cards stackable featured-categories">
                <a className="ui card" href="catalogue">
                  <a className="image" href="catalogue">
                    <img src="/images/fashion.jpg" className="ui large bordered image" />
                  </a>
                  <div className="content">
                    <div className="center aligned header">Fashion</div>
                  </div>
                </a>
                <a className="ui card" href="catalogue">
                  <a className="image" href="catalogue">
                    <img src="/images/electronics.jpg" className="ui large bordered image" />
                  </a>
                  <div className="content">
                    <div className="center aligned header">Electronics</div>
                  </div>
                </a>
                <a className="ui card" href="catalogue">
                  <a className="image" href="catalogue">
                    <img src="/images/essentials.jpg" className="ui large bordered image" />
                  </a>
                  <div className="content">
                    <div className="center aligned header">Essentials</div>
                  </div>
                </a>
                <a className="ui card" href="catalogue">
                  <div className="content shop">
                    <div className="center aligned ui huge header">Shop Now</div>
                  </div>
                </a>
            </div>
          </div>
        </div>

      </div>
    );
  };
};

export default withRouter(HomePage);
