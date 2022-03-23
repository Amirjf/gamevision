import React from "react";
import { useSelector } from "react-redux";
import ProductGridItem from "../product-grid-item/product-grid-item.component";
import "./products-grid.styles.scss";
const ProductsGrid = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="grid grid-cols-4 gap-4 text-center p-12">
      {products.map((product) => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
