import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { fetchFilmDetails, playTorrent, searchTrailer } from "../../actions";
import {compose} from "../../utils";
import {withApiService} from "../hoc";
import {connect} from "react-redux";
import Spinner from "../film-list/film-list";
import ErrorIndicator from "../error-indicator";
import Jumbotron from "react-bootstrap/Jumbotron";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import TryPage from "../pages/try-page";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import ReactDOM from "react-dom";

const FilmDetails = ({film, playTorrent, searchTrailer, trailerId }) => {
    const {name, original_name, overview, genres, release_date, poster_large_path, magnet_links } = film;
    const arr = Object.entries(magnet_links);
    const searchName = name + " (" + release_date.split("-")[0] + ") трейлер";
    console.log(trailerId);
    return (
        <Row>
            <Col>
                <img className="card-img-top img-fluid" src={poster_large_path} alt="poster_large_path"/>
            </Col>
            <Col>
                <h1>{name} / {original_name}</h1>
                <p className={`text-muted text-capitalize`}>
                    {
                        genres.map((genre) => {
                            return genre.russian_name + " "
                        })
                    }
                </p>
                <p>{overview}</p>
                <p className={`text-muted`}>Дата выхода: {release_date}</p>
                <DropdownButton title="Скопировать magnet ссылку">
                    {
                        arr.map(item => {
                        return <Dropdown.Item onClick={() => {navigator.clipboard.writeText(item[1])}} as="button">{item[0]}</Dropdown.Item>
                    })
                    }
                </DropdownButton>
                <Button onClick={() => searchTrailer(searchName)} className={"mt-3 d-block"}>Смотреть Трейлер</Button>
                <Button onClick={() => playTorrent()}className={"mt-3 d-block"}>Смотреть Фильм</Button>
                <div id={'player'}/>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerId}`}  frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </Col>
        </Row>
    );
};

class FilmDetailsContainer extends Component {
    componentDidMount() {
        const { id, fetchFilmDetails } = this.props;
        fetchFilmDetails(id);
    }

    render() {
        const { film, loading, error, playTorrent, searchTrailer, trailerId } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <FilmDetails trailerId={trailerId} film={film} playTorrent={playTorrent} searchTrailer={searchTrailer}/>;
    }
}

const mapStateToProps = ({ film: { film, loading, error }, trailerId}) => {
    return { film: film, loading, error, trailerId };
};

const mapDispatchToProps = (dispatch, { apiService }) => {

    return bindActionCreators({
        fetchFilmDetails: fetchFilmDetails(apiService),
        playTorrent: playTorrent(apiService),
        searchTrailer: searchTrailer(apiService),
    }, dispatch);
};

export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmDetailsContainer);