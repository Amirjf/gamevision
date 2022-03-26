import { createAction } from "redux-actions";

export const FilteredProductsRdxConst = "Products/FilteredProducts";

export const FilteredProductsAction = createAction(
  FilteredProductsRdxConst,
  (payload) => payload
);

//create reducer
export const FilteredProductsReducer = (state, action) => {
  return action.payload;
};
