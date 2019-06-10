import React from "react";
import { withRouter } from 'react-router-dom';
import NavBar from './Nav';


class ProductPage extends React.Component {
  state = { quantity: 1 }

  incrementQty = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  decrementQty = () => {
    if (this.state.quantity > 1) 
      this.setState({ quantity: this.state.quantity - 1 });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="ui vertical stripe segment background">
          <div className="ui stackable two column vertically container centered grid">
            <div className="column">
                <img src="/images/nike_shoes.jpg" className="ui large bordered centered image" />
            </div>
            <div className="column">
              <h1 className="ui huge header product-name">Product Name</h1>
              <h3 className="ui header product-price">$99.99
                <div class="sub header">
                  <i class="star icon"></i>
                  <i class="star icon"></i>
                  <i class="star icon"></i>
                  <i class="star icon"></i>
                  <i class="star half icon"></i>
                  <div class="ui label">
                    100 Reviews
                  </div>
                </div>
              </h3>
              <p className="product-description">
                Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
              </p>
              <div class="ui form">
                <div class="five wide field">
                  <label>Quantity</label>
                  <div class="ui left action input">
                    <button class="ui icon button" onClick={() => this.decrementQty()}><i className="minus icon"></i></button>
                    <input type="text" className="quantity" value={this.state.quantity} />
                    <button class="ui icon button right" onClick={() => this.incrementQty()}><i className="plus icon"></i></button>
                  </div>
                </div>
                <a class="ui submit secondary large button" href="cart">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
        <div className="ui vertical stripe segment">
          <div className="ui middle aligned grid container">
            <div className="row">
              <h1 className="ui header column">Related Products</h1>
            </div>
            
            {/* Need to credit photographers for photos from Unsplash  */}
            <div className="ui four cards stackable featured-categories">
                <a className="ui card" href="catalogue">
                  <a className="image" href="catalogue">
                    <img src="/images/coach_wallet.jpg" className="ui large bordered image" />
                  </a>
                  <div className="content related-product">
                    <span class="right floated">
                      $129.99
                    </span>
                    Coach Wallet
                  </div>
                </a>
                <a className="ui card" href="catalogue">
                  <a className="image" href="catalogue">
                    <img src="/images/gucci_handbag.jpg" className="ui large bordered image" />
                  </a>
                  <div className="content related-product">
                    <span class="right floated">
                      $129.99
                    </span>
                    Gucci Handbag
                  </div>
                </a>
                <a className="ui card" href="catalogue">
                  <a className="image" href="catalogue">
                    <img src="/images/levis_jeans.jpg" className="ui large bordered image" />
                  </a>
                  <div className="content related-product">
                    <span class="right floated">
                      $129.99
                    </span>
                    Levi's Jeans
                  </div>
                </a>
                <a className="ui card" href="catalogue">
                  <a className="image" href="catalogue">
                    <img src="/images/raybans_sunglasses.jpg" className="ui large bordered image" />
                  </a>
                  <div className="content related-product">
                    <span class="right floated">
                      $129.99
                    </span>
                    RayBan Sunglasses
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(ProductPage);
