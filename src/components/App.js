import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Home';
import CataloguePage from './Catalogue';
import ProductPage from './Product';
import CartPage from './Cart';
import LoginPage from './Login';
import SignupPage from './Signup';
import '../styles/App.css';

import * as routes from '../constants/routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.CATALOGUE}
            component={() => <CataloguePage />}
          />
          <Route
            exact path={routes.PRODUCT}
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
        </div>
      </Router>
    )
  }
}

export default App;