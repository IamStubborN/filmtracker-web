const updateFilmList = (state, action) => {

  if (state === undefined) {
    return {
      films: [],
      page : "1",
      loading: true,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_FILMS_BY_PAGE_REQUESTED':
      return {
        ...state,
        films: [],
        loading: true,
        error: null
      };

    case 'FETCH_FILMS_BY_PAGE_SUCCESS':
      return {
        ...state,
        films: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_FILMS_BY_PAGE_FAILURE':
      return {
        ...state,
        films: [],
        loading: false,
        error: action.payload
      };

    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload
      };

    default:
      return state.filmList;
  }
};

export default updateFilmList;
