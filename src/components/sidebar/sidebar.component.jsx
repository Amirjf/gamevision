import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";
import NavItem from "./nav-item.component";
import "./sidebar.styles.scss";
import { motion } from "framer-motion";
import NavItemWithSubmenu from "./nav-item-with-sub-menu.component";

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
              <NavItemWithSubmenu>
                <NavItem icon="mouse" title="Mouse" />
                <NavItem icon="headphone" title="Game Headphones" />
                <NavItem icon="glasses" title="VR glassess" />
                <NavItem icon="desktop" title="Computers" />
                <NavItem icon="wallet" title="Games" />
              </NavItemWithSubmenu>
            </div>
          </div>

          {/* bottem link goes here */}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
