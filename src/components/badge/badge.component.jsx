import React from 'react';

const Badge = ({ children, bg }) => {
  return (
    <span
      className={`bg-[${bg}] text-white py-1 mr-2 px-3 text-xs rounded-3xl`}
    >
      {children}
    </span>
  );
};

export default Badge;
