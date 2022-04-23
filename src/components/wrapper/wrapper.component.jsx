import React from 'react';
import { useSelector } from 'react-redux';
import './wrapper.styles.scss';

const Wrapper = ({ children }) => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);

  return (
    <div className={`${toggleNavbar ? '' : 'wrapper'}`}>
      <div
        className={`content pt-20 mb-36 mx-5 ${toggleNavbar ? 'toggle' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
