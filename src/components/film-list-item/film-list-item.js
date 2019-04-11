import React from 'react';
import classes from './film-list-item.module.scss';
import {Link} from "react-router-dom";
import Card from "reactstrap/es/Card";
import CardBody from "reactstrap/es/CardBody";
import CardImg from "reactstrap/es/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import CardText from "reactstrap/es/CardText";
import CardLink from "reactstrap/es/CardLink";
import Button from "reactstrap/es/Button";
import CardGroup from "reactstrap/es/CardGroup";
import CardFooter from "reactstrap/es/CardFooter";
import CardDeck from "reactstrap/es/CardDeck";
import Spinner from "../film-list/film-list";
import ErrorIndicator from "../error-indicator";

const FilmListItem = ({ film }) => {
    const { id, name, overview, genres, release_date, poster_path } = film;
      return (
          <CardGroup className={`${classes.filmListItemContainer} col-sm-4 mb-4`} >
              <Card className="bg-light border-dark">
                  <CardImg className={"img-fluid"} top src={poster_path} alt="poster_path" />
                  <CardBody>
                      <CardTitle className={`${classes.title} pl-2`}>{name}</CardTitle>
                      <CardText className={`${classes.genres} mt-3 pl-2`}>
                          {
                              genres.map((genre) => {
                                  return <span key={genre.id} className={`text-muted text-capitalize`}>{genre.russian_name} </span>
                              })
                          }
                      </CardText>
                      <CardText className={`${classes.overview} mt-3 pl-2`}>{overview}</CardText>
                      <CardText className={`pl-2`}>
                          <small className="text-muted">Дата выхода: {release_date}</small>
                      </CardText>

                  </CardBody>
                  <Link to={`/films/film/${id}`}>
                      <Button  color="primary" block>Подробнее</Button>
                  </Link>
              </Card>
          </CardGroup>
  );
};

export default FilmListItem;
