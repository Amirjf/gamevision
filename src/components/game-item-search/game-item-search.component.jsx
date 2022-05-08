import React from 'react';
import { motion } from 'framer-motion';

const GameItemSearch = ({ image, title, rating, genre }) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 1 }}
      exit={{ y: '100%' }}
      className="group w-1/2 h-36 overflow-hidden overflow-y-auto sm:w-full sm:h-16 transition-all ease duration-500 flex items-center rounded-md hover:bg-darkPurple p-2"
    >
      <div className="flex w-64 h-full sm:w-12 object-cover items-center rounded-md transition-all ease duration-500">
        <img
          src={image}
          className="h-full w-full sm:w-12 sm:h-12 object-cover"
          alt={title}
        />
      </div>
      <div className="m-3">
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
