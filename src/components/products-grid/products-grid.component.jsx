import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilteredProductsAction } from "../../redux/products/filteredProducts";
import { ActiveCategoryAction } from "../../redux/products/activeCategory";
import CustomButton from "../custom-button/custom-button.component";
import ProductGridItem from "../product-grid-item/product-grid-item.component";
import SectionHeader from "../section-header/section-header";
import { motion } from "framer-motion";
import "./products-grid.styles.scss";
const ProductsGrid = () => {
  const products = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const activeCategory = useSelector((state) => state.activeCategory);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    dispatch(ActiveCategoryAction(e.target.value));
  };

  useEffect(() => {
    const filtered = async () => {
      const filteredProducts = await products
        .filter((product) => product.category === activeCategory)
        .map((product) => product);
      dispatch(FilteredProductsAction(filteredProducts));
    };
    filtered();
  }, [activeCategory]);

  return (
    <div className="my-8">
      <SectionHeader title={"Our Products"}>
        <CustomButton
          active={activeCategory === "All"}
          value="All"
          onClick={handleSubmit}
          inverted
        >
          All
        </CustomButton>
        <CustomButton
          active={activeCategory === "Mouse"}
          value="Mouse"
          onClick={handleSubmit}
          inverted
        >
          Mouses
        </CustomButton>
        <CustomButton
          active={activeCategory === "Keyboard"}
          value="Keyboard"
          inverted
          onClick={handleSubmit}
        >
          Keyboards
        </CustomButton>
        <CustomButton
          active={activeCategory === "Headphone"}
          value="Headphone"
          inverted
          onClick={handleSubmit}
        >
          Headphones
        </CustomButton>
      </SectionHeader>

      <motion.div layout className="flex flex-wrap text-center">
        {!filteredProducts.length
          ? products
              .filter((product, id) => id < 19)
              .map((product) => (
                <ProductGridItem key={product.id} product={product} />
              ))
          : filteredProducts
              .filter((product, id) => id < 19)
              .map((product) => (
                <ProductGridItem key={product.id} product={product} />
              ))}
      </motion.div>
    </div>
  );
};

export default ProductsGrid;
