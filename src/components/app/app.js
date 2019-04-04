import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import styles from './app.module.scss';

const App = () => {
  return (
    <main role="main" className="container-fluid">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
          />
      </Switch>
    </main>
  );
};

export default App;
