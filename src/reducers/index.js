import updateFilmList from './film-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    filmList: updateFilmList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
