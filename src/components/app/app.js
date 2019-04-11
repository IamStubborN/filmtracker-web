import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Header from '../header';
import { FilmsPage, FilmPage, MainPage } from '../pages';
import classes from './app.module.scss';

import { Container } from "reactstrap";
import Cookies from "js-cookie";
import ErrorIndicator from "../error-indicator";
import PrivateRoute from "../private-route";
import Row from "reactstrap/es/Row";
import PageNotFound from "../page-not-found";

class App extends Component {

    state = {
        isLoggedIn: false
    };

    componentWillMount() {
        const Token = Cookies.get("Token");
        const Refresh = Cookies.get("Refresh");
        if (Token && Refresh) {
            this.setState({isLoggedIn:true})
        }
    }
    onQuit = (e) => {
        e.preventDefault();
        Cookies.remove("Token");
        Cookies.remove("Refresh");
        this.setState({isLoggedIn:false});
        this.props.history.push("/")
    };

    onLogIn = () => {
        this.setState({isLoggedIn: true})
    };

    render() {
        const { isLoggedIn } = this.state;
        return (
            <Container role="main">
                <Header isLoggedIn={this.state.isLoggedIn} onQuit={this.onQuit}/>
                <Switch>
                    <Route
                        path="/"
                        component={() => <MainPage isLoggedIn={isLoggedIn} onLogIn={this.onLogIn}/>}
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
                    <Route component={PageNotFound} />
                </Switch>
            </Container>
        );
    }
}

export default withRouter(App);
