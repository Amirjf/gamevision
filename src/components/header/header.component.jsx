import React from "react";
import "./header.styles.scss";
const Header = ({ toggleNavbar, setToggleNavbar }) => {
  return (
    <heaeder className={`header ${toggleNavbar ? "toggle" : ""}`} id="header">
      <div className="header__left-elements">
        <div
          className="header__toggle"
          onClick={() => setToggleNavbar((toggleNavbar) => !toggleNavbar)}
        >
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
        <div className="header__search-form">
          <i className="bx bx-search search-icon"></i>
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div className="header__right-elements">
        <div className="header__img">
          <img
            src="https://avatars.githubusercontent.com/u/54482073?v=4"
            alt="avatar"
          />
        </div>
        <div className="header__icons">
          <i className="bx bx-bell"></i>
          <i className="bx bx-cart"></i>
        </div>
      </div>
    </heaeder>
  );
};

export default Header;
