const searchTrailerRequested = () => {
    return {
        type: 'SEARCH_TRAILER_REQUESTED'
    };
};

const searchTrailerLoaded = (trailer) => {
    return {
        type: 'SEARCH_TRAILER_SUCCESS',
        payload: trailer
    };
};

const searchTrailerError = (error) => {
    return {
        type: 'SEARCH_TRAILER_FAILURE',
        payload: error
    };
};

const filmsRequested = () => {
    return {
        type: 'FETCH_FILMS_BY_PAGE_REQUESTED'
    };
};

const filmsLoaded = (films) => {
    return {
        type: 'FETCH_FILMS_BY_PAGE_SUCCESS',
        payload: films
    };
};

const filmsError = (error) => {
    return {
        type: 'FETCH_FILMS_BY_PAGE_FAILURE',
        payload: error
    };
};

const filmByIDRequested = () => {
    return {
        type: 'FETCH_FILM_BY_ID_REQUESTED'
    };
};

const filmByIDLoaded = (film) => {
    return {
        type: 'FETCH_FILM_BY_ID_SUCCESS',
        payload: film
    };
};

const filmByIDError = (error) => {
    return {
        type: 'FETCH_FILM_BY_ID_FAILURE',
        payload: error
    };
};

export const playTorrentRequested = () => {
    return {
        type: 'PLAY_TORRENT_REQUESTED',
    };
};

export const playTorrentLoaded = (isStart) => {
    return {
        type: 'PLAY_TORRENT_LOADED',
        payload: isStart
    };
};

export const playTorrentError = (error) => {
    return {
        type: 'PLAY_TORRENT_FAILURE',
        payload: error
    };
};

const signInRequested = () => {
    return {
        type: 'SIGN_IN_REQUESTED'
    };
};

const signInLoaded = (isSuccess) => {
    return {
        type: 'SIGN_IN_SUCCESS',
        payload: isSuccess
    };
};

const signInError = (error) => {
    return {
        type: 'SIGN_IN_FAILURE',
        payload: error
    };
};

const signUpRequested = () => {
    return {
        type: 'SIGN_UP_REQUESTED'
    };
};

const signUpLoaded = (isSuccess) => {
    return {
        type: 'SIGN_UP_SUCCESS',
        payload: isSuccess
    };
};

const signUpError = (error) => {
    return {
        type: 'SIGN_UP_FAILURE',
        payload: error
    };
};

const changePageById = (page) => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    };
};

const fetchFilms = (apiService) => (page) => (dispatch) => {
    dispatch(filmsRequested());
    apiService.getFilmsByPage(page)
        .then((data) => dispatch(filmsLoaded(data)))
        .catch((err) => dispatch(filmsError(err)));
};

const signIn = (apiService) => (login, password) => (dispatch) => {
    dispatch(signInRequested());
    apiService.signIn(login, password)
        .then((data) => dispatch(signInLoaded(data)))
        .catch((err) => dispatch(signInError(err)));
};

const signUp = (apiService) => (login, password) => (dispatch) => {
    dispatch(signUpRequested());
    apiService.signUp(login, password)
        .then((data) => dispatch(signUpLoaded(data)))
        .catch((err) => dispatch(signUpError(err)));
};

const fetchFilmDetails = (apiService) => (id) => (dispatch) => {
    dispatch(filmByIDRequested());
    apiService.getFilmByID(id)
        .then((data) => dispatch(filmByIDLoaded(data)))
        .catch((err) => dispatch(filmByIDError(err)));
};

const searchTrailer = (apiService) => (name) => (dispatch) => {
    dispatch(searchTrailerRequested());
    apiService.searchTrailer(name)
        .then((data) => dispatch(searchTrailerLoaded(data)))
        .catch((err) => dispatch(searchTrailerError(err)));
};

const playTorrent = (apiService) => (magnet) => (dispatch) => {
    apiService.playTorrent(magnet)
};

const changePage = (apiService) => (page) => (dispatch) => {
    dispatch(changePageById(page))
};

export {
    fetchFilms,
    fetchFilmDetails,
    signIn,
    signUp,
    playTorrent,
    searchTrailer,
    changePage
};
