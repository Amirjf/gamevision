import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { searchReducer } from './search';
import {
  activeFilterReducer,
  filteredGamesReducer,
  gamesReducer,
} from './games';
import { productsReducer, filteredProducts } from './products';
import { showMoreReducer, toggleNavbarReducer } from './ui';

export const rootReducer = combineReducers({
  products: productsReducer,
  searchResults: searchReducer,
  cart: cartReducer,
  filteredProducts: filteredProducts,
  filteredGames: filteredGamesReducer,
  activeGamesFilter: activeFilterReducer,
  showMore: showMoreReducer,
  toggleNavbar: toggleNavbarReducer,
  games: gamesReducer,
});
