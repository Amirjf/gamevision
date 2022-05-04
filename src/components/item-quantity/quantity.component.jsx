import React from 'react';
import { useDispatch } from 'react-redux';
import { AddItemToCartAction } from '../../redux/cart/addItem';
import { RemoveItemFromCartAction } from '../../redux/cart/removeItem';

const Quantity = ({ cartItem }) => {
  const { quantity } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <div
        onClick={() => dispatch(RemoveItemFromCartAction(cartItem))}
        className="arrow"
      >
        <i className="bx bxs-minus-circle cursor-pointer text-white text-2xl"></i>
      </div>
      <span className="value text-white text-xl mb-2 px-2 overflow-hidden">
        {quantity}
      </span>
      <div
        className="group arrow"
        onClick={() => dispatch(AddItemToCartAction(cartItem))}
      >
        <i className="bx bxs-plus-circle hover:text-purple cursor-pointer text-white text-2xl"></i>
      </div>
    </div>
  );
};

export default Quantity;
