import React, { useState } from 'react';

const SideFilterContainer = ({ children }) => {
  return (
    <div className="w-1/5 bg-darkGrey pt-6 px-6 top-20 h-full mt-5 fixed rounded-md">
      {children}
    </div>
  );
};

export default SideFilterContainer;
