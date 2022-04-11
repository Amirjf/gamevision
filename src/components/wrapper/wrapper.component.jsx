import React from "react";
import { useSelector } from "react-redux";
import "./wrapper.styles.scss";

const Wrapper = ({ children }) => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);

  return (
    <div className={`${toggleNavbar ? "" : "wrapper"}`}>
      <div
        className={`content p-5 pt-20 mb-36 ${toggleNavbar ? "toggle" : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
