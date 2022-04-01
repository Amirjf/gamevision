import { AddItemReducer, AddItemToCartRdxConst } from "./addItem";
import {
  RemoveItemFromCartReducer,
  RemoveItemFromCartRdxConst,
} from "./removeItem";

import {
  ClearItemFromCartRdxConst,
  ClearItemFromCartReducer,
} from "./clearItem";

const INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AddItemToCartRdxConst:
      return {
        ...state,
        cartItems: AddItemReducer(state.cartItems, action.payload),
      };
    case RemoveItemFromCartRdxConst:
      return {
        ...state,
        cartItems: RemoveItemFromCartReducer(state.cartItems, action.payload),
      };
    case ClearItemFromCartRdxConst:
      return {
        ...state,
        cartItems: ClearItemFromCartReducer(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
