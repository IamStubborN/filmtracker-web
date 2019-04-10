import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import { MainPage } from '../pages';
import classes from './app.module.scss';

import { Container } from "reactstrap";
import FilmPage from "../pages/film-page";

const App = () => {
    return (
    <Container role="main">
        <Header numItems={5} total={210}/>
      <Switch>
        <Route
          path="/"
          component={MainPage}
          exact />

          <Route
              path="/films/page/:id"
              component={MainPage}
              />

          <Route
              path="/films/film/:id"
              component={FilmPage}
              />
          {/*<Route*/}
              {/*path="/watch/:type/:name"*/}
              {/*component={TryPage}*/}
          {/*/>*/}
      </Switch>
    </Container>
  );
};

export default App;
