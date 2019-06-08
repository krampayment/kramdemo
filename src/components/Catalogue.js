import React from "react";
import { withRouter } from 'react-router-dom';
import NavBar from './Nav';
import Footer from './Footer';

const items = [
  {
    name: "Gucci Handbag",
    price: 299.99,
    image_url: "/images/gucci_handbag.jpg"
  },
  {
    name: "Nike Shoes",
    price: 199.99,
    image_url: "/images/nike_shoes.jpg"
  },
  {
    name: "Tommy Hilfinger Bag",
    price: 159.99,
    image_url: "/images/tommy_bag.jpg"
  },
  {
    name: "Coach Wallet",
    price: 129.99,
    image_url: "/images/coach_wallet.jpg"
  },
  {
    name: "RayBans Sunglasses",
    price: 109.99,
    image_url: "/images/raybans_sunglasses.jpg"
  },
  {
    name: "Levi's Jeans",
    price: 149.99,
    image_url: "/images/levis_jeans.jpg"
  }
]

class CataloguePage extends React.Component {
  render() {
    return (
      <div id="catalogue">
        <NavBar />

        <div className="ui header margin">
          <h5>Home / Categories / Fashion / Shirts</h5>
        </div>
        <div className="ui grid">
          <div className="two wide column">
            <div class="ui vertical menu">
              <h4 class="ui header margin">Categories</h4>
              <a class="item">
                <p>Fashion</p>
              </a>
              <a class="item">
                <p>Electronics</p>
              </a>
              <a class="item">
                <p>Essentials</p>
              </a>
            </div>
          </div>
          <div className="fourteen wide column">
            <div className="ui text container">
              <div className="ui fluid icon input">
                <input type="text" placeholder="Find your items" />
                <i className="search icon"></i>
              </div>
            </div>
            <div className="cat-container">
              <h2 className="cat-title">Fashion</h2>
              <div class="ui simple dropdown sort-dropdown">
                <div class="text">Sort By</div>
                <i class="dropdown icon"></i>
                <div class="menu">
                  <div class="item">New</div>
                  <div class="item">Price</div>
                  <div class="item">Recent</div>
                </div>
              </div>
            </div>
            <div className="ui grid">
                {items.map((item) => {
                  return (
                    <div className="four wide column item">
                      <div class="ui card item">
                        <a class="image" href="product">
                          <img src={item.image_url} />
                        </a>
                        <div class="content">
                          <a class="header item-name" href="#">{item.name}</a>
                          <div class="meta">
                            <a>{"$" + item.price}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
};

export default withRouter(CataloguePage);
