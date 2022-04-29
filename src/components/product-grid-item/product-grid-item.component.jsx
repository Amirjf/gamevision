import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Quantity from '../item-quantity/quantity.component';
import Toastify from 'toastify-js';
import { AddItemToCartAction } from '../../redux/cart/addItem';
import CustomButton from '../custom-button/custom-button.component';

const ProductGridItem = ({ product, cartItem }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [existed, setExisted] = useState(null);
  const dispatch = useDispatch();
  const { title, price, category, image, id, quantity } = product;

  const handleAddToCart = () => {
    dispatch(AddItemToCartAction(product));

    // if (existingCartItem) {
    //   return cartItems.map((cartItem) =>
    //     cartItem.id == existingCartItem.id ? cartItem.quantity : cartItem
    //   );
  };

  return (
    <motion.div className="flex basis-1/4 mb-5">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.1 }}
        class="product-item text-center bg-[#28282a]"
      >
        <div class="product-img">
          <img src={image} alt={title} />
        </div>
        <a className="text-white text-center block font-semibold">{title}</a>
        <span className="flex justify-center pt-2 text-shaded text-center">
          {category}
        </span>
        <strong className="block py-5 text-lightPurple">{price}$</strong>
        <div className="flex justify-center px-5">
          <CustomButton onClick={handleAddToCart} inverted plus>
            +
          </CustomButton>
          <button
            onClick={() => {
              dispatch(AddItemToCartAction(product));
            }}
            className="text-white text-xs pl-3"
          >
            ADD TO CART
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductGridItem;
