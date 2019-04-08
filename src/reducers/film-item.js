const updateFilmItem = (state, action) => {

    if (state === undefined) {
        return {
            film: {},
            loading: true,
            trailerId: "",
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_FILM_BY_ID_REQUESTED':
            return {
                ...state,
                film: {},
                loading: true,
                error: null
            };

        case 'FETCH_FILM_BY_ID_SUCCESS':
            return {
                ...state,
                film: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_FILM_BY_ID_FAILURE':
            return {
                ...state,
                film: {},
                loading: false,
                error: action.payload
            };
        case 'SEARCH_TRAILER_REQUESTED':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'SEARCH_TRAILER_LOADED':
            return {
                ...state,
                loading: false,
                trailerId: action.payload,
                error: null
            };

        case 'SEARCH_TRAILER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case 'PLAY_TORRENT_REQUESTED':
            return {
                ...state,
                loading: true,
                error: null
            };

        case 'PLAY_TORRENT_LOADED':
            return {
                ...state,
                loading: false,
                error: null
            };

        case 'PLAY_TORRENT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state.film;
    }
};

export default updateFilmItem;