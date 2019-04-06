import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { fetchFilmDetails, playTorrent } from "../../actions";
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

const FilmDetails = ({film, playTorrent }) => {
    const {name, original_name, overview, genres, release_date, poster_large_path, magnet_links } = film;
    const arr = Object.entries(magnet_links);
    let searchName = name + " (" + release_date.split("-")[0] + ")";
    console.log(searchName);
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
                <Link to={`/watch/trailer/${searchName}`}>
                    <div className={"mt-3"}><Button>Смотреть Трейлер</Button></div>
                </Link>
                <Link to={`/watch/movie/${searchName}`}>
                    <div className={"mt-3"}><Button>Смотреть Фильм</Button></div>
                </Link>
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
        const { film, loading, error, playTorrent } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <FilmDetails film={film} playTorrent={playTorrent}/>;
    }
}

const mapStateToProps = ({ film: { film, loading, error }}) => {
    return { film: film, loading, error };
};

const mapDispatchToProps = (dispatch, { apiService }) => {

    return bindActionCreators({
        fetchFilmDetails: fetchFilmDetails(apiService),
        playTorrent: playTorrent(apiService),
    }, dispatch);
};



export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FilmDetailsContainer);