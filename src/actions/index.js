
const filmsRequested = () => {
  return {
    type: 'FETCH_FILMS_BY_PAGE_REQUEST'
  };
};

const filmsLoaded = (newBooks) => {
  return {
    type: 'FETCH_FILMS_BY_PAGE_SUCCESS',
    payload: newBooks
  };
};

const filmsError = (error) => {
  return {
    type: 'FETCH_FILMS_BY_PAGE_FAILURE',
    payload: error
  };
};

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

export const bookRemovedFromCart = (bookId) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: bookId
  };
};

export const allBooksRemovedFromCart = (bookId) => {
  return {
    type: 'ALL_BOOKS_REMOVED_FROM_CART',
    payload: bookId
  };
};

const fetchBooksOld = (bookstoreService, dispatch) => () => {
  dispatch(filmsRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(filmsLoaded(data)))
    .catch((err) => dispatch(filmsError(err)));
};

const fetchFilms = (apiService) => (page) => (dispatch) => {
  dispatch(filmsRequested());
  apiService.getFilmsByPage(page)
    .then((data) => dispatch(filmsLoaded(data)))
    .catch((err) => dispatch(filmsError(err)));
};

export {
  fetchFilms
};
