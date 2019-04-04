import React, { Component } from 'react';
import FilmListItem from '../film-list-item';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { withApiService } from '../hoc';
import { fetchFilms, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './film-list.css';

const FilmList = ({ films }) => {
  return (
    <div className="films-container container">
      <div className="row">
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
    this.props.fetchFilms(1);
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
    onAddedToCart: bookAddedToCart
  }, dispatch);
};

export default compose(
  withApiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(FilmListContainer);
