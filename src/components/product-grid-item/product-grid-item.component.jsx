import React from "react";
import CustomButton from "../custom-button/custom-button.component";

const ProductGridItem = ({ product }) => {
  const { title, price, category, image } = product;
  return (
    <div class="product-item text-center bg-[#28282a]">
      <div class="product-img">
        <img src={image} alt="" />
      </div>
      <a className="text-white text-center block font-semibold">{title}</a>
      <span className="flex justify-center text-shaded text-center">
        {category}
      </span>
      <strong className="block py-5 text-lightPurple">{price}$</strong>
      <div className="flex justify-center px-5">
        <CustomButton plus>+</CustomButton>
        <button className="text-white text-xs pl-3">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductGridItem;
