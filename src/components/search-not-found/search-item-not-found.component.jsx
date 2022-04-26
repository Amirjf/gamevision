import React from 'react';

const SearchItemNotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-2 py-4">
      <i className="bx bx-sad text-grey text-6xl"></i>
      <span className="text-grey text-xl">Didn't Found any product !</span>
    </div>
  );
};

export default SearchItemNotFound;
