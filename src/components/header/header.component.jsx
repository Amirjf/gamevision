import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleNavbarAction } from "../../redux/ui/toggleNavbar";
import "./header.styles.scss";
const Header = () => {
  const toggleNavbar = useSelector((state) => state.toggleNavbar);
  const dispatch = useDispatch();

  return (
    <heaeder className={`header ${toggleNavbar ? "toggle" : ""}`} id="header">
      <div className="header__left-elements">
        <div
          className="header__toggle"
          onClick={() => dispatch(ToggleNavbarAction(!toggleNavbar))}
        >
          <i className="bx bx-menu" id="header-toggle"></i>
        </div>
        <div className="header__search-form">
          <i className="bx bx-search search-icon"></i>
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div className="header__right-elements">
        <div className="header__username text-[#93989c] text-xs pr-4">
          Amir Masoud Jafari
        </div>
        <div className="header__img">
          <img
            src="https://avatars.githubusercontent.com/u/54482073?v=4"
            alt="avatar"
          />
        </div>
        <div className="header__icons">
          <i className="bx bx-cart relative">
            <span className="header__badge rounded-3xl bg-lightPurple text-white">
              4
            </span>
          </i>
        </div>
      </div>
    </heaeder>
  );
};

export default Header;
