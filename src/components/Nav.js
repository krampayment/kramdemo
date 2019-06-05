import React from "react";

const NavBar = () => (
  <div className="ui menu navbar">
    <div id="logo" className="item ui medium header">
      TRADE
    </div>
    <div class="right menu">
      <a className="item">About</a>
      <a className="item">Shop</a>
      <a className="item">Help</a>
      <div class="item">
        <div class="ui secondary button">Your Cart</div>
      </div>
    </div>
  </div>
);

export default NavBar;
