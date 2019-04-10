import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import { withApiService } from '../hoc';
import {withRouter} from "react-router-dom";
import Cookies from 'js-cookie';


class Auth extends Component {

    state = {
        login: "",
        password: "",
        checkbox: false
    };

    componentDidMount() {
        const Token = Cookies.get("Token");
        const Refresh = Cookies.get("Refresh");
        if (Token && Refresh) {
            this.props.history.push('/films/page/1')
        }
    }

    handleChange = event => {
            if (event.target.id === "checkbox") {
                this.setState({
                    checkbox: !this.state.checkbox
                });
        } else {
                this.setState({
                    [event.target.id]: event.target.value
                });
            }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state.checkbox);
            if (this.state.checkbox) {
                this.props.apiService.signUp(
                    this.state.login,
                    this.state.password
                ).then(data => {
                    if (data.success) {
                        this.props.history.push('/films/page/1')
                    } else if (data.error) {
                        alert(data.error)
                    }
                }).catch(alert)
            } else {
                this.props.apiService.signIn(
                    this.state.login,
                    this.state.password
                ).then(data => {
                    if (data.success) {
                        this.props.history.push('/films/page/1')
                    } else if (data.error) {
                        alert(data.error)
                    }
                }).catch(alert)
            }
        }
    };

    validate = () => {
        let rg = new RegExp("[a-zA-Z]+(?:[_-]?[a-zA-Z0-9]){8,}");
        let {login, password} = this.state;
        return (rg.test(login) && rg.test(password));
    };

    render() {
        return (
            <Container className="pl-5 pr-5">
                <h2>Sign In</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Login</Label>
                            <Input
                                type="text"
                                name="text"
                                id="login"
                                placeholder="Your Login"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Your password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col className={"ml-4"}>
                        <Input type="checkbox"
                               value={this.state.checkbox}
                               id={"checkbox"}
                               onChange={this.handleChange}/>
                        Новый пользователь
                    </Col>
                    <Button onClick={this.onSubmit} className={"mt-2 ml-3"}>Войти</Button>
                </Form>
            </Container>
        );
    }
}

export default withRouter(withApiService(Auth))