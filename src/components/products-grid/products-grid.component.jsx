import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FilteredProductsAction } from "../../redux/products/filteredProducts";
import WithSpinner from "../../hoc/with-spinner/with-spinner.component";
import { ActiveCategoryAction } from "../../redux/products/activeCategory";
import { ShowMoreAction } from "../../redux/ui/showMore";
import CustomButton from "../custom-button/custom-button.component";
import ProductGridItem from "../product-grid-item/product-grid-item.component";
import SectionHeader from "../section-header/section-header.component";
import { motion, AnimatePresence } from "framer-motion";

import "./products-grid.styles.scss";
const ProductsGrid = ({ loading }) => {
  const products = useSelector((state) => state.products);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const activeCategory = useSelector((state) => state.activeCategory);
  const showMore = useSelector((state) => state.showMore);
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

      <AnimatePresence>
        <motion.div className="flex flex-wrap text-center">
          {!filteredProducts.length
            ? products
                .filter((product, id) => id < showMore)
                .map((product) => (
                  <ProductGridItem
                    isLoading={loading}
                    key={product.id}
                    product={product}
                  />
                ))
            : filteredProducts.map((product) => (
                <ProductGridItem key={product.id} product={product} />
              ))}
          {showMore === 8 ? (
            <p
              className="text-shaded pl-3"
              onClick={() => dispatch(ShowMoreAction(showMore + 10))}
            >
              Show More ...
            </p>
          ) : (
            <p
              className="text-shaded pl-3"
              onClick={() => dispatch(ShowMoreAction(showMore - 10))}
            >
              Hide
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default WithSpinner(ProductsGrid);
