import React from 'react';

const GamePageContent = ({ children }) => {
  return (
    <div className="w-11/12 pl-72 mt-3 ml-5 pt-2 grid grid-cols-4 gap-5">
      {children}
    </div>
  );
};

export default GamePageContent;
