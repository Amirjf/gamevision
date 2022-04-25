import React from 'react';

const SearchItem = ({ title, price, category, image }) => {
  return (
    <div className="group transition-all ease duration-500 flex items-center bg-grey rounded-md hover:bg-darkPurple p-3 my-4">
      <div className="flex w-20 items-center p-1 rounded-md transition-all ease duration-500 group-hover:bg-purple bg-[#222222]">
        <img src={image} alt={title} />
      </div>
      <div>
        <h4 className="text-white text-lg ml-5">{title}</h4>
        <h5 className="text-shaded ml-5">{category}</h5>
      </div>
      <div className="ml-auto">
        <span className="text-shaded text-base">{price} $</span>
      </div>
    </div>
  );
};

export default SearchItem;
