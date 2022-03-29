import { createAction } from "redux-actions";

export const RemoveItemFromCartRdxConst = "Cart/RemoveItem";

export const RemoveItemFromCartAction = createAction(
  RemoveItemFromCartRdxConst,
  (payload) => payload
);

export const RemoveItemFromCartReducer = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id == cartItemToRemove.id
  );

  if (existingCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id == cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
