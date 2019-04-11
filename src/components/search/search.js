import React, {Component} from 'react';
import './search.module.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Input from "reactstrap/es/Input";
import Col from "reactstrap/es/Col";
import classes from './search.module.scss'
import Button from "reactstrap/es/Button";
import {withApiService} from "../hoc";

library.add(faSearch);

class Search extends Component {

    state = {
        value: ""
    };

    onChangeHandler = (e) => {
        this.setState({value:e.target.value})
    };

    onSearch = (e) => {
        const { value } = this.state;
        if (e.target.name === "search") {
            if (e.keyCode === 13) {
                this.props.apiService.searchByName(value)
                    .then(data => console.log(data))
            }
        }else {
            this.props.apiService.searchByName(value)
                .then(data => console.log(data))
        }
    };

    render() {
        return (
            <Col sm={5} className={`${classes.search} d-flex`}>
                <Input
                    name={"search"}
                    className={classes.input}
                    autoFocus
                    value={this.state.value}
                    onChange={this.onChangeHandler}
                placeholder={"Что искать?"}
                    onKeyUp={this.onSearch}
                >
                </Input>
                <Button onClick={this.onSearch} className={"ml-3"} color={"primary"} outline>
                    <FontAwesomeIcon className={classes.icon} icon="search" />
                </Button>
            </Col>
        );
    }
}

export default withApiService(Search);