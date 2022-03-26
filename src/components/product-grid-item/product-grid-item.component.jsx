import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomButton from "../custom-button/custom-button.component";

const ProductGridItem = ({ product }) => {
  const { title, price, category, image } = product;
  return (
    <AnimatePresence>
      <div className="flex basis-1/4 mb-5">
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
        </div>
      </div>
    </AnimatePresence>
  );
};

export default ProductGridItem;
