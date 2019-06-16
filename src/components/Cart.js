import React from "react";
import { withRouter } from 'react-router-dom';
import NavBar from "./Nav";

const items = [
  {
    name: "Nike Shoes",
    price: 199.99,
    image_url: "/images/nike_shoes.jpg",
    quantity: 1
  },
  {
    name: "Tommy Hilfinger Bag",
    price: 159.99,
    image_url: "/images/tommy_bag.jpg",
    quantity: 1
  },
  {
    name: "Coach Wallet",
    price: 129.99,
    image_url: "/images/coach_wallet.jpg",
    quantity: 1
  }
]

class CartPage extends React.Component {
  constructor(props) {
    super(props);
   this.state={
      quantity: 1,
      items
    }
  }

  addQuantity = (index) => {
    items[index]["quantity"] = items[index]["quantity"] + 1;
    this.setState({ items });
  }

  subtractQuantity = (index) => {
    if (items[index]["quantity"] > 0) {
      items[index]["quantity"] = items[index]["quantity"] - 1;
      this.setState({ items });
    }
  }

  deleteItem = (index) => {
    items.splice(index, 1);
    this.setState({ items });
  }

  register = () => {
    this.props.history.push("/signup");
  }

  render() {
    return (
      <div id="cart">
        <NavBar history={this.props.history}/>
        <div className="ui text container">
          <div className="ui header title">
            <h1>Your Cart</h1>
          </div>
          { items.map((item, index) => {
            return (
              <div class="ui vertical segment">
                <p>
                  <img class="ui small rounded image" src={item.image_url} />
                  <div className="ui header product-name">{item.name}</div>
                  <div className="ui container quantity-container">
                    <button class="ui button back" onClick={() => this.subtractQuantity(index)}>
                      <i class="minus icon quantity"></i>
                    </button>
                    <div class="ui input small">
                      <input type="text" value={item.quantity} />
                    </div>
                    <button class="ui button back" onClick={() => this.addQuantity(index)}>
                      <i class="plus icon quantity"></i>
                    </button>
                  </div>
                  <div className="ui header price">{item.price}</div>
                  <button class="ui button close" onClick={this.deleteItem}>
                    <i class="large close icon"></i>
                  </button>
                </p>
              </div>
            )
          })}
          <div className="last">
            <p>
            <a href="catalogue">
              <i class="arrow left icon"></i>
              <b>Continue Shopping</b>
            </a>
            <div className="ui text subtotal">
              Subtotal: <b>$299.99</b>
            </div>
            </p>
          </div>
          <div className = "last">
            <button onClick={this.register} class="ui button kram">
              <b>Pay By Kram</b>
            </button>
            <button class="ui button checkout">
              <b>Check Out</b>
            </button>
          </div>
        </div>
      </div>
    );
  };
};

export default withRouter(CartPage);