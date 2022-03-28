import { combineReducers } from "redux";
import {
  activeFilterReducer,
  filteredGamesReducer,
  gamesReducer,
} from "./games";
import {
  productsReducer,
  activeCategoryReducer,
  filteredProducts,
} from "./products";
import { showMoreReducer, toggleNavbarReducer } from "./ui";

export const rootReducer = combineReducers({
  products: productsReducer,
  filteredProducts: filteredProducts,
  filteredGames: filteredGamesReducer,
  activeGamesFilter: activeFilterReducer,
  activeCategory: activeCategoryReducer,
  showMore: showMoreReducer,
  toggleNavbar: toggleNavbarReducer,
  games: gamesReducer,
});
