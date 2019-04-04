const updateFilmList = (state, action) => {

  if (state === undefined) {
    return {
      films: [],
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_FILMS_BY_PAGE_REQUESTED':
      return {
        films: [],
        loading: true,
        error: null
      };

    case 'FETCH_FILMS_BY_PAGE_SUCCESS':
      return {
        films: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_FILMS_BY_PAGE_FAILURE':
      return {
        films: [],
        loading: false,
        error: action.payload
      };

    default:
      return state.filmList;
  }
};

export default updateFilmList;
