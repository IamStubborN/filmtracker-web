import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Header from '../header';
import { FilmsPage, FilmPage, MainPage } from '../pages';
import classes from './app.module.scss';

import { Container } from "reactstrap";
import Cookies from "js-cookie";
import ErrorIndicator from "../error-indicator";
import PrivateRoute from "../private-route";

class App extends Component {

    state = {
        isLoggedIn: false
    };

    componentDidMount() {
        const Token = Cookies.get("Token");
        const Refresh = Cookies.get("Refresh");

        if (Token && Refresh) {
            this.setState({isLoggedIn:true})
        }
    }

    render() {
        const { isLoggedIn } = this.state;
        return (
            <Container role="main">
                <Header/>
                <Switch>
                    <Route
                        path="/"
                        component={MainPage}
                        exact />

                    <PrivateRoute
                        isLoggedIn={isLoggedIn}
                        path="/films/page/:id"
                        component={FilmsPage}
                    />

                    <PrivateRoute
                        isLoggedIn={isLoggedIn}
                        path="/films/film/:id"
                        component={FilmPage}
                    />
                </Switch>
            </Container>
        );
    }
}

export default App;
