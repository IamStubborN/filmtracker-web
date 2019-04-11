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

    render() {
        return (
            <Col className={`${classes.search} mb-3`}>
                <Input
                    name={"search"}
                    className={classes.input}
                    autoFocus
                    value={this.props.searchName}
                    onChange={this.props.onChangeHandler}
                placeholder={"Что искать?"}
                    onKeyUp={this.props.onSearch}
                >
                </Input>
                <Button onClick={this.props.onSearch} className={"ml-3"} color={"primary"} outline>
                    <FontAwesomeIcon className={classes.icon} icon="search" />
                </Button>
            </Col>
        );
    }
}

export default withApiService(Search);