import { SetProductsRdxConst, SetProductsReducer } from "./setProducts";

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case SetProductsRdxConst:
      return SetProductsReducer(state, action);
    default:
      return state;
  }
};
