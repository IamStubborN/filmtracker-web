import React, { Component } from 'react';
import {withApiService} from "../hoc";
import ErrorIndicator from "../error-indicator";
import {
    Button,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Modal,
    ModalBody,
    Row
} from "reactstrap";
import Spinner from "../spinner";
import classes from './film-details.module.scss'

const FilmDetails = ({film,
                         isDropdownMagnetOpen,
                         isYoutubePlayerOpen,
                         dropdownMagnetToggle,
                         youtubePlayerToggle}) => {
    const arr = Object.entries(film.magnet_links);
    return (
            <>
            <Col>
                <img className="card-img-top img-fluid" src={film.poster_path} alt="poster_large_path"/>
            </Col>
            <Col>
                <h1>{film.name} / {film.original_name}</h1>
                <p className={`text-muted text-capitalize`}>
                    {
                        film.genres.map((genre) => {
                            return genre.russian_name + " "
                        })
                    }
                </p>
                <p>{film.overview}</p>
                <p className={`text-muted`}>Дата выхода: {film.release_date}</p>
                <Dropdown direction="up" isOpen={isDropdownMagnetOpen} toggle={() => {dropdownMagnetToggle()}}>
                    <DropdownToggle caret>
                        Открыть magnet-ссылку
                    </DropdownToggle>
                    <DropdownMenu>
                        {
                            arr.map((item, idx) => {
                                return <DropdownItem key={idx} href={item[1]}>{item[0].split(")")[1]}</DropdownItem>
                            })
                        }
                    </DropdownMenu>
                </Dropdown>
                <Button onClick={() => youtubePlayerToggle()} className={"mt-3 d-block"}>Смотреть Трейлер</Button>
                <Modal size={"lg"} isOpen={isYoutubePlayerOpen} toggle={youtubePlayerToggle}>
                    <ModalBody>
                        <iframe className={"mt-3"} width={"100%"} height={"500"} src={`https://www.youtube.com/embed/${film.youtube_id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>
                    </ModalBody>
                </Modal>
            </Col>
        </>
    )
};

class FilmDetailsContainer extends Component {

    state = {
        film: {},
        loading:true,
        error:false,
        isDropdownMagnetOpen: false,
        isYoutubePlayerOpen: false,
    };

    componentDidMount() {
        const { id } = this.props;
        this.fetchFilmDetails(id);
    }

    dropdownMagnetToggle = () => {
        this.setState(
            {...this.state,
            isDropdownMagnetOpen: !this.state.isDropdownMagnetOpen
            })
    };

    youtubePlayerToggle = () => {
        this.setState(
            {...this.state,
                isYoutubePlayerOpen: !this.state.isYoutubePlayerOpen
            })
    };

    fetchFilmDetails = (id) => {
        const { apiService } = this.props;
        apiService.getFilmByID(id)
            .then(film => {
                this.setState({
                    film,
                    loading:false,
                })
            }).catch(() => this.setState({error:true}))
    };

    playTorrent = (magnet, isNeedToStop) => {
        const { apiService } = this.props;
        apiService.playTorrent(magnet, isNeedToStop)
    };

    render() {
        const {loading, error} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const err = error ? <ErrorIndicator /> : null;
        return(
        <Row>
            {spinner}
            {err}
            {spinner ? null
                :
            <FilmDetails
            film={this.state.film}
            isDropdownMagnetOpen={this.state.isDropdownMagnetOpen}
            isYoutubePlayerOpen={this.state.isYoutubePlayerOpen}
            dropdownMagnetToggle={this.dropdownMagnetToggle}
            youtubePlayerToggle={this.youtubePlayerToggle}
        />};
        </Row>)
    }
}

export default withApiService(FilmDetailsContainer)