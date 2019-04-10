import React, {Component} from 'react';
import {withApiService} from "../hoc";
import FilmList from '../film-list'
import Paginator from "../paginator";

class MainPage extends Component {
    render() {
        return (
            <>
                <FilmList />
                <Paginator />
            </>
        );
    }
}

export default
    withApiService(MainPage);