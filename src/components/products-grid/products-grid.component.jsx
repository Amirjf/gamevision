import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FilteredProductsAction } from '../../redux/products/filteredProducts';
import { ShowMoreAction } from '../../redux/ui/showMore';
import CustomButton from '../custom-button/custom-button.component';
import ProductGridItem from '../product-grid-item/product-grid-item.component';
import SectionHeader from '../section-header/section-header.component';
import { motion, AnimatePresence } from 'framer-motion';

import './products-grid.styles.scss';
const ProductsGrid = ({ loading }) => {
  const products = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  const filteredProducts = useSelector((state) => state.filteredProducts);
  const showMore = useSelector((state) => state.showMore);
  const dispatch = useDispatch();

  const [activeCategory, setActiveCategory] = useState('All');

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
      <SectionHeader title={'Our Products'}>
        <CustomButton
          active={activeCategory === 'All'}
          value="All"
          onClick={() => setActiveCategory('All')}
          inverted
        >
          All
        </CustomButton>
        <CustomButton
          active={activeCategory === 'Mouse'}
          value="Mouse"
          onClick={() => setActiveCategory('Mouse')}
          inverted
        >
          Mouses
        </CustomButton>
        <CustomButton
          active={activeCategory === 'Keyboard'}
          value="Keyboard"
          inverted
          onClick={() => setActiveCategory('Keyboard')}
        >
          Keyboards
        </CustomButton>
        <CustomButton
          active={activeCategory === 'Headphone'}
          value="Headphone"
          inverted
          onClick={() => setActiveCategory('Headphone')}
        >
          Headphones
        </CustomButton>
      </SectionHeader>

      <AnimatePresence>
        <motion.div className="flex flex-wrap justify-center text-center">
          {!filteredProducts.length
            ? products
                .filter((product, id) => id < showMore)
                .map((product, cartItem) => (
                  <ProductGridItem
                    isLoading={loading}
                    cartItem={cartItem}
                    key={product.id}
                    product={product}
                  />
                ))
            : filteredProducts.map((product) => (
                <ProductGridItem key={product.id} product={product} />
              ))}
        </motion.div>
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
      </AnimatePresence>
    </div>
  );
};

export default ProductsGrid;
