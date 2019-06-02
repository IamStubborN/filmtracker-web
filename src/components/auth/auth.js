import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Input,
    Button,
} from 'reactstrap';
import { withApiService } from '../hoc';
import {withRouter} from "react-router-dom";
import Alert from "reactstrap/es/Alert";


class Auth extends Component {
    state = {
        login: "",
        password: "",
        checkbox: false,
        error: ""
    };

    componentDidMount() {
        if (this.props.isLoggedIn) {
            this.props.history.push('/films/page/1')
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.error !== this.state.error) {
            this.setState({error: this.state.error})
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
        const { login, password, checkbox } = this.state;
        const { apiService, history, onLogIn} = this.props;
        const isValid = this.validate();
        if (isValid) {
            if (checkbox) {
                apiService.signUp(
                    login,
                    password
                ).then(data => {
                    if (data.success) {
                        onLogIn(login);
                        history.push('/films/page/1')
                    } else if (data.error) {
                        this.setState({error: data.error})
                    }
                })
            } else {
                apiService.signIn(
                    login,
                    password
                ).then(data => {
                    if (data.success) {
                        onLogIn(this.state.login);
                        history.push('/films/page/1')
                    } else if (data.error) {
                        this.setState({error: data.error})
                    }
                })
            }
        } else {
            this.setState({error:"Login or Password not valid, need at least 8 symbols."})
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
                {this.state.error ? <Alert color="danger">
                    {this.state.error}
                </Alert> : null}
                <h2>Вход</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Input
                                type="text"
                                name="text"
                                id="login"
                                autoFocus
                                placeholder="Ваш логин"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Ваш пароль"
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
                    <Button color={"primary"} onClick={this.onSubmit} className={"mt-2 ml-3"}>Войти</Button>
                </Form>
            </Container>
        );
    }
}

export default withRouter(withApiService(Auth))