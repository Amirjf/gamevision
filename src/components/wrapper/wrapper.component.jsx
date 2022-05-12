import React from 'react';
import { useSelector } from 'react-redux';
import './wrapper.styles.scss';

const Wrapper = ({ children }) => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);

  return (
    <div>
      <div className={`mb-36 mx-2 md:mx-8 lg:mx-8`}>{children}</div>
    </div>
  );
};

export default Wrapper;
