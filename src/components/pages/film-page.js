import React from 'react';
import FilmDetails from '../film-details'


const FilmPage = (props) => {
    return (
      <FilmDetails id={props.match.params.id}/>
    );
};

export default FilmPage;