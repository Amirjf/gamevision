import { createAction } from 'redux-actions';

export const AddItemToCartRdxConst = 'Cart/AddItem';

export const AddItemToCartAction = createAction(
  AddItemToCartRdxConst,
  (payload) => payload
);

//create reducer
export const AddItemReducer = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      kind: cartItemToAdd.genres ? 'game' : 'product',
      quantity: 1,
    },
  ];
};
