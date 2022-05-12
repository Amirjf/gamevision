import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchItem from '../search-item/SearchItem';
import Spinner from '../spinner/spinner.component';
import GameItemSearch from '../game-item-search/game-item-search.component';

const SearchResults = ({ searchInput, loading }) => {
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
    setPossibleCategory(mostOccurProductCategory(productsRes));
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
      </motion.div>
      <motion.div
        layout
        className="w-full md:grid md:grid-cols-4 md:gap-8 md:overflow-y-scroll h-auto p-5 absolute left-full z-30 bg-darkGrey"
      >
        {gamesRes
          .filter((item, idx) => idx < 8)
          .map((item, idx) => (
            <GameItemSearch
              key={`gamesearch${item.id}${item.slug}`}
              genres={item.genres}
              rating={item.rating}
              title={item.name}
              price="59.99"
              category={item.category}
              image={item.background_image}
            />
          ))}

        <Link to="/games">
          {searchInput && (
            <span className="text-lightPurple ml-2 border-dashed border-b-2">
              See More
            </span>
          )}
        </Link>
      </motion.div>
    </div>
  );
};

export default SearchResults;
