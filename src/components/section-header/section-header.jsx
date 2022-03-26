import React from "react";

const SectionHeader = ({ title, children }) => {
  return (
    <div className="flex items-center section-header pb-12 pl-3">
      <div className="title">
        <h2 className="text-xl text-white font-semibold">{title}</h2>
      </div>
      <div className="filters px-5">{children && <>{children}</>}</div>
      <div className="section-text text-shaded text-xs ml-auto">
        <span>Category</span>
      </div>
    </div>
  );
};

export default SectionHeader;
