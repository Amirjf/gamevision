import { combineReducers } from "redux";
import {
  productsReducer,
  activeCategoryReducer,
  filteredProducts,
} from "./products";

export const rootReducer = combineReducers({
  products: productsReducer,
  filteredProducts: filteredProducts,
  activeCategory: activeCategoryReducer,
});
