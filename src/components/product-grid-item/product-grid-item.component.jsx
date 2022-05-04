import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Quantity from '../item-quantity/quantity.component';
import Toastify from 'toastify-js';
import { AddItemToCartAction } from '../../redux/cart/addItem';
import CustomButton from '../custom-button/custom-button.component';

const ProductGridItem = ({ product, cartItem }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const { title, price, category, image } = product;

  const handleAddToCart = () => {
    dispatch(AddItemToCartAction(product));
  };

  useEffect(() => {
    const isExist = cartItems.find((cartItem) => cartItem.id === product.id);
    if (isExist) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

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
        {isAdded ? (
          cartItems.map(
            (cartItem) =>
              cartItem.id === product.id && <Quantity cartItem={cartItem} />
          )
        ) : (
          <div className="flex justify-center px-5">
            <CustomButton onClick={handleAddToCart} inverted plus>
              +
            </CustomButton>
            <button
              onClick={handleAddToCart}
              className="text-white text-xs pl-3"
            >
              ADD TO CART
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProductGridItem;
