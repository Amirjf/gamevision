import React, { useState } from 'react';

const SideFilterContainer = ({ children }) => {
  return (
    <div className="w-80 bg-darkGrey pt-6 px-6 fixed h-screen rounded-md">
      {children}
    </div>
  );
};

export default SideFilterContainer;
