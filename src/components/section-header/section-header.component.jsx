import React from "react";

const SectionHeader = ({ title, children, categoryTitle }) => {
  return (
    <div className="block sm:flex items-center section-header py-12 pl-3">
      <div className="title">
        <h2 className="text-xl text-white font-semibold">{title}</h2>
      </div>
      <div className="filters hidden sm:flex px-5">
        {children && <>{children}</>}
      </div>
      <div className="section-text text-shaded text-xs ml-auto">
        <span>{categoryTitle ? categoryTitle : null}</span>
      </div>
    </div>
  );
};

export default SectionHeader;
