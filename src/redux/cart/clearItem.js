import { createAction } from "redux-actions";

export const ClearItemFromCartRdxConst = "Cart/ClearItem";

export const ClearItemFromCartAction = createAction(
  ClearItemFromCartRdxConst,
  (payload) => payload
);

export const ClearItemFromCartReducer = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
