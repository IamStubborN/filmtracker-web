import React from 'react';
import classes from './film-list-item.module.scss';
import {Link} from "react-router-dom";

const FilmListItem = ({ film}) => {
  const { id, name, overview, genres, release_date, poster_large_path } = film;
  return (
      <div className={`${classes.filmListItemContainer} col-sm-3 mb-4`}>
          <div className="card bg-light border-dark">
              <img className="card-img-top img-fluid" src={poster_large_path} alt="poster_large_path"/>
              <div className="card-block">
                  <h5 className={`${classes.title} card-title pl-3`}>{name}</h5>
                  <p className={`${classes.genres} card-text mt-4 pl-3`}>
                      {
                          genres.map((genre) => {
                              return <span className={`text-muted text-capitalize`}>{genre.russian_name} </span>
                          })
                      }
                  </p>
                  <p className={`${classes.overview} card-text pl-3`}>{overview}</p>
                  <p className={`card-text pl-3`}>
                      <small className="text-muted">Дата выхода: {release_date}</small>
                  </p>
                  <Link to={`/films/film/${id}`}>
                      <div className="btn btn-primary ml-3 mb-3">
                          Подробнее
                      </div>
                  </Link>
              </div>
          </div>
      </div>
  );
};

export default FilmListItem;
