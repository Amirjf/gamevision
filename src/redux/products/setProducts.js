import { createAction } from "redux-actions";

export const SetProductsRdxConst = "Products/SetProducts";

export const SetProductsAction = createAction(
  SetProductsRdxConst,
  (payload) => payload
);

// create reducer
export const SetProductsReducer = (state, action) => {
  return action.payload;
};
