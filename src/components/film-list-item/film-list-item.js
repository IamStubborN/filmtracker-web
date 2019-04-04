import React from 'react';
import './film-list-item.css';
import {Link} from "react-router-dom";

const FilmListItem = ({ film, onAddedToCart }) => {
  const { id, name, overview, genres, release_date, poster_path } = film;
  return (
      <div className="col-sm-4 mb-4">
          <div className="card bg-light border-dark">
              <img className="card-img-top  img-fluid" src={poster_path} alt="Card image cap"/>
              <div className="card-block">
                  <h4 className="card-title pl-3 pt-4">{name}</h4>
                  <p className="card-text pl-3">
                      {
                          genres.map((genre) => {
                              return <span className="text-muted text-capitalize">{genre.russian_name} </span>
                          })
                      }
                  </p>
                  <p className="card-text pl-3">{overview}</p>
                  <p className="card-text pl-3">
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
