const filmsRequested = () => {
  return {
    type: 'FETCH_FILMS_BY_PAGE_REQUESTED'
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

const signIn = (apiService) => (login, password) => (dispatch) => {
  dispatch(signInRequested());
  apiService.signIn(login, password)
      .then((data) => dispatch(signInLoaded(data)))
      .catch((err) => dispatch(signInError(err)));
};

export {
  fetchFilms,
  signIn
};
