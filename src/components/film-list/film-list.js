import React, { Component } from 'react';
import FilmListItem from '../film-list-item';
import { withApiService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {Row} from "reactstrap";
import {withRouter} from "react-router-dom";
import Search from "../search/search";

const FilmList = ({ films, loading, error }) => {
    const spinner = loading ? <Spinner /> : null;
    const err = error ? <ErrorIndicator /> : null;

    return (
            <Row>
                {spinner}
                {err}
                {spinner ? null
                    : films.map((film) => {
                        return (
                            <FilmListItem key={film.id} film={film}/>
                        );
                    })
                }
            </Row>
    );
};

class FilmListContainer extends Component {
    state = {
        films: [],
        loading: true,
        error: false,
        searchName: "",
    };
    componentDidMount() {
        let { id } = this.props.match.params;
        if (id === undefined) {
            id = 1
        }
        this.fetchFilms(id)
    }

    componentWillUpdate(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            let { id } = nextProps.match.params;
            if (id === undefined) {
                id = 1
            }
            this.fetchFilms(id);
        }
    }

    fetchFilms = (page) => {
        const { apiService } = this.props;
        apiService.getFilmsByPage(page)
            .then(films => this.setState({
                films,
                loading:false
            })).catch(() => this.setState({loading:false, error:true}))
    };

    onChangeHandler = (e) => {
        this.setState({searchName:e.target.value})
    };

    onSearch = () => {
        this.props.apiService.searchByName(this.state.searchName)
            .then(data => this.setState({films:data}))
    };

    render() {
        const { films, loading, error } = this.state;
        return (
            <>
            <Search searchName={this.state.searchName} onChangeHandler={this.onChangeHandler} onSearch={this.onSearch}/>
                {films !== null && films.length > 0 ? <FilmList films={films} loading={loading} error={error}/> : null}
            </>);
    }
}

export default withRouter(withApiService(FilmListContainer));
