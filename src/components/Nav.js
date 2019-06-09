import React from "react";

const navToCart = (history) => {
  history.push("/cart");
}

const NavBar = (props) => {
  return (
    <div className="ui menu navbar">
      <div id="logo" className="item ui medium header">
        TRADE
      </div>
      <div class="right menu">
        <a className="item">About</a>
        <a className="item">Shop</a>
        <a className="item">Help</a>
        <div class="item">
          <button class="ui secondary button" onClick={() => {navToCart(props.history)}}>Your Cart</button>
        </div>
      </div>
    </div>
    )
  };

export default NavBar;
