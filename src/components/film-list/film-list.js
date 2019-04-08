import React, { Component } from 'react';
import FilmListItem from '../film-list-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withApiService } from '../hoc';
import {fetchFilms, signIn, bookAddedToCart, signUp, playTorrent} from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import classes from './film-list.module.scss';

const FilmList = ({ films }) => {
    return (
        <div className={`container`}>
            <div className={`row`}>
                {
                    films.map((film) => {
                        return (
                            <FilmListItem key={film.id} film={film}/>
                        );
                    })
                }
            </div>
        </div>
    );
};

class FilmListContainer extends Component {
    componentDidMount() {
        const { page, fetchFilms } = this.props;
        fetchFilms(page);
    }

    render() {
        const { films, loading, error, onAddedToCart } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <FilmList films={films} onAddedToCart={onAddedToCart}/>;
    }
}

const mapStateToProps = ({ filmList: { films, page, loading, error }}) => {
    return { films: films, page, loading, error };
};

const mapDispatchToProps = (dispatch, { apiService }) => {

    return bindActionCreators({
        fetchFilms: fetchFilms(apiService),
        signIn: signIn(apiService),
        signUp: signUp(apiService),
    }, dispatch);
};

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);
