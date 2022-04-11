import { SetProductsRdxConst, SetProductsReducer } from "./setProducts";
import {
  FilteredProductsRdxConst,
  FilteredProductsReducer,
} from "./filteredProducts";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SetProductsRdxConst:
      return SetProductsReducer(state, action);
    default:
      return state;
  }
};

export const filteredProducts = (state = [], action) => {
  switch (action.type) {
    case FilteredProductsRdxConst:
      return FilteredProductsReducer(state, action);
    default:
      return state;
  }
};
