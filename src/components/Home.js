import React from "react";
import { withRouter } from 'react-router-dom';
import NavBar from './Nav';
import Footer from './Footer';

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
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <h1 className="ui header column">Featured Categories</h1>
            </div>
            
            {/* Need to credit photographers for photos from Unsplash  */}
            <div className="row featured-categories">
              <div className="four wide column">
                <a class="ui card" href="catalogue">
                  <a class="image" href="catalogue">
                    <img src="/images/fashion.jpg" className="ui large bordered image" />
                  </a>
                  <div class="content">
                    <div class="center aligned header">Fashion</div>
                  </div>
                </a>
              </div>
              <div className="four wide column">
                <a class="ui card" href="catalogue">
                  <a class="image" href="catalogue">
                    <img src="/images/electronics.jpg" className="ui large bordered image" />
                  </a>
                  <div class="content">
                    <div class="center aligned header">Electronics</div>
                  </div>
                </a>
              </div>
              <div className="four wide column">
                <a class="ui card" href="catalogue">
                  <a class="image" href="catalogue">
                    <img src="/images/essentials.jpg" className="ui large bordered image" />
                  </a>
                  <div class="content">
                    <div class="center aligned header">Essentials</div>
                  </div>
                </a>
              </div>
              <div className="four wide center aligned column">
                <h1 className="ui header" >Shop Now</h1>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  };
};

export default withRouter(HomePage);
