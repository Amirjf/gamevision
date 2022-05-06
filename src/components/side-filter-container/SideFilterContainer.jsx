import React, { useState } from 'react';

const SideFilterContainer = ({ children }) => {
  return (
    <div className="w-1/5 bg-darkGrey pt-6 px-6 mt-5 fixed h-screen rounded-md">
      {children}
    </div>
  );
};

export default SideFilterContainer;
