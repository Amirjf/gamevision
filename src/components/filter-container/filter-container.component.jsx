import React from 'react';
import useToggle from '../../hooks/useToggle';

const FilterContainer = ({ children, title }) => {
  const [showFilter, setShowFilter] = useToggle();

  return (
    <div className="border-b border-b-shaded py-3 mt-2">
      <div
        onClick={setShowFilter}
        className="flex justify-between cursor-pointer"
      >
        <span className="text-white text-lg pb-4">{title}</span>
        <span className="text-shaded text-lg cursor-pointer">
          <i className={`bx bx-${showFilter ? 'minus' : 'plus'}`}></i>
        </span>
      </div>
      <div
        className={`${
          showFilter ? 'h-40' : 'h-0 opacity-0'
        } transition-all duration-500 overflow-hidden overflow-y-auto`}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterContainer;
