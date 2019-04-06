import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header';
import { HomePage, FilmPage, TryPage } from '../pages';
import classes from './app.module.scss';

import Container from "react-bootstrap/Container";
// fontawesome.library.add(faUser);

const App = () => {
    return (
    <Container role="main">
        <AppHeader numItems={5} total={210}/>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact />

          <Route
              path="/films/film/:id"
              component={FilmPage}
              />
          <Route
              path="/watch/:type/:name"
              component={TryPage}
          />
      </Switch>
    </Container>
  );
};

export default App;
