const updateFilmItem = (state, action) => {

    if (state === undefined) {
        return {
            film: {},
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case 'FETCH_FILM_BY_ID_REQUESTED':
            return {
                film: {},
                loading: true,
                error: null
            };

        case 'FETCH_FILM_BY_ID_SUCCESS':
            return {
                film: action.payload,
                loading: false,
                error: null
            };

        case 'FETCH_FILM_BY_ID_FAILURE':
            return {
                film: {},
                loading: false,
                error: action.payload
            };

        default:
            return state.film;
    }
};

export default updateFilmItem;