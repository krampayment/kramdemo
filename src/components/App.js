import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import HomePage from './Home';
import DemoEntryPage from './DemoEntry';
import CataloguePage from './Catalogue';
import ProductPage from './ProductDemo';
import CartPage from './Cart';
import LoginPage from './Login';
import SignupPage from './Signup';
import CheckoutPage from './Checkout';
import GAListener from './GAListener';
import '../styles/App.css';

import * as routes from '../constants/routes';


class App extends React.Component {

  render() {
    return (
      <Router>
        <GAListener trackingId="UA-142375727-1">
          <div style={{height: '100%'}}>
            {/* <Route
              exact path={routes.HOME}
              component={() => <HomePage />}
            /> */}
            <Route
              exact path={routes.DEMOENTRY}
              component={() => <DemoEntryPage />}
            />
            <Route
              exact path={routes.CATALOGUE}
              component={() => <CataloguePage />}
            />
            <Route
              exact path={routes.PRODUCTDEMO}
              component={() => <ProductPage />}
            />
            <Route
              exact path={routes.CART}
              component={() => <CartPage />}
            />
            <Route
              exact path={routes.LOGIN}
              component={() => <LoginPage />}
            />
            <Route
              exact path={routes.SIGNUP}
              component={() => <SignupPage />}
            />
            <Route
              exact path={routes.CHECKOUT}
              component={() => <CheckoutPage />}
            />
          </div>
        </GAListener>
      </Router>
    )
  }
}

export default App;