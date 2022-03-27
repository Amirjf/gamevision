import React from "react";
import { motion } from "framer-motion";
import CustomButton from "../custom-button/custom-button.component";

const ProductGridItem = ({ product }) => {
  const { title, price, category, image } = product;
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
          <CustomButton plus>+</CustomButton>
          <button className="text-white text-xs pl-3">ADD TO CART</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductGridItem;
