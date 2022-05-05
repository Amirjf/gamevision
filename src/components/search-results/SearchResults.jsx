import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchItem from '../search-item/SearchItem';

const SearchResults = ({ searchInput }) => {
  const productsRes = useSelector((state) => state.productsSearchResults);
  const gamesRes = useSelector((state) => state.gamesSearchResults);

  const [possibleCategory, setPossibleCategory] = useState(null);

  const mostOccurProductCategory = (searchResults) =>
    searchResults.reduce(
      (a, b, i, arr) =>
        arr.filter((v) => v === a).length >= arr.filter((v) => v === b).length
          ? a
          : b,
      null
    );

  useEffect(() => {
    const res = mostOccurProductCategory(productsRes);
    setPossibleCategory(res);
  }, [searchInput]);

  return (
    <div>
      <motion.div
        layout
        className="w-full h-auto p-5 absolute left-0 z-30 bg-darkGrey"
      >
        {productsRes
          .filter((item, idx) => idx < 3)
          .map((item, idx) => (
            <SearchItem
              key={`se-${item.id}`}
              title={item.title}
              price={item.price}
              category={item.category}
              image={item.image}
            />
          ))}
        <Link
          to={`/products/${
            possibleCategory && possibleCategory.category.toLowerCase()
          }`}
        >
          {searchInput && (
            <span className="text-white">
              {possibleCategory && 'Show All Products in Category'}
              <span className="text-lightPurple ml-2 border-dashed border-b-2">
                {possibleCategory ? possibleCategory.category : ''}
              </span>
            </span>
          )}
        </Link>
      </motion.div>
      <motion.div
        layout
        className="w-full h-auto p-5 absolute left-full z-30 bg-darkGrey"
      >
        {gamesRes
          .filter((item, idx) => idx < 9)
          .map((item, idx) => (
            <SearchItem
              game
              key={`game-${item.added}`}
              genres={item.genres}
              rating={item.rating}
              title={item.name}
              price="59.99"
              category={item.category}
              image={item.background_image}
            />
          ))}
      </motion.div>
    </div>
  );
};

export default SearchResults;
