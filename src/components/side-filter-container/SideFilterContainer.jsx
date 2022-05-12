import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SideFilterContainer = ({ children }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${
          showFilters ? 'inset-0' : '-inset-full'
        } w-full transition-all duration-300 fixed md:static md:block md:w-1/4 z-20 bg-darkGrey py-20 md:py-8 lg:py-8 px-6 md:mt-5 lg:mt-5 rounded-md h-screen`}
      >
        <div
          onClick={toggleFilters}
          className="absolute top-4 text-white left-4 md:hiddem lg:hidden"
        >
          <i className="bx bx-x text-4xl"></i>
        </div>
        {children}
      </motion.div>
      <div
        onClick={toggleFilters}
        className="sm:hidden text-2xl text-white p-2"
      >
        <div className="bg-darkPurple w-36 p-3 rounded-md">
          <i className="bx bx-filter-alt pr-3"></i>
          <span>Filters</span>
        </div>
      </div>
    </>
  );
};

export default SideFilterContainer;
