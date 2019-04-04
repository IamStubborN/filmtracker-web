import React, { Component } from 'react';
import FilmListItem from '../film-list-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withApiService } from '../hoc';
import { fetchFilms, signIn, bookAddedToCart } from '../../actions';
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
            console.log(film);
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
    this.props.signIn("login", "Password");
    this.props.fetchFilms(2);
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

const mapStateToProps = ({ filmList: { films, loading, error }}) => {
  return { films: films, loading, error };
};

const mapDispatchToProps = (dispatch, { apiService }) => {

  return bindActionCreators({
    fetchFilms: fetchFilms(apiService),
    signIn: signIn(apiService),
    onAddedToCart: bookAddedToCart
  }, dispatch);
};

export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);
