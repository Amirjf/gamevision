import React from "react";
import { useDispatch } from "react-redux";
import { AddItemToCartAction } from "../../redux/cart/addItem";
import { AnimatePresence, motion } from "framer-motion";
import { RemoveItemFromCartAction } from "../../redux/cart/removeItem";
const CheckoutItem = ({ cartItem }) => {
  const { category, image, title, price, quantity } = cartItem;
  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
      <div className="hover:border-2 hover:border-purple border-2 border-grey transition ease duration-300  checkout-item my-5 h-32 flex items-center rounded-lg bg-grey">
        <div className="item__image relative h-40 w-1/5 pl-6">
          <img src={image} className="w-36 absolute top-0" />
        </div>
        <div className="item__name w-1/5">
          <h4 className="text-white">{title}</h4>
          <span className="text-shaded">{category}</span>
        </div>
        <div className="item__color border-x-2 border-[#373739] w-1/5">
          <h4 className="text-white text-center">default</h4>
        </div>
        <div className="item__quantity flex justify-center items-center w-1/5">
          <div
            onClick={() => dispatch(RemoveItemFromCartAction(cartItem))}
            className="arrow"
          >
            <i className="bx bx-minus-circle cursor-pointer text-white text-3xl"></i>
          </div>
          <span className="value text-white text-xl px-3">{quantity}</span>
          <div
            className="arrow"
            onClick={() => dispatch(AddItemToCartAction(cartItem))}
          >
            <i className="bx bx-plus-circle cursor-pointer text-white text-3xl"></i>
          </div>
        </div>
        <div className="item__price text-center w-1/5">
          <span className="text-shaded">Price : </span>
          <span className="text-white text-xl">{quantity * price} $</span>
        </div>
      </div>
      <div className="flex items-center">
        <i className="bx bx-x text-3xl bg-grey absolute top-12 -left-10 rounded-full text-[#ba3547]"></i>
      </div>
    </motion.div>
  );
};

export default CheckoutItem;
