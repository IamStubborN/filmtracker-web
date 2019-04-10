import React, { Component } from 'react';
import FilmListItem from '../film-list-item';
import { withApiService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import classes from './film-list.module.scss';
import {Container, Row} from "reactstrap";
import {withRouter} from "react-router-dom";

const FilmList = ({ films }) => {
    return (
        <Container>
            <Row>
                {
                    films.map((film) => {
                        return (
                            <FilmListItem key={film.id} film={film}/>
                        );
                    })
                }
            </Row>
        </Container>
    );
};

class FilmListContainer extends Component {
    state = {
        films: [],
        loading: true,
        error: false
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

    render() {
        const { films, loading, error } = this.state;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <FilmList films={films} />;
    }
}

export default withRouter(withApiService(FilmListContainer));
