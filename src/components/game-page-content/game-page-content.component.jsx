import React from 'react';

const GamePageContent = ({ children }) => {
  return (
    <div className="w-full md:w-5/6 lg:w-5/6 mt-3 pt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5">
      {children}
    </div>
  );
};

// w-11/12 pl-72

export default GamePageContent;
