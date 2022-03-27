import { combineReducers } from "redux";
import {
  productsReducer,
  activeCategoryReducer,
  filteredProducts,
} from "./products";
import { showMoreReducer, toggleNavbarReducer } from "./ui";

export const rootReducer = combineReducers({
  products: productsReducer,
  filteredProducts: filteredProducts,
  activeCategory: activeCategoryReducer,
  showMore: showMoreReducer,
  toggleNavbar: toggleNavbarReducer,
});
