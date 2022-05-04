import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { ClearItemFromCartAction } from '../../redux/cart/clearItem';
import Quantity from '../item-quantity/quantity.component';
const CheckoutItem = ({ cartItem }) => {
  const { category, image, title, price, quantity, background_image, kind } =
    cartItem;

  const dispatch = useDispatch();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      layout
    >
      <div className="group hover:border-2 relative border-2 border-grey transition ease duration-300  checkout-item sm:ml-12 my-5 h-32 flex items-center rounded-lg bg-grey">
        <div className="item__image relative h-40 w-1/4">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            src={background_image ? background_image : image}
            className="w-32 absolute top-0"
          />
        </div>
        <div className="item__name w-1/4">
          <h4 className="text-white text-lg">{title}</h4>
          <span className="text-shaded">{category}</span>
        </div>
        <div className="flex justify-center items-center w-1/4">
          {kind === 'product' ? <Quantity cartItem={cartItem} /> : null}
        </div>
        <div className="item__price text-center w-1/4">
          <span className="text-shaded">Price : </span>
          <span className="text-white text-xl">
            {kind === 'game' ? '59' : quantity * price} $
          </span>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={() => dispatch(ClearItemFromCartAction(cartItem))}
        >
          <i className="bx bx-x text-3xl bg-grey absolute top-1/3 -left-10 rounded-full text-[#ba3547]"></i>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutItem;
