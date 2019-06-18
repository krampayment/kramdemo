import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import HomePage from './Home';
import DemoEntryPage from './DemoEntry';
import CataloguePage from './Catalogue';
import ProductPage from './ProductDemo';
import CartPage from './Cart';
import LoginPage from './Login';
import SignupPage from './Signup';
import CheckoutPage from './Checkout';
import '../styles/App.css';

import * as routes from '../constants/routes';

import ReactGA from 'react-ga';

const history = createHistory()
history.listen(location => {
	ReactGA.set({ page: location.pathname })
	ReactGA.pageview(location.pathname)
})

class App extends React.Component {

  componentDidMount() {
    ReactGA.pageview(window.location.pathname)
  }

  render() {
    return (
      <Router>
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
      </Router>
    )
  }
}

export default App;