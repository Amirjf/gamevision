import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { gamesSearchReducer, productsSearchReducer } from './search';
import {
  activeFilterReducer,
  filteredGamesReducer,
  gamesReducer,
  getShopFilterReducer,
} from './games';
import { productsReducer, filteredProducts } from './products';
import { showMoreReducer, toggleNavbarReducer } from './ui';

export const rootReducer = combineReducers({
  products: productsReducer,
  productsSearchResults: productsSearchReducer,
  shopFilter: getShopFilterReducer,
  gamesSearchResults: gamesSearchReducer,
  cart: cartReducer,
  filteredProducts: filteredProducts,
  filteredGames: filteredGamesReducer,
  activeGamesFilter: activeFilterReducer,
  showMore: showMoreReducer,
  toggleNavbar: toggleNavbarReducer,
  games: gamesReducer,
});
