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

const FilmDetails = ({film, playTorrent }) => {
    const {name, original_name, overview, genres, release_date, poster_large_path, magnet_links } = film;
    const arr = Object.entries(magnet_links);
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
                <DropdownButton title="Смотреть онлайн">
                    {
                        arr.map(item => {
                        return <Dropdown.Item onClick={() => playTorrent(item[1])} as="button">{item[0]}</Dropdown.Item>
                    })
                    }
                </DropdownButton>
                <iframe src="https://embed.torrents-time.com/#source=magnet:?xt=urn:btih:8af6650014ec32d9bb5ffe4a0aca2d99f8dbcd94&dn=rutor.info&tr=udp://opentor.org:2710&tr=udp://opentor.org:2710&tr=http://retracker.local/announce&publisher_id=1"></iframe></Col>
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