import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchItem from '../search-item/SearchItem';

const SearchResults = ({ searchInput }) => {
  const searchResults = useSelector((state) => state.searchResults);
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
    const res = mostOccurProductCategory(searchResults);
    setPossibleCategory(res);
  }, [searchInput]);

  return (
    <div className="w-full h-auto p-5 absolute z-30 bg-darkGrey">
      {searchResults
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <SearchItem
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
        <span className="text-white">
          {possibleCategory && 'Show All Products in Category'}
          <span className="text-lightPurple ml-2 border-dashed border-b-2">
            {possibleCategory ? possibleCategory.category : ''}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default SearchResults;
