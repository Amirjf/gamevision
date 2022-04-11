import React from "react";
import { useDispatch } from "react-redux";
import { AddItemToCartAction } from "../../redux/cart/addItem";
import { RemoveItemFromCartAction } from "../../redux/cart/removeItem";

const Quantity = ({ cartItem, product }) => {
  const { quantity } = cartItem;
  console.log(cartItem);
  const dispatch = useDispatch();

  return (
    <div className="item__quantity flex justify-center items-center w-1/4">
      <div
        onClick={() => dispatch(RemoveItemFromCartAction(cartItem))}
        className="arrow"
      >
        <i className="bx bx-minus-circle cursor-pointer text-white text-3xl"></i>
      </div>
      <span className="value text-white text-xl px-1">{quantity}</span>
      <div
        className="group arrow"
        onClick={() => dispatch(AddItemToCartAction(cartItem))}
      >
        <i className="bx bx-plus-circle hover:text-purple cursor-pointer text-white text-3xl"></i>
      </div>
    </div>
  );
};

export default Quantity;
