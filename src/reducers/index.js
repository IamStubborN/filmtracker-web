import updateFilmList from './film-list';
import updateShoppingCart from './shopping-cart';
import updateFilmItem from "./film-item";
import updateTorrent from "./torrent";

const reducer = (state, action) => {
  return {
    filmList: updateFilmList(state, action),
    film: updateFilmItem(state, action),
    // torrent: updateTorrent(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;
