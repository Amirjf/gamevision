import React from 'react';
import { motion } from 'framer-motion';

const GameItemSearch = ({ image, title, rating, genre }) => {
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: 1 }}
      exit={{ y: '100%' }}
      className="group transition-all ease duration-500 flex items-cente rounded-md hover:bg-darkPurple p-2"
    >
      <div className="flex w-12 items-center rounded-md transition-all ease duration-500">
        <img src={image} className="w-12 h-12 object-cover" alt={title} />
      </div>
      <div>
        <h4 className="text-white text-md ml-5">{title}</h4>
        <h5 className="text-shaded ml-5">{genre.name}</h5>
      </div>
      <div className="ml-auto flex flex-col">
        <span className="text-shaded text-base">
          {rating}
          <i className="bx bx-star pl-1"></i>
        </span>
      </div>
    </motion.div>
  );
};
export default GameItemSearch;
