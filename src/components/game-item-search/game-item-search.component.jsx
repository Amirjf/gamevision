import React from 'react';
import { motion } from 'framer-motion';

const GameItemSearch = ({ image, title, rating, genre }) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 1 }}
      exit={{ y: '100%' }}
      className="basis-auto flex-shrink-0 flex-grow-0"
    >
      <div className="flex justify-evenly items-center rounded-md transition-all ease duration-500">
        <img
          src={image}
          className="w-40 h-44 object-cover rounded-lg shadow-2xl shadow-grey"
          alt={title}
        />
      </div>
      <div className="m-3 text-center">
        <h4 className="text-white text-sm">{title}</h4>
        {/* <h5 className="text-shaded py-1">{genre.name}</h5> */}
        <span className="text-shaded text-base sm:hidden">
          {rating}
          <i className="bx bx-star pl-1"></i>
        </span>
      </div>
      <div className="ml-auto hidden sm:flex flex-col">
        <span className="text-shaded text-base ">
          {rating}
          <i className="bx bx-star pl-1"></i>
        </span>
      </div>
    </motion.div>
  );
};
export default GameItemSearch;
