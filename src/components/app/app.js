import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from '../header';
import { FilmsPage, FilmPage, MainPage } from '../pages';
import { Container } from "reactstrap";
import Cookies from "js-cookie";
import PrivateRoute from "../private-route";
import PageNotFound from "../page-not-found";

class App extends Component {

    state = {
        login:"",
        isLoggedIn: false
    };

    componentWillMount() {
        const Token = Cookies.get("Token");
        const Refresh = Cookies.get("Refresh");
        if (Token && Refresh) {
            this.setState({isLoggedIn:true})
        }
        console.log(this.state.login)
    }
    onQuit = (e) => {
        e.preventDefault();
        Cookies.remove("Token");
        Cookies.remove("Refresh");
        this.setState({isLoggedIn:false});
        this.props.history.push("/")
    };

    onLogIn = (login) => {
        this.setState({isLoggedIn: true, login})
    };

    render() {
        const { isLoggedIn } = this.state;
        return (
            <Container role="main">
                <Header isLoggedIn={this.state.isLoggedIn} login={this.state.login} onQuit={this.onQuit}/>
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
