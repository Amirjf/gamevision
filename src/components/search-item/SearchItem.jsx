import React from 'react';
import ProductItemSearch from '../product-item-search/product-item-search.component';
import GameItemSearch from '../game-item-search/game-item-search.component';
import Spinner from '../spinner/spinner.component';
const SearchItem = ({
  title,
  price,
  category,
  image,
  genres,
  rating,
  game,
  loading,
}) => {
  return game ? (
    <GameItemSearch
      genre={genres[0]}
      rating={rating}
      title={title}
      image={image}
      category={category}
      price={price}
    />
  ) : (
    <ProductItemSearch
      title={title}
      image={image}
      category={category}
      price={price}
    />
  );
};

export default SearchItem;
