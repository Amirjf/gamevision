import React from 'react';

const BannerContainer = ({ children }) => {
  return (
    <div className="grid md:w-full lg:grid-cols-2 gap-5 mb-5">{children}</div>
  );
};

export default BannerContainer;
