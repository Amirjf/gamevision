import React, { useState } from 'react';

const SideFilterContainer = ({ children }) => {
  return (
    <div className="w-full hidden md:w-1/4 bg-darkGrey pt-6 px-6 mt-5 rounded-md h-screen">
      {children}
    </div>
  );
};

export default SideFilterContainer;
