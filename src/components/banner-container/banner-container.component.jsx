import React from "react";

const BannerContainer = ({ children }) => {
  return <div className="grid grid-cols-2 gap-5 mb-5">{children}</div>;
};

export default BannerContainer;
