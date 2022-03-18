import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import NavItem from "./nav-item.component";
import "./sidebar.styles.scss";

const Sidebar = ({ toggleNavbar, setToggleNavbar }) => {
  return (
    <>
      <div className={`l-navbar ${toggleNavbar ? "hide" : null}`}>
        <nav className="nav">
          <div>
            <a href="#" className="nav__logo">
              {/* <i className="bx bx-layer nav__logo-icon"></i>
            <span className="nav__logo-name">Bedimcode</span> */}
              <img src={Logo} alt="logo" />
            </a>

            <div className="nav__list">
              <button
                className="font-semibold my-2 bg-gradient-to-r from-darkPurple to-purple py-2 px-6 text-white hover:bg-dark-purple "
                style={{ borderRadius: "70px" }}
              >
                Go to catalog
              </button>
              <NavItem icon="user" title="Profile" />
              <NavItem icon="search" title="Search" />
              <NavItem icon="heart" title="Favorite" />
              <NavItem icon="wallet" title="Balance" />
            </div>
          </div>

          <a href="#" className="nav__link">
            <i className="bx bx-log-out nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
