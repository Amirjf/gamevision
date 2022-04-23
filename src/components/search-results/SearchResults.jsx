import React from 'react';
import { useSelector } from 'react-redux';
import SearchItem from '../search-item/SearchItem';

const SearchResults = () => {
  const searchResults = useSelector((state) => state.searchResults);
  return (
    <div className="w-full h-auto p-5 absolute z-30 bg-darkGrey">
      {searchResults.map((item) => (
        <SearchItem
          title={item.title}
          price={item.price}
          category={item.category}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default SearchResults;
