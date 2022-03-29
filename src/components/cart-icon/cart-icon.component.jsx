import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <Link to="/checkout">
      <i className="bx bx-cart relative">
        <span className="header__badge rounded-3xl bg-lightPurple text-white">
          {cartItems ? cartItems.length : null}
        </span>
      </i>
    </Link>
  );
};

export default CartIcon;
